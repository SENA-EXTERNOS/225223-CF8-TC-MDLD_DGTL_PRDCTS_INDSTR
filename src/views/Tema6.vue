<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones.nt
      .titulo-principal__numero
        span 6
      h1 Estructuras orgánicas y diseño para manufactura aditiva


    .row.justify-content-center.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img-1.svg')    
      .col-lg-10
        p.mb-4 Para imprimir un objeto en 3D, se necesita un archivo 3D. Hay algunas reglas simples y efectivas para garantizar que los documentos estén listos para imprimir. Un formato de archivo inadecuado o archivos demasiado grandes pueden impedir la impresión. También es importante revisar minuciosamente el diseño en busca de posibles errores (polígonos invertidos, bordes irregulares, agujeros, etc.) ya que estos pueden causar problemas.  


    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video












</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
