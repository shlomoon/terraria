import "../styles/main.scss";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS (Animate on Scroll) with optimized settings
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    disable: window.innerWidth < 768, // Disable on mobile for better performance
    startEvent: 'DOMContentLoaded',
    mirror: false,
    anchorPlacement: 'top-bottom',
    easing: 'ease-out-cubic'
  });

  // Initialize all components
  initLanguageSelector();
  initCarousel();
  initMobileMenu();
  initContactForm();
  initImageLoading();
  initHeaderScroll();
  initAnimations();
});

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  const scrollThreshold = 50;
  
  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  // Initial check
  handleScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
}

// Add AOS animations to elements
function initAnimations() {
  // Feature cards
  document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index * 100).toString());
  });
  
  // Section titles
  document.querySelectorAll('.section-title').forEach(title => {
    title.setAttribute('data-aos', 'fade-up');
  });
  
  // CTA section
  const cta = document.querySelector('.cta');
  if (cta) {
    cta.setAttribute('data-aos', 'fade-up');
    
    const ctaTitle = cta.querySelector('.cta__title');
    if (ctaTitle) {
      ctaTitle.setAttribute('data-aos', 'fade-up');
      ctaTitle.setAttribute('data-aos-delay', '100');
    }
    
    const ctaSubtitle = cta.querySelector('.cta__subtitle');
    if (ctaSubtitle) {
      ctaSubtitle.setAttribute('data-aos', 'fade-up');
      ctaSubtitle.setAttribute('data-aos-delay', '200');
    }
    
    const ctaButton = cta.querySelector('.btn');
    if (ctaButton) {
      ctaButton.setAttribute('data-aos', 'fade-up');
      ctaButton.setAttribute('data-aos-delay', '300');
    }
  }
  
  // Contact form
  const contactForm = document.querySelector('.contact__form');
  if (contactForm) {
    contactForm.setAttribute('data-aos', 'fade-up');
  }
}

// Translation System - Organized by language
const translations = {
  en: {
    nav: {
      solutions: "Solutions",
      about: "About",
      media: "Media",
      partner: "Be a Partner",
      contact: "Contact",
    },
    hero: {
      title: "Smart Agriculture Solutions",
      description:
        "Terraris delivers cutting-edge IoT and AI solutions for modern agriculture. Our technology enables real-time monitoring of crop health, soil conditions, and environmental factors, helping farmers make data-driven decisions for optimal yield and sustainability.",
    },
    features: {
      title: "Our Solutions",
      cropMonitoring: {
        title: "Crop Monitoring",
        description:
          "Real-time data on soil moisture, temperature, and crop health for informed decision-making.",
      },
      smartIrrigation: {
        title: "Smart Irrigation",
        description:
          "Automated irrigation systems based on real-time soil moisture data and weather conditions.",
      },
      environmentalMonitoring: {
        title: "Environmental Monitoring",
        description:
          "Track temperature, humidity, and weather conditions to protect your crops.",
      },
      assetTracking: {
        title: "Asset Tracking",
        description:
          "Monitor and manage your agricultural equipment and livestock in real-time.",
      },
    },
    cta: {
      title: "Ready to Transform Your Agriculture?",
      subtitle:
        "Join the future of farming with our advanced IoT and AI solutions.",
      button: "Get Started",
    },
    contact: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
    },
    footer: {
      copyright: "© 2025 Terraris. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  pt: {
    nav: {
      solutions: "Soluções",
      about: "Sobre",
      media: "Mídia",
      partner: "Seja um Parceiro",
      contact: "Contato",
    },
    hero: {
      title: "Soluções para Agricultura Inteligente",
      description:
        "A Terraris oferece soluções avançadas de IoT e IA para a agricultura moderna. Nossa tecnologia permite o monitoramento em tempo real da saúde das culturas, condições do solo e fatores ambientais, ajudando os agricultores a tomar decisões baseadas em dados para otimizar a produção e sustentabilidade.",
    },
    features: {
      title: "Nossas Soluções",
      cropMonitoring: {
        title: "Monitoramento de Culturas",
        description:
          "Dados em tempo real sobre umidade do solo, temperatura e saúde das culturas para tomada de decisões informadas.",
      },
      smartIrrigation: {
        title: "Irrigação Inteligente",
        description:
          "Sistemas de irrigação automatizados baseados em dados de umidade do solo em tempo real e condições climáticas.",
      },
      environmentalMonitoring: {
        title: "Monitoramento Ambiental",
        description:
          "Acompanhe temperatura, umidade e condições climáticas para proteger suas culturas.",
      },
      assetTracking: {
        title: "Rastreamento de Ativos",
        description:
          "Monitore e gerencie seus equipamentos agrícolas e gado em tempo real.",
      },
    },
    cta: {
      title: "Pronto para Transformar sua Agricultura?",
      subtitle:
        "Junte-se ao futuro da agricultura com nossas soluções avançadas de IoT e IA.",
      button: "Começar Agora",
    },
    contact: {
      title: "Entre em Contato",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      submit: "Enviar Mensagem",
    },
    footer: {
      copyright: "© 2025 Terraris. Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
    },
  },
  de: {
    nav: {
      solutions: "Lösungen",
      about: "Über uns",
      media: "Medien",
      partner: "Partner werden",
      contact: "Kontakt",
    },
    hero: {
      title: "Intelligente Landwirtschaftslösungen",
      description:
        "Terraris bietet fortschrittliche IoT- und KI-Lösungen für die moderne Landwirtschaft. Unsere Technologie ermöglicht die Echtzeit-Überwachung von Pflanzengesundheit, Bodenbedingungen und Umweltfaktoren und hilft Landwirten, datengestützte Entscheidungen für optimalen Ertrag und Nachhaltigkeit zu treffen.",
    },
    features: {
      title: "Unsere Lösungen",
      cropMonitoring: {
        title: "Pflanzenüberwachung",
        description:
          "Echtzeit-Daten zu Bodenfeuchtigkeit, Temperatur und Pflanzengesundheit für fundierte Entscheidungen.",
      },
      smartIrrigation: {
        title: "Intelligente Bewässerung",
        description:
          "Automatisierte Bewässerungssysteme basierend auf Echtzeit-Bodenfeuchtedaten und Wetterbedingungen.",
      },
      environmentalMonitoring: {
        title: "Umweltüberwachung",
        description:
          "Verfolgen Sie Temperatur, Luftfeuchtigkeit und Wetterbedingungen zum Schutz Ihrer Pflanzen.",
      },
      assetTracking: {
        title: "Asset-Tracking",
        description:
          "Überwachen und verwalten Sie Ihre landwirtschaftlichen Geräte und Viehbestand in Echtzeit.",
      },
    },
    cta: {
      title: "Bereit, Ihre Landwirtschaft zu transformieren?",
      subtitle:
        "Gestalten Sie die Zukunft der Landwirtschaft mit unseren fortschrittlichen IoT- und KI-Lösungen.",
      button: "Jetzt starten",
    },
    contact: {
      title: "Kontaktieren Sie uns",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      submit: "Nachricht senden",
    },
    footer: {
      copyright: "© 2025 Terraris. Alle Rechte vorbehalten.",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
    },
  },
};

