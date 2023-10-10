<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones.nt
      .titulo-principal__numero
        span 4
      h1 Material <em>Jetting y Binder Jetting </em>


    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-4 La tecnología de impresión 3D por inyección de aglomerante, consiste en depositar un aglutinante sobre una fina capa de material en polvo. Los materiales en polvo son de base cerámica (p. ej., vidrio o yeso) o metálicos.  Durante la impresión 3D por chorro de aglutinante, el cabezal de impresión 3D se mueve sobre la plataforma de construcción, depositando gotas de aglutinante e imprimiendo cada capa, de forma similar a una impresora 2D que imprime tinta en papel. Cuando se completa una capa, el lecho de polvo se mueve hacia abajo y la impresora rocía una nueva capa de polvo sobre el área de construcción. El proceso continúa capa por capa hasta que todas las partes están completas.

        p.mb-5 Después de la impresión, la pieza está sin terminar y requiere un procesamiento posterior adicional, antes de que pueda usarse. A menudo, los operadores agregan sustancias osmóticas para mejorar las propiedades mecánicas de la pieza. La sustancia penetrante suele ser un aglutinante de Ciano acrilato (en el caso de la cerámica) o de bronce (en el caso de los metales). Otra estrategia consiste en introducir la pieza en un horno para conseguir la sinterización de las partículas de materia. El término impresión 3D se refiere originalmente, al proceso de depositar un material aglutinante capa por capa sobre un lecho de polvo con un cabezal similar a un chorro de tinta (3Dnatives, 2019).
      
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema4/img-1.svg')

    separador 

    #t_4_1.titulo-segundo.color-acento-botones
      h2 4.1 Usos 

    p.mb-5 A continuación, algunos usos del <em>Binder jet metal crafting</em>

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Para prototipos")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p <em>Binder jet metal crafting</em> es la tecnología de impresión 3D de metal más rápida y económica. Gracias a las opciones de recubrimiento, es ideal para la creación de prototipos, la decoración de artículos o necesidades de joyería.
            p Las técnicas de fabricación por chorro de aglutinante metálico, son particularmente útiles para fabricar piezas únicas con buenos acabados superficiales. 
          .col-md-4
            img(src='@/assets/curso/temas/tema4/aj1.png', alt='')

      .py-4.py-md-5(titulo="Para artículos de joyería")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Debido a sus propiedades mecánicas promedio, el chorro de aglutinante metálico es más adecuado para artículos decorativos y joyería, que para piezas técnicas. 
          .col-md-4
            img(src='@/assets/curso/temas/tema4/aj2.png', alt='')           

      .py-4.py-md-5(titulo="Para decoraciones que no requieran alta tecnología")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Sin embargo, algunos procesos con acero inoxidable de infiltración aumentan la resistencia y dureza del material, haciéndolo adecuado para muchas aplicaciones.  
          .col-md-4
            img(src='@/assets/curso/temas/tema4/aj3.png', alt='')     

    separador 

    #t_4_2.titulo-segundo.color-acento-botones
      h2 4.2 Ventajas y desventajas 

    p.mb-5 A continuación, las ventajas y desventajas del uso del <em>Binder jet metal crafting:</em>
    .row.justify-content-center.mb-5
      .col-lg-5
        igure
          img(src='@/assets/curso/temas/tema4/img-3.svg')
      .col-lg-7      
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-3")
          .row(titulo="Producción en masa de modelos")
            p La producción en masa de la mayoría de las máquinas<em> Binder Jetting</em> permite una automatización del producto (Laboratorios 3D, 2021). 
          .row(titulo="Recreaciones patrimoniales")
            p Una de las grandes ventajas de la tecnología de inyección de aglomerante, es su capacidad para producir piezas coloridas. Como tal, es una técnica ideal para hacer y reproducir artefactos históricos de tamaño natural o a escala.
          .row(titulo="Modelos arquitectónicos")
            p En comparación con otras técnicas tradicionales para hacer modelos arquitectónicos, la velocidad y conveniencia que ofrece<em> Binder Jetting </em>lo convierte en una tecnología de punta en este campo.
          .row(titulo="Fabricación de piezas metálicas para la industria aeronáutica o de automoción")
            p El chorro de ligante permite la fabricación de piezas metálicas para la aviación, la automóvil y otras industrias como la ferroviaria o la industria química (Laboratorios 3D, 2021).
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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
