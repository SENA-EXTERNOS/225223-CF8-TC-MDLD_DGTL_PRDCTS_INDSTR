<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones.nt
      .titulo-principal__numero
        span 1
      h1 Tipos de Impresoras y aplicaciones


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4 La impresión 3D es un concepto general que engloba todo un conjunto de procesos de impresión 3D. La norma ISO/ASTM 52900, publicada en 2015, tiene como objetivo estandarizar todos los términos y clasificar cada tipo diferente de impresora 3D. En total, se identificaron y establecieron siete clases diferentes de procesos de fabricación aditiva. Estos procesos de impresión 3D dieron lugar a diez tecnologías diferentes utilizadas por las impresoras 3D en la actualidad.
        p.mb-5 Los procesos de fabricación aditiva tienen cada uno diferentes tecnologías asociadas, así como también:        
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img-1.svg')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tarjeta.tarjeta--gris.p-4.mb-5.fnd-1 

          LineaTiempoC.color-acento-botones(text-small)
            .row.align-items-center(titulo="Paso 1")
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img-2.png')      
              .col-md-6
                p <b>La Extrusión de material:</b> es un proceso de impresión 3D en el que los filamentos de material termoplástico sólido se empujan a través de una boquilla calentada, derritiéndolos en el proceso. La impresora deposita material a lo largo de un camino predeterminado en una plataforma de construcción, donde el filamento se enfría y se solidifica para formar un objeto sólido (All3DP, 2022).  Se deposita una capa encima de la capa anterior hasta que se fabrica el objeto. El cabezal del extrusor se mueve debido al control de la computadora. Los extrusores necesitan al menos tres ejes para moverse en una arquitectura cartesiana, pero los sistemas de coordenadas polares y triangulares son cada vez más populares. 
            .row.align-items-center(titulo="Paso 2")
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img-3.png')      
              .col-md-6
                p <b>Polimerización VAT:</b> el curado en tanque es un proceso de impresión 3D en el que una fuente de luz cura o endurece selectivamente la resina de fotopolímero en un tanque. En otras palabras, la luz apunta precisamente a puntos específicos sobre una fina capa de plástico líquido para endurecerla y repite este proceso capa por capa hasta que se forme un bloque 3D (All3DP, 2022).  Las resinas fotosensibles se colocan en un recipiente líquido, que luego se llena con una resina solidificada. 
                p Este proceso se utiliza para la estereolitografía, que sigue este orden de operación: los recipientes se llenan con resina fotosensible en estado líquido antes de solidificarse. Un contenedor tiene una plataforma móvil que se coloca cerca del suelo. Al reflejar la luz láser a través de los espejos, se endurece una primera capa de material. Una vez completada esta capa, la plataforma desciende hacia la resina endurecida. Este proceso se repite hasta que el recipiente se termina con cada capa.
            .row.align-items-center(titulo="Paso 3")
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img-4.png')      
              .col-md-6
                p <b>Fusión en lecho de polvo metálico:</b> es un proceso de impresión 3D que utiliza una fuente de calor para crear un objeto sólido que induce la fusión entre las partículas de polvo metálico una capa a la vez.  La mayoría de las técnicas de fusión de lecho de polvo emplean el mecanismo de agregar polvo a medida que se construye el objeto, encapsulando así el ensamblaje final en polvo metálico. El principal cambio en la tecnología de fusión de lecho de polvo metálico proviene del uso de diferentes fuentes de energía, ya sea láser o haz de electrones (All3DP, 2022).  Los polvos metálicos y las aleaciones como el acero inoxidable, el titanio y el Inconel se utilizan a menudo en la creación de diseños de fusión por láser de lecho de polvo. Además, los metales en polvo se pueden usar para hacer joyas, ya que los metales preciosos como el oro, la plata y el platino se usan principalmente para este propósito. La fusión por láser de lecho de polvo es uno de los pocos métodos de fabricación utilizados en la producción actual. Sus piezas tienen una resistencia similar a la de otros métodos, como la fundición o el mecanizado (3Dnatives, 4 de septiembre de 2019).
            .row.align-items-center(titulo="Paso 4")
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img-5.png')      
              .col-md-6
                p <b>Inyección de material:</b> es un proceso de impresión 3D en el que las gotas de material se depositan y curan selectivamente en una placa de construcción. Usando fotopolímeros o gotas de cera que curan cuando se exponen a la luz, los objetos se construyen capa por capa.  La naturaleza del proceso de inyección de material permite imprimir diferentes materiales en el mismo objeto. Una aplicación de esta técnica es la fabricación de estructuras de soporte a partir de un material diferente al del modelo que se está fabricando. (All3DP, 2022). Se pueden utilizar diferentes materiales para crear impresiones INKJET, como metal, cerámica o cera, dividiendo la tecnología INKJET en tres subgrupos: Drop On Demand, Material Jetting y NanoParticle Jetting. El cabezal de impresión INKJET proyecta grandes gotas de tinta de fotopolímero, generalmente endurecida por la luz ultravioleta. Hay múltiples subgrupos de materiales para las impresoras 3D disponibles que se clasifican por el proceso utilizado para crearlos. Las piezas resultantes son muy precisas y coloridas, impresas con una amplia variedad de materiales (3Dnatives, 29 de abril de 2021). Es importante comprender los diferentes procesos de impresión 3D disponibles para que se pueda seleccionar el más conveniente.
            .row.align-items-center(titulo="Paso 5")
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img-6.png')      
              .col-md-6
                p <b>Binder Jetting:</b> la inyección de aglutinante (o BinderJetting, BJ) es un proceso de impresión 3D en el que un aglutinante líquido une selectivamente áreas de un lecho de polvo.  Esta es una técnica de impresión 3D similar a SLS y requiere que se forme una capa de polvo inicial en la plataforma de construcción, pero a diferencia de SLS, que usa polvo sinterizado por láser, la inyección de aglutinante mueve el cabezal de impresión a la superficie del polvo depositando pequeñas gotas en el agente de unión, típicamente 80 micras de diámetro.  Estas gotas unen las partículas de polvo para formar cada capa del objeto (All3DP, 2022). 
                p La impresión de la pieza comienza con la colocación de la primera capa de polvo a través de rodillos en la plataforma de construcción, gracias a un cabezal de impresión similar al que usan las impresoras 2D, se añade en forma de gotitas de 80 μm el agente aglutinante. El polvo se unifica y se forma la pieza. (3Dnatives, 29 de julio de 2019).
                p En el caso de la tecnología de chorro de aglutinante para materiales cerámicos, se pueden crear modelos a todo color y, si este es el caso, el color se agrega en la misma etapa que el aglutinante. Este proceso se repite continuamente hasta que la pieza de trabajo esté completamente formada.
            .row.align-items-center(titulo="Paso 6")
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img-7.png')      
              .col-md-6
                p <b> Deposición de energía directa (DED):</b> es un proceso de impresión 3D en el que los materiales se introducen y fusionan mediante la aplicación de una potente energía térmica mientras se depositan.  La fuente de energía en cuestión suele ser una de tres: haz de electrones, láser o plasma. El material se introduce en forma de alambre o polvo y, a medida que sale del cabezal, una fuente de calor lo funde, formando formas complejas. “Esta tecnología le permite crear impresiones capa por capa, pero también puede usarse para reparar objetos. Por esta razón, DED se utiliza más para reparar piezas existentes que para crear objetos de impresión completamente nuevos” (All3DP, 2022).  Al igual que con cualquier tecnología de fabricación aditiva, el diseño de una pieza comienza con la creación de un modelo 3D utilizando un software CAD. Luego, la pieza se corta utilizando 3D Slicer o un software de corte en capas que representan las diversas capas de material necesarias para formar la pieza.  Esta tecnología deposita material sobre la base o el componente que se está reparando a través de boquillas montadas en brazos multieje (generalmente 4 o 5). El material metálico suministrado a la boquilla se proporciona en forma de polvo o alambre. Durante la deposición, una fuente de calor derrite simultáneamente el material, generalmente utilizando un láser, un haz de electrones o un arco de plasma. Se repite este proceso hasta que la capa se solidifique y el objeto se cree o se repare (3Dnatives, 10 de septiembre de 2019).
            .row.align-items-center(titulo="Paso 7")
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img-8.png')      
              .col-md-6
                p <b>Microimpresión 3D:</b> deposición de energía directa (Manufactura aditiva directa a microescala en inglés), generalmente se refiere a la producción de piezas con dimensiones que van desde menos de 10 micras a 5 micras en espesor de capa y resolución de 2 micras. Algunas tecnologías pueden incluso imprimir piezas que se pueden medir hasta el nanómetro escala (nm), una unidad de medida 1000 veces más pequeña que una micra como referencia, el ancho promedio de un cabello humano es de 75 micras y el diámetro de una hebra de ADN humano es de 2,5 nanómetros.  La mayor parte de la microimpresión 3D se realiza mediante impresoras de resina, o mediante fotopolimerización de la luz. Sin embargo, algunas empresas han comenzado a moverse más allá de los polímeros y hacia metales como el acero, el cobre o el oro  (All3DP, 2022).  La microimpresión 3D se puede utilizar en muchos campos debido a la complejidad de la tecnología y la enorme capacidad de imprimir a escalas diminutas, pero el área donde parece haber más progreso actualmente es en la medicina.
                p Con la microimpresión 3D, es posible imprimir con células vivas e incluso unir varios tipos de células. De esta forma se han creado tejidos biológicos, y en la Universidad de Princeton han logrado imprimir con éxito órganos completamente funcionales, como las orejas, los llamados órganos cyborg. Una de las ventajas de la microimpresión 3D es la capacidad de imprimir órganos que ya tienen vasos sanguíneos construidos, que es exactamente el avance que mencionó el MIT para incluirlo en la lista.
            .row.align-items-center(titulo="Paso 8")
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img-9.png')      
              .col-md-6
                p <b>Laminación de hojas: </b>es una forma de impresión 3D que crea objetos 3D apilando y laminando láminas muy finas de material. 
                  br
                  | Las capas de materiales se pueden fusionar utilizando una variedad de métodos, siendo los más comunes el térmico y el acústico. El método más adecuado dependerá de los materiales utilizados, ya que para la laminación de láminas se utilizan papel, polímeros y metales.  Esta tecnología es una de las menos precisas en el espacio de impresión 3D, y las piezas creadas requieren un extenso procesamiento posterior. A medida que avanza la impresión, se utilizan cortadoras láser y fresadoras CNC para dar a las piezas las formas deseadas, lo que puede generar más desperdicio de material que otras técnicas de impresión 3D (All3DP, 2022). Es una técnica de impresión 3D que utiliza láminas cortadas junto con las capas deseadas y unidas entre sí por algún mecanismo. Las láminas pueden ser de metal, papel o algún tipo de polímero, cuya principal ventaja es que no se requieren altas temperaturas ni cámaras selladas para su funcionamiento. Las dos tecnologías que utilizan este sistema son LOM (Fabricación de Objetos Laminados) y UAM (Fabricación Aditiva Ultrasónica), también conocida como UC (Integración Ultrasónica).



















      
      
</template>

<script>
export default {
  name: 'Tema1',
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
