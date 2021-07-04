export default {
  global: {
    componenteFormativo: 'Rutas Integrales de Atención en Salud (RIAS)',
    descripcionCurso:
      'En este componente se abordará el marco normativo y conceptual de la atención integral en salud, las RIAS (Rutas Integrales de Atención en Salud) como herramienta de la Política, sus atributos y tipos para centrarse por último en la Ruta Integral para la Promoción y el Mantenimiento de la Salud, relacionando los resultados en salud con las intervenciones que llegan a las personas, familias y comunidades y la gestión que es necesaria para que ello ocurra.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Atención Integral en Salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: ' Ley Estatutaria en Salud',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Política de Atención Integral en Salud',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Rutas Integrales de Atención Integral en Salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Generalidades y principios',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ordenadores de las RIAS',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipos de RIAS',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Estructura de las RIAS ',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ruta para la Promoción y el Mantenimiento de la Salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Resultados en Salud',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Intervenciones de la RPMS',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Acciones de Gestión',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //nombreRuta: 'actividad',
      //icono: 'far fa-question-circle',
      //titulo: 'Actividad didáctica',
      //desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Congreso de Colombia (2015). Ley Estatutaria 1751 de 2015. Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones. 16 de febrero de 2015. Disponible en: ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Ley%201751%20de%202015.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2015). Resolución 518 de 2015 “Por la cual se dictan disposiciones en relación con la Gestión de la Salud Pública y se establecen directrices para la ejecución, seguimiento y evaluación del Plan de Salud Pública de Intervenciones Colectivas - PIC”. 24 de febrero de 2015. Disponible en: ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0518-de-2015.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2015). ABECÉ Enfoque de Curso de Vida. Documento de trabajo [Archivo PDF]. Disponible en: ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0518-de-2015.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2016). Política de Atención Integral en Salud “Un sistema de salud al servicio de la gente” [Archivo PDF] Disponible en: ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/modelo-pais-2016.pdf',
    },
    {
      referencia:
        'Cunego, Aram; González Ibáñez, Joaquín (2016). La Evaluación de Políticas Públicas y Programas de Desarrollo a través del Enfoque de Derechos Humanos. Biblioteca derechos humanos Berg Institute.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2018). Gestión integral del riesgo en salud. Perspectiva desde el Aseguramiento en el contexto de la Política de Atención Integral en Salud. Documento de trabajo [Archivo PDF].  Disponible en: ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/DOA/girs-prespectiva-desde-aseguramiento.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2018). Resolución 3280 de 2018 “Por medio de la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación”. 2 de agosto de 2018. Disponible en: ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-3280-de-2018.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2019). Resolución 2626 de 2019 “Por la cual se modifica la Política de Atención Integral en Salud -PAIS y se adopta el Modelo de Acción Integral Territorial-MAITE”. Disponible en: ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000051551',
    },
  ],
  glosario: [
    {
      termino: 'Desenlaces esperados o resultados en salud',
      significado:
        ' son los cambios en las condiciones de vida, concepciones y prácticas que promueven, mantienen y recuperan la salud a la vez que favorecen el desarrollo integral de las personas, familias y comunidades; atribuidos a las intervenciones / atenciones en el continuo de la atención integral en salud (MSPS, 2015). De la anterior definición se deduce que los resultados no solo aluden a los que se deriven de las intervenciones sanitarias, sino que también implican las acciones que desde los otros sectores inciden sobre los determinantes sociales en salud. Su traducción literal es mapa de inspiración y aunque su uso está muy asociado al ámbito de la decoración de interiores o la moda, realmente se utiliza en entornos creativos muy diversos, desde el diseño de productos o servicios al audiovisual o el diseño gráfico.',
    },
    {
      termino: 'Determinantes sociales de salud',
      significado:
        'se entiende como aquellas situaciones, condiciones o circunstancias sociales que hacen parte del bienestar, la calidad de vida y el desarrollo humano, que ejercen influencia sobre la salud de las personas y que, actuando e interactuando en diferentes niveles de organización, determinan el estado de salud de la población. Se han elaborado modelos que muestran los mecanismos por medio de los cuales los Determinantes Sociales de la Salud influyen en los resultados sanitarios, con el fin de hacer explícitos los nexos entre los distintos determinantes y ubicar los puntos de acceso estratégicos para adoptar las medidas de política. (Resolución 1841 de 2013.Plan Decenal de Salud Pública).',
    },
    {
      termino: 'Enfoque diferencial',
      significado:
        'reconoce la existencia de grupos poblacionales que por sus condiciones y características étnicas, transcurrir vital, género, orientaciones sexuales e identidades de género, discapacidad o por ser víctimas del conflicto armado, son más vulnerables y requieren un abordaje ajustado a sus necesidades y particularidades, para disminuir situaciones de inequidad que dificultan el goce efectivo de sus derechos fundamentales, buscando lograr la equidad en el derecho a la diferencia.',
    },
    {
      termino: 'Entidades Promotoras de Salud',
      significado:
        'son las entidades  encargadas de promover la afiliación al Sistema General de Seguridad Social en Colombia.',
    },
    {
      termino: 'Entornos',
      significado:
        'se comprenden como “los escenarios de la vida cotidiana en los cuales los sujetos se desarrollan, donde constituyen su vida subjetiva, construyen vínculos y relaciones con la vida social, histórica, cultural y política de la sociedad a la que pertenecen. Son escenarios configurados por dinámicas y por condiciones sociales, físicas, ambientales, culturales, políticas y económicas, donde las personas, las familias y las comunidades conviven y en los que se produce una intensa y continua interacción y transformación entre ellos y el contexto que les rodea. (MSPS, 2015. Estrategia de entornos saludables).',
    },
    {
      termino: 'Gestión territorial',
      significado:
        ' la gestión territorial hace referencia al conjunto de procesos y acciones que realiza el ente territorial en salud con otros actores a nivel sectorial e intersectorial para lograr la implementación de una atención integral en salud.',
    },
    {
      termino: 'Integrantes del Sistema General de Seguridad Social',
      significado:
        '<ol> <li>1. Organismos de dirección, vigilancia y control: los Ministerios de Salud y protección social, la superintendencia nacional en salud.</li> <li>2. Los organismos de administración y financiación: las entidades promotoras de salud; Las direcciones seccionales, distritales y locales de salud.</li> <li>3.  Las instituciones prestadoras de servicios de salud, públicas, mixtas o privadas.</li> <li>4.  Las demás entidades de salud adscritas a los Ministerios de Salud y protección social.</li> <li>5.  Los empleadores, los trabajadores y sus organizaciones y los trabajadores independientes que cotizan al sistema contributivo y los pensionados.</li><li> 6.  Los beneficiarios del sistema general de seguridad social en salud.</li> </ol>',
    },
    {
      termino: 'Interculturalidad',
      significado:
        'es el respeto por las diferencias culturales existentes en el país y en el ámbito global, así como el esfuerzo deliberado por construir mecanismos que integren tales diferencias en la salud, en las condiciones de vida y en los servicios de atención integral de las enfermedades, a partir del reconocimiento de los saberes, prácticas y medios tradicionales, alternativos y complementarios para la recuperación de la salud en el ámbito global.',
    },
    {
      termino: 'Intersectorialidad',
      significado:
        'es la acción conjunta y coordinada de los diferentes sectores y organizaciones que de manera directa o indirecta, en forma integrada y continua, afectan los determinantes y el estado de salud de la población.',
    },
    {
      termino: 'Redes Integrales de Prestación de Servicios de Salud',
      significado:
        'definidas como el conjunto de organizaciones o redes con la suficiencia técnica, administrativa y financiera para la prestación de servicios de salud individuales  y colectivos, más eficientes, equitativos, integrales, en un  espacio poblacional determinado, esta redes serán garantizadas por las Entidades Promotoras de Salud a su población  afiliada de manera integral, continua, coordinada y eficiente, con portabilidad, calidad y oportunidad.',
    },
    {
      termino: 'Salud pública',
      significado:
        'conjunto de políticas que buscan garantizar de una manera integrada, la salud de la población por medio de acciones de salubridad dirigidas tanto de manera individual como colectiva, ya que sus resultados se constituyen en indicadores de las condiciones de vida, bienestar y desarrollo del país. Dichas acciones se realizarán bajo la rectoría del Estado y deberán promover la participación responsable de todos los sectores de la comunidad. Se entiende por determinantes sociales de salud aquellos factores que determinan la aparición de la enfermedad, tales como los sociales, económicos, culturales, nutricionales, ambientales, ocupacionales, habitacionales, de educación y de acceso a los servicios públicos, los cuales serán financiados con recursos diferentes a los destinados al cubrimiento de los servicios y tecnologías de salud. (Ley 1751 de 2015).',
    },
    {
      termino: 'Sistema de Salud',
      significado:
        ' es el conjunto articulado y armónico de principios y normas; políticas públicas; instituciones; competencias y procedimientos; facultades, obligaciones, derechos y deberes; financiamiento; controles; información y evaluación, que el Estado disponga para la garantía y materialización del derecho fundamental de la salud.',
    },
  ],
  complementario: [
    {
      texto:
        'Ministerio de Salud Colombia.[MinSaludCol]. (2016, 10 de junio). Características.[video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Kw9thabRbzc',
    },
    {
      texto:
        'Ministerio de Salud Colombia.. [MinSaludCol].  (2016, 10 de junio) Antecedentes. [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hUyqCY6G1iY&feature=youtu.be',
    },
    {
      texto:
        'Ministerio de Salud Colombia.. [MinSaludCol].  (2016, 10 de junio) Alcances. [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Gd9h7oBM5KA',
    },
    {
      texto:
        'May, L. [Luciano May Segovia]. (2016, 13 de diciembre). Módulo 2 audio. Política de Atención Integral en Salud PAIS.  [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Z0vlGK7459M',
    },
    {
      texto:
        'May, L. [Luciano May Segovia]. (2017, 5 de abril). Desarrollo de rutas integrales de atención en salud.  [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nN0KjC-X4EQ&t=1104s',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mónica Genith Castro',
        cargo: 'Experta temática',
        centro: 'Ministerio de Salud',
        regional: 'Dirección de promoción y prevención - Grupo curso de vida',
      },
      {
        nombre: 'Lía Marcela Gúiza',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida',
      },
      {
        nombre: 'Natalia Munarth',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida',
      },
      {
        nombre: 'Magaly Jaimes',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida',
      },
      {
        nombre: 'Mily Ramírez',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida',
      },
      {
        nombre: 'Aura Lucia Toloza',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida',
      },
      {
        nombre: 'Leidy Carolina Arias Aguirre',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida',
      },
      {
        nombre: 'Sandra Patricica Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Carlos Julian Ramirez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Villamizar Lizcano',
        cargo: 'Producción Audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción Audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Producción Audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andres Arenales Cáceres',
        cargo: 'Producción Audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción Audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Revisora de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación de recursos'],
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
    ],
  },
}
