import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { 
  Dumbbell, UtensilsCrossed, Building, Briefcase, Heart, Camera, 
  ArrowRight, ExternalLink, Eye, Sparkles, Star, Info
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Templates() {
  const { t } = useLanguage();
  const [hoveredTemplate, setHoveredTemplate] = useState<number | null>(null);

  // Reduced to 6 templates with translated features
  const templateCategories = [
    {
      key: 'gymFitness',
      icon: <Dumbbell className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1607720844146-7351a68014c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBmaXRuZXNzJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTU5NzU2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['gymFeature1', 'gymFeature2', 'gymFeature3', 'gymFeature4'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      key: 'restaurants',
      icon: <UtensilsCrossed className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1682778418768-16081e4470a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTU4OTgwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['restaurantFeature1', 'restaurantFeature2', 'restaurantFeature3', 'restaurantFeature4'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      key: 'hotels',
      icon: <Building className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1663147737123-9cbd239fc3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJvb2tpbmclMjB3ZWJzaXRlfGVufDF8fHx8MTc1NTk3NTY3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['hotelFeature1', 'hotelFeature2', 'hotelFeature3', 'hotelFeature4'],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      key: 'corporate',
      icon: <Briefcase className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1621857093087-7daa85ab14a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHdlYnNpdGV8ZW58MXx8fHwxNzU1OTc1NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['corporateFeature1', 'corporateFeature2', 'corporateFeature3', 'corporateFeature4'],
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      key: 'medical',
      icon: <Heart className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1631507623095-c710d184498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTU5MjkzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['medicalFeature1', 'medicalFeature2', 'medicalFeature3', 'medicalFeature4'],
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      key: 'portfolio',
      icon: <Camera className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbnxlbnwxfHx8fDE3NTU4ODk2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['portfolioFeature1', 'portfolioFeature2', 'portfolioFeature3', 'portfolioFeature4'],
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="templates" className="section-spacing bg-gradient-to-br from-muted/10 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-3" />
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.2,
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
          className="text-left mb-16 content-spacing-lg max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-foreground/80">{t('designGallery')}</span>
            <Star className="w-5 h-5 text-purple-500" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            {t('templatesTitle')}
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('templatesSubtitle')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{t('language') === 'es' ? 'Nota Importante' : 'Important Note'}</h3>
                <p className="text-foreground/80 leading-relaxed">
                  {t('templatesNote')}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {templateCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredTemplate(index)}
              onMouseLeave={() => setHoveredTemplate(null)}
              className="h-full group cursor-pointer"
            >
              <Card className="p-0 h-full bg-card/50 backdrop-blur-sm border border-border/30 relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-blue-500/30 group-hover:bg-card/80">
                
                {/* Template Preview - Removed status badge and tech tags */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={t(category.key)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredTemplate === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center"
                  >
                    <div className="text-center space-y-3">
                      <div className="flex space-x-3">
                        <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white backdrop-blur-sm">
                          <Eye className="w-4 h-4 mr-2" />
                          {t('viewTemplate')}
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t('livePreview')}
                        </Button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="p-6 content-spacing">
                  {/* Title and Icon */}
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg`}
                    >
                      {category.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {t(category.key)}
                      </h3>
                      <div className="text-sm text-foreground/60">
                        {t('specializedWebsite')}
                      </div>
                    </div>
                  </div>

                  {/* Features - Now using translated features */}
                  <div className="space-y-3 mb-6">
                    <div className="text-sm font-semibold text-foreground/80 mb-3">{t('mainFeatures')}</div>
                    {category.features.map((featureKey, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 text-sm text-foreground/70"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient}`}></div>
                        <span>{t(featureKey)}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons - Removed details button */}
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-border/50 text-foreground hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-500/50 group/btn transition-all duration-300"
                    >
                      <Sparkles className="w-4 h-4 mr-2 group-hover/btn:text-blue-500" />
                      {t('requestDesign')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    
                    <div className="flex justify-center">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        {t('demo')}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Footer without pricing */}
                <div className="bg-gradient-to-r from-muted/30 to-muted/10 border-t border-border/20 p-4">
                  <div className="flex items-center justify-center text-sm">
                    <span className="text-green-500 font-semibold">{t('available')}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 max-w-4xl mx-auto content-spacing">
            <div className="mb-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-blue-500" />
                <span className="text-lg font-semibold">{t('needSomethingSpecific')}</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">{t('customDevelopment')}</h3>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
                {t('customDevelopmentDesc')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-xl"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                {t('contactUs')}
              </Button>
              <div className="text-sm text-foreground/60 space-y-1">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{t('freeConsultation')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{t('personalizedPlanning')}</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}