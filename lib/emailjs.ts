/**
 * EmailJS Configuration
 * 
 * Para usar EmailJS:
 * 1. Ve a https://www.emailjs.com/
 * 2. Crea una cuenta gratuita
 * 3. Configura un servicio de email (Gmail, Outlook, etc.)
 * 4. Crea un template de email
 * 5. Reemplaza los valores de abajo con tus IDs
 * 
 * Variables de entorno (.env.local):
 * NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_service_w99u0hn
 * NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_service_w99u0hn
 * NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_key_service_w99u0hn
 */

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_w99u0hn',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'service_w99u0hn',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'service_w99u0hn',
} as const;

/**
 * Template variables esperadas en EmailJS:
 * - to_email: Email del destinatario (tu email)
 * - from_name: Nombre de quien envía el formulario
 * - from_email: Email de quien envía
 * - subject: Asunto del mensaje
 * - message: Cuerpo del mensaje
 * 
 * Ejemplo de template en EmailJS:
 * 
 * From Name: {{from_name}}
 * From Email: {{from_email}}
 * 
 * {{message}}
 */
