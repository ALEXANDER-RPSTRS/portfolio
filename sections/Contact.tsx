/**
 * Contact Section
 * Formulario de contacto con integración EmailJS
 */

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Section, Button, Card } from '@/components/common';
import { CONTACT, SOCIAL_LINKS } from '@/data/constants';
import { EMAILJS_CONFIG } from '@/lib/emailjs';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Inicializar EmailJS
  useEffect(() => {
    if (EMAILJS_CONFIG.publicKey) {
      emailjs.init(EMAILJS_CONFIG.publicKey);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback(null);

    const missingKeys = [
      !EMAILJS_CONFIG.serviceId && 'SERVICE_ID',
      !EMAILJS_CONFIG.templateId && 'TEMPLATE_ID',
      !EMAILJS_CONFIG.publicKey && 'PUBLIC_KEY',
    ].filter(Boolean);

    if (missingKeys.length > 0) {
      setFeedback({
        type: 'error',
        message: `Falta configurar en .env.local: ${missingKeys.join(', ')}. El Service ID ya está listo, solo faltan Template ID y Public Key de EmailJS.`,
      });
      setIsLoading(false);
      return;
    }

    try {
      // Enviar email con EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'alexander.carranzagr@gmail.com', // Tu email
        }
      );

      setFormData({ name: '', email: '', subject: '', message: '' });
      setFeedback({
        type: 'success',
        message: CONTACT.successMessage,
      });

      setTimeout(() => setFeedback(null), 5000);
    } catch (error) {
      console.error('Error al enviar email:', error);
      setFeedback({
        type: 'error',
        message: CONTACT.errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="contact" className="relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          {CONTACT.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 hover:bg-white/8 focus:bg-white/10"
                placeholder="Tu nombre completo"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 hover:bg-white/8 focus:bg-white/10"
                placeholder="tu@email.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 hover:bg-white/8 focus:bg-white/10"
                placeholder="¿De qué se trata?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 hover:bg-white/8 focus:bg-white/10 resize-none"
                placeholder="Cuéntame sobre tu proyecto o propuesta..."
              />
            </div>

            {/* Feedback */}
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl border ${
                  feedback.type === 'success'
                    ? 'bg-green-500/10 border-green-500/30 text-green-300'
                    : 'bg-red-500/10 border-red-500/30 text-red-300'
                }`}
              >
                <p className="text-sm font-medium">{feedback.message}</p>
              </motion.div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              isLoading={isLoading}
              disabled={isLoading}
            >
              {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
          </form>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <p className="text-gray-400 text-lg leading-relaxed">
              {CONTACT.description}
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Responderé tu mensaje dentro de 24 horas. 📧
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            <Card elevated className="p-6 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span className="text-blue-400">📧</span>
                Email
              </h4>
              <a href={SOCIAL_LINKS.email} className="text-blue-400 hover:text-blue-300 text-sm">
                alexander.carranzagr@gmail.com
              </a>
            </Card>

            <Card elevated className="p-6 hover:shadow-lg hover:shadow-purple-600/20 transition-all">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span className="text-purple-400">📱</span>
                Teléfono
              </h4>
              <a href={SOCIAL_LINKS.whatsapp} className="text-purple-400 hover:text-purple-300 text-sm">
                +51 946 493 930 (WhatsApp)
              </a>
            </Card>

            <Card elevated className="p-6 hover:shadow-lg hover:shadow-indigo-600/20 transition-all">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="text-indigo-400">🔗</span>
                Redes Sociales
              </h4>
              <div className="space-y-3">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition text-sm"
                >
                  LinkedIn
                  <span className="text-lg">→</span>
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition text-sm"
                >
                  GitHub
                  <span className="text-lg">→</span>
                </a>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
