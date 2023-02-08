<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          p.mb-5 Apreciado aprendiz, bienvenido a este componente formativo orientado a desarrollar la fabricación aditiva, el cual es un sistema de producción utilizado en el diseño CAD y escáneres 3D. Este nuevo concepto de fabricación crea objetos añadiendo capas de materiales, especialmente metales y plásticos.  A diferencia de los procesos de fabricación tradicionales, no elimina ningún material durante el proceso de producción. Sin embargo, aplicada a la producción en masa, la fabricación aditiva puede reducir costos, eliminar errores y producir con mayor rapidez y precisión (Megacalux, 2021).  En el siguiente video se abordan las principales características y generalidades de este método de producción. 

        .col-lg-5
          figure
            img(src='@/assets/curso/temas/img-intro.png')

  
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/i3vh-h_Jqu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Manufactura aditiva

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
