<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5       

    .titulo-principal
      .titulo-principal__numero
        span #[i.fas.fa-info]
      h1 Introducción

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/yv-RUJ-cvpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption La Atención Integral en Salud es un concepto que organiza la acción del sector salud y otros sectores en el marco de la garantía del derecho a la salud. Las Rutas integrales de atención en salud son una herramienta que permite articular los esfuerzos de los actores propios y de otros sectores, apuntando al logro de los resultados en salud ubicados en los sujetos, por medio de los procesos de gestión que se vinculan a escenarios de atención que potencian la acción organizada y promueven la capacidad de agencia en las personas, familias y comunidades.    
   

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
