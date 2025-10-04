import React from 'react';
import { motion, Transition } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Code, Palette, Zap, Users, Brain, Lightbulb, Cpu, Network, Database, Shield, Rocket, Search, Globe } from 'lucide-react';
import { Card } from './ui/card';
import { isMobile } from 'react-device-detect';

export function About() {
  const { t } = useLanguage();
  const isMobileDevice = isMobile;
  const isFirefox = typeof navigator !== 'undefined' && /firefox/i.test(navigator.userAgent);
  const reduceAnimations = isMobileDevice || isFirefox;  // Or && for stricter

  const innovations = [
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('aiPoweredDev'),
      description: t('aiPoweredDevDesc')
    },
    {
      icon: <Network className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('microservicesArch'),
      description: t('microservicesArchDesc')
    },
    {
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('realtimeAnalytics'),
      description: t('realtimeAnalyticsDesc')
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('securityFirst'),
      description: t('securityFirstDesc')
    }
  ];

  const modernDevProcess = [
    {
      phase: t('discoveryPhase'),
      title: t('strategyAnalysis'),
      description: t('strategyAnalysisDesc'),
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'border-emerald-500/30'
    },
    {
      phase: t('designPhase'),
      title: t('creativeDesign'),
      description: t('creativeDesignDesc'),
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-500/10 to-orange-500/10',
      borderColor: 'border-amber-500/30'
    },
    {
      phase: t('developmentPhase'),
      title: t('smartDevelopment'),
      description: t('smartDevelopmentDesc'),
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-indigo-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      phase: t('launchPhase'),
      title: t('successfulLaunch'),
      description: t('successfulLaunchDesc'),
      icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-500/10 to-violet-500/10',
      borderColor: 'border-purple-500/30'
    }
  ];

  const coreFeatures = [
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('aboutFeature1'),
      description: t('aboutFeature1Desc'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('aboutFeature2'),
      description: t('aboutFeature2Desc'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('aboutFeature3'),
      description: t('aboutFeature3Desc'),
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('aboutFeature4'),
      description: t('aboutFeature4Desc'),
      gradient: 'from-green-500 to-teal-500'
    }
  ];
  
  // Animation variants for containers
  const containerVariants = {
    hidden: { opacity: reduceAnimations ? 1 : 0, y: reduceAnimations ? 0 : 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const getTransition = (base: Transition) => reduceAnimations ? { ...base, duration: 0 } : base;

  return (
    <section id="about" className="section-spacing bg-gradient-to-br from-background to-muted/10 relative overflow-hidden" style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}>
      {/* Background Elements (Already optimized) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-3" />
        {!reduceAnimations && Array.from({ length: isMobileDevice ? 4 : 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16 sm:mb-20 content-spacing-lg max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 rounded-full">
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            <span className="text-xs sm:text-sm text-foreground/80 font-mono">{t('aboutSubtitle')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-blue-500 bg-clip-text text-transparent">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            {t('aboutDescription')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 sm:mt-8" />
        </motion.div>

        {/* Innovation Grid */}
        <div className="mb-20 sm:mb-24">
          <motion.h3 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground"
          >
            {t('technologicalInnovations')}
          </motion.h3>
          {/* ✨ OPTIMIZATION: Animating the grid container instead of each card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {innovations.map((innovation) => (
              <div key={innovation.title} className="group">
                <Card className="p-4 sm:p-6 h-full bg-card/30 backdrop-blur-sm border border-border/50 group-hover:border-blue-500/30 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center text-blue-500 mx-auto mb-3 sm:mb-4 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {innovation.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-center">{innovation.title}</h4>
                  <p className="text-foreground/60 text-center leading-relaxed text-sm">{innovation.description}</p>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Modern Development Process */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">{t('modernDevProcess')}</h3>
            <p className="text-foreground/60 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">{t('modernDevProcessDesc')}</p>
          </motion.div>
          
          {/* ✨ OPTIMIZATION: Animating the grid container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {modernDevProcess.map((phase) => (
                <div key={phase.title} className="group">
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${phase.color} flex items-center justify-center text-white shadow-lg rounded-full group-hover:scale-105 transition-transform duration-300`}>
                      {phase.icon}
                    </div>
                  </div>
                  <Card className={`p-4 sm:p-6 transition-all duration-300 bg-gradient-to-br ${phase.bgColor} border ${phase.borderColor} group-hover:scale-[1.02] group-hover:shadow-lg min-h-[300px] sm:min-h-[380px] flex flex-col`}>
                    <div className="text-center mb-4 sm:mb-6">
                      <div className={`inline-block text-xs font-bold px-3 py-1 bg-gradient-to-r ${phase.color} text-white rounded-full tracking-wider`}>{phase.phase}</div>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-3 text-center">{phase.title}</h4>
                    <p className="text-foreground/70 text-sm text-center leading-relaxed flex-grow">{phase.description}</p>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 sm:mt-16">
              <Card className="p-6 sm:p-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/20 max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                  <span className="text-xl sm:text-2xl font-bold">{t('finalResult')}</span>
                </div>
                <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">{t('finalResultDesc')}</p>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Core Features Grid */}
        {/* ✨ OPTIMIZATION: Animating the grid container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {coreFeatures.map((feature) => (
            <div key={feature.title} className="h-full group">
              <Card className="p-4 sm:p-6 h-full bg-card/30 backdrop-blur-sm border border-border/50 relative overflow-hidden group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                <div className="relative z-10">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white rounded-lg mb-4 sm:mb-6 group-hover:shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}