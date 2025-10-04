import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  ];



  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-background to-muted/20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 content-spacing"
          >
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">ic</span>
              </div>
              <span className="text-lg sm:text-xl font-semibold text-foreground">{t('companyName')}</span>
            </div>
            <p className="text-foreground/60 mb-4 sm:mb-6 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed">
              {t('footerDesc') }
            </p>
           
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">{t('quickLinks')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: t('home'), section: 'hero' },
                { label: t('aboutUs'), section: 'about' },
                { label: t('contact'), section: 'contact' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      if (link.section === 'hero') {
                        scrollToTop();
                      } else {
                        const element = document.getElementById(link.section);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="text-foreground/60 hover:text-foreground transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">{t('contact')}</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center space-x-2 sm:space-x-3 text-foreground/60">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">{t('companyPhone')}</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 text-foreground/60">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">{t('companyEmail')}</span>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3 text-foreground/60">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base">{t('companyLocation')}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 text-center"
        >
          <p className="text-foreground/60 text-sm sm:text-base">
            © 2025 {t('companyName')}. {t('rights')}.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}