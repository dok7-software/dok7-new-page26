import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AvisoLegal = () => {
  return (
    <div className="min-h-screen bg-section-light">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl mb-12 text-foreground">
            Aviso Legal
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground mb-8">
              El presente Aviso Legal regula el uso del servicio del portal de Internet con dirección, cuyo responsable a efectos identificativos es:
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
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Legislación</h2>
              <p className="text-muted-foreground leading-relaxed">
                Con carácter general las relaciones entre DOK7 SOFTWARE SOLUTIONS, S.L. con los Usuarios de sus servicios telemáticos, presentes en la web, se encuentran sometidas a la legislación y jurisdicción españolas.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Las partes renuncian expresamente al fuero que les pudiera corresponder y someten expresamente a los Juzgados y Tribunales de VALÈNCIA para resolver cualquier controversia que pudiera surgir en la interpretación o ejecución de las presentes condiciones contractuales.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Contenido y Uso</h2>
              <p className="text-muted-foreground leading-relaxed">
                El Usuario queda informado, y acepta, que el acceso a la presente web no supone, en modo alguno, el inicio de una relación comercial con DOK7 SOFTWARE SOLUTIONS, S.L.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                El titular del web no se identifica con las opiniones vertidas en el mismo por sus colaboradores. La Empresa se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su Web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en sus servidores.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Propiedad Intelectual e Industrial</h2>
              <p className="text-muted-foreground leading-relaxed">
                Los derechos de propiedad intelectual del contenido de las páginas web, su diseño gráfico y códigos son titularidad de DOK7 SOFTWARE SOLUTIONS, S.L. y, por tanto, queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos de sus páginas web ni aun citando las fuentes, salvo consentimiento por escrito de DOK7 SOFTWARE SOLUTIONS, S.L. Todos los nombres comerciales, marcas o signos distintos de cualquier clase contenidos en las páginas web de la Empresa son propiedad de sus dueños y están protegidos por ley.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl mb-6 text-foreground">Enlaces (Links)</h2>
              <p className="text-muted-foreground leading-relaxed">
                La presencia de enlaces (links) en las páginas web de DOK7 SOFTWARE SOLUTIONS, S.L. tiene finalidad meramente informativa y en ningún caso supone sugerencia, invitación o recomendación sobre los mismos.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AvisoLegal;

