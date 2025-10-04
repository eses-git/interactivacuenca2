import React from 'react';
import { Helmet } from 'react-helmet-async'; 
import { LanguageProvider } from './components/LanguageContext';
import { ThemeProvider } from './components/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function AppContent() {
  return (
    <>
      <Helmet>
        {/* Estas etiquetas deben coincidir con las de tu index.html */}
        <title>InteractivaCuenca - Desarrollo Modernos Web y Marketing</title>
        <meta 
          name="description" 
          content="Creamos páginas web profesionales y 100% adaptables para tu negocio. Diseño rápido, moderno y a precios asequibles en Ecuador. ¡Impulsa tu presencia online!" 
        />
        <link rel="canonical" href="https://www.interactivacuenca.com" /> {/* Reemplaza con tu dominio */}
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}


export default function App() {
  console.log('Main JS loaded!');  // TEMP: Test log in bundle

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}