<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones.nt
      .titulo-principal__numero
        span 5
      h1 Laminación y <em>Directed Energy Deposition</em>


    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-4 La deposición directa de energía (DED) es un proceso de impresión 3D más complejo, a menudo se usa para reparar piezas existentes o agregar material adicional. Los modelos se pueden hacer completamente desde cero utilizando esta técnica, pero su uso principal es para aplicaciones industriales, como la reparación de turbinas o hélices dañadas. Al igual que algunas técnicas de lecho de polvo, la deposición de energía directa utiliza una fuente de energía enfocada, como un láser o un haz de electrones, para derretir el material. Sin embargo, el material se funde mientras se deposita en la boquilla. En cierto modo, la tecnología está en el límite entre la extrusión de material y la fusión de lecho de polvo. Esta tecnología deposita material sobre la base o el componente que se está reparando a través de boquillas montadas en brazos multieje (generalmente 4 o 5). El material metálico suministrado a la boquilla se proporciona en forma de polvo o alambre (3Dnatives, 10 de septiembre de 2019). 
        p.mb-4 Cuando se habla de la deposición de energía dirigida, se utilizan términos como revestimiento láser 3D, conformación de red diseñada con láser, fabricación de luz directa y deposición de metal. Este es un proceso de impresión más avanzado que se utiliza para agregar material adicional a los componentes existentes o reparar daños.  Las máquinas DED depositan el material fundido a través de una boquilla móvil unida a un brazo de múltiples puntas. El brazo posiciona la boquilla en diversas direcciones para derretir diferentes áreas de la superficie objetivo. Una vez que el material se endurece, el proceso es similar a la extrusión de material sin eje fijo.  Estas máquinas permiten fundir materiales en cualquier ángulo debido a su material. Alternativamente, los rayos de electrones o láser pueden derretir el material.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema5/img-1.png')


    separador 

    #t_5_1.titulo-segundo.color-acento-botones
      h2 5.1 Usos 

    p.mb-5 Durante la deposición, una fuente de calor funde simultáneamente el material, generalmente usando un láser, un haz de electrones o un arco de plasma. Repetir este proceso hasta que la capa se solidifique y el objeto se cree o se repare.


    .tarjeta.tarjeta--azul.p-4.mb-5.fnd-4
      .row.justify-content-center.align-items-center
        SlyderA(tipo='b')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.px-4
              p La deposición de energía dirigida incluye la capacidad de controlar la estructura del grano. Esto ayuda al proceso de restaurar piezas funcionales de alta calidad. Se requiere de un equilibrio entre la precisión y la velocidad, ya que, a mayor velocidad, menor será la precisión y más inestable la microestructura.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img-2.svg')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.px-4
              p DED permite fabricar piezas relativamente grandes con herramientas mínimas.  Este proceso también permite el uso de múltiples materiales con diferentes composiciones para crear componentes con gradientes de contextura o estructuras híbridas. Se pueden encontrar algunos usos adicionales como:
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img-3.svg')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.px-4
                ul.lista-ul--color
                  li 
                    i.fas.fa-circle.am2
                    | Reparación de piezas de alto valor añadido (fabricado con el tamaño incorrecto, dañado producido en servicio, aviones en prototipo, etc.).
                  li 
                    i.fas.fa-circle.am2
                    | Aumentar la vida útil de las piezas, al recubrir con materiales de alta calidad.
                  li 
                    i.fas.fa-circle.am2
                    | Rendimiento (resistencia al desgaste, resistencia a la corrosión, temperatura, etc.).
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img-4.svg')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0.px-4
              ul.lista-ul--color
                  li 
                    i.fas.fa-circle.am2
                    | Más posibilidades de uso de materiales.
                  li 
                    i.fas.fa-circle.am2
                    | Endurecimiento superficial económico (herramientas acero de baja aleación templado Superficie con acero para herramientas o acero de alta velocidad). 
                  li 
                    i.fas.fa-circle.am2
                    | Fabricación de prototipos geométricos muy complicados.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/img-5.svg')

    separador

    #t_5_2.titulo-segundo.color-acento-botones
      h2 5.2 Ventajas y desventajas 

    p.mb-5 A continuación, las ventajas y desventajas del uso de <em>Directed Energy Deposition</em>
    .row.justify-content-center.mb-5
      .col-lg-5
        igure
          img(src='@/assets/curso/temas/tema5/img-6.png')
      .col-lg-7      
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-3")
          .row(titulo="Ventaja: material extenso")
            p Pasa por la deposición de energía dirigida, es un proceso donde se tiene investigación y desarrollo avanzado respecto a los materiales que se aplican. 
          .row(titulo="Ventaja: excelente calidad operativa")
            p La contribución del calor en la base es muy baja, casi sin deformación, sin corrosión. Los aportes son de alta densidad y mínima porosidad.
          .row(titulo="Desventaja: espesor variable")
            p En comparación con otros espesores en otros procesos de manufactura aditiva.
          .row(titulo="Ventaja: se puede aplicar a piezas existentes")
            p Resistente para lograr el recubrimiento o hacer reparaciones.

</template>

<script>
export default {
  name: 'Tema5',
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
