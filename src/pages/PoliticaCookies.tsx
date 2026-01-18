import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen bg-section-light">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl mb-12 text-foreground">
            Política de Cookies
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground mb-8 leading-relaxed">
              En esta web se utilizan cookies de terceros y propias para conseguir que tengas una mejor experiencia de navegación, puedas compartir contenido en redes sociales y para que podamos obtener estadísticas de los usuarios.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Puedes evitar la descarga de cookies a través de la configuración de tu navegador, evitando que las cookies se almacenen en su dispositivo.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Como propietario de este sitio web, te comunico que no utilizamos ninguna información personal procedente de cookies, tan sólo realizamos estadísticas generales de visitas que no suponen ninguna información personal.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Es muy importante que leas la presente política de cookies y comprendas que, únicamente se almacenarán en tu dispositivo las cookies necesarias para la navegación. El resto de cookies se instalarán siempre y cuando lo consientas expresamente.
            </p>
            <p className="text-muted-foreground mb-12 leading-relaxed">
              Según los términos incluidos en el artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico, si continúas navegando, estarás prestando tu consentimiento para el empleo de los referidos mecanismos.
            </p>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Entidad Responsable</h2>
              <p className="text-muted-foreground leading-relaxed">
                La entidad responsable de la recogida, procesamiento y utilización de tus datos personales, en el sentido establecido por la Ley de Protección de Datos personales, es la página, propiedad de DOK7 SOFTWARE SOLUTIONS, S.L., y dirección en AVDA. BLASCO IBAÑEZ, 25, CP 46529, VALENCIA.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">¿Qué son las cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Las cookies son un conjunto de datos que un servidor deposita en el navegador del usuario para recoger la información de registro estándar de Internet y la información del comportamiento de los visitantes en un sitio web. Es decir, se trata de pequeños archivos de texto que quedan almacenados en el disco duro del ordenador y que sirven para identificar al usuario cuando se conecta nuevamente al sitio web. Su objetivo es registrar la visita del usuario y guardar cierta información. Su uso es común y frecuente en la web ya que permite a las páginas funcionar de manera más eficiente y conseguir una mayor personalización y análisis sobre el comportamiento del usuario.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">¿Qué tipos de cookies existen?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Las cookies utilizadas en nuestro sitio web, son de sesión y de terceros, y nos permiten almacenar y acceder a información relativa al idioma, el tipo de navegador utilizado, y otras características generales predefinidas por el usuario, así como, seguir y analizar la actividad que lleva a cabo, con el objeto de introducir mejoras y prestar nuestros servicios de una manera más eficiente y personalizada.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Las cookies, en función de su permanencia, pueden dividirse en cookies de sesión o permanentes. Las que expiran cuando el usuario cierra el navegador. Las que expiran en función de cuando se cumpla el objetivo para el que sirven (por ejemplo, para que el usuario se mantenga identificado en los servicios de DOK7 SOFTWARE SOLUTIONS, S.L. o bien cuando se borran manualmente).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Cookies de rendimiento</h2>
              <p className="text-muted-foreground leading-relaxed">
                Este tipo de Cookie recuerda sus preferencias para las herramientas que se encuentran en los servicios, por lo que no tiene que volver a configurar el servicio cada vez que usted visita. A modo de ejemplo, en esta tipología se incluyen: Ajustes de volumen de reproductores de vídeo o sonido. Las velocidades de transmisión de vídeo que sean compatibles con su navegador. Los objetos guardados en el "carrito de la compra" en los servicios de e-commerce tales como tiendas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Cookies de geo-localización</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estas cookies son utilizadas para averiguar en qué país se encuentra cuando se solicita un servicio. Esta cookie es totalmente anónima, y sólo se utiliza para ayudar a orientar el contenido a su ubicación.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Cookies de registro</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Las cookies de registro se generan una vez que el usuario se ha registrado o posteriormente ha abierto su sesión, y se utilizan para identificarle en los servicios con los siguientes objetivos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Mantener al usuario identificado de forma que, si cierra un servicio, el navegador o el ordenador y en otro momento u otro día vuelve a entrar en dicho servicio, seguirá identificado, facilitando así su navegación sin tener que volver a identificarse.</li>
                <li>Comprobar si el usuario está autorizado para acceder a ciertos servicios, por ejemplo, para participar en un concurso.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Cookies analíticas</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cada vez que un usuario visita un servicio, una herramienta de un proveedor externo genera una cookie analítica en el ordenador del usuario. Esta cookie que sólo se genera en la visita, servirá en próximas visitas a los servicios de DOK7 SOFTWARE SOLUTIONS, S.L., para identificar de forma anónima al visitante.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Cookies de publicidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Este tipo de cookies permiten ampliar la información de los anuncios mostrados a cada usuario anónimo en los servicios de DOK7 SOFTWARE SOLUTIONS, S.L. Entre otros, se almacena la duración o frecuencia de visualización de posiciones publicitarias, la interacción con las mismas, o los patrones de navegación y/o comportamientos del usuario ya que ayudan a conformar un perfil de interés publicitario.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">¿Cómo puedo deshabilitar las cookies en mi navegador?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Se pueden configurar los diferentes navegadores para avisar al usuario de la recepción de cookies y, si se desea, impedir su instalación en el equipo. Asimismo, el usuario puede revisar en su navegador qué cookies tiene instaladas y cuál es el plazo de caducidad de las mismas, pudiendo eliminarlas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para ampliar esta información consulte las instrucciones y manuales de su navegador:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Para más información sobre la administración de las cookies en <strong className="text-foreground">Google Chrome</strong>: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aquí</a></li>
                <li>Para más información sobre la administración de las cookies en <strong className="text-foreground">Internet Explorer</strong>: <a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aquí</a></li>
                <li>Para más información sobre la administración de las cookies en <strong className="text-foreground">Mozilla Firefox</strong>: <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aquí</a></li>
                <li>Para más información sobre la administración de las cookies en <strong className="text-foreground">Safari</strong>: <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aquí</a></li>
                <li>Para más información sobre la administración de las cookies en <strong className="text-foreground">Opera</strong>: <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aquí</a></li>
                <li>Si desea dejar de ser seguido por <strong className="text-foreground">Google Analytics</strong> visite: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aquí</a></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Retirar su consentimiento</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En cualquier momento, puedes retirar tu consentimiento para el uso de cookies modificando las configuraciones en tu navegador o utilizando las herramientas de gestión de cookies que ofrecemos en este sitio.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Si tienes dudas sobre cómo retirar el consentimiento o necesitas más información sobre nuestras políticas de cookies, no dudes en contactarnos.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaCookies;

