import React from 'react';
import { motion, Transition } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Check, Globe, Smartphone, Image, Mail, MapPin, Search, Share2, Gift, Shield, Zap, Cloud, Settings, Headphones, Gauge, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { isMobile } from 'react-device-detect';

export function Services() {
  const { t } = useLanguage();
  const isMobileDevice = isMobile;
  const isFirefox = typeof navigator !== 'undefined' && /firefox/i.test(navigator.userAgent);
  const reduceAnimations = isMobileDevice || isFirefox;  // Or && for stricter

  const features = [
    { icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature1' },
    { icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature2' },
    { icon: <Image className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature3' },
    { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature4' },
    { icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature5' },
    { icon: <Search className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature6' },
    { icon: <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature7' },
    { icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature8' },
    { icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature9' },
    { icon: <Gauge className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature10' },
    { icon: <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature11' },
    { icon: <Check className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature12' },
  ];

  const bonuses = [
    { key: 'domainBonus', icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { key: 'hostingBonus', icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { key: 'maintenanceBonus', icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" /> },
  ];
  
  // Animation variant for the promo badge
  const promoBadgeAnimation = {
    hidden: { opacity: reduceAnimations ? 1 : 0, scale: reduceAnimations ? 1 : 0.8, rotate: reduceAnimations ? 0 : -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      // ✨ OPTIMIZATION: Remove rotation on mobile
      rotate: reduceAnimations ? 0 : 3 
    }
  };

  const getTransition = (base: Transition) => reduceAnimations ? { ...base, duration: 0 } : base;

  return (
    <section id="services" className="section-spacing bg-gradient-to-br from-background via-muted/5 to-background relative overflow-hidden" style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        {!reduceAnimations && Array.from({ length: isMobileDevice ? 3 : 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: reduceAnimations ? 1 : 0, y: reduceAnimations ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={getTransition({ duration: 0.8 })}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-foreground/80">{t('premiumSol')}</span>
            <Sparkles className="w-5 h-5 text-purple-500" />
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-blue-500 bg-clip-text text-transparent">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-6 max-w-3xl mx-auto leading-relaxed">
            {t('servicesSubtitle')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            variants={promoBadgeAnimation}
            initial="hidden"
            whileInView="visible"
            transition={getTransition({ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 100 })}
            viewport={{ once: true }}
            className="absolute -top-8 -right-2 sm:-top-4 sm:-right-4 z-30"
          >
            <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg px-4 py-2 sm:px-6 sm:py-3 shadow-2xl border-2 border-white/20">
              <div className="flex items-center space-x-2">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6" />
                <div>
                  <div className="font-bold text-sm sm:text-base">{t('limitedOffer')}</div>
                  <div className="text-xs sm:text-sm opacity-90">{t('untilOctober')}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: reduceAnimations ? 1 : 0, scale: reduceAnimations ? 1 : 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={getTransition({ duration: 0.8, delay: 0.2 })}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Card className="p-4 sm:p-8 lg:p-12 bg-card/60 backdrop-blur-lg border border-border/50 relative shadow-2xl overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              
              {/* ✨ OPTIMIZATION: One single animation for all card content */}
              <motion.div
                initial={{ opacity: reduceAnimations ? 1 : 0 }}
                whileInView={{ opacity: 1 }}
                transition={getTransition({ duration: 0.8, delay: 0.6 })}
                viewport={{ once: true, amount: 0.1 }}
                className="relative z-10"
              >
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
                  <div className="text-center lg:text-left">
                    <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 text-sm">
                      {t('promotionalPrice')}
                    </Badge>
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center lg:justify-start space-x-3 mb-3">
                        <span className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">$300</span>
                        <span className="text-lg sm:text-2xl text-foreground/40 line-through">$600</span>
                      </div>
                      <div className="inline-block bg-green-500/20 border border-green-500/30 rounded-md px-4 py-2">
                        <div className="flex items-center space-x-2">
                          <Zap className="w-5 h-5 text-green-500" />
                          <span className="text-foreground font-bold text-base sm:text-lg">{t('savings')} $300</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">{t('inclusionsTitle')}</h3>
                    {bonuses.map((bonus) => (
                      <Card key={bonus.key} className="p-3 sm:p-4 bg-card/50 border border-border/30 hover:border-blue-500/50 transition-colors duration-300 hover:shadow-md">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                            {bonus.icon}
                          </div>
                          <span className="text-foreground text-base sm:text-lg font-semibold">{t(bonus.key)}</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">{t('includes')}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {features.map((feature) => (
                      <div key={feature.key} className="group">
                         <Card className="p-3 sm:p-4 bg-card/40 border border-border/30 group-hover:border-blue-500/50 transition-all duration-300 h-full group-hover:shadow-lg relative overflow-hidden">
                           <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                               {feature.icon}
                             </div>
                             <span className="text-foreground/80 group-hover:text-foreground transition-colors text-sm sm:text-base">
                               {t(feature.key)}
                             </span>
                           </div>
                           {/* ✨ OPTIMIZATION: CSS-only hover effect, no JS state */}
                           <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                         </Card>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center pt-6 sm:pt-8 border-t border-border/30">
                  <Card className="p-4 sm:p-6 bg-red-500/10 border border-red-500/30 mb-6">
                    <div className="flex items-center justify-center space-x-3 text-red-400 mb-2">
                      <Gift className="w-6 h-6" />
                      <span className="font-bold text-base sm:text-lg">{t('limitedTimeOffer')}</span>
                    </div>
                    <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">{t('limitedTimeOfferDesc')}</p>
                  </Card>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <Button
                      size="lg"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/25 w-full sm:w-auto"
                    >
                      <Zap className="w-5 h-5 mr-2" />
                      {t('startNow')}
                    </Button>
                    <div className="text-xs sm:text-sm text-foreground/60 space-y-1">
                      <div className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /><span>{t('noHiddenCosts')}</span></div>
                      <div className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /><span>{t('satisfactionGuarantee')}</span></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}