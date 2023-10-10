<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1  <em>Fused filament fabrication</em>


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.blq-izq.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las tecnologías FDM y FFF, junto con otros acrónimos que han surgido recientemente, entran en la categoría de extrusión de materiales definida por la norma ISO 17269, que especifica diferentes términos para las tecnologías de fabricación que son básicamente iguales, pero cada fabricante los nombra de manera diferente.  implica extruir filamentos de polímero termoplástico a través de una boquilla caliente o extrusora para hacer que el material sea moldeable para construir piezas capa por capa. La viruta final está formada por numerosas capas de espesor constante que reproducen secciones o cortes de la viruta en forma de lonchas adheridas entre sí.

    br
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4.fnd-2
          p La tecnología utiliza principalmente polímeros, que se suministran en bobinas de diferentes diámetros. Entre ellos se encuentran el ABS o ácido poli láctico o PLA. Entre los materiales utilizados en esta tecnología, actualmente se están desarrollando numerosas variantes, como la adición de fibras a la matriz del material, mejorando así las propiedades de la pieza final (ingenius, 20 de julio de 2017).



    ul.lista-ul--color.mb-3.am
      li 
        i.fas.fa-circle.am
        | 
        h3.text-black Etapas del proceso general de la tecnología de aditivos FDM





    .row.justify-content-center.align-items-center.mb-5

          .col-sm-6.col-xl-4.mb-4.mb-xl-0.img-384
            .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-2.png')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  p.text-center.bb El 
                    em(style='color: #12263f') software 
                    |  lamina y coloca archivos CAD en 3D. Se calcula la ruta para extruir el material termoplástico y cualquier material de soporte necesario.

          .col-sm-6.col-xl-4.mb-4.mb-xl-0.img-384
            .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-3.png')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  p.text-center.bb La impresora 3D calienta el material termoplástico hasta que alcanza un estado semilíquido, que luego se deposita como gotas ultrafinas a lo largo de la ruta de extrusión. En situaciones donde se requiere soporte o apoyo, la impresora 3D deposita un material móvil que actúa como andamiaje.

          .col-sm-8.col-md-6.col-xl-4.mb-4.mb-xl-0.img-384
            .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-4.png')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-4

                  p.text-center.bb El usuario retira el material de soporte o lo disuelve en agua y detergente, quedando la pieza lista para usar. La tecnología es limpia, fácil de usar y adecuada para la oficina.
                    | Los termoplásticos de producción compatibles son mecánica y ambientalmente estables.
                    | Las geometrías complejas y las cavidades que pueden ser problemáticas con otros sistemas se simplifican con la tecnología FDM (todo-3D, 25 de enero de 2017).


    separador 

    #t_2_1.titulo-segundo.color-acento-botones
      h2 2.1 Usos 
    p.mb-5 A continuación, se presentan los usos de las tecnologías FDM y FFF

    .row.justify-content-center.mb-5
      .col-lg-5
        igure
          img(src='@/assets/curso/temas/tema2/img-5.png')
      .col-lg-7      
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-3")
          .row(titulo="Uso 1")
            p.mb-4 Dada la simplicidad de la tecnología y el bajo costo del proceso muchas empresas la utilizan para fabricar los primeros prototipos de los productos; de igual manera se usa para la producción de piezas en bajos volúmenes que no requieren un acabado superficial tan alto.  Las primeras en adoptar la impresión 3D como GE, Airbus, BMW y Ford han estado utilizando la impresión 3D FDM durante décadas, como herramienta para diseñar plantillas, accesorios y piezas de fabricación especializadas de bajo volumen, utilizando maquinaria de fabricación aditiva a escala industrial y gran escala.
          .row(titulo="Uso 2")
            p.mb-4 De igual forma es una tecnología, que por su costo es accesible para hogares y centro de educación, se constituye en la herramienta ideal para comenzar en la manufactura aditiva. Hay varios 
              em softwares 
              |  de diseño libres que se pueden usar para la creación de los objetos 3D, así como también librerías para descargar archivos de impresión y un sin número de comunidades para la creación de proyectos de impresión 3D.



    separador 

    #t_2_2.titulo-segundo.color-acento-botones.mb-5
      h2 2.2 Ventajas y desventajas   

    p.mb-5 A continuación, se visualizan algunas de las principales ventajas y desventajas de utilizar la tecnología FFF.
    
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/aj1.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="0%" y="50%" numero="")
        ul.lista-ul--color
          li
            i.fas.fa-check
            p.mb-0 Impresora fácil de usar y de bajo costo, al igual que los consumibles como las bobinas de material.
          li
            i.fas.fa-check
            p.mb-0 Tecnología de fácil comprensión y disponibilidad en el mercado de las impresoras.
          li
            i.fas.fa-check
            p.mb-0 Adecuada para uso en casi todos los campos, desde el hogar, hasta en la industria, la medicina, la educación y más.
      .tarjeta.color-acento-botones.p-3(x="100%" y="50%" numero="")
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Amplio catálogo de materiales, gama cromática y en constante expansión.
          li
            i.fas.fa-check
            | Piezas fáciles de post procesar.

</template>

<script>
export default {
  name: 'Tema2',
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
