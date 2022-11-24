<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones.nt
      .titulo-principal__numero
        span 7
      h1 Cálculo de costo y valor de manufactura aditiva en los proyectos

    p Otros procesos de Impresión 3D más sofisticados tienen unos altos costos de materia prima, como es el caso de la impresión 3D en metal o materiales biocompatibles.
    p.mb-5 Entre los parámetros que a menudo se consideran para calcular el costo de la impresión 3D, se encuentran:



    .tarjeta.tarjeta--azul.p-4.mb-5.fnd-4
      .row.justify-content-center.align-items-center
        SlyderA(tipo='b')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.px-4
              p Los costos de materiales que incluye el costo del filamento. 
                | El punto de partida para cada cálculo es ver cuánto filamento se necesita para hacer la pieza. Esta parte del trabajo es fácil: si se compra una bobina de 1 kg de filamento PLA por $ 30 (precio de referencia) y se usa 100 g para imprimirlo, el costo del material sería de $3 (100 g / 1000 g x $ 30).
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/img-1.png')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.px-4
              p El tiempo de impresión es otro parámetro básico que juega un papel importante a la hora de calcular el precio de la impresión 3D. Las empresas de impresión 3D cobran una tarifa por hora de impresión y cada una oferta su propio costo por hora.
              p Si una empresa paga $ 2000 por una impresora 3D con una vida útil esperada de 2000 horas, podría cobrar alrededor de $ 1 por hora. (Tenga en cuenta que este ejemplo es solo para fines ilustrativos y es poco práctico), ya que hay otros costos añadidos como electricidad, mano de obra, mantenimientos, entre otros.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/img-1.png')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.px-4
              p El posprocesamiento (trabajo manual): las tareas de posprocesado, como la eliminación de soportes, pueden requerir mucha mano de obra por un periodo de tiempo prolongado. La eliminación de soportes también requiere un proceso manual que se debe calcular dependiendo de la complejidad del objeto a imprimir.  Cada impresión 3D requiere al menos un procesamiento posterior para estar lista para los clientes. 

              p Este costo incluye los métodos habituales de post procesado, como la eliminación de soportes y el lijado de piezas, pero también el trabajo manual invertido en el empaquetado de las piezas y el envío a los clientes.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema7/img-1.png')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.fnd-5.p-4.mb-4
          p Concluida la fase de exposición de contenidos, ahora lo invitamos a a explorar los demás recursos que se encuentran disponibles en este componente formativo, como: la síntesis, una actividad didáctica, material complementario, entre otros, para afianzar los conocimientos y determinar el nivel de aprendizaje en las temáticas estudiadas. 








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
