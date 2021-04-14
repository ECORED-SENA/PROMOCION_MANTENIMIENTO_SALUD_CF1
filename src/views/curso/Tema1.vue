<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #t_1_1

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Atención Integral en Salud
    
    p.mb-5 Es el conjunto de acciones coordinadas, complementarias y efectivas para garantizar el derecho a la salud, expresadas en; políticas, planes, programas, proyectos, estrategias y servicios, que se materializan en atenciones dirigidas a las personas, familias y comunidades para la promoción de la salud, prevención de la enfermedad, diagnóstico, tratamiento, rehabilitación y cuidados paliativos; a su vez, plantea que las intervenciones se realicen de forma integral, complementaria y anticipada, teniendo en cuenta las ventanas de oportunidad en el desarrollo integral de las personas en sus diferentes momentos del curso de la vida.
    #t_1_1
    .titulo-segundo
      .h4  1.1. Ley Estatutaria en Salud 
    p.mb-5 La Ley Estatutaria de la Salud (Ley 1751 de 2015) plantea como su objetivo 
      b “garantizar el derecho a la salud, regular y establecer sus mecanismos de protección”. 
      b-none Implica nuevos acuerdos entre el Estado y la sociedad, considerando como centro del sistema de salud a los sujetos (individuales y colectivos) bajo un planteamiento esencial: la salud es un derecho social fundamental; lo cual implica que atiende a la dignidad humana, requiere de la acción positiva del Estado, tiene carácter progresivo nunca regresivo, entre otros.
    PasosA.mb-5(tipo="n" :datos="datosPasosA")
    #t_1_2
    .titulo-segundo
      .h4  1.2. Política de Atención Integral en Salud
    p.mb-5 En el marco de lo establecido por la Ley Estatutaria y por la Ley 1753 de 2015 en su artículo 65, se establece la Política de Atención Integral en Salud, que permita abordar a toda la población residente en el territorio colombiano, estableciendo acciones que orientan a los integrantes del sistema según su competencia, en procura de mejorar la salud de la población en términos de equidad e integralidad. Así, al otorgar preeminencia al Sistema de Salud, coloca como núcleo de la intervención de todo el Estado la atención integral, más allá de la garantía de unas prestaciones individuales en salud y coloca un acento especial en la rectoría pública en salud. 
    .row
      .col-lg-6
        .h4 La Política de Atención Integral en 
          br 
          |Salud es entonces
        p.mb-5 el conjunto de enfoques, estrategias, procesos, instrumentos, acciones y recursos que 
          b centra el sistema de salud en el ciudadano, 
          b-none permite atender a la naturaleza y contenido del 
          b derecho fundamental a la salud y orienta los objetivos del sistema de salud para generar mejores condiciones de salud de la población,  ordenando la intervención de los integrantes del sistema de salud y de otros actores 
          b-none responsables de garantizar la promoción de la salud, la prevención de la enfermedad, el diagnóstico, el tratamiento, la  rehabilitación, la paliación y la muerte digna, en condiciones de 
          b accesibilidad, aceptabilidad, oportunidad, continuidad, integralidad y capacidad resolutiva. 
          b-none (Resolución 2626 de 2019, Ministerio de Salud y Protección social)

      .col-lg-6
        figure
              img.img-col(src='@/assets/curso/img1.svg', alt='Texto que describa la imagen')
    .h5 Considera como marco de referencia, los determinantes sociales de 
      br
      |la salud y define cuatro  estrategias centrales 
    figure.my-5
      img.img-col(src='@/assets/curso/img2.svg', alt='Texto que describa la imagen')
    .h4.titulo-rosa Atención primaria en salud: 
    p.mb-5  Esta estrategia reconocida desde de la Declaración de  Alma Atta de acuerdo a la Conferencia Internacional sobre Atención Primaria de Salud del año 1978, donde  se plantea la gestión intersectorial articulada a una atención en salud que se acerque a los sujetos y a sus entornos; partiendo de una integración de las atenciones individuales y colectivos, así como de los diferentes niveles de complejidad de los servicios de salud y en reconocimiento de la voz de las comunidades. Parte de reconocer métodos, tecnologías y prácticas validadas en la evidencia disponible y socialmente aceptadas, que mejoren la gestión en los servicios de salud aumentando su capacidad resolutiva, favoreciendo la territorialización y adscripción poblacional,  así como el desarrollo de escenarios de atención multidisciplinarios e integrales en salud.
    .h4.titulo-rosa Gestión integral del riesgo en salud:
    p Gestión integral del riesgo en salud: Es una estrategia transversal que convoca a todos los actores y otros sectores a concurrir en la accion anticipada, que permite modular o evitar la aparición de enfermedades o alteraciones; la identificación temprana cuando se presentan y su abordaje integral para disminuir los impactos en la salud y el desarrollo a través de acciones que van desde la prevención hasta la paliación. Implica el seguimiento y monitoreo de los riesgos para la salud, así como de los resultados en los sujetos hacia donde está orientada la acción. 
      br
      br
      |Además, propicia mejorar la experiencia de los sujetos en su interacción con los servicios de salud y fortalecer la sostenibilidad del sistema. Tiene un componente colectivo que se desarrolla desde las intervenciones colectivas y está a cargo de la entidad territorial y un componente individual que está en cabeza de la Entidades Promotoras de  Salud- EPS o aseguradores, que se relaciona muy estrechamente con la gestión clínica que desarrolla el prestador así como con los procesos de autocuidado por parte del individuo, extendido a su familia y comunidad.
      br
      br
      |Componente individual que está en cabeza de la Entidades Promotoras de  Salud- EPS o aseguradores, que se relaciona muy estrechamente con la gestión clínica que desarrolla el prestador así como con los procesos de autocuidado por parte del individuo, extendido a su familia y comunidad.
      br
      br
      p.fst-italic El evento de salud pública más importante en su momento, planteando la necesidad de desplegar acciones por parte de todos los países, bajo el lema «Salud para todos en el año 2000». Disponible en:
      a.anexo.my-4(:href="obtenerLink('/downloads/Alma-Ata-1978Declaracion.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Conferencia Internacional sobre Atención Primaria de Salud,
              br 
              |Alma-Ata, URSS, 6-12 de septiembre de 1978  
      .h4.text-center.mt-5 Proceso para la Gestión Integral del Riesgo en Salud
      figure.my-5
        img(src='@/assets/curso/img3.png', alt='Texto que describa la imagen')
      .h4.titulo-rosa Enfoque diferencial de territorios y poblaciones: 
      p.mb-5 La política identifica la integralidad desde el reconocimiento de los ámbitos territoriales donde las personas, familias y comunidades habitan y desarrollan su trayectoria vital; desde allí reconoce así mismo, las particularidades y condiciones que le asisten a las personas, según su momento de curso de vida, haciendo un llamado al reconocimiento del género como determinante y en articulación con los demás diferenciales que le son propios a cada uno (pasando por lo étnico, la diversidad sexual, la condición de víctima del conflicto armado o con condición de discapacidad entre otras). 
      figure.my-5
        img.img-col(src='@/assets/curso/img4.svg', alt='Texto que describa la imagen')
      p.mb-5 Las personas están determinadas por varias de estas condiciones, lo cual es abordado desde el enfoque interseccional, que permite entender que los procesos de salud  – enfermedad; las necesidades asociadas y las respuestas que cada uno puede dar frente a las situaciones son diferentes si vive en zona rural o urbana, es mujer u hombre, indígena o sin pertenencia étnica, joven o adulto mayor, si presentó o no una discapacidad, además del contexto socioeconómico y relacional (redes de apoyo) que se tengan con sus  familias. 
      .row.mb-5
        .col-lg-6
          figure
            img.img-col(src='@/assets/curso/img5.svg', alt='Texto que describa la imagen')
        .col-lg-6
          p.mt-5 La Política reseña esas situaciones que pueden generar mayor vulnerabilidad para el ejercicio del derecho a la salud y que requieren precisar mecanismos y esfuerzos que logren disminuir las brechas de equidad evidenciadas; reconoce por demás, que los sujetos tienen una capacidad de agencia y la respuesta en salud debe partir de ese reconocimiento del sujeto, como ser integral; y finalmente a partir de esta comprensión denota como esencial, avanzar en la adecuación de los servicios y de los procesos de gestión para responder de manera pertinente a las necesidades y  potencialidades de las poblaciones en contexto de sus territorios. 
      .h4.titulo-rosa Atención primaria en salud:
      p.mb-5 El enfoque de cuidado se entiende como las capacidades, decisiones y acciones que el individuo, la comunidad y el Estado adoptan para proteger la salud propia, de las familias, de la comunidad y del territorio. Se sustenta en el autocuidado e involucra una condición dinámica que integra en diferentes momentos de su vida su capacidad para acumular autonomía para desarrollar lo que la persona quiere emprender; en especial el capital de salud, relacionado con las decisiones que toma en relación con su apoyo y socialización.
      .h4.text-center.mt-5 Curso de vida y cuidado de la salud
      figure.mt-5
            img(src='@/assets/curso/img6.png', alt='Texto que describa la imagen')
      .row.my-5
        .col-lg-5
          p.pe-5.my-5 También involucra el deber de la sociedad y de los sistemas para realizar acciones que permitan ganancias en salud. Se relaciona con el curso de vida y parte de reconocer diferentes esferas del cuidado: el cuidar de sí, de los otros y del entorno, lo que implica generar oportunidades de desarrollo y condiciones para la protección y el bienestar, promoviendo la convivencia, la atención hacia lo público, la solidaridad, la cultura de la seguridad social y el fortalecimiento de redes de apoyo familiar y social. 
        .col-lg-7
          figure
            img.img-col(src='@/assets/curso/img7.svg', alt='Texto que describa la imagen')
    .h4.titulo-rosa Enfoques vinculados a la Política de Atención Integral en Salud
    TabsA.mb-5
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Enfoque de Derechos")
        h4 Enfoque de Derechos
        p En el marco establecido en la Ley Estatutaria y donde se reconocen como  sujetos de derechos y los garantes de los mismos bajo un marco de exigibilidad. Se fundamenta en la garantía de la dignidad humana, la libertad, la igualdad y la no discriminación. Está orientado a promover, proteger y hacer efectivos los derechos humanos (DDHH); en este sentido, se asume que todos los seres humanos son titulares de derechos, es decir pueden reclamarlos. Los agentes que tienen el deber de garantizar el disfrute de estos derechos son principalmente los Estados (titulares de obligaciones). Todos los titulares de obligaciones están legalmente comprometidos a respetar, proteger y a hacer cumplir los DDHH (Cunego, 2016).
          br
          br
          |Para el sector salud implica reconocer los DDHH y su interdependencia, de modo que sus intervenciones se conviertan en una oportunidad para promover el desarrollo humano en el país y por parte de la sociedad civil, implica el reconocimiento de los mismos para su exigibilidad. 
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Enfoque Diferencial")
        h4 Enfoque Diferencial
        p Está inmerso en el enfoque de derechos. Reconoce que el curso de vida es distinto para cada persona, según sus condiciones particulares y las situaciones y contextos en los que interactúa. Implica visibilizar y valorar esta diversidad y promover que se elimine cualquier discurso o práctica discriminatoria basada en las diferencias. Se fundamenta en los principios de igualdad, diversidad, interculturalidad, integralidad, participación e inclusión. 
      
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Enfoque de Desarrollo Humano")
        h4 Enfoque de Desarrollo Humano
        p Se orienta desde el desarrollo de los derechos como libertades humanas, buscando superar la visión determinista de las necesidades básicas y del desarrollo orientado por prioridades del sistema económico (empleo o distribución de la pobreza). Se asume desde una concepción holística del ser humano que trasciende la fragmentación por dimensiones o por etapas, se distancia de la lógica del tener y del consumo, y se concentra en el ser- y la existencia- en términos de sus condiciones y calidad de vida. Se plantea desde el reconocimiento, promoción y fortalecimiento de las capacidades humanas, entendidas como opciones de elegir libremente la vida que cada persona valora y quiere vivir, para avanzar en sus metas de desarrollo y en el ejercicio de sus derechos. 
      
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Enfoque de salud familiar y comunitaria")
        h4 Enfoque de salud familiar y comunitaria
        p Constituye un enfoque para el análisis, toma de decisiones y abordaje en salud que reconoce la importancia de las interacciones en la vida de los sujetos, pues las personas son seres sociales por excelencia y por tanto, su desarrollo no es posible sin los otros, siendo grupos esenciales: la familia y la comunidad. 
          br
          br
          |A su vez, reconoce a la familia y a la comunidad como sujetos colectivos de derechos y por tanto sujetos de atención en salud. Asume que la salud familiar y comunitaria no es resultado de la suma de la salud individual, sino de sus relaciones, manejo de emociones, conflictos y proyectos de vida compartidos y construidos. En coherencia con la estrategia de Atención Primaria en Salud (APS), se preocupa de la salud de las personas antes que aparezca la enfermedad; brinda herramientas para el cuidado, la gestión y la promoción. 

      
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Enfoque de género")
        h4 Enfoque de género
        p El género es un “estructurador social” que determina la construcción de roles, valoraciones, estereotipos, imaginarios, asociados a lo masculino y lo femenino y las relaciones de poder que de estos se desprenden y se exacerban con otras formas de desigualdad. Estas construcciones sociales difieren entre sociedades, se transforman en el tiempo y parten de expectativas colectivas de género. El género es uno de los determinantes estructurales de la salud (junto con la clase social y la etnia) que incide en los procesos de salud y enfermedad de las personas, produciendo inequidades en salud. El enfoque de género permite comprender que hay disparidades sistemáticas entre la salud de mujeres y de hombres, que no son consecuencia de las características biológicas de cada sexo, sino del lugar diferente que ocupan las mujeres y los hombres en la sociedad.
      
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Enfoque de curso de vida")
        h4 Enfoque de curso de vida
        p Aborda el continuo de la vida y reconoce que el desarrollo humano y los resultados en salud dependen de la interacción de diferentes factores a lo largo del trayecto vital (históricos, sociales, económicos, etc.), de experiencias acumulativas y situaciones presentes de cada individuo influenciadas por el contexto familiar, social, económico, ambiental y cultural; entendiendo que invertir en atenciones oportunas en cada generación repercutirá en las siguientes y que el mayor beneficio de un momento vital puede derivarse de intervenciones hechas en un período anterior. Desde el punto de vista epidemiológico, el curso de la vida es el estudio a largo plazo de los efectos en la salud o la enfermedad de la exposición a riesgos físicos o sociales durante la gestación, la infancia, la adolescencia, la juventud y la vida adulta (MSPS, 2015).
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Gd9h7oBM5KA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



    



</template>

<script>
import { mapActions } from 'vuex'
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: '100.000 - 10.000 A.C.',
        titulo: 'Período Paleolítico',
        texto: 'Pieles, pelo de animales, hojas, huesos y conchas.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Mesolítico',
        texto:
          'Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Neolítico',
        texto: 'Vestimenta de fibras animales y vegetales, pulseras de marfil.',
      },
    ],
    datosLineaTiempoB: [
      {
        titulo: '01 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '02 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '03 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '04 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
    ],
    datosPasosA: [
      {
        titulo: 'La salud como derecho:',
        texto:
          'la salud no es un servicio, es un derecho social fundamental en el que existe compromiso de actuación por parte del Estado.',
      },
      {
        titulo: 'Sujetos individuales y colectivos:',
        texto:
          'la dimensión de la salud reconoce los sujetos individuales (personas), así como los colectivos (familias y comunidades) y en este sentido, se articula e integra el abordaje individual (más allá de la prestación de los servicios) y colectivo (reconociendo que la salud pública aborda los colectivos, pero también a los sujetos).',
      },
      {
        titulo: 'Prevalencia del interés general:',
        texto:
          'vincula tanto la atención individual como la colectiva y releva las actuaciones individuales en lógica de cuidado de sí mismo, de los otros y del entorno, ubicando en ese marco la prevalencia del interés general. ',
      },
      {
        titulo: 'Integralidad en la atención: ',
        texto:
          'integra las diferentes finalidades de la atención en salud como un todo y en un continuo desde la promoción de la salud, prevención y atención de la enfermedad, rehabilitación de sus secuelas y paliación, bajo un enfoque integral tanto para la gestión como para la atención.',
      },
      {
        titulo: 'Acción sectorial e intersectorial:',
        texto:
          'releva la acción del Estado como líder de la formulación, implementación y seguimiento a las políticas públicas desde esta perspectiva y en este marco articula la acción sectorial e intersectorial apostando a la afectación de los determinantes sociales de la salud.',
      },
      {
        titulo: 'Apuesta por resultados en Salud:',
        texto:
          'ubica también el marco de evaluación técnica y social del sistema, que privilegie las intervenciones que generen ganancias en salud en la población.',
      },
      {
        titulo: 'Principios:',
        texto:
          ' reconoce unos principios del Derecho a la Salud, determinantes para orientar el accionar del sector: la Universalidad (todos los residentes del territorio colombiano); el principio Pro-Homine (adoptando la interpretación de la normatividad vigente que sea más favorable); la equidad y progresividad del derecho (atendiendo a disminuir brechas y ampliando de manera gradual y continua el acceso a servicios y tecnologías); la continuidad y oportunidad de la atención en salud así como la necesidad de avanzar en un abordaje intercultural que reconoce las diferencias; la libre elección en el marco de la oferta disponible de entidades según su competencia; la sostenibilidad a través de mecanismos que favorezcan la eficiencia y solidaridad para un mejor uso de los recursos disponibles. ',
      },
      {
        titulo: 'Prevalencia de derechos :',
        texto:
          'define y finalmente señala la prevalencia de derechos especialmente centrada en niños, niñas y adolescentes; así como la protección especial de comunidades con pertenencia étnica.',
      },
      {
        titulo: 'Sistema de Salud:',
        texto:
          'hace una apuesta por articular los planteamientos y desarrollos del Sistema General de Seguridad Social (establecido en el marco de la Ley 100 de 1993) y lo establecido en relación a la Salud Pública (desde la Ley 9 de 1979), bajo la acepción de sistema de salud, que dedicó los esfuerzos de todos los actores a la materialización del derecho fundamental de la salud.',
      },
      {
        titulo: 'Política de Atención Integral en Salud:',
        texto:
          'marco de política pública que permita materializar lo establecido en la Ley Estatutaria en Salud. ',
      },
    ],
    datosSlyder: [
      {
        titulo: 'Sistema de Salud:',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.increment()
    setTimeout(() => {
      this.decrease()
    }, 3000)
  },
  methods: {
    ...mapActions(['increment', 'decrease']),
  },
}
</script>

<style lang="sass" scoped></style>
