import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-section-light">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl mb-12 text-foreground">
            Política de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground mb-8">
              La presente Política de Privacidad regula el uso del servicio del portal de Internet con dirección, cuyo responsable a efectos identificativos es:
            </p>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Responsable</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Responsable:</strong> DOK7 SOFTWARE SOLUTIONS, S.L.</p>
                <p><strong className="text-foreground">NIF:</strong> B19434562</p>
                <p><strong className="text-foreground">Dirección:</strong> AVDA. BLASCO IBAÑEZ, 25, CP 46529, VALENCIA</p>
                <p><strong className="text-foreground">Teléfono:</strong> 637010682</p>
                <p><strong className="text-foreground">Mail:</strong> CONTACTO@DOK7.IO</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Finalidad, ¿Para qué tratamos sus datos?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A efecto de lo previsto en RGPD de 27 de abril de 2016, y la LO 3/2018, trataremos los datos que recojamos para las siguientes finalidades:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Contactar con usted en caso de que así nos lo pida.</li>
                <li>Gestionar su navegación en la web, en su caso.</li>
                <li>Remitirle comunicaciones comerciales acerca de nuestros productos y servicios.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Para ello el usuario dispondrá de un formulario de registro cuya cumplimentación legitimará al interesado al acceso y disfrute de determinados servicios ofrecidos en la web.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                No obstante, se informa al usuario que en todo formulario de contacto el mismo será informado del uso que se hará de los datos obtenidos y, si son utilizados para un fin distinto, dicho consentimiento se obtendrá previamente y de manera expresa.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Si el consentimiento del interesado se da en el contexto de una declaración escrita que también se refiera a otros asuntos, la solicitud de consentimiento se presentará de tal forma que se distinga claramente de los demás asuntos, de forma inteligible y de fácil acceso y utilizando un lenguaje claro y sencillo, de conformidad con el artículo 7.2 del RGPD de 27 de abril de 2016.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Legitimación, ¿Cuál es la legitimación para el tratamiento de sus datos?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La base legal para el tratamiento de sus datos se basará en:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>El consentimiento del interesado, para el tratamiento de sus datos, conforme el artículo 6.1.a) del Reglamento General Europeo de Protección de Datos.</li>
                <li>La necesaria ejecución de un contrato en el que el interesado es parte o para la aplicación a petición de este de medidas precontractuales, conforme el artículo 6.1.b) del Reglamento General Europeo de Protección de Datos.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Destinatarios, ¿A quién comunicamos tus datos?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Los datos personales no serán objeto de cesión salvo en el cumplimiento de obligaciones legalmente establecidas o para dar soporte a los servicios vinculados a este tratamiento.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Conservación, ¿Durante cuánto tiempo conservamos tus datos?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conservaremos sus datos de carácter personal durante al menos 5 años en caso de que sea cliente y para el estricto cumplimiento de las obligaciones legales establecidas en la normativa.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                En caso de no ser cliente conservaremos sus datos el mínimo tiempo indispensable para gestionar nuestra relación.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Derechos, ¿Cuáles son tus derechos cuando nos facilitas tus datos?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cualquier persona tiene derecho a obtener confirmación sobre si se están tratando datos personales que le conciernan.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Las personas interesadas tienen derecho a poder acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En determinadas circunstancias, las personas interesadas podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Las personas interesadas podrán solicitar la portabilidad de los datos para obtener los datos que han proporcionado en un formato estructurado, de uso común y de lectura mecánica, para ser descargados por sí mismos o transmitidos a otra entidad.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                La persona interesada puede ejercitar sus derechos dirigiendo un correo electrónico a la dirección de correo electrónico <a href="mailto:CONTACTO@DOK7.IO" className="text-primary hover:underline">CONTACTO@DOK7.IO</a>, o en su caso a la dirección física AVDA. BLASCO IBAÑEZ, 25.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Consentimiento menores, ¿Qué pasa si eres menor de edad?</h2>
              <p className="text-muted-foreground leading-relaxed">
                En el supuesto que algunos de nuestros servicios vayan dirigidos específicamente a menores de catorce años, solicitaremos la conformidad de los padres o tutores para la recogida de los datos personales o, en su caso, para el tratamiento automatizado de los datos conforme el artículo 7 de la LOPDGDD.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Exactitud, veracidad y seguridad de los datos, ¿Cómo tratamos tus datos?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                El Usuario es el único responsable de la veracidad y corrección de los datos incluidos, exonerándonos de cualquier responsabilidad al respecto. Los usuarios garantizan y responden, en cualquier caso, de la exactitud, vigencia y autenticidad de los datos personales facilitados, y se comprometen a mantenerlos debidamente actualizados. El usuario acepta proporcionar información completa y correcta en los formularios de registro o suscripción. No responderemos de la veracidad de las informaciones que no sean de elaboración propia y de las que se indique otra fuente, por lo que tampoco asume responsabilidad alguna en cuanto a hipotéticos perjuicios que pudieran originarse por el uso de dicha información.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                También reservaremos el derecho a actualizar, modificar o eliminar la información contenida en la web pudiendo incluso limitar o no permitir el acceso a dicha información. No seremos responsables ante cualquier daño o perjuicio que pudiera sufrir el Usuario como consecuencia de errores, defectos u omisiones, en la información facilitada por el responsable siempre que proceda de fuentes ajenas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Los datos serán tratados de forma confidencial y bajo el sometimiento a medidas técnicas y organizativas de seguridad adecuadas para evitar su alteración, pérdida, tratamiento o acceso no autorizado.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Podrá presentar una reclamación ante la Agencia Española de Protección de Datos, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos, en la dirección postal y/o electrónica indicada en la página <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;

