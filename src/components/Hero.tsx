import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { ArrowDown, Code, Zap, Users, Cpu, Database, Smartphone, Globe, Cloud, ShoppingCart, BarChart } from 'lucide-react';
import { Button } from './ui/button';
import { isMobile } from 'react-device-detect';

export function Hero() {
  const { t } = useLanguage();
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  // Using 'isMobile' directly is cleaner
  const isMobileDevice = isMobile;

  const titles = useMemo(() => [
    t('heroTitle'),
    t('heroAlt1'),
    t('heroAlt2'),
    <>{t('heroAlt3_line1')}<br />{t('heroAlt3_line2')}</>
  ], [t]);

  const techStack = useMemo(() => [
    { icon: <Code className="w-6 h-6" />, name: 'React' },
    { icon: <Zap className="w-6 h-6" />, name: 'Performance' },
    { icon: <Users className="w-6 h-6" />, name: 'UX/UI' },
    { icon: <Cpu className="w-6 h-6" />, name: 'AI' },
    { icon: <Database className="w-6 h-6" />, name: 'Backend' },
    { icon: <Smartphone className="w-6 h-6" />, name: 'Mobile' },
    { icon: <Globe className="w-6 h-6" />, name: 'Web Apps' },
    { icon: <Cloud className="w-6 h-6" />, name: 'Cloud' },
    { icon: <ShoppingCart className="w-6 h-6" />, name: 'E-commerce' },
    { icon: <BarChart className="w-6 h-6" />, name: 'Analytics' }
  ], []);

  // Your particle effect logic is already correctly disabling for mobile, which is great.
  const particles = useMemo(() =>
    Array.from({ length: 20 }).map((_, i) => ({
      key: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    })),
  []);

  useEffect(() => {
    // Slower animation interval on mobile is a good practice.
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, isMobileDevice ? 8000 : 4000);

    return () => clearInterval(interval);
  }, [titles.length, isMobileDevice]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ✨ OPTIMIZATION: Define animation variants based on device type
  const titleAnimation = {
    initial: { opacity: 0, y: isMobileDevice ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: isMobileDevice ? 0 : -20 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/5 to-background pt-20 sm:pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        {/* Correctly disabled for mobile */}
        {!isMobileDevice && particles.map(({ key, left, top, duration, delay }) => (
          <motion.div
            key={key}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              willChange: 'transform, opacity',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <span className="text-xs sm:text-sm text-foreground/80">{t('digitalEvolution')}</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          {/* Main Title Container */}
          <div className="mb-6 sm:mb-8 min-h-[6rem] lg:min-h-[15rem] flex items-center justify-center hero-title">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTitleIndex}
                initial={titleAnimation.initial}
                animate={titleAnimation.animate}
                exit={titleAnimation.exit}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut"
                }}
                // ✨ OPTIMIZATION: Hint to the browser about upcoming animation
                style={{ willChange: 'opacity, transform' }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-foreground via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
              >
                {titles[currentTitleIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: "easeOut"
            }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-blue-500"
          >
            {t('heroSubtitle')}
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 1.2,
              ease: "easeOut"
            }}
            className="text-base sm:text-xl lg:text-2xl text-foreground/70 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          >
            <p>{t('heroDescription')}</p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 1.6,
              ease: "easeOut"
            }}
            className="mb-12 sm:mb-16"
          >
            <Button
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            >
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              {t('getStarted')}
            </Button>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 2.0,
              ease: "easeOut"
            }}
            className="mb-12 sm:mb-16"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 2.2
              }}
              className="text-xs sm:text-sm text-foreground/60 mb-6 sm:mb-8 font-medium"
            >
              {t('technologies')}
            </motion.div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 max-w-4xl mx-auto px-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 2.4 + index * 0.1,
                    ease: "easeOut"
                  }}
                  // Hover effect correctly disabled on touch devices
                  whileHover={!isMobileDevice ? { scale: 1.1, y: -5 } : undefined}
                  className="flex flex-col items-center space-y-1 sm:space-y-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-500 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 group-hover:shadow-lg">
                    {tech.icon}
                  </div>
                  <span className="text-xs sm:text-sm text-foreground/70 group-hover:text-foreground transition-colors font-medium">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 3.0,
              ease: "easeOut"
            }}
            onClick={scrollToAbout}
            className="group cursor-pointer"
            style={{ marginBottom: '40px' }}
          >
            <div className="flex flex-col items-center space-y-2 sm:space-y-3">
              <span className="text-xs sm:text-sm text-foreground/60 group-hover:text-foreground transition-colors">
              </span>
              <motion.div
                animate={{ y: isMobileDevice ? [0, 5, 0] : [0, 10, 0] }}
                transition={{ duration: isMobileDevice ? 3 : 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-blue-500/30 rounded-full group-hover:border-blue-500 flex items-center justify-center group-hover:bg-blue-500/10 transition-all duration-300"
              >
                <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
              </motion.div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}