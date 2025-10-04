import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageCircle, Sparkles, CheckCircle, ArrowRight, Star, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from './LanguageContext';
import { isMobile } from 'react-device-detect';

// --- Optimized Confirmation Modal ---
interface ConfirmationModalProps {
  status: { message: string; type: 'success' | 'error' | null };
  onClose: () => void;
  t: (key: string) => string;
}

function ConfirmationModal({ status, onClose, t }: ConfirmationModalProps) {
  // ✨ OPTIMIZATION: Simplified device detection.
  const isMobileDevice = isMobile;

  if (!status.type) return null;

  const isSuccess = status.type === 'success';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-md p-6 sm:p-8 bg-gradient-to-br ${
            isSuccess ? 'from-green-900/50 to-emerald-900/30' : 'from-red-900/50 to-rose-900/30'
          } border ${
            isSuccess ? 'border-green-500/30' : 'border-red-500/30'
          } rounded-2xl shadow-2xl text-center`}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 400, damping: 20 }}
            className={`mx-auto w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-full flex items-center justify-center bg-gradient-to-br ${
              isSuccess ? 'from-green-500 to-emerald-600' : 'from-red-500 to-rose-600'
            }`}
          >
            {isSuccess ? (
              <motion.svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: isMobileDevice ? 0.4 : 0.6, ease: 'easeInOut', delay: 0.4 }}
                  d="M20 6L9 17l-5-5"
                />
              </motion.svg>
            ) : (
              <XCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            )}
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl font-bold text-white mb-2"
          >
            {t(isSuccess ? 'formSuccessTitle' : 'formErrorTitle')}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8"
          >
            {status.message}
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={onClose}
            className="w-full bg-white/10 hover:bg-white/20 text-white py-2 sm:py-3 text-base font-semibold rounded-lg transition-all duration-200"
          >
            {t('closeButton')}
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// --- Optimized Contact Component ---
export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });
  // ✨ OPTIMIZATION: Simplified device detection.
  const isMobileDevice = isMobile;

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'; // Fallback
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      });
      setFormData({ name: '', email: '', message: '' });
      setFormStatus({ type: 'success', message: t('formSuccessMessage') });
    } catch (err) {
      setFormStatus({ type: 'error', message: t('formErrorMessage') });
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactChannels = [/* data remains the same */];
  const processSteps = [/* data remains the same */];

  return (
    <>
      <section id="contact" className="section-spacing bg-gradient-to-br from-background to-muted/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          {Array.from({ length: isMobileDevice ? 4 : 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-foreground/80">{t('letsStart')}</span>
              <MessageCircle className="w-5 h-5 text-purple-500" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">{t('contactTitle')}</h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">{t('contactSubtitle')}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6" />
          </motion.div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* ✨ OPTIMIZATION: Animating this single parent container */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">{t('contactWays')}</h3>
                <div className="space-y-4">
                  {contactChannels.map((channel) => (
                    <div key={channel.title} className="group">
                      <div className="p-4 bg-card/50 border border-border/30 group-hover:border-blue-500/30 transition-all duration-300 group-hover:shadow-lg rounded-lg flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${channel.gradient} flex items-center justify-center text-white shadow-lg rounded-md transition-transform duration-300 group-hover:scale-110`}>
                          {channel.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">{channel.title}</h4>
                          <p className="text-foreground/80 font-semibold mb-1">{channel.value}</p>
                          <p className="text-foreground/60 text-sm">{channel.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Sparkles className="w-6 h-6 text-blue-500" />
                  <h4 className="text-lg sm:text-xl font-bold">{t('processTitle')}</h4>
                </div>
                <p className="text-foreground/70 mb-6 text-sm sm:text-base">{t('processSubtitle')}</p>
                <div className="space-y-4">
                  {processSteps.map((step) => (
                    <div key={step.step} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm rounded-md">
                        {step.step}
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground text-sm sm:text-base">{step.title}</h5>
                        <p className="text-foreground/70 text-xs sm:text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ✨ OPTIMIZATION: Animating this single parent container */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: isMobileDevice ? 0.2 : 0.4 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="p-6 sm:p-8 bg-card/60 backdrop-blur-lg border border-border/50 shadow-2xl rounded-lg sticky top-24">
                <div className="mb-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{t('getQuote')}</h3>
                  <p className="text-foreground/70 text-sm sm:text-base">{t('getQuoteDesc')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{t('fullName')}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-background/50 border-border/50 focus:border-blue-500 transition-colors p-3 rounded-md border" placeholder={t('getQuoteFullName')} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{t('email')}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-background/50 border-border/50 focus:border-blue-500 transition-colors p-3 rounded-md border" placeholder={t('getQuoteMail')} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{t('projectMessage')}</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full bg-background/50 border-border/50 focus:border-blue-500 transition-colors resize-none p-3 rounded-md border" placeholder={t('projectPlaceholder')} />
                  </div>
                  <div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold shadow-lg rounded-md flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>{t('sending')}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>{t('sendRequest')}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ConfirmationModal 
        status={formStatus} 
        onClose={() => setFormStatus({ message: '', type: null })}
        t={t}
      />
    </>
  );
}