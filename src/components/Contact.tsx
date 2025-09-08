import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageCircle, Sparkles, Clock, CheckCircle, ArrowRight, Star, XCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';  // EmailJS import
import { useLanguage } from './LanguageContext';





export function Contact() {
  
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({ message: '', type: null });


  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
      console.log('EmailJS initialized');
    } else {
      console.error('EmailJS public key missing');
    }
  }, []);

  useEffect(() => {
    if (formStatus.type) {
      const timer = setTimeout(() => {
        setFormStatus({ message: '', type: null });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setIsSubmitting(true);
    setFormStatus({ message: '', type: null });

    try {


      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        templateParams
      );


      console.log('EmailJS Response:', result);

      if (result.status === 200) {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus({ 
          type: 'success', 
          message: '¡Mensaje enviado con éxito! Te contactaremos pronto.'
        });
      } else {
        throw new Error(`EmailJS failed: ${result.text}`);
      }
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      setFormStatus({ type: 'error', message: err.message || 'Error al enviar el mensaje. Intenta de nuevo.' });
    }
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactChannels = [
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('directCall'),
      value: t('companyPhone'),
      description: t('personalAttention'),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('emailContact'),
      value: t('companyEmail'),
      description: t('guaranteedResponse'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('location'),
      value: t('companyLocation'),
      description: t('localGlobalService'),
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: t('processStep1'),
      description: t('processStep1Desc'),
      icon: <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      step: '2', 
      title: t('processStep2'),
      description: t('processStep2Desc'),
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      step: '3',
      title: t('processStep3'),
      description: t('processStep3Desc'),
      icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      step: '4',
      title: t('processStep4'),
      description: t('processStep4Desc'),
      icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
    }
  ];

  return (
    <>
      <section
       id="contact"
        className="section-spacing bg-gradient-to-br from-background to-muted/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"
              style={{
                left: `${10 + i * 8}%`,
                top: `${15 + (i % 3) * 25}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 content-spacing-lg max-w-4xl mx-auto px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <span className="text-xs sm:text-sm text-foreground/80">{t('letsStart')}</span>
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
            </motion.div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              {t('contactTitle')}
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {t('contactSubtitle')}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 sm:mt-8" />
          </motion.div>


          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 content-spacing-lg"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">{t('contactWays')}</h3>
                <div className="space-y-3 sm:space-y-4">
                  {contactChannels.map((channel, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="group"
                    >
                      <div className="p-3 sm:p-4 bg-gradient-to-r from-card/50 to-card/20 border border-border/30 group-hover:border-blue-500/30 transition-all duration-300 group-hover:shadow-lg rounded-lg">
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br ${channel.gradient} flex items-center justify-center text-white shadow-lg rounded-md`}
                          >
                            {channel.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="font-bold text-foreground mb-1 text-sm sm:text-base">{channel.title}</h4>
                            <p className="text-foreground/80 font-semibold mb-1 text-sm sm:text-base">{channel.value}</p>
                            <p className="text-foreground/60 text-xs sm:text-sm">{channel.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                    <h4 className="text-lg sm:text-xl font-bold">{t('processTitle')}</h4>
                  </div>
                  <p className="text-foreground/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{t('processSubtitle')}</p>
                  <div className="space-y-3 sm:space-y-4">
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 sm:space-x-4"
                      >
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-xs sm:text-sm rounded-md">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            {step.icon}
                            <h5 className="font-semibold text-foreground text-sm sm:text-base">{step.title}</h5>
                          </div>
                          <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mt-0 lg:mt-[90px]"
              style={{ marginTop: '65px' }}
            >
              <div className="p-6 sm:p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 shadow-2xl max-w-2xl mx-auto rounded-lg">
                <div className="mb-6 sm:mb-8 text-center content-spacing">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t('getQuote')}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                    {t('getQuoteDesc')}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
                    <label className="block text-sm font-semibold text-foreground mb-2">{t('fullName')}</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full bg-background/50 border-border/50 focus:border-blue-500/50 transition-colors text-sm sm:text-base p-2 sm:p-3 rounded-md border"
                      placeholder={t('getQuoteFullName')}
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
                    <label className="block text-sm font-semibold text-foreground mb-2">{t('email')}</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full bg-background/50 border-border/50 focus:border-blue-500/50 transition-colors text-sm sm:text-base p-2 sm:p-3 rounded-md border"
                      placeholder={t('getQuoteMail')}
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
                    <label className="block text-sm font-semibold text-foreground mb-2">{t('projectMessage')}</label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange} required rows={4}
                      className="w-full bg-background/50 border-border/50 focus:border-blue-500/50 transition-colors resize-none text-sm sm:text-base p-2 sm:p-3 rounded-md border"
                      placeholder={t('projectPlaceholder')}
                    />
                  </motion.div>

          

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
                    <button
                      type="submit" disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg font-semibold shadow-xl rounded-md"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>{t('sending')}</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>{t('sendRequest')}</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      )}
                    </button>
                  </motion.div>
                </form>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/30">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-foreground/60">
                    <div className="flex items-center space-x-2"> <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" /> <span>{t('guaranteedResponse')}</span> </div>
                    <div className="flex items-center space-x-2"> <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" /> <span>{t('noCommitmentConsultation')}</span> </div>
                    <div className="flex items-center space-x-2"> <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" /> <span>{t('confidentialInfo')}</span> </div>
                    <div className="flex items-center space-x-2"> <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" /> <span>{t('personalizedProposal')}</span> </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="p-6 sm:p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 max-w-4xl mx-auto flex flex-col items-center gap-4 rounded-lg">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{t('haveUrgency')}</h3>
                <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
                  {t('haveUrgencyDesc')}.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={() => window.open(`tel:${t('companyPhone')}`)}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-md"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {t('companyPhone')}
                </button>
                <div className="text-xs sm:text-sm text-foreground/60">
                  <div>📞 {t('availableSchedule')}</div>
                  <div>💬 {t('whatsapp24')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Designed Popups (Success/Error Toast) */}
      <AnimatePresence>
        {formStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={`fixed bottom-5 right-5 w-full max-w-sm p-4 shadow-lg rounded-lg border text-white z-50 ${
              formStatus.type === 'success'
                ? 'bg-gradient-to-br from-green-500 to-emerald-600 border-green-700'
                : 'bg-gradient-to-br from-red-500 to-rose-600 border-red-700'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                {formStatus.type === 'success' ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <XCircle className="w-6 h-6" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-bold text-base">
                  {formStatus.type === 'success' ? '¡Éxito!' : 'Error'}
                </p>
                <p className="text-sm">{formStatus.message} -</p>
              </div>
              <button 
                onClick={() => setFormStatus({ message: '', type: null })} 
                className="p-1 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}