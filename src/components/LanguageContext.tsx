import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    aboutUs: "Nosotros",
    offer: "Oferta",
    templates: "Plantillas",
    contact: "Contacto",

    formSuccessTitle: "¡Mensaje Enviado!",
    formSuccessMessage: "Gracias por contactarnos. Te responderemos lo antes posible.",
    formErrorTitle: "¡Oops! Algo salió mal",
    formErrorMessage: "No se pudo enviar tu mensaje. Por favor, intenta de nuevo o contáctanos directamente.",
    closeButton: "Cerrar",

    
    // Hero
    heroTitle: "Creamos Experiencias Digitales Excepcionales",
    heroSubtitle: "La Revolución Digital Comienza Aquí",
    heroDescription: "Potencia tu negocio con tecnología de vanguardia. Convertimos ideas en sitios web profesionales que impulsan el crecimiento.",
    getStarted: "Iniciar Transformación",
    digitalEvolution: "Evolución Digital",
    
    // Hero alternative titles
    heroAlt1: "El Futuro de Tu Negocio Empieza Aquí",
    heroAlt2: "Donde la Innovación Encuentra el Diseño",
    heroAlt3_line1: "Creamos el Mañana,",
    heroAlt3_line2: "Hoy",    
   
    //technolgies we master
    technologies:"Tecnologías que dominamos:",
   
    // About
    aboutTitle: "Arquitectos del Futuro Digital",
    aboutSubtitle: "Innovación • Creatividad • Tecnología",
    aboutDescription: "Somos un equipo de expertos digitales que combinan creatividad excepcional con tecnología de vanguardia para crear experiencias web interactivas que trascienden lo ordinario.",
    
    // About features
    aboutFeature1: "Desarrollo Full-Stack",
    aboutFeature1Desc: "Dominamos tanto frontend como backend con las últimas tecnologías.",
    aboutFeature2: "Diseño UX/UI Avanzado",
    aboutFeature2Desc: "Interfaces intuitivas que maximizan la conversión y engagement.",
    aboutFeature3: "Optimización de Codificación",
    aboutFeature3Desc: "Código limpio, eficiente y optimizado desde el primer desarrollo.",
    aboutFeature4: "Soporte 24/7",
    aboutFeature4Desc: "Monitoreo continuo y soporte técnico especializado.",
    
    // About - Technological Innovations
    technologicalInnovations: "Innovaciones Tecnológicas",
    aiPoweredDev: "Desarrollo Potenciado por IA",
    aiPoweredDevDesc: "Integramos inteligencia artificial para optimizar código y mejorar la experiencia del usuario.",
    microservicesArch: "Arquitectura de Microservicios",
    microservicesArchDesc: "Sistemas escalables y modulares que crecen con tu negocio sin limitaciones.",
    realtimeAnalytics: "Análisis en Tiempo Real",
    realtimeAnalyticsDesc: "Dashboards en tiempo real para monitorear el rendimiento y comportamiento de usuarios.",
    securityFirst: "Seguridad Primero",
    securityFirstDesc: "Implementamos las mejores prácticas de ciberseguridad desde el primer día.",
    
    // About - Development Process (Modern Alternative)
    modernDevProcess: "Metodología Ágil Moderna",
    modernDevProcessDesc: "Proceso simplificado y eficiente que garantiza resultados excepcionales en cada etapa.",
    
    // Modern Development Phases
    discoveryPhase: "DESCUBRIMIENTO",
    strategyAnalysis: "Análisis Estratégico",
    strategyAnalysisDesc: "Investigación profunda de tu mercado, audiencia y objetivos para crear la estrategia perfecta.",
    strategyTech: ["Investigación de Mercado", "Análisis de Competencia", "Definición de Objetivos"],
    
    designPhase: "DISEÑO",
    creativeDesign: "Diseño Creativo",
    creativeDesignDesc: "Creamos interfaces atractivas y funcionales que conectan con tu audiencia objetivo.",
    designTech: ["Prototipado Interactivo", "Sistema de Diseño", "Optimización UX/UI"],
    
    developmentPhase: "DESARROLLO",
    smartDevelopment: "Desarrollo Inteligente",
    smartDevelopmentDesc: "Codificación limpia y eficiente usando las mejores prácticas y tecnologías modernas.",
    devTech: ["Código Optimizado", "Testing Automático", "Integración Continua"],
    
    launchPhase: "LANZAMIENTO",
    successfulLaunch: "Lanzamiento Exitoso",
    successfulLaunchDesc: "Implementación cuidadosa con monitoreo completo y soporte continuo.",
    launchTech: ["Despliegue Seguro", "Monitoreo 24/7", "Soporte Técnico"],
    
    // Final Result Translation
    finalResult: "Resultado Final",
    finalResultDesc: "Un sitio web profesional, optimizado y listo para impulsar tu negocio hacia el éxito digital.",
    
    // Services Enhanced
    servicesTitle: "Oferta de Verano",
    servicesSubtitle: "Transformación Digital Completa para Tu Negocio.",
    promotionalPrice: "Precio Promocional",
    until: "hasta 31 de Octubre 2025",
    regularPrice: "Precio Regular",
    from: "Desde",
    includes: "Todo Incluido:",
    savings: "Ahorras",
    limitedOffer: " ¡OFERTA LIMITADA!",
    untilOctober: " Hasta Octubre 31",
    limitedTimeOffer: "¡Oferta por Tiempo Limitado!",
    limitedTimeOfferDesc: "¡Actúa antes del 31 de octubre para aprovechar este precio especial!",
    premiumSol:"Soluciones Web Premium",
    letsStart:"Inicio del Proyecto",
    footerDesc:"Creamos sitios web modernos y funcionales que impulsan el crecimiento de tu negocio en el mundo digital.",

    
    // Enhanced features (removed panel de administración básico)
    feature1: "Sitio web hasta 3 páginas profesionales",
    feature2: "Diseño 100% responsivo para todos los dispositivos",
    feature3: "Galería multimedia avanzada con optimización",
    feature4: "Sistema de contacto inteligente con formularios",
    feature5: "Integración Google Maps y Google Analytics",
    feature6: "SEO completo y optimización para buscadores",
    feature7: "Integración redes sociales y chat WhatsApp",
    feature8: "Certificado SSL y seguridad avanzada",
    feature9: "Backup automático y protección de datos",
    feature10: "Optimización de velocidad extrema",
    feature11: "Soporte técnico especializado incluido",
    feature12: "Disponible en varios idiomas",
    
    domainBonus: "Dominio premium por 1 año ",
    hostingBonus: "Hosting premium de alta velocidad por 1 año",
    maintenanceBonus: "Mantenimiento y actualizaciones por 6 meses",
    inclusionsTitle: "Bonificaciones Incluidas",
    
    // Process - New Simple Version
    processTitle: "Proceso Simple en 4 Pasos",
    processSubtitle: "De la idea a tu sitio web en funcionamiento.",
    
    processStep1: "Conversamos",
    processStep1Desc: "Hablamos de tu negocio, objetivos y necesidades específicas.",
    
    processStep2: "Diseñamos",
    processStep2Desc: "Creamos el diseño perfecto adaptado a tu marca y audiencia.",
    
    processStep3: "Desarrollamos",
    processStep3Desc: "Construimos tu sitio web con tecnología moderna y confiable.",
    
    processStep4: "Lanzamos",
    processStep4Desc: "Publicamos tu sitio y te acompañamos en los primeros pasos.",
    
    // Templates (reduced to 6)
    templatesTitle: "Galería de Diseños Profesionales",
    templatesSubtitle: "Ejemplos de cómo podría verse tu sitio web",
    templatesNote: "Estos son solo ejemplos de plantillas para mostrar cómo podría verse tu sitio web. Cada proyecto se desarrolla de forma personalizada según tus necesidades específicas.",
    
    // Template categories (6 templates)
    gymFitness: "Gimnasios & Fitness",
    restaurants: "Restaurantes & Gastronomía", 
    hotels: "Hoteles & Turismo",
    corporate: "Empresas & Corporativo",
    medical: "Clínicas & Medicina",
    portfolio: "Portfolios Creativos",
    
    // Template Features - Gym & Fitness
    gymFeature1: "Sistema de membresías avanzado",
    gymFeature2: "Reserva de clases online", 
    gymFeature3: "Perfiles de entrenadores certificados",
    gymFeature4: "Seguimiento de progreso personalizado",
    
    // Template Features - Restaurants
    restaurantFeature1: "Menú digital interactivo",
    restaurantFeature2: "Sistema de reservas online",
    restaurantFeature3: "Integración con delivery",
    restaurantFeature4: "Sistema de reseñas y testimonios",
    
    // Template Features - Hotels
    hotelFeature1: "Reserva de habitaciones en tiempo real",
    hotelFeature2: "Calendario de disponibilidad",
    hotelFeature3: "Tours virtuales 360°",
    hotelFeature4: "Portal de servicios para huéspedes",
    
    // Template Features - Corporate
    corporateFeature1: "Perfil empresarial profesional",
    corporateFeature2: "Showcase de servicios y productos",
    corporateFeature3: "Directorio de equipo ejecutivo",
    corporateFeature4: "Formularios de contacto especializados",
    
    // Template Features - Medical
    medicalFeature1: "Sistema de citas médicas",
    medicalFeature2: "Portal privado de pacientes",
    medicalFeature3: "Plataforma de telemedicina",
    medicalFeature4: "Gestión de historial médico",
    
    // Template Features - Portfolio
    portfolioFeature1: "Showcase dinámico de proyectos",
    portfolioFeature2: "Galerías de imágenes optimizadas",
    portfolioFeature3: "Formularios de contacto creativos",
    portfolioFeature4: "Integración con redes sociales",
    
    viewTemplate: "Ver Ejemplo",
    livePreview: "Vista Previa",
    requestDesign: "Solicitar Este Diseño",
    demo: "Demo",
    available: "Disponible",
    specializedWebsite: "Sitio web especializado",
    mainFeatures: "Características principales:",
    
    // Contact
    contactTitle: "Empecemos Tu Proyecto",
    contactSubtitle: "Cuéntanos sobre tu negocio y crearemos algo increíble juntos.",
    
    // Contact Form
    fullName: "Nombre Completo",
    email: "Correo Electrónico",
    projectMessage: "Cuéntanos sobre tu Proyecto",
    projectPlaceholder: "Describe tu negocio, objetivos, funcionalidades que necesitas, presupuesto aproximado, tiempo de entrega, etc. Mientras más detalles nos proporciones, mejor podremos ayudarte.",
    sendRequest: "¡Empecemos Juntos!",
    sending: "Enviando...",
    
    // Contact Info
    directCall: "Llamada Directa",
    personalAttention: "Atención personalizada",
    emailContact: "Correo Electrónico",
    guaranteedResponse: "Respuesta garantizada",
    location: "Ubicación",
    localGlobalService: "Servicio local y global",
    contactWays: "Formas de Contacto",
    
    // Process Alternative
    ourProcess: "Nuestro Método de Trabajo",
    initialConsultation: "Consulta Inicial",
    consultationDesc: "Conversamos sobre tu proyecto y objetivos.",
    customProposal: "Propuesta Personalizada", 
    proposalDesc: "Creamos un plan específico para tu negocio.",
    development: "Desarrollo",
    developmentDesc: "Construimos tu sitio web con las mejores tecnologías.",
    launch: "Lanzamiento",
    launchDesc: "Publicamos tu sitio y te acompañamos en el proceso.",
    
    // Contact Stats
    responseTime: "Tiempo de Respuesta",
    activeProjects: "Proyectos Activos",
    satisfaction: "Satisfacción",
    
    // Additional Content
    getQuote: "Contacta con nosotros",
    getQuoteDesc:  "Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada.",
    getQuoteFullName: "Tu nombre completo",
    getQuoteMail:"tuyo@email.com",
    customDevelopment: "Desarrollo Personalizado",
    customDevelopmentDesc: "Nuestro equipo puede crear una solución completamente personalizada para tu negocio específico. Desarrollo único adaptado a tus necesidades exactas.",
    requestProposal: "Solicitar Propuesta",
    freeConsultation: "Consulta gratuita",
    personalizedPlanning: "Planificación personalizada",
    needSomethingSpecific: "¿Necesitas algo más específico?",
    haveUrgency: "¿Tienes Prisa?",
    haveUrgencyDesc: "Llámanos directamente y hablemos de tu proyecto ahora mismo",
    GuaranteedResponse: "Respuesta garantizada",
    noCommitmentConsultation: "Consulta sin compromiso",
    confidentialInfo: "Información confidencial",
    personalizedProposal: "Propuesta personalizada",
    noHiddenCosts: "Sin costos ocultos",
    satisfactionGuarantee: "Garantía de satisfacción",
    availableSchedule: "Disponible Lun-Vie 9AM-6PM",
    whatsapp24: "WhatsApp 24/7",
    
    // Footer
    rights: "Todos los derechos reservados",
    quickLinks: "Enlaces Rápidos",
    home: "Inicio",
    
    // Additional UI Text
    startNow: "Empezar Ahora",
    learnMore: "Conocer Más",
    seePortfolio: "Ver Portafolio",
    contactUs: "Contáctanos",
    callNow: "Llamar Ahora",
    
    // CTA Messages
    readyToStart: "¿Listo para empezar?",
    dontWait: "No esperes más",
    limitedSpots: "Cupos limitados",
    actNow: "Actúa ahora",
    
    // Company Info
    companyName: "InteractivaCuenca",
    companyEmail: "info@interactivacuenca.com",
    companyPhone: "+593 96 705 7022",
    companyLocation: "Cuenca, Ecuador"
  },
  en: {
    // Navigation
    aboutUs: "About Us",
    offer: "Offer",
    templates: "Templates",
    contact: "Contact",
    
  formSuccessTitle: "Message Sent!",
  formSuccessMessage: "Thank you for contacting us. We will get back to you as soon as possible.",
  formErrorTitle: "Oops! Something went wrong",
  formErrorMessage: "Your message could not be sent. Please try again or contact us directly.",
  closeButton: "Close",
    // Hero
    heroTitle: "We Create Exceptional Digital Experiences",
    heroSubtitle: "The Digital Revolution Starts Here",
    heroDescription: "Power your business with cutting-edge technology. We transform ideas into professional websites that drive growth.",
    getStarted: "Start Transformation",
    digitalEvolution: "Digital Evolution",
    
    // Hero alternative titles
    heroAlt1: "The Future of Your Business Starts Here",
    heroAlt2: "Where Innovation Meets Design",
    heroAlt3_line1: "We Create Tomorrow,",
    heroAlt3_line2: "Today",  

    technologies:"Technologies we master:",
    letsStart:"Project Inception",
    footerDesc:"We create modern and functional websites that drive your business growth in the digital world.",



    
    // About
    aboutTitle: "Architects of the Digital Future",
    aboutSubtitle: "Innovation • Creativity • Technology",
    aboutDescription: "We are a team of digital experts who combine exceptional creativity with cutting-edge technology to create interactive web experiences that transcend the ordinary.",
    
    // About features
    aboutFeature1: "Full-Stack Development",
    aboutFeature1Desc: "We master both frontend and backend with latest technologies",
    aboutFeature2: "Advanced UX/UI Design",
    aboutFeature2Desc: "Intuitive interfaces that maximize conversion and engagement",
    aboutFeature3: "Coding Optimization",
    aboutFeature3Desc: "Clean, efficient and optimized code from the first development",
    aboutFeature4: "24/7 Support",
    aboutFeature4Desc: "Continuous monitoring and specialized technical support",
    
    // About - Technological Innovations
    technologicalInnovations: "Technological Innovations",
    aiPoweredDev: "AI-Powered Development",
    aiPoweredDevDesc: "We integrate artificial intelligence to optimize code and improve user experience",
    microservicesArch: "Microservices Architecture",
    microservicesArchDesc: "Scalable and modular systems that grow with your business without limitations",
    realtimeAnalytics: "Real-time Analytics",
    realtimeAnalyticsDesc: "Real-time dashboards to monitor performance and user behavior",
    securityFirst: "Security First",
    securityFirstDesc: "We implement cybersecurity best practices from day one",
    
    // About - Development Process (Modern Alternative)
    modernDevProcess: "Modern Agile Methodology",
    modernDevProcessDesc: "Simplified and efficient process that guarantees exceptional results at every stage",
    
    // Modern Development Phases
    discoveryPhase: "DISCOVERY",
    strategyAnalysis: "Strategic Analysis",
    strategyAnalysisDesc: "Deep research of your market, audience and goals to create the perfect strategy",
    strategyTech: ["Market Research", "Competitive Analysis", "Goal Definition"],
    
    designPhase: "DESIGN",
    creativeDesign: "Creative Design",
    creativeDesignDesc: "We create attractive and functional interfaces that connect with your target audience",
    designTech: ["Interactive Prototyping", "Design System", "UX/UI Optimization"],
    
    developmentPhase: "DEVELOPMENT",
    smartDevelopment: "Smart Development",
    smartDevelopmentDesc: "Clean and efficient coding using best practices and modern technologies",
    devTech: ["Optimized Code", "Automated Testing", "Continuous Integration"],
    
    launchPhase: "LAUNCH",
    successfulLaunch: "Successful Launch",
    successfulLaunchDesc: "Careful implementation with complete monitoring and continuous support",
    launchTech: ["Secure Deployment", "24/7 Monitoring", "Technical Support"],
    
    // Final Result Translation
    finalResult: "Final Result",
    finalResultDesc: "A professional, optimized website ready to drive your business towards digital success",
    
    // Services Enhanced
    servicesTitle: "Summer Offer",
    servicesSubtitle: "Complete Digital Transformation for Your Business",
    promotionalPrice: "Promotional Price",
    until: "until October 31, 2025",
    regularPrice: "Regular Price",
    from: "From",
    includes: "Everything Included:",
    savings: "You Save",
    limitedOffer: " LIMITED OFFER!",
    untilOctober: " Until October 31",
    limitedTimeOffer: "Limited Time Offer!",
    limitedTimeOfferDesc: "Act by October 31 to take advantage of this special price!",
    premiumSol:"Premium Web Solutions",
    
    // Enhanced features (removed basic admin panel)
    feature1: "Professional website up to 3 pages",
    feature2: "100% responsive design for all devices",
    feature3: "Advanced multimedia gallery with optimization",
    feature4: "Intelligent contact system with forms",
    feature5: "Google Maps and Google Analytics integration",
    feature6: "Complete SEO and search engine optimization",
    feature7: "Social media integration and WhatsApp chat",
    feature8: "SSL certificate and advanced security",
    feature9: "Automatic backup and data protection",
    feature10: "Extreme speed optimization",
    feature11: "Specialized technical support included",
    feature12: "Available in multiple languages",
    
    domainBonus: "Premium domain for 1 year",
    hostingBonus: "High-speed premium hosting for 1 year",
    maintenanceBonus: "Maintenance and updates for 6 months",
    inclusionsTitle: "Included Bonuses",
    
    // Process - New Simple Version
    processTitle: "Simple 4-Step Process",
    processSubtitle: "From idea to your working website",
    
    processStep1: "We Talk",
    processStep1Desc: "We discuss your business, goals and specific needs",
    
    processStep2: "We Design",
    processStep2Desc: "We create the perfect design adapted to your brand and audience",
    
    processStep3: "We Develop",
    processStep3Desc: "We build your website with modern and reliable technology",
    
    processStep4: "We Launch",
    processStep4Desc: "We publish your site and accompany you in the first steps",
    
    // Templates (reduced to 6)
    templatesTitle: "Professional Design Gallery",
    templatesSubtitle: "Examples of how your website could look",
    templatesNote: "These are just template examples to show how your website could look. Each project is developed in a personalized way according to your specific needs.",
    
    // Template categories (6 templates)
    gymFitness: "Gyms & Fitness",
    restaurants: "Restaurants & Gastronomy",
    hotels: "Hotels & Tourism", 
    corporate: "Corporate & Business",
    medical: "Clinics & Medicine",
    portfolio: "Creative Portfolios",
    
    // Template Features - Gym & Fitness
    gymFeature1: "Advanced membership system",
    gymFeature2: "Online class booking",
    gymFeature3: "Certified trainer profiles",
    gymFeature4: "Personalized progress tracking",
    
    // Template Features - Restaurants
    restaurantFeature1: "Interactive digital menu",
    restaurantFeature2: "Online reservation system",
    restaurantFeature3: "Delivery integration",
    restaurantFeature4: "Reviews and testimonials system",
    
    // Template Features - Hotels
    hotelFeature1: "Real-time room booking",
    hotelFeature2: "Availability calendar",
    hotelFeature3: "360° virtual tours",
    hotelFeature4: "Guest services portal",
    
    // Template Features - Corporate
    corporateFeature1: "Professional company profile",
    corporateFeature2: "Services and products showcase",
    corporateFeature3: "Executive team directory",
    corporateFeature4: "Specialized contact forms",
    
    // Template Features - Medical
    medicalFeature1: "Medical appointment system",
    medicalFeature2: "Private patient portal",
    medicalFeature3: "Telemedicine platform",
    medicalFeature4: "Medical history management",
    
    // Template Features - Portfolio
    portfolioFeature1: "Dynamic project showcase",
    portfolioFeature2: "Optimized image galleries",
    portfolioFeature3: "Creative contact forms",
    portfolioFeature4: "Social media integration",
    
    viewTemplate: "View Example",
    livePreview: "Live Preview",
    requestDesign: "Request This Design",
    demo: "Demo",
    available: "Available",
    specializedWebsite: "Specialized website",
    mainFeatures: "Main features:",
    
    // Contact
    contactTitle: "Let's Start Your Project",
    contactSubtitle: "Tell us about your business and we'll create something amazing together",
    
    // Contact Form
    fullName: "Full Name",
    email: "Email Address",
    projectMessage: "Tell Us About Your Project",
    projectPlaceholder: "Describe your business, goals, functionalities you need, approximate budget, delivery time, etc. The more details you provide, the better we can help you.",
    sendRequest: "Let's Start Together!",
    sending: "Sending...",
    
    // Contact Info
    directCall: "Direct Call",
    personalAttention: "Personalized attention",
    emailContact: "Email Contact",
    guaranteedResponse: "Guaranteed response", 
    location: "Location",
    localGlobalService: "Local and global service",
    contactWays: "Contact Ways",
    
    // Process Alternative
    ourProcess: "Our Work Method",
    initialConsultation: "Initial Consultation",
    consultationDesc: "We discuss your project and objectives",
    customProposal: "Custom Proposal",
    proposalDesc: "We create a specific plan for your business",
    development: "Development",
    developmentDesc: "We build your website with the best technologies",
    launch: "Launch",
    launchDesc: "We publish your site and accompany you in the process",
    
    // Contact Stats
    responseTime: "Response Time",
    activeProjects: "Active Projects",
    satisfaction: "Satisfaction",
    
    // Additional Content
    getQuote: "Contact Us",
    getQuoteDesc:  "Tell us about your project and we will send you a personalized proposal.",
    getQuoteFullName: "Your full name",
    getQuoteMail:"your@email.com",
    customDevelopment: "Custom Development",
    customDevelopmentDesc: "Our team can create a completely personalized solution for your specific business. Unique development adapted to your exact needs.",
    requestProposal: "Request Proposal",
    freeConsultation: "Free consultation",
    personalizedPlanning: "Personalized planning",
    needSomethingSpecific: "Need something more specific?",
    haveUrgency: "In a Hurry?",
    haveUrgencyDesc: "Call us directly and let's talk about your project right now",
    GuaranteedResponse: "Guaranteed response",
    noCommitmentConsultation: "No commitment consultation",
    confidentialInfo: "Confidential information",
    personalizedProposal: "Personalized proposal",
    noHiddenCosts: "No hidden costs",
    satisfactionGuarantee: "Satisfaction guarantee",
    availableSchedule: "Available Mon-Fri 9AM-6PM",
    whatsapp24: "WhatsApp 24/7",
    
    // Footer
    rights: "All rights reserved",
    quickLinks: "Quick Links",
    home: "Home",
    
    // Additional UI Text
    startNow: "Start Now",
    learnMore: "Learn More", 
    seePortfolio: "See Portfolio",
    contactUs: "Contact Us",
    callNow: "Call Now",
    
    // CTA Messages
    readyToStart: "Ready to start?",
    dontWait: "Don't wait any longer",
    limitedSpots: "Limited spots",
    actNow: "Act now",
    
    // Company Info
    companyName: "InteractivaCuenca",
    companyEmail: "interactivacuenca@proton.me",
    companyPhone: "+593 96 705 7022",
    companyLocation: "Cuenca, Ecuador"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  
  const t = (key: string): string => {
    const translationValue = translations[language][key as keyof typeof translations['es']];

    if (!translationValue) {
      return key; // Return the key if no translation is found
    }

    // If the translation is an array, join it into a single string
    if (Array.isArray(translationValue)) {
      return translationValue.join(', ');
    }

    return translationValue;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}