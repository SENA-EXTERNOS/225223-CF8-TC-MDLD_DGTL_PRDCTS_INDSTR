<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A pesar de que la manufactura aditiva lleva décadas en desarrollo, solo hasta hace algunos años ha estado al alcance de la mayoría de las personas, instituciones de educación, investigación, entre otros, lo que ha permitido el rápido desarrollo de esta industria, encontrando nuevas aplicaciones para sectores que en el pasado eran impensables.  Ahora, al crear un modelo digital, se puede obtener un 100 % de precisión. Por ejemplo: algunos tipos de impresoras 3D comunes pueden imprimir con gran precisión, a una resolución de 100 micrones, lo que equivale a una décima de milímetro, que está muy cerca del diámetro de un cabello humano, esto cerró una brecha en algunas industrias para las que la impresión 3D no estaba a altura de los requerimientos (De León, s.f.). <b> ¡Ahora nuevas aplicaciones e industrias están por venir!</b>

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis-.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Síntesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
