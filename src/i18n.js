import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
  resources: {
  en: {
    translation: {
           hero: {
            hello: 'Hello There!',
            role1: "I'm",
            role2: ' Software Developer Based in Morocco.',
            portfolio: 'View My Portfolio',
            hire: 'Hire Me',
            desc: "I'm a creative developer with a passion for building beautiful and functional web applications.",
          },
          nav: {
            home: 'Home',
            services: 'Services',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact Me',
          },
          about: {
            title: 'About Me',
            intro: "I'm",
            name: 'Soumaya',
            description1:
              'a results-driven developer dedicated to building high-quality digital products that are both scalable and user-centric. I approach every project with a strong sense of ownership, a problem-solving mindset, and a commitment to delivering real value.',
            description2:
              'My experience spans the full development lifecycle — from planning and UI/UX thinking, to backend logic and deployment. I’ve contributed to a range of impactful projects, including internal business tools, client-facing platforms, and data-driven solutions.',
          },
        contact: {
      title: "Let's Connect",
      description: "Got a project in mind or just want to say hello? Reach me directly:",
      email: "Email",
      phone: "Phone",
      location: "Location",
      address:"Tangier, Morocco",

      send: "Send Message",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
      }},footer: {
      rights: "Copyright © —  EL.HATMI 2025.",
    } ,   services: {
      title: "My Services",
      workTogether: "Let's Work Together",
      message:
        "Whether you're a startup, agency, or individual with a bold idea — I'm here to help you bring it to life with thoughtful design and scalable tech.",
      items: {
        frontend: {
          title: "Frontend Development",
          desc: "Crafting intuitive and high-performance UIs that deliver seamless experiences across devices.",
        },
        backend: {
          title: "Backend Development",
          desc: "Building robust, secure, and scalable server-side systems for smooth and powerful app operations.",
        },
        mobile: {
          title: "Mobile App Development",
          desc: "Developing fast, elegant, and responsive mobile apps tailored for both iOS and Android platforms.",
        },
        devops: {
          title: "DevOps & Deployment",
          desc: "Managing CI/CD pipelines, Docker, VPS hosting, and performance tuning to ensure uptime and stability.",
        },
      },
    },projects: {
  title: "Projects",
  view: "View Project →",
  list: [
    {
      title: "ArvisaOK Website",
      description: "Official website for an educational agency that helps Moroccan students study in Spain with visa, university, and relocation support.",
    },
    {
      title: "Pamia Website",
      description: "Corporate site for Pamia, a Barcelona-based food manufacturing company that produces dairy and bakery goods under the Esmilki brand.",
    },
    {
      title: "Portfolio",
      description: "A personal developer portfolio featuring a floating AI chatbot, project carousel, multi-language support, and modern UI/UX design.",
    },
    {
      title: "Dental E-commerce",
      description: "An e-commerce store for dental equipment, featuring Stripe integration, product management, and a secure checkout system.",
    },{
      title: "Dental E-commerce",
      description: "An e-commerce store for dental equipment, featuring Stripe integration, product management, and a secure checkout system.",
    },
    {
      title: "Movio App",
      description: "A sleek movie discovery app built with Next.js and Tailwind, allowing users to browse, watch trailers, and explore movie details.",
    },
    {
      title: "Easymatch App",
      description: "An AI-powered job-matching platform that analyzes resumes and job descriptions to connect candidates with ideal roles.",
    },
  ]
},chatbot: {
  title: "✨ Get to know me!",
  close: "✕",
  placeholder: "Ask me anything...",
  thinking: "Thinking...",
  error: "Something went wrong, please try again later."
}
},}
  ,
  fr: {
    translation: {
        hero: {
            hello: 'Bonjour à tous !',
            role1: 'Je suis',
            role2: 'développeur basée au Maroc.',
            portfolio: 'Voir Mon Portfolio',
            hire: 'Embauchez-moi',
            desc: "Je suis une développeur créative passionnée par la création d'applications web belles et fonctionnelles.",
          },
          nav: {
            home: 'Accueil',
            services: 'Services',
            about: 'À propos',
            projects: 'Projets',
            contact: 'Contactez-moi',
          },
          about: {
            title: 'À propos de moi',
            intro: 'Je suis',
            name: 'Soumaya',
            description1:
              'une développeuse motivée, dédiée à la création de produits numériques de haute qualité, à la fois évolutifs et centrés sur l’utilisateur. J’aborde chaque projet avec un grand sens des responsabilités, un esprit analytique et une volonté d’apporter une réelle valeur ajoutée.',
            description2:
              'Mon expérience couvre l’ensemble du cycle de développement — de la planification et la conception UX/UI à la logique backend et au déploiement. J’ai contribué à une variété de projets impactants, notamment des outils internes, des plateformes orientées client et des solutions basées sur les données.',
          },
       contact: {
      title: "Restons en contact",
      description: "Un projet en tête ou juste envie de dire bonjour ? Contactez-moi directement :",
      email: "E-mail",
      phone: "Téléphone",
      location: "Localisation",
      address:"Tanger, Maroc",
      send: "Envoyer le message",
      form: {
        name: "Nom",
        email: "E-mail",
        message: "Message",
      }},
      footer: {
      rights: "Copyright © —  EL.HATMI 2025.",
    },
     services: {
      title: "Mes Services",
      workTogether: "Travaillons ensemble",
      message:
        "Que vous soyez une startup, une agence ou un particulier avec une idée audacieuse — je suis là pour vous aider à la concrétiser grâce à un design réfléchi et une technologie évolutive.",
      items: {
        frontend: {
          title: "Développement Frontend",
          desc: "Création d'interfaces intuitives et performantes offrant des expériences fluides sur tous les appareils.",
        },
        backend: {
          title: "Développement Backend",
          desc: "Construction de systèmes côté serveur robustes, sécurisés et évolutifs pour un fonctionnement optimal.",
        },
        mobile: {
          title: "Développement Mobile",
          desc: "Développement d'applications mobiles rapides et élégantes pour iOS et Android.",
        },
        devops: {
          title: "DevOps & Déploiement",
          desc: "Gestion des pipelines CI/CD, de l'hébergement VPS et de l'optimisation des performances pour garantir la stabilité.",
        },
      },
    },
    projects: {
  title: "Projets",
  view: "Voir le projet →",
  list: [
    {
      title: "Site Web ArvisaOK",
      description: "Site officiel d'une agence éducative aidant les étudiants marocains à étudier en Espagne avec assistance visa, université et installation.",
    },
    {
      title: "Site Web Pamia",
      description: "Site d'entreprise pour Pamia, fabricant barcelonais de produits laitiers et de boulangerie sous la marque Esmilki.",
    },
    {
      title: "Portfolio",
      description: "Un portfolio personnel de développeur avec chatbot IA flottant, carrousel de projets, support multilingue et UI/UX moderne.",
    },
    {
      title: "E-commerce dentaire",
      description: "Une boutique e-commerce d'équipements dentaires avec intégration Stripe, gestion de produits et système de paiement sécurisé.",
    }, {
      title: "E-commerce dentaire",
      description: "Une boutique e-commerce d'équipements dentaires avec intégration Stripe, gestion de produits et système de paiement sécurisé.",
    },
    {
      title: "Application Movio",
      description: "Une application de découverte de films moderne permettant de parcourir, voir des bandes-annonces et explorer les détails des films.",
    },
    {
      title: "Application Easymatch",
      description: "Une plateforme IA de mise en relation emploi qui analyse CV et offres pour trouver les correspondances idéales.",
    },
  ]
},chatbot: {
  title: "✨ Apprenez à me connaître !",
  close: "✕",
  placeholder: "Posez-moi une question...",
  thinking: "Je réfléchis...",
  error: "Une erreur s'est produite. Veuillez réessayer plus tard."
}

  }, },},
  

    fallbackLng: 'en',
   interpolation: {
    escapeValue: false,
  },
 
  });

export default i18n;
