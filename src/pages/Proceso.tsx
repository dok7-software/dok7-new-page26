import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIShowcase from "@/components/AIShowcase";

const Proceso = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Sección de Proceso */}
        <div className="bg-section-dark">
          <AIShowcase />
        </div>
      </main>
      
      {/* Footer */}
      <div className="bg-section-light">
        <Footer />
      </div>
    </div>
  );
};

export default Proceso;

