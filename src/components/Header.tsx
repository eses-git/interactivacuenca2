import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';
import { Menu, X, Globe, Sun, Moon, Palette } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
const scrollToSection = (sectionId: string) => {
    // First, close the mobile menu
    setIsMobileMenuOpen(false);

    // Use setTimeout to wait for the menu to close and the DOM to update
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      const header = document.getElementById('main-header');
      
      if (section && header) {
        const headerHeight = header.offsetHeight;
        const sectionRect = section.getBoundingClientRect();
        const absoluteSectionTop = sectionRect.top + window.scrollY;
        const scrollToPosition = absoluteSectionTop - headerHeight;

        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
    }, 0); // A timeout of 0 is all that's needed
  };
  const navItems = [
    { key: 'aboutUs', section: 'about' },
    { key: 'offer', section: 'services' },
    { key: 'contact', section: 'contact' }
  ];

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      case 'sepia':
        return <Palette className="w-4 h-4" />;
      default:
        return <Moon className="w-4 h-4" />;
    }
  };

  const getThemeTitle = () => {
    switch (theme) {
      case 'light':
        return 'Switch to sepia mode';
      case 'dark':
        return 'Switch to light mode';
      case 'sepia':
        return 'Switch to dark mode';
      default:
        return 'Switch theme';
    }
  };

  return (
    <motion.header
      id="main-header" // <-- ADD THIS ID
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">ic</span>
            </div>
            <span className="text-base sm:text-lg font-semibold text-foreground">InteractivaCuenca</span>
          </motion.div>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden lg:flex items-center justify-end flex-1 ml-8">
            <nav className="flex items-center space-x-6 mr-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.key}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.section)}
                  className="text-foreground/80 hover:text-foreground transition-colors relative group text-sm sm:text-base"
                >
                  {t(item.key)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </nav>

            {/* Theme Toggle & Language Switcher */}
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 text-foreground/80 hover:text-foreground transition-colors border border-border/30 hover:border-border/60 relative group"
                title={getThemeTitle()}
              >
                {getThemeIcon()}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background border border-border px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-colors p-2 border border-border/30 hover:border-border/60"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase text-sm">{language}</span>
              </motion.button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              {getThemeIcon()}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase text-xs">{language}</span>
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-1"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.nav
  initial={false}
  animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
  className="lg:hidden overflow-hidden bg-background/80 backdrop-blur-md"
>
          <div className="py-4 space-y-4 text-center">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-center text-foreground/80 hover:text-foreground transition-colors py-2 text-base"
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}
//changes in header



