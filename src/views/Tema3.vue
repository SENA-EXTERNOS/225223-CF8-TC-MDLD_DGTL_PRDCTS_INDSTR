<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones.nt
      .titulo-principal__numero
        span 3
      h1 Fotopolimerización y <em>Powder Bed Fusion </em>


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es una tecnología de fabricación aditiva basada en la deposición de capas sucesivas de materiales en polvo, fundiéndolos con energía.  La tecnología de fusión de lecho de polvo (PBF), frente a otras técnicas de fabricación aditiva, destaca por producir piezas metálicas de titanio o aleaciones de níquel, aunque también es una opción para la fabricación de plástico. Por ejemplo, esta técnica tiene importantes ventajas en la producción de piezas con estructuras internas muy consistentes.  

    p.mb-5 En <em>Powder Bed Fusion </em>existen varias opciones tecnológicas, las más usadas son:

    .tarjeta.tarjeta--azul.p-4.mb-5.fnd-4
      .row.justify-content-center.align-items-center
        SlyderA(tipo='b')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.px-4
              h4 Fusión por haz de electrones (EBM)
              p Con esta técnica, el polvo metálico se deposita en una cámara de vacío a unos 700 ºC y se funde bajo la acción de un haz de electrones (<em>electron beam</em>) (Mizar, s.f.).
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-2.png')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.px-4
              h4 Sinterización directa de metal por láser (DMLS)
              p La fusión selectiva de materiales en una capa continua de polvo, se realiza con un láser en una cámara de argón inerte (Mizar, s.f.).
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-3.png')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.px-4
              h4 Sinterización selectiva por láser (SLS)
              p Los contornos de los componentes en el material plástico deseado, se funden con láser. Esta opción funciona de manera similar a DMLS, pero la base del componente no es de metal, sino de polímero (Mizar, s.f.).
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-4.png')


    separador 

    #t_3_1.titulo-segundo.color-acento-botones
      h2 3.1 Usos 
    p.mb-5 El proceso PBF <em>(Powder Bed Fusion)</em> es ampliamente utilizado en numerosas aplicaciones en el sector industrial. Por ejemplo: 
    .row.mb-5.d-flex
      .col-lg-6.c-izq 
        figure.mt-5
          img.img-250(src='@/assets/curso/temas/tema3/img-5.svg')      
        p.p-5.text-white En la industria médica suele emplearse para fabricar componentes ortopédicos personalizados, como cráneos de titanio o implantes. Por otro lado, y desde el punto de vista aeroespacial, el proceso PBF ha captado la atención, y es empleado en la fabricación de aviones militares y comerciales como, por ejemplo, en el motor GE9X de 
          em General Electric
          | , que se utiliza en aviones Boeing 777; el GE9X es el turboventilador más grande en producción, y la boquilla fabricada aditivamente es cinco veces más duradera que las versiones anteriores. El Boeing 777 con dos motores GE9X, tiene más de 300 piezas fabricadas aditivamente.    

      .col-lg-6.c-der       
        figure.mt-5
          img.img-250(src='@/assets/curso/temas/tema3/img-6.png')      
        p.p-5.text-white  En la fabricación de automóviles se implementó la tecnología PBF en todo el proceso de autos de alta gama, desde el uso de prototipos rápidos hasta garantizar que cada detalle de la apariencia y función del automóvil fuera el esperado, hasta la fabricación para la producción de metal. Las piezas de producción de vehículos incluyen carcasas de turbocompresores, componentes de escape, conductos de aire y espejos interiores. El proceso de fabricación aditiva reduce el desperdicio de materiales y costos. Para series de producción más pequeñas (común en automóviles de gama alta). (TWI Global, s.f.)




    separador 

    #t_3_2.titulo-segundo.color-acento-botones
      h2 3.2 Ventajas y desventajas 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img-7.svg')

          .tarjeta.color-acento-botones.p-3(x="72%" y="18%" numero="+")
            p.text-center Reducción de desperdicio de material y costos.
          .tarjeta.color-acento-botones.p-3(x="94%" y="30%" numero="+")
            p.text-center Mejorar el tiempo de desarrollo de la producción.
          .tarjeta.color-acento-botones.p-3(x="105%" y="50%" numero="+")
            p.text-center Permite la creación rápida de prototipos y la producción de bajo volumen.
          .tarjeta.color-acento-botones.p-3(x="105%" y="73%" numero="+")
            p.text-center Habilidad para construir partes categorizadas funcionalmente.
          .tarjeta.color-acento-botones.p-3(x="94%" y="93%" numero="+")
            p.text-center Piezas completamente personalizadas, lote por lote, eliminando diseños fijos.
          .tarjeta.color-acento-botones.p-3(x="75%" y="104%" numero="+")
            p.text-center Buena resolución en comparación con otros procesos de fabricación aditiva.
          .tarjeta.color-acento-botones.p-3(x="51%" y="104%" numero="+")
            p.text-center Recuperación eficiente del polvo sin derretir.
          .tarjeta.color-acento-botones.p-3(x="29%" y="92%" numero="+")
            p.text-center Capaz de unir múltiples grados de materiales, incluidos cerámica, vidrio, plásticos, metales y aleaciones.
          .tarjeta.color-acento-botones.p-3(x="17%" y="72%" numero="+")
            p.text-center No se requieren accesorios de mecanizado.


</template>

<script>
export default {
  name: 'Tema3',
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
