<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    figure.my-5
      img.img-col(src='@/assets/curso/intro.svg', alt='Texto que describa la imagen' style='width:60%')
    p.mb-5 La Atención Integral en Salud es un concepto que organiza la acción del sector salud y otros sectores en el marco de la garantía del derecho a la salud. Las Rutas integrales de atención en salud son una herramienta que permite articular los esfuerzos de los actores propios y de otros sectores, apuntando al logro de los resultados en salud ubicados en los sujetos, por medio de los procesos de gestión que se vinculan a escenarios de atención que potencian la acción organizada y promueven la capacidad de agencia en las personas, familias y comunidades.
      br
      br
      |Este componente formativo brinda los elementos para la comprensión de la atención integral en salud, los desarrollos normativos y conceptuales que le son propios, haciendo énfasis en las Rutas Integrales de Atención en Salud como una apuesta del sector y en particular en la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