// Language selector functionality
function initLanguageSelector() {
  const languageButton = document.querySelector(".language-selector__button");
  const languageDropdown = document.querySelector(
    ".language-selector__dropdown"
  );
  const languageOptions = document.querySelectorAll(".language-selector__item");

  // Get saved language or default to English
  const savedLanguage = localStorage.getItem("selectedLanguage") || "en";

  // Initialize with saved language
  updateLanguage(savedLanguage);
  updateLanguageButton(savedLanguage);

  // Toggle dropdown
  if (languageButton) {
    languageButton.addEventListener("click", () => {
      languageDropdown.classList.toggle("active");
    });
  }

  // Handle language selection
  languageOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = option.getAttribute("data-lang");
      updateLanguage(lang);
      updateLanguageButton(lang);
      languageDropdown.classList.remove("active");

      // Save selected language
      localStorage.setItem("selectedLanguage", lang);
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (
      languageButton &&
      languageDropdown &&
      !languageButton.contains(e.target) &&
      !languageDropdown.contains(e.target)
    ) {
      languageDropdown.classList.remove("active");
    }
  });
}

// Update language button display
function updateLanguageButton(lang) {
  const button = document.querySelector(".language-selector__button");
  if (!button) return;

  const img = button.querySelector("img");
  const span = button.querySelector("span");

  if (img) {
    img.src = `/src/assets/images/flags/${lang}.svg`;
    img.alt =
      lang === "en" ? "English" : lang === "pt" ? "Português" : "Deutsch";
  }

  if (span) {
    span.textContent =
      lang === "en" ? "English" : lang === "pt" ? "Português" : "Deutsch";
  }
}

// Update all text content based on selected language
function updateLanguage(lang) {
  if (!translations[lang]) return;

  // Update navigation
  document.querySelectorAll("[data-i18n-nav]").forEach((el) => {
    const key = el.getAttribute("data-i18n-nav");
    if (translations[lang].nav[key]) {
      el.textContent = translations[lang].nav[key];
    }
  });

  // Update hero section
  document.querySelectorAll("[data-i18n-hero]").forEach((el) => {
    const key = el.getAttribute("data-i18n-hero");
    if (translations[lang].hero[key]) {
      el.textContent = translations[lang].hero[key];
    }
  });

  // Update features section
  document.querySelectorAll("[data-i18n-features]").forEach((el) => {
    const key = el.getAttribute("data-i18n-features");
    const section = key.split(".")[0];
    const property = key.split(".")[1];

    if (
      translations[lang].features[section] &&
      translations[lang].features[section][property]
    ) {
      el.textContent = translations[lang].features[section][property];
    } else if (translations[lang].features[key]) {
      el.textContent = translations[lang].features[key];
    }
  });

  // Update CTA section
  document.querySelectorAll("[data-i18n-cta]").forEach((el) => {
    const key = el.getAttribute("data-i18n-cta");
    if (translations[lang].cta[key]) {
      el.textContent = translations[lang].cta[key];
    }
  });

  // Update contact section
  document.querySelectorAll("[data-i18n-contact]").forEach((el) => {
    const key = el.getAttribute("data-i18n-contact");
    if (translations[lang].contact[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[lang].contact[key];
      } else {
        el.textContent = translations[lang].contact[key];
      }
    }
  });

  // Update footer
  document.querySelectorAll("[data-i18n-footer]").forEach((el) => {
    const key = el.getAttribute("data-i18n-footer");
    if (translations[lang].footer[key]) {
      el.textContent = translations[lang].footer[key];
    }
  });
}

