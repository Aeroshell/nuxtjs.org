module.exports = {
  common: {
    an_error_occurred: 'Ocurrió un error',
    api_page_not_found: 'No se encontró la API de la página',
    please_define_title: 'Define un título para la página',
    please_define_description: 'Define una descripción para la página',
    search: 'Buscar',
    version: 'Versión'
  },
  iso: 'en',

  links: {
    download: 'Descargar',
    live_edit: 'Editar en vivo'
  },
  header: {
    links: [
      {
        name: 'Guías',
        slug: 'guides',
        type: 'newDocs',
        routeName: 'guides-book-slug'
      },
      {
        name: 'Guía',
        slug: 'guide',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'API',
        slug: 'api',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'Ejemplos',
        slug: 'examples',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'FAQ',
        slug: 'faq',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'Recursos',
        slug: 'resources',
        type: 'static'
      },
      {
        name: 'Blog',
        slug: 'blog',
        type: 'static'
      }
    ],
    search: {
      placeholder: 'Buscar'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt.js - El Framework Intuitivo De Vue',
      description:
        'Crea tu próxima aplicación Vue.js con confianza utilizando NuxtJS. Un Framework de código abierto el cual hace que el desarrollo web sea simple y poderoso.'
    },
    welcome: {
      title: 'El Framework {br} Intuitivo De {frameworkType}',
      description:
        'Crea tu próxima aplicación Vue.js con confianza utilizando NuxtJS. Un Framework de {openSource} el cual hace que el desarrollo web sea simple y poderoso.',
      openSource: 'código abierto',
      get_started: 'comenzar',
      get_updates:
        'Obtén actualizaciones de NuxtJS cada mes en tu bandeja de entrada',
      video: 'Video producido por {company}, descarga gratis su {cheatSheet}',
      cheatSheet: 'hoja de trucos para Nuxt.'
    },
    why: {
      title: '¿Por qué {nuxt}?',
      try_nuxtjs_online: 'Prueba NuxtJS en línea',
      enjoyable: {
        title: 'Agradable',
        description:
          'Nuestro enfoque principal es la experiencia del desarrollador. ¡Nos encanta Nuxt.js y mejoramos continuamente el framework para que tú también lo ames! {break} Espera soluciones atractivas, mensajes de error descriptivos, valores predeterminados potentes y documentación detallada. Si surgen preguntas o problemas, nuestra comunidad servicial te ayudará.'
      },
      modular: {
        title: 'Modular',
        description:
          'Nuxt se basa en una potente arquitectura modular. Puedes elegir entre más de 50 módulos para que tu desarrollo sea más fácil y rápido. No tienes que reinventar la rueda para obtener beneficios de PWA, agregar Google Analytics a tu página o generar un mapa del sitio.'
      },
      performant: {
        title: 'Eficiente',
        description:
          'Con Nuxt.js, tu aplicación se optimizará de inmediato. Hacemos nuestro mejor esfuerzo para crear aplicaciones de alto rendimiento utilizando las mejores prácticas de Vue.js y Node.js. Para exprimir cada bit innecesario de tu aplicación, Nuxt incluye un analizador de paquetes y muchas oportunidades para afinar tu aplicación.'
      }
    },
    companies: {
      title: '¿Quiénes están usando {nuxt}?'
    },
    modes: {
      title: 'Renderizado de {nuxt}',
      ssr: {
        title: 'Renderizado del lado servidor',
        description:
          'El modo más popular para Nuxt. Con SSR, también llamado modo "universal" o "isomorfo", se usará un servidor Node.js para entregar HTML basado en tus componentes Vue al cliente en lugar del javascript puro. El uso de SSR conducirá a un gran impulso de SEO, una mejor experiencia de usuario y más oportunidades (en comparación con un SPA de Vue tradicional).{break}Debido a que la implementación de SSR por tu cuenta puede ser realmente tediosa, Nuxt.js te brinda soporte completo de inmediato y se encargará de las dificultades comunes.'
      },
      spa: {
        title: 'Aplicación de una sola página (SPA)',
        description:
          '¿No necesitas SSR o Generación de Sitios Estáticos, pero aún quieres aprovechar los beneficios que proporciona Nuxt? ¿Estás haciendo una transición lenta de tu aplicación y quieres comenzar con algo ligero? Entonces el modo SPA tradicional probablemente sea tu elección. El resultado será un SPA típico de Vue como lo conoces, pero influenciado por tu configuración de Nuxt y el framework en sí.'
      },
      ssg: {
        title: 'Generado estáticamente',
        description:
          'La Generación de Sitios Estáticos es un tema muy candente en este momento (también conocido como JAMStack). En lugar de cambiar a otro framework y pasar tiempo para acostumbrarse, ¿por qué no matar dos pájaros de un tiro? {proverbial} Nuxt.js admite generar un sitio web estático basado en tu aplicación Vue. Es lo "mejor de ambos mundos"”, ya que no necesitas un servidor, pero aún tienes beneficios de SEO porque Nuxt pre-renderizará todas las páginas e incluirá el HTML necesario. Además, puedes implementar la página resultante fácilmente en páginas de Netlify o GitHub.',
        proverbial: 'solo como proverbio'
      }
    },
    sponsors: {
      title: 'Patrocinadores',
      description:
        'NuxtJS es un proyecto de código abierto con licencia MIT y completamente gratuito. Sin embargo, la cantidad de esfuerzo necesaria para mantener y desarrollar nuevas características para el proyecto no es sostenible sin el respaldo financiero adecuado. Si diriges un negocio y estás utilizando Nuxt en un producto que genera ingresos, tiene sentido comercial patrocinar el desarrollo de Nuxt: garantiza que el proyecto en el que se basa tu producto se mantenga saludable y activo. También puedes ayudar a tu exposición en la comunidad y hace que sea más fácil atraer a los desarrolladores de Vue/Nuxt. Si eres un usuario particular y has disfrutado de la productividad de usar Nuxt, considera donar como gesto de agradecimiento.',
      become_a_sponsor: 'Conviértete en un patrocinador'
    },
    newsletter: {
      title: 'Boletín de {nuxt}',
      description:
        'Recibe las últimas noticias de Nuxt en tu bandeja de entrada, comisariada por el equipo de NuxtJS.',
      form: {
        email: 'Correo electrónico',
        subscribing: 'Suscribiéndose...',
        subscribe: 'Suscribirse',
        subscribed_messages: {
          pre:
            'Para confirmar tu suscripción se ha enviado un correo electrónico a',
          post: '💚'
        }
      }
    }
  },
  design: {
    title: 'Diseño',
    description:
      'NuxtJS es un proyecto de código abierto con licencia MIT y completamente gratuito. {break} Puedes usar libremente nuestros logotipos siempre que menciones NuxtJS y enlaces a nuxtjs.org.',
    other_download_message:
      'También puedes descargar nuestro {favicon} o nuestro archivo {sketch}.'
  },
  resources: {
    title: 'Recursos',
    description:
      'Descubre un panel de recursos hecho por nuestros socios. Al utilizar estos enlaces de afiliados, nos estás ayudando a mantener y desarrollar el framework de código abierto.',
    themes: {
      title: 'Temas'
    },
    videos: {
      title: 'Cursos en video'
    }
  },
  shop: {
    title: 'Tienda',
    description:
      '¿Quieres apoyar el proyecto NuxtJS y mostrar tu amor al resto de la comunidad?{break} ¡Aquí están nuestros productos con la mejor calidad!'
  },
  team: {
    title: 'Equipo',
    description:
      'El desarrollo de NuxtJS y su ecosistema está dirigido por un equipo internacional. Tenemos un equipo muy activo y comprometido que se esfuerza constantemente por impulsar a Nuxt hacia adelante.'
  },
  themes: {
    title: 'Temas',
    description:
      'Con los temas creados por nuestros socios de Creative Tim y Theme Forest, puedes ver cómo se construye una aplicación del mundo real, con Nuxt.js por detrás.'
  },
  'video-courses': {
    title: 'Cursos en video',
    description:
      'Con los cursos en video creados por nuestro socio VueSchool, puedes descubrir y aprender más sobre el Framework Nuxt.js.',
    cta: {
      discover: 'Descubrir vueschool',
      start: 'INICIAR CURSO'
    }
  },
  sponsor: {
    title: {
      pre: 'Patrocinador',
      post: 'Desarrollo'
    },
    description:
      'NuxtJS es un proyecto de código abierto con licencia MIT y completamente gratuito.{break} Sin embargo, la cantidad de esfuerzo necesaria para mantener y desarrollar nuevas características para el proyecto no es sostenible sin el respaldo financiero adecuado.{break} Puedes apoyar el desarrollo de NuxtJS mediante los siguientes métodos:',
    donations: {
      title: 'Donaciones únicas',
      description: 'Aceptamos donaciones a través de estos canales.'
    },
    pledges: {
      title: 'Donaciones recurrentes',
      description:
        'Las donaciones recurrentes vienen con ventajas exclusivas, por ejemplo, tener tu nombre en el repositorio de NuxtJS en GitHub o colocar el logotipo de tu empresa en este sitio web. Conviértete en un nuxter o patrocinador a través de {opencollective} (entra en un fondo con modelos de gastos transparentes que respaldan los esfuerzos y eventos de la comunidad).'
    },
    become_a_sponsor: 'Conviértete en un patrocinador'
  },
  support: {
    title: {
      pre: 'Consultoría',
      post: 'Soporte'
    },
    description:
      'Nuestro {team} ahora ofrece servicios de consultoría oficiales para tus aplicaciones NuxtJS.{break} Ofrecemos diferentes servicios según tus necesidades, desde soporte técnico hasta desarrollo personalizado. Espera una respuesta dentro de un día hábil, podemos firmar un acuerdo de confidencialidad (NDA) personalizado y si no estás satisfecho con nuestro servicio puedes obtener un reembolso completo.',
    technical: {
      title: 'Soporte técnico',
      description:
        'Consigue auditorías de proyectos, despliegue de aplicaciones, desarrollo personalizado y soporte técnico del equipo de NuxtJS.',
      start: 'Iniciar chat',
      partner: {
        pre: 'Nos asociamos con',
        post:
          'para ofrecer estos servicios y que podamos centrarnos en ayudarte lo más rápido posible.'
      }
    },
    entreprise: {
      title: 'para empresas',
      description:
        'NuxtJS y los desarrolladores que mantienen otros miles de paquetes están trabajando con Tidelift para ofrecer una suscripción empresarial que cubra todo el código abierto que utilizas. Si quieres la flexibilidad del código abierto y la confianza del software comercial, esto es para ti.',
      partner: {
        pre: 'Disponible como parte de la suscripción a',
        post: ''
      },
      learn_more: 'Conocer más',
      request_a_demo: 'Solicitar una demo'
    }
  },
  blog: {
    title: 'Blog de NuxtJS',
    description:
      'Descubre artículos de {nuxtTeam} y {ambassadors} sobre NuxtJS, ¡consejos y trucos incluidos!',
    ambassadors: 'embajadores',
    contribute:
      '¿Has detectado un error o quieres contribuir a esta publicación del blog?'
  },
  guide: {
    release_notes: 'Notas de la versión',
    toc_title: 'En esta página'
  },
  quiz: {
    title: 'Examen'
  },
  tryNewDocs: {
    msg1: '¿Quieres echar un vistazo a la ',
    link: 'nueva documentación',
    msg2: '? Ahora están en versión beta. ¡Que te diviertas!'
  },
  contribute: {
    title: 'Contribuidores',
    docs: '¿Has detectado un error o quieres contribuir a la documentación?',
    blog:
      '¿Has detectado un error o quieres contribuir a esta publicación del blog?',
    edit_on_github: '¡Edita esta página en GitHub!',
    msg1:
      'La contribución para esta página ahora está cerrada. Si quieres contribuir, consulta nuestra',
    link: 'nueva documentación'
  },
  codeSandbox: {
    open: 'Abrir CodeSandbox'
  },
  content: {
    guide: {
      prologue: 'Prólogo',
      'getting-started': 'Comenzando'
    },
    api: {
      essential: 'Esencial',
      pages: 'Páginas',
      components: 'Componentes',
      utils: 'Utilidades',
      configuration: 'Configuración',
      programmatically: 'Programáticamente',
      internals: 'Partes internas'
    },
    examples: {
      essentials: 'Esenciales',
      customization: 'Personalización',
      advanced: 'Avanzado'
    },
    faq: {
      configuration: 'Configuración',
      development: 'Desarrollo',
      deployment: 'Despliegue'
    },
    guides: {
      'get-started': 'Comenzando',
      concepts: 'Conceptos',
      features: 'Características',
      'directory-structure': 'Estructura de directorios',
      'configuration-glossary': 'Glosario de configuración',
      'internals-glossary': 'Glosario de partes internas',
      'components-glossary': 'Glosario de componentes'
    }
  },
  cookies: {
    consent:
      '¡Utilizamos cookies para el análisis de usuarios y mejoras en la página!',
    linkLabel: 'Aprender sobre cookies',
    button: 'Entendido'
  }
}
