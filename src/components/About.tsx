import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Code, Palette, Zap, Users, Brain, Lightbulb, Cpu, Network, Database, Shield, Rocket, Search, Globe } from 'lucide-react';
import { Card } from './ui/card';
import { isMobile } from 'react-device-detect'; // Add this import

export function About() {
  const { t } = useLanguage();
  const [isMobileDevice, setIsMobileDevice] = useState(isMobile); // Initial detection

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth <= 768 || isMobile);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      tech: t('strategyTech'),
      duration: t('strategyDuration'),
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'border-emerald-500/30'
    },
    {
      phase: t('designPhase'),
      title: t('creativeDesign'),
      description: t('creativeDesignDesc'),
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      tech: t('designTech'),
      duration: t('designDuration'),
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-500/10 to-orange-500/10',
      borderColor: 'border-amber-500/30'
    },
    {
      phase: t('developmentPhase'),
      title: t('smartDevelopment'),
      description: t('smartDevelopmentDesc'),
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      tech: t('devTech'),
      duration: t('devDuration'),
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-indigo-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      phase: t('launchPhase'),
      title: t('successfulLaunch'),
      description: t('successfulLaunchDesc'),
      icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />,
      tech: t('launchTech'),
      duration: t('launchDuration'),
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

  return (
    <section id="about" className="section-spacing bg-gradient-to-br from-background to-muted/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-3" />
        {Array.from({ length: isMobileDevice ? 6 : 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1], // Smaller scale on mobile if desired, but kept mild
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: isMobileDevice ? 5 + i * 0.4 : 4 + i * 0.3, // Slower on mobile
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobileDevice ? 0.6 : 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 content-spacing-lg max-w-4xl mx-auto px-4 about-animated" // Added class
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: isMobileDevice ? 0.4 : 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 about-animated" // Added class
          >
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            <span className="text-xs sm:text-sm text-foreground/80 font-mono">{t('aboutSubtitle')}</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-blue-500 bg-clip-text text-transparent">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            {t('aboutDescription')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 sm:mt-8" />
        </motion.div>

        {/* Innovation Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobileDevice ? 0.6 : 0.8 }}
          viewport={{ once: true }}
          className="mb-20 sm:mb-24 about-animated" // Added class
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground max-w-4xl mx-auto px-4" style={{ fontSize: 'calc(1.5rem + 3px)' }}>{t('technologicalInnovations')}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobileDevice ? 0.4 : 0.6, delay: isMobileDevice ? index * 0.05 : index * 0.1 }}
                viewport={{ once: true }}
                whileHover={isMobileDevice ? {} : { y: -5 }} // Disable hover on mobile
                className="group about-animated" // Added class
              >
                <Card className="p-4 sm:p-6 h-full bg-card/30 backdrop-blur-sm border border-border/50 group-hover:border-blue-500/30 transition-all duration-300">
                  <motion.div
                    whileHover={isMobileDevice ? {} : { scale: 1.1, rotate: 5 }} // Disable on mobile
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center text-blue-500 mx-auto mb-3 sm:mb-4"
                  >
                    {innovation.icon}
                  </motion.div>
                  <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-center">{innovation.title}</h4>
                  <p className="text-foreground/60 text-center leading-relaxed" style={{ fontSize: 'calc(0.875rem + 3px)' }}>{innovation.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modern Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobileDevice ? 0.6 : 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 about-animated" // Added class
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-3 sm:mb-4 max-w-4xl mx-auto px-4">{t('modernDevProcess')}</h3>
          <p className="text-foreground/60 text-center mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed px-4" style={{ fontSize: 'calc(1.375rem + 3px)' }}>
            {t('modernDevProcessDesc')}
          </p>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {modernDevProcess.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: isMobileDevice ? 0.4 : 0.6, delay: isMobileDevice ? index * 0.1 : index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer about-animated" // Added class
                >
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <motion.div
                      whileHover={isMobileDevice ? {} : { scale: 1.05 }} // Disable on mobile
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${phase.color} flex items-center justify-center text-white shadow-2xl rounded-full`}
                    >
                      <div className="flex flex-col items-center">
                        {phase.icon}
                        <span className="text-xs font-bold mt-1">{index + 1}</span>
                      </div>
                    </motion.div>
                  </div>

                  <Card className={`p-4 sm:p-6 lg:p-8 transition-all duration-300 bg-gradient-to-br ${phase.bgColor} border-2 ${phase.borderColor} hover:scale-[1.01] hover:shadow-lg min-h-[300px] sm:min-h-[420px] flex flex-col`}>
                    <div className="text-center mb-4 sm:mb-6">
                      <div className={`inline-block text-xs font-bold px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r ${phase.color} text-white tracking-wider`}>
                        {phase.phase}
                      </div>
                    </div>
                    
                    <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center text-foreground">{phase.title}</h4>
                    
                    <p className="text-foreground/70 mb-6 sm:mb-8 text-center leading-relaxed flex-grow" style={{ fontSize: 'calc(0.875rem + 3px)' }}>
                      {phase.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobileDevice ? 0.6 : 0.8, delay: isMobileDevice ? 0.6 : 1 }}
              viewport={{ once: true }}
              className="text-center mt-12 sm:mt-[50px] about-animated" // Added class
            >
              <Card className="p-6 sm:p-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/20 max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                  <span className="text-xl sm:text-2xl font-bold">{t('finalResult')}</span>
                </div>
                <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
                  {t('finalResultDesc')}
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobileDevice ? 0.4 : 0.6, delay: isMobileDevice ? index * 0.05 : index * 0.1 }}
              viewport={{ once: true }}
              whileHover={isMobileDevice ? {} : { y: -10 }} // Disable on mobile
              className="h-full about-animated" // Added class
            >
              <Card className="p-4 sm:p-6 h-full bg-card/30 backdrop-blur-sm border border-border/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative z-10 content-spacing">
                  <motion.div
                    whileHover={isMobileDevice ? {} : { scale: 1.1, rotate: 5 }} // Disable on mobile
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:shadow-lg transition-shadow`}
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}