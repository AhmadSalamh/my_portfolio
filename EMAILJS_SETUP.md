# EmailJS Setup Guide

To enable the contact form email functionality, you need to configure EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{name}}
Email: {{email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (User ID)

## 5. Update Environment Variables
Create a `.env.local` file in your project root with:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Test the Form
1. Restart your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Security Notes
- The current implementation includes rate limiting (max 3 emails per hour)
- Input sanitization is applied to prevent XSS attacks
- EmailJS handles the actual email sending securely

## Troubleshooting
- If emails aren't sending, check the browser console for errors
- Verify your EmailJS service is active and properly configured
- Ensure your template variable names match the form fields
- Check your email provider's spam folder

For more detailed setup instructions, visit the [EmailJS Documentation](https://www.emailjs.com/docs/).