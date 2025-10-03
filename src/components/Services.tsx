import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Corrected import
import { useLanguage } from './LanguageContext';
import { Check, Globe, Smartphone, Image, Mail, MapPin, Search, Share2, Gift, Shield, Zap, Cloud, Settings, Headphones, Gauge, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { isMobile } from 'react-device-detect'; // Add this import

export function Services() {
  const { t } = useLanguage();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isMobileDevice, setIsMobileDevice] = useState(isMobile); // Initial detection

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth <= 768 || isMobile);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    { icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature1', category: 'core' },
    { icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature2', category: 'responsive' },
    { icon: <Image className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature3', category: 'media' },
    { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature4', category: 'forms' },
    { icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature5', category: 'integration' },
    { icon: <Search className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature6', category: 'seo' },
    { icon: <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature7', category: 'social' },
    { icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature8', category: 'security' },
    { icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature9', category: 'backup' },
    { icon: <Gauge className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature10', category: 'performance' },
    { icon: <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature11', category: 'support' },
    { icon: <Check className="w-4 h-4 sm:w-5 sm:h-5" />, key: 'feature12', category: 'guarantee' },
  ];

  const bonuses = [
    { key: 'domainBonus', icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { key: 'hostingBonus', icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { key: 'maintenanceBonus', icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" /> },
  ];

  return (
    <section id="services" className="section-spacing bg-gradient-to-br from-background via-muted/5 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        {Array.from({ length: isMobileDevice ? 4 : 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"
            style={{
              left: `${15 + i * 10}%`,
              top: `${25 + i * 8}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: isMobileDevice ? 4 + i * 0.4 : 3 + i * 0.3,
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
          transition={{ duration: isMobileDevice ? 0.6 : 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 content-spacing-lg max-w-4xl mx-auto px-4 services-animated" // Added class
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: isMobileDevice ? 0.4 : 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 services-animated" // Added class
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            <span className="text-xs sm:text-sm text-foreground/80">{t('premiumSol')}</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
          </motion.div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-blue-500 bg-clip-text text-transparent">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('servicesSubtitle')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative">
          {/* Floating Promotion Badge - Higher on small mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: isMobileDevice ? 0.4 : 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -top-8 -right-2 sm:-top-4 sm:-right-4 z-30 promo-banner services-animated" // Added class
          >
            {/* Mobile padding is now 50% of desktop */}
            <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 sm:px-8 py-2.5 sm:py-5 transform rotate-3 shadow-2xl border-2 border-white/20">
              {/* Mobile spacing is 50% of desktop */}
              <div className="flex items-center space-x-3 sm:space-x-2">
                {/* Mobile icon size is 50% of desktop */}
                <Gift className="w-3.5 h-3.5 sm:w-7 sm:h-7" />
                <div>
                  {/* Mobile font sizes are 50% of desktop */}
                  <div className="font-bold text-[0.56rem] sm:text-lg"> {t('limitedOffer')}</div>
                  <div className="text-[0.44rem] sm:text-sm opacity-90"> {t('untilOctober')}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: isMobileDevice ? 0.6 : 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative services-animated" // Added class
          >
            {/* Main Offer Card */}
            <Card className="p-4 sm:p-8 lg:p-12 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 relative shadow-2xl">

              {/* Decorative background elements */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 blur-3xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl" />
              </div>
              
              <div className="relative z-10 content-spacing-lg">
                {/* Pricing Section */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
                  {/* Left: Pricing */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: isMobileDevice ? 0.4 : 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center lg:text-left content-spacing services-animated" // Added class
                  >
                    <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                      {t('promotionalPrice')}
                    </Badge>
                    
                    <div className="mb-6 sm:mb-8">
                      <div className="flex items-baseline justify-center lg:justify-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                        <span className="text-4xl sm:text-6xl lg:text-8xl font-bold text-foreground">
                          $250
                        </span>
                        <div className="text-right">
                          <span className="text-lg sm:text-2xl text-foreground/40 line-through block">$600</span>
                          <span className="text-xs sm:text-sm text-foreground/60">{t('regularPrice')}</span>
                        </div>
                      </div>
                      
                      {/* Savings Highlight */}
                      <motion.div
                        whileHover={isMobileDevice ? {} : { scale: 1.05 }} // Disable on mobile
                        className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 services-animated" // Added class
                      >
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                          <span className="text-foreground font-bold text-base sm:text-lg">{t('savings')} $350</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Right: Bonuses */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: isMobileDevice ? 0.4 : 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-3 sm:space-y-4 services-animated" // Added class
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">{t('inclusionsTitle')}</h3>
                    {bonuses.map((bonus, index) => (
                      <motion.div
                        key={bonus.key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: isMobileDevice ? 0.3 : 0.5, delay: 0.9 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={isMobileDevice ? {} : { scale: 1.02, x: 10 }} // Disable on mobile
                        className="group services-animated" // Added class
                      >
                        <Card className="p-3 sm:p-5 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 group-hover:shadow-lg">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <motion.div
                              whileHover={isMobileDevice ? {} : { rotate: 360 }} // Disable on mobile
                              transition={{ duration: 0.6 }}
                              className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg"
                            >
                              {bonus.icon}
                            </motion.div>
                            <div className="flex-1">
                              <span className="text-foreground group-hover:text-blue-500 transition-colors text-base sm:text-lg font-semibold">
                                {t(bonus.key)}
                              </span>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Features Grid */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">{t('includes')}</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.key}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: isMobileDevice ? 0.3 : 0.5, delay: isMobileDevice ? 0.03 * index : 0.05 * index }}
                        viewport={{ once: true }}
                        whileHover={isMobileDevice ? {} : { scale: 1.05 }} // Disable on mobile
                        onMouseEnter={() => !isMobileDevice && setHoveredFeature(index)} // Disable state change on mobile
                        onMouseLeave={() => !isMobileDevice && setHoveredFeature(null)}
                        className="relative group cursor-pointer services-animated" // Added class
                      >
                        <Card className="p-3 sm:p-4 bg-gradient-to-br from-card/50 to-card/20 border border-border/30 group-hover:border-blue-500/50 transition-all duration-300 h-full group-hover:shadow-lg">
                          <div className="flex items-start space-x-2 sm:space-x-3">
                            <motion.div
                              whileHover={isMobileDevice ? {} : { scale: 1.2 }} // Disable on mobile
                              className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center text-blue-500 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300"
                            >
                              {feature.icon}
                            </motion.div>
                            <div className="flex-1">
                              <span className="text-foreground/80 group-hover:text-foreground transition-colors leading-relaxed" style={{ fontSize: 'calc(0.875rem + 2px)' }}>
                                {t(feature.key)}
                              </span>
                            </div>
                          </div>

                          {/* Hover Effect Gradient */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ 
                              opacity: hoveredFeature === index ? 1 : 0,
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none"
                          />
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: isMobileDevice ? 0.4 : 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="text-center pt-6 sm:pt-8 border-t border-border/30 content-spacing services-animated" 
                >
                  <Card className="p-4 sm:p-6 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 mb-4 sm:mb-6">
                    <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-red-500 mb-2">
                      <Gift className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="font-bold text-base sm:text-lg">{t('limitedTimeOffer')}</span>
                    </div>
                    <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
                      {t('limitedTimeOfferDesc')}
                    </p>
                  </Card>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <motion.div whileHover={isMobileDevice ? {} : { scale: 1.05 }} whileTap={{ scale: 0.95 }} className="services-animated"> 
                      <Button
                        onClick={() => {
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl shadow-blue-500/25"
                      >
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                        {t('startNow')}
                      </Button>
                    </motion.div>
                    
                    <div className="text-xs sm:text-sm text-foreground/60 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                        <span>{t('noHiddenCosts')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                        <span>{t('satisfactionGuarantee')}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}