// Mobile Menu initialization
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav");

  if (!mobileMenuToggle || !nav) return;

  mobileMenuToggle.addEventListener("click", () => {
    mobileMenuToggle.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.style.overflow = nav.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close menu when clicking on links
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuToggle.classList.remove("active");
      nav.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("active") &&
      !nav.contains(e.target) &&
      !mobileMenuToggle.contains(e.target)
    ) {
      mobileMenuToggle.classList.remove("active");
      nav.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

// Hero Carousel
function initCarousel() {
  const carousel = document.querySelector(".carousel");
  if (!carousel) return;

  const slides = carousel.querySelectorAll(".carousel__slide");
  const navButtons = carousel.querySelectorAll(".carousel__nav button");
  let currentSlide = 0;
  const intervalTime = 5000; // Time between slides (5 seconds)
  let slideInterval;

  // Define slide titles (not using i18n for now to test functionality)
  const slideTitles = {
    0: "", // First slide has no title overlay
    1: "IoT Sensors for Smart Farming",
    2: "Real-Time Crop Monitoring",
    3: "Smart Irrigation Systems",
    4: "Data-Driven Agriculture",
  };

  function goToSlide(index) {
    // Remove active class from current slide and button
    slides[currentSlide].classList.remove("active");
    navButtons[currentSlide].classList.remove("active");

    // Update current slide
    currentSlide = index;

    // Add active class to new slide and button
    slides[currentSlide].classList.add("active");
    navButtons[currentSlide].classList.add("active");

    // Update title if it exists
    const titleElement = slides[currentSlide].querySelector(".hero__title");
    if (titleElement && slideTitles[currentSlide]) {
      titleElement.textContent = slideTitles[currentSlide];
    }
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }

  // Start automatic slideshow
  function startSlideshow() {
    if (slideInterval) {
      clearInterval(slideInterval);
    }
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  // Add click handlers to nav buttons
  navButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      goToSlide(index);
      startSlideshow(); // Reset interval when manually changing slides
    });
  });

  // Pause slideshow when hovering over carousel
  carousel.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  // Resume slideshow when mouse leaves carousel
  carousel.addEventListener("mouseleave", startSlideshow);

  // Preload images for smoother transitions
  slides.forEach((slide) => {
    const img = slide.querySelector("img");
    if (img) {
      const src = img.getAttribute("src");
      const preloadImg = new Image();
      preloadImg.src = src;
    }
  });

  // Start the slideshow
  startSlideshow();
}

// Image loading optimization
function initImageLoading() {
  const carouselSlides = document.querySelectorAll(".carousel__slide");

  carouselSlides.forEach((slide) => {
    const img = slide.querySelector("img");
    if (!img) return;

    // Skip eager loading images
    if (img.getAttribute("loading") === "eager") {
      slide.classList.add("loaded");
      img.classList.add("loaded");
      return;
    }

    // Create an intersection observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start loading the image
            const img = entry.target;

            // Load high-res image
            img.onload = () => {
              img.classList.add("loaded");
              slide.classList.add("loaded");
            };

            // Stop observing after loading
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: "50px 0px", // Start loading slightly before the image enters viewport
        threshold: 0.1,
      }
    );

    observer.observe(img);
  });
}

// Contact form handling
function initContactForm() {
  const contactForm = document.querySelector('.contact__form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Validate form data
    if (!name || !email || !message) {
      showFormMessage('Please fill in all fields', 'error');
      return;
    }
    
    if (!isValidEmail(email)) {
      showFormMessage('Please enter a valid email address', 'error');
      return;
    }
    
    // In a real application, you would send the form data to a server
    // For now, we'll just simulate a successful submission
    showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
    contactForm.reset();
  });
  
  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Helper function to show form messages
  function showFormMessage(message, type) {
    // Remove any existing message
    const existingMessage = contactForm.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }
    
    // Create and add new message
    const messageElement = document.createElement('div');
    messageElement.className = `form-message form-message--${type}`;
    messageElement.textContent = message;
    
    contactForm.appendChild(messageElement);
    
    // Remove message after 5 seconds
    setTimeout(() => {
      messageElement.classList.add('form-message--fade-out');
      setTimeout(() => {
        messageElement.remove();
      }, 500);
    }, 5000);
  }
}
