import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageCircle, Sparkles, CheckCircle, ArrowRight, Star, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from './LanguageContext';

// ▼▼▼ NUEVO COMPONENTE PARA EL POPUP MODAL ▼▼▼
interface ConfirmationModalProps {
  status: { message: string; type: 'success' | 'error' | null };
  onClose: () => void;
  t: (key: string) => string;
}

function ConfirmationModal({ status, onClose, t }: ConfirmationModalProps) {
  if (!status.type) return null;

  const isSuccess = status.type === 'success';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()} // Evita que el clic en el modal lo cierre
          className={`relative w-full max-w-md p-6 sm:p-8 bg-gradient-to-br ${
            isSuccess ? 'from-green-900/50 to-emerald-900/30' : 'from-red-900/50 to-rose-900/30'
          } border ${
            isSuccess ? 'border-green-500/30' : 'border-red-500/30'
          } rounded-2xl shadow-2xl text-center`}
        >
          {/* Icono animado */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 400, damping: 20 }}
            className={`mx-auto w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-full flex items-center justify-center bg-gradient-to-br ${
              isSuccess ? 'from-green-500 to-emerald-600' : 'from-red-500 to-rose-600'
            }`}
          >
            {isSuccess ? (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
                  d="M20 6L9 17l-5-5"
                />
              </motion.svg>
            ) : (
              <XCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            )}
          </motion.div>

          {/* Título y Mensaje */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl font-bold text-white mb-2"
          >
            {t(isSuccess ? 'formSuccessTitle' : 'formErrorTitle')}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-foreground/80 text-sm sm:text-base mb-6 sm:mb-8"
          >
            {status.message}
          </motion.p>
          
          {/* Botón de cerrar */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 sm:py-3 text-base font-semibold shadow-xl rounded-md transition-transform duration-200 active:scale-95"
          >
            {t('closeButton')}
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });

  // ▼▼▼ CÓDIGO ACTUALIZADO CON LOGS ▼▼▼
  useEffect(() => {
    //const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const publicKey ='li2AIQdiZMHuVedLC'
    
    // LOG 1: Check if your environment variables are loading correctly on page load.
    //console.log("EmailJS Public Key:", publicKey);
    
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error('CRITICAL: EmailJS public key is missing or undefined!');
    }
  }, []);

  // ▼▼▼ CÓDIGO ACTUALIZADO CON LOGS ▼▼▼
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // LOG 2: Confirm that the submit function is being called when you click the button.
   // console.log("Form submission started...");
  
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };
  
    // LOG 3: See the exact data and IDs you are about to send to EmailJS.
    /*console.log("Sending to EmailJS with:", {
      serviceId,
      templateId,
      templateParams
    });*/
  
    try {
      const result = await emailjs.send(serviceId, templateId, templateParams);
  
      // LOG 4: If the email sends successfully, see the response from EmailJS.
     // console.log('SUCCESS!', result.status, result.text);
      
      setFormData({ name: '', email: '', message: '' });
      setFormStatus({ type: 'success', message: t('formSuccessMessage') });
  
    } catch (err: any) {
      // LOG 5: If there's an error, this is the MOST IMPORTANT log. It will tell you why it failed.
      //console.error('FAILED...', err);
      
      setFormStatus({ type: 'error', message: t('formErrorMessage') });
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
      <section id="contact" className="section-spacing bg-gradient-to-br from-background to-muted/10 relative overflow-hidden">
        {/* The rest of your JSX remains unchanged */}
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

      <ConfirmationModal 
        status={formStatus} 
        onClose={() => setFormStatus({ message: '', type: null })}
        t={t}
      />
    </>
  );
}