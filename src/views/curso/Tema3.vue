<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Ruta para la Promoción y el Mantenimiento de la Salud
    p.my-5 La Resolución 3280 de 2018, adopta los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y en relación con ello, es importante resaltar de este documento:
    .row.my-3
      .col-lg-7
        .tarjetas--rosa.px-5.py-3
          p Las disposiciones son de obligatorio cumplimiento por parte de las entidades territoriales de salud, EPS – Entidades Promotoras de Salud, Entidades Obligadas a Compensar, prestadores de servicios de salud y demás entidades responsables de las intervenciones relacionadas con la promoción y el mantenimiento de la salud.
      .col-lg-5
        figure.p-3
          img.img-col--2(src='@/assets/curso/img22.svg', alt='Texto que describa la imagen').img-fluid
    .row.my-3
      .col-lg-5
      .col-lg-7
        .tarjetas--azul.px-5.py-3
          p La RPMS y RIAMP requieren ser adoptadas por los territorios y realizar la adaptación en función del ámbito de implementación (urbano, rural o rural disperso) así como respondiendo a las características de los grupos poblacionales abordados (en esa misma lógica se debe hacer la adaptación de los servicios de salud en los cuales no pueden constituir barreras de acceso a las atenciones individuales establecidas).
    .row.my-3
      .col-lg-7
        .tarjetas--rosa.px-5.py-3
          p Algunas intervenciones individuales serán incorporadas de manera progresiva. Esta definición fue modificada inicialmente por la Resolución 276 de 2019 y cada año se establecerá los porcentajes de avance para estas intervenciones. Para 2020 se establecieron en la Resolución 3513 de 2019. 
    .row.my-3
      .col-lg-5
      .col-lg-7
        .tarjetas--azul.px-5.py-3
          p Los responsables (aseguradores con su red de prestación de servicios) deben garantizar disponibilidad, suficiencia e idoneidad del talento humano definido para la operación de las RPMS y RIAMP.
    .row.my-3
      .col-lg-7
        .tarjetas--rosa.px-5.py-3
          p El monitoreo y evaluación de las RPMS y RIAMP está relacionado con el seguimiento a la garantía de las atenciones, así como a otros resultados en salud a través de las fuentes establecidas por las  Resoluciones 3374 de 2000, 4505 de 2012, 2175 de 2015 y las demás fuentes de información que se establezcan o las que modifiquen las actuales fuentes.
      .col-lg-5
        figure.p-3
          img.img-col--2(src='@/assets/curso/img23.svg', alt='Texto que describa la imagen')
    .h4.titulo-rosa.my-5 Objetivos de la ruta de promoción y mantenimiento de la salud
    ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            p Identificar y desarrollar capacidades, habilidades y prácticas en las personas, las familias y las comunidades para el cuidado y mantenimiento de la salud.

          li 
            .lista-ol--cuadro__vineta
              span b
            p Atender oportuna e integralmente a las personas que presentan un evento en salud. 

          li 
            .lista-ol--cuadro__vineta
              span c
            p Identificar oportunamente vulnerabilidades, factores de riesgo, riesgos acumulados y alteraciones que emergen en cada momento vital, que ameriten acciones en salud.

          li 
            .lista-ol--cuadro__vineta
              span d
            p Afectar los entornos para que sean protectores y potenciadores de la salud y el desarrollo.   
          li 
            .lista-ol--cuadro__vineta
              span e
            p Realizar el seguimiento de la salud y el desarrollo integral de las personas en cada uno de los momentos del curso de vida.
    .h4.titulo-rosa.my-5 La RPMS plantea cambios importantes en relación a lo planteado anteriormente en la Resolución 412 de 2000 (derogada por Resolución 3280 de 2018) como es:
    ul.lista-ul--color
          li.lista-separada 
            i.fas.fa-check.mx-2
            p Ordenar esquema de intervenciones individuales por curso de vida incluyendo la adultez.
          li.lista-separada 
            i.fas.fa-check.mx-2
            p Incorporar el abordaje familiar en la atención y a la familia como sujeto de atención.
          li.lista-separada 
            i.fas.fa-check.mx-2
            p Incluir nuevas finalidades: valoración integral en Salud y Educación en salud que se complementan con las finalidades anteriores (detección temprana y protección específica).
          li.lista-separada 
            i.fas.fa-check.mx-2
            p Incluir nuevas finalidades: valoración integral en Salud y Educación en salud que se complementan con las finalidades anteriores (detección temprana y protección específica).
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
