import emailjs from '@emailjs/browser'

// EmailJS configuration
const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(emailConfig.publicKey)
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Form validation interface
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface ValidationErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

// Validate form data
export const validateForm = (data: ContactFormData): ValidationErrors => {
  const errors: ValidationErrors = {}

  // Name validation
  if (!data.name.trim()) {
    errors.name = 'Name is required'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  } else if (data.name.trim().length > 50) {
    errors.name = 'Name must be less than 50 characters'
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  // Phone validation (optional)
  if (data.phone && data.phone.trim()) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    if (!phoneRegex.test(data.phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.phone = 'Please enter a valid phone number'
    }
  }

  // Subject validation
  if (!data.subject.trim()) {
    errors.subject = 'Subject is required'
  } else if (data.subject.trim().length < 5) {
    errors.subject = 'Subject must be at least 5 characters'
  } else if (data.subject.trim().length > 100) {
    errors.subject = 'Subject must be less than 100 characters'
  }

  // Message validation
  if (!data.message.trim()) {
    errors.message = 'Message is required'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  } else if (data.message.trim().length > 1000) {
    errors.message = 'Message must be less than 1000 characters'
  }

  return errors
}

// Rate limiting storage
const RATE_LIMIT_KEY = 'contact_form_submissions'
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds
const MAX_SUBMISSIONS = 3 // Maximum submissions per hour

// Check rate limiting
export const checkRateLimit = (): { allowed: boolean; timeUntilReset?: number } => {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY)
    const now = Date.now()

    if (!stored) {
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: 0, resetTime: now + RATE_LIMIT_WINDOW }))
      return { allowed: true }
    }

    const data = JSON.parse(stored)

    // Reset if window has passed
    if (now > data.resetTime) {
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: 0, resetTime: now + RATE_LIMIT_WINDOW }))
      return { allowed: true }
    }

    // Check if limit exceeded
    if (data.count >= MAX_SUBMISSIONS) {
      const timeUntilReset = Math.ceil((data.resetTime - now) / (60 * 1000)) // minutes
      return { allowed: false, timeUntilReset }
    }

    return { allowed: true }
  } catch (error) {
    console.error('Rate limit check failed:', error)
    return { allowed: true } // Allow on error to not block legitimate users
  }
}

// Update rate limit counter
export const updateRateLimit = () => {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY)
    if (stored) {
      const data = JSON.parse(stored)
      data.count += 1
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data))
    }
  } catch (error) {
    console.error('Rate limit update failed:', error)
  }
}

// Sanitize input to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim()
}

// Send email using EmailJS
export const sendEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Check rate limiting
    const rateCheck = checkRateLimit()
    if (!rateCheck.allowed) {
      return {
        success: false,
        message: `Too many submissions. Please try again in ${rateCheck.timeUntilReset} minutes.`
      }
    }

    // Validate form data
    const errors = validateForm(formData)
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: 'Please fix the form errors and try again.'
      }
    }

    // Sanitize form data
    const sanitizedData = {
      from_name: sanitizeInput(formData.name),
      from_email: sanitizeInput(formData.email),
      phone: formData.phone ? sanitizeInput(formData.phone) : '',
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
      to_email: 'ahmad.m.salamh@gmail.com',
      to_name: 'Ahmad Salamh',
      reply_to: sanitizeInput(formData.email),
      // Additional recipient fields for EmailJS
      recipient_email: 'ahmad.m.salamh@gmail.com',
      recipient: 'ahmad.m.salamh@gmail.com',
    }

    // Send email via EmailJS
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      sanitizedData,
      emailConfig.publicKey
    )

    if (response.status === 200) {
      // Update rate limit counter
      updateRateLimit()
      
      return {
        success: true,
        message: 'Message sent successfully! I\'ll get back to you within 24 hours.'
      }
    } else {
      throw new Error('Email service returned an error')
    }
  } catch (error) {
    console.error('Email sending failed:', error)
    
    // Provide user-friendly error messages
    if (error instanceof Error) {
      if (error.message.includes('network') || error.message.includes('fetch')) {
        return {
          success: false,
          message: 'Network error. Please check your connection and try again.'
        }
      }
      if (error.message.includes('rate') || error.message.includes('limit')) {
        return {
          success: false,
          message: 'Too many requests. Please try again later.'
        }
      }
    }

    return {
      success: false,
      message: 'Failed to send message. Please try again or contact me directly at ahmad.m.salamh@gmail.com'
    }
  }
}

// Setup instructions for EmailJS (to be displayed in console for developer)
export const logSetupInstructions = () => {
  console.log(`
🔧 EmailJS Setup Instructions:

1. Go to https://www.emailjs.com/ and create an account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - {{from_name}}
   - {{from_email}}
   - {{phone}}
   - {{subject}}
   - {{message}}
   - {{to_email}}
   - {{reply_to}}

4. Update the configuration in src/lib/emailService.ts:
   - Replace 'service_portfolio' with your Service ID
   - Replace 'template_contact' with your Template ID
   - Replace 'YOUR_PUBLIC_KEY' with your Public Key

5. Test the contact form to ensure emails are being sent correctly.

📧 Recommended Email Template:
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
  `)
}