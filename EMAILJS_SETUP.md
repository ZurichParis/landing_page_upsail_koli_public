# EmailJS Setup Instructions

This document explains how to configure EmailJS for the contact form in your Upsail landing page.

## Prerequisites

1. Create an account at [EmailJS.com](https://www.emailjs.com/)
2. Choose an email service provider (Gmail, Outlook, etc.)

## Setup Steps

### 1. Create an Email Service

1. Log into your EmailJS dashboard
2. Go to "Email Services" and click "Add New Service"
3. Choose your email provider (e.g., Gmail)
4. Follow the authentication process
5. Note the **Service ID** (you'll need this later)

### 2. Create an Email Template

1. Go to "Email Templates" and click "Create New Template"
2. Set up your template with the following variables:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: New Waitlist Signup - Upsail
   
   Hello,
   
   You have a new waitlist signup from your Upsail landing page:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Company: {{company}}
   Message: {{message}}
   
   Best regards,
   Upsail Landing Page
   ```
3. Note the **Template ID**

### 3. Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (User ID)

### 4. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and add your EmailJS credentials:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
   REACT_APP_COMPANY_EMAIL=your-company@email.com
   ```

3. **Important**: Never commit your `.env` file to version control. The `.env.example` file is provided as a template.

### 5. Test the Integration

1. Restart your development server to load the environment variables: 
   ```bash
   npm start
   ```
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your company email for the notification

**Note**: You must restart the development server after creating or modifying the `.env` file for the changes to take effect.

## Template Variables Explained

The form sends the following data to EmailJS:

- `from_name`: User's full name
- `from_email`: User's email address  
- `company`: User's company (optional)
- `message`: User's message (optional)
- `to_email`: Your company email (configured in code)

## Troubleshooting

### Common Issues:

1. **"Failed to send message"**: Check your Service ID, Template ID, and Public Key
2. **No email received**: Verify your email template variables match the code
3. **CORS errors**: Make sure you're using the correct EmailJS public key

### Testing Tips:

- Use EmailJS dashboard's "Test" feature first
- Check browser console for detailed error messages
- Verify your email service is properly connected

## Security Notes

- Environment variables with `REACT_APP_` prefix are safe for frontend use
- The `.env` file should be added to `.gitignore` (already configured)
- Never commit your actual EmailJS credentials to version control
- Public Key is safe to expose in frontend code
- Never expose your private key in frontend code
- Consider rate limiting for production use
- EmailJS has usage limits on free plans

## Environment Variables

All EmailJS configuration is now handled through environment variables:

- `REACT_APP_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `REACT_APP_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID  
- `REACT_APP_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
- `REACT_APP_COMPANY_EMAIL`: Email address to receive form submissions

The application will show a user-friendly error if any required environment variables are missing.

## Production Considerations

1. Set up proper error logging
2. Consider adding a fallback contact method
3. Monitor EmailJS usage quotas
4. Add proper form validation
5. Consider implementing CAPTCHA for spam protection