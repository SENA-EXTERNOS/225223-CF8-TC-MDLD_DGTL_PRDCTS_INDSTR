export default {
  global: {
    componenteFormativo:
      'Consideraciones y parámetros en el diseño para impresión 3D',
    descripcionCurso:
      'La impresión 3D es un conjunto de procesos que producen objetos mediante la adición de material en capas correspondientes a sucesivas secciones transversales de un modelo 3D. Los plásticos y las aleaciones de metal son los más utilizados para la impresión 3D; sus usos son múltiples, desde hormigón hasta tejido vivo, impulsando el desarrollo tecnológico de diferentes industrias donde la fabricación de algunos componentes complejos limitaba los índices de productividad y competitividad.  ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal-.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
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
        titulo: 'Tipos de Impresoras y aplicaciones',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Fused filament fabrication</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Usos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ventajas y desventajas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fotopolimerización y <em>Powder Bed Fusion </em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Usos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Ventajas y desventajas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Material <em>Jetting y Binder Jetting</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Usos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Ventajas y desventajas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Laminación y <em>Directed Energy Deposition</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Usos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Ventajas y desventajas',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Estructuras orgánicas y diseño para manufactura aditiva',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo:
          'Cálculo de costo y valor de manufactura aditiva en los proyectos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema: 'Aplicaciones Impresión 3D',
      referencia:
        'Adidas. (7 abril de 2017). <em>Futurecraft 4D: réate – adidas </em>[Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DFtVF2DdSuM',
    },
    {
      tema: 'Aplicaciones Impresión 3D',
      referencia:
        'CBS News. (13 de marzo de 2014).<em> 3D printer used to rebuild man’s face</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nZTEmyruKv0',
    },
    {
      tema: 'Aplicaciones Impresión 3D',
      referencia:
        'Médicos Sin Fronteras. (9 de octubre de 2018).<em> Así utilizamos la tecnología de impresión 3D para crear prótesis</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=o2qVbNxO9Mk',
    },
    {
      tema: 'Aplicaciones Impresión 3D',
      referencia:
        'New China TV. (16 de abril de 2014). <em>3D printers print ten houses in 24 hours</em> [Video] . YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SObzNdyRTBs',
    },
    {
      tema: 'Aplicaciones Impresión 3D',
      referencia:
        'MX3D. (19 de octubre de 2018).<em> MX3D Bridge Update October</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1r_Azsa4nqU ',
    },
  ],
  glosario: [
    {
      termino: 'ABS',
      significado:
        'Tipo de filamento plástico utilizado en las impresoras FDM, muy utilizado como material resistente y duradero. Difícil de imprimir. Su acrónimo significa <em>Acrilonitrilo Butadieno Estireno.</em> Emite un olor desagradable y ligeramente tóxico cuando se derrite.',
    },
    {
      termino: 'Balde (Barril)',
      significado:
        'En las impresoras de resina -DLP o SLA-, es el lugar donde se almacena la resina para la impresión. Dentro de este cubo, las impresiones se generan capa por capa.',
    },
    {
      termino: 'Balsa',
      significado:
        'En las impresoras FDM, esta es una de las opciones de impresión. Es una base con una gran superficie creada entre la cama de impresión y la pieza a imprimir. Esto se hace para evitar la separación prematura de piezas de la plataforma de impresión.',
    },
    {
      termino: 'Boquilla',
      significado:
        'Es la salida del <em>hotend,</em> fabricada en bronce o acero, por donde sale plástico fundido en la impresora FDM. Existen diferentes diámetros, siendo el más común el de 0,4 mm.',
    },
    {
      termino: 'Cama de impresión',
      significado:
        'En las impresoras FDM, aquí es donde la boquilla del extremo caliente deposita el plástico fundido. Puede ser de vidrio, metal, cerámica o materiales plásticos.',
    },
    {
      termino: 'Cartucho calentador',
      significado:
        'Resistencia que calienta el extremo caliente de la impresora FDM. La temperatura máxima que alcanza el <em>hotend </em>depende de ello.',
    },
    {
      termino: 'Código G',
      significado:
        'Código de programa generado mediante un software llamado <em>Slicer</em> que se transfiere a una impresora 3D para generar el código de la pieza impresa. Es un lenguaje para transferir parámetros necesarios para el dibujo y la impresión 3D, como la temperatura, la velocidad, el movimiento del extremo caliente, las revoluciones del ventilador, la temperatura de la cama de impresión, la intensidad UV en las impresoras de resina, etc.',
    },
    {
      termino: 'Curado',
      significado:
        'En las obras producidas en impresoras de resina, es el proceso de secado que se realiza, después de la impresión, con luz ultravioleta (tradicional o LED), donde la resina se “fija” por completo y la pieza es más duradera.',
    },
    {
      termino: 'DLP',
      significado:
        'Impresora de resina que cura la resina fotosensible con la ayuda de una fuente de luz, que puede ser un proyector de bombilla halógena. Su acrónimo significa <em>Digital Light Processing,</em> el procesamiento digital de la luz.',
    },
    {
      termino: 'DMD',
      significado:
        'Tipo de impresión en la que el metal se funde y se deposita en capas. Su acrónimo significa <em>Direct Metal Deposition.</em> Son impresoras de tipo industrial.',
    },
    {
      termino: 'DMLS',
      significado:
        'Tipo de impresión que utiliza polvo metálico, que se funde capa a capa mediante láser. Cuanto más pequeñas sean las partículas de polvo metálico, más resolución (detalle) podrá imprimir. Acrónimo de <em>Direct Metal Laser Sintering,</em> la sinterización directa de metales por medio de un láser. Son impresoras industriales de alto costo.',
    },
    {
      termino: 'Estructuras de soporte',
      significado:
        'En las impresoras FDM o de resina, son las estructuras que se deben crear al imprimir una pieza. Actúan como soporte de la zona de “voladizo” para que el plástico o la resina fundida no se desmorone a medida que se deposita. Se pueden crear de forma manual o automática mediante <em>Slicers.</em> Una vez que las piezas están impresas y enfriadas, estas estructuras deben cortarse y retirarse con cuidado y precisión. Pueden estar hechas del mismo filamento plástico (o de la misma resina) que la impresión, o de otro tipo de filamento -en FDM si la impresora tiene una segunda extrusora- utilizar un filamento hidrosoluble, por ejemplo, para que la limpieza de la última pieza sea más fácil.',
    },
    {
      termino: 'Extrusora <em>(Extruder)</em>',
      significado:
        'Componente de la impresora FDM que alimenta el <em>hotend</em> con filamento plástico. Tiene unos engranajes que arrastran el filamento dentro del hotend, haciendo que se derrita.',
    },
    {
      termino: 'FDM',
      significado:
        '<em>Fused Deposition Modeling,</em> impreora 3D de modelado por deposición de material fundido. Son las impresoras más fáciles de usar para fundir filamentos de plástico. ',
    },
    {
      termino: 'FFF',
      significado:
        'Otro nombre para una impresora FDM de filamento de plástico fundido, que significa Fabricación de Filamentos Fundidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'All3DP. (23 de septiembre de 2022).<em> Archivos STL y modelos 3D para imprimir: mejores páginas web de 2022.</em> All3DP.  ',
      link:
        'https://all3dp.com/es/1/descargar-archivos-stl-gratis-modelos-3d-para-imprimir-en-3d/ ',
    },
    {
      referencia:
        'All3DP.  (16 de febrero de 2022). <em>Tipos de impresoras 3D: las 7 technologías de impresión 3D</em>. All3DP. ',
      link:
        'https://all3dp.com/es/1/tipos-de-impresoras-3d-tecnologia-de-impresion-3d/',
    },
    {
      referencia: 'Autodesk. (s.f.). ¿Qué es la impresión 3D? Autodesk. ',
      link: 'https://latinoamerica.autodesk.com/solutions/3d-printing',
    },
    {
      referencia:
        'Ávila, C. (6 de noviembre de 2022). Fabricación aditiva: definición, procesos y beneficios. UPINFORMA. ',
      link:
        'https://upinforma.com/nuevo/info.php?cat=opinion&id=1210#:~:text=El%20proceso%20de%20Fabricaci%C3%B3n%20Aditiva,fibra%20de%20carbono%2C%20etc.)',
    },
    {
      referencia:
        'De León, C. (s.f.). Cómo la impresión 3D ayuda a la innovación. Maker. ',
      link: 'https://somosmaker.com/impresion-3d-ayuda-innovacion/',
    },
    {
      referencia:
        'Electrónica Edimar. (s.f.). Fabricación aditiva: definición, procesos y beneficios. Electrónica Edimar. ',
      link: 'https://edimar.com/fabricacion-aditiva-que-es/ ',
    },
    {
      referencia:
        'Ingenius. (20 de julio de 2017). Fused Deposition Modeling (FDM) O Fused Filament Fabrication (FFF) [web blog post]. Ingenius. ',
      link: 'https://eddm.es/blog-ingenius/fused-deposition-modeling-fdm/',
    },
    {
      referencia:
        'Laboratorios 3D. (20 de agosto de 2021). Binder Jetting o inyección aglutinante: qué es, aplicaciones y ventajas[Web log post]. Blogspot. ',
      link:
        'https://laboratorios3d.es/blog/binder-jetting-aplicaciones-ventajas/ ',
    },
    {
      referencia:
        'La Prestampa. (26 de junio de 2019). Impresión 3D, una realidad en el sector industrial. La Prestampa. ',
      link:
        'https://laprestampa.com/el-proceso-grafico/impresion/impresion-3d-sector-industrial/',
    },
    {
      referencia:
        'Mizar Grupo Alcor. (s.f.). Tecnologías de Fabricación aditiva: Powder Bed Fusion (PBF). Mizar Additive. ',
      link: 'https://mizaradditive.com/fabricacion-aditiva-powder-bed-fusion/',
    },
    {
      referencia:
        'Todo-3D. (25 de enero de 2017). FDM-FFF o Modelado Por Deposición Fundida. ',
      link:
        'https://todo-3d.com/fdm-fff-modelado-deposicion-fundida/?v=911e8753d716',
    },
    {
      referencia:
        '3Dnatives. (10 de septiembre de 2019). Guía completa: Deposición de energía directa, te lo contamos todo! 3Dnatives. ',
      link:
        'https://www.3dnatives.com/es/guia-deposicion-de-energia-directa-100920192/',
    },
    {
      referencia:
        '3Dnatives. (4 de septiembre de 2019). Guía completa: fusión láser de lecho de polvo, te explicamos todo! 3Dnatives. ',
      link:
        'https://www.3dnatives.com/es/sinterizado-directo-de-metal-por-laser-les-explicamos-todo/',
    },
    {
      referencia:
        '3Dnatives. (29 de julio de 2019). Guía completa: Binder Jetting o Inyección Aglutinante, te lo contamos todo! 3Dnatives. ',
      link:
        'https://www.3dnatives.com/es/inyeccion-aglutinante-te-lo-contamos-23032016/#!',
    },
    {
      referencia:
        '3Dnatives. (29 de abril de 2021). ¿Cuáles son las impresoras 3D de inyección de material disponibles en la industria? 3Dnatives. ',
      link:
        'https://www.3dnatives.com/es/impresoras-3d-inyeccion-de-material-290420212/',
    },
    {
      referencia:
        'TWI. (s.f.). ¿Qué es la fusión de lecho de polvo? Definición de proceso y ventajas. TWI. ',
      link:
        'https://www.twi-global.com/technical-knowledge/faqs/what-is-powder-bed-fusion',
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
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
