
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="bg-[#0C0F1D] text-white min-h-screen font-sans">
      {/* Navigation */}
      <header className="flex justify-between items-center p-6 border-b border-white/10">
        <h1 className="text-xl font-bold text-[#34E4CB]">BOOST</h1>
        <nav className="space-x-6 text-sm">
          <a href="#services" className="hover:underline">Servicios</a>
          <a href="#cases" className="hover:underline">Casos</a>
          <a href="#contact" className="hover:underline">Contacto</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
          Construimos sistemas de inteligencia operativa para empresas que quieren escalar con datos, automatización y claridad
        </h2>
        <p className="mt-6 text-white/70 max-w-xl mx-auto">
          No vendemos flujos. Creamos plataformas personalizadas que conectan, automatizan y visualizan todo tu negocio.
        </p>
        <Button className="mt-8 bg-[#34E4CB] text-black hover:opacity-90 text-lg px-8 py-6">
          Ver cómo funciona
        </Button>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 bg-[#0E1320]">
        <h3 className="text-3xl font-semibold text-center mb-12">Diseñamos infraestructura digital estratégica</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            ["Automatización Inteligente", "Automatizamos procesos críticos para liberar tiempo y reducir errores."],
            ["Dashboards Personalizados", "Visualiza tu operación en tiempo real con claridad total."],
            ["IA Aplicada", "Integramos modelos que aprenden y predicen para mejorar la toma de decisiones."],
            ["Sistemas Modulares", "Escalabilidad asegurada desde el primer diseño."],
            ["Seguridad de Datos", "Protección y trazabilidad sin comprometer velocidad."],
            ["Visualización de Resultados", "Métricas claras, resultados visibles, mejoras constantes."]
          ].map(([title, desc], i) => (
            <Card key={i} className="bg-[#1B1F2C] border border-white/10 text-white">
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-[#34E4CB]">{title}</CardTitle>
                <p className="text-white/80 text-sm">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="px-6 py-20 bg-[#10141F]">
        <h3 className="text-3xl font-semibold text-center mb-12">Resultados que escalan</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            ["+31% Visibilidad", "Rediseño de dashboards operativos"],
            ["–28% Errores", "Automatización logística"],
            ["+44% Velocidad de respuesta", "Procesamiento inteligente de tickets"]
          ].map(([metric, subtitle], i) => (
            <Card key={i} className="w-64 bg-[#1C1F2D] border border-white/10">
              <CardContent className="p-6">
                <CardTitle className="text-2xl text-[#34E4CB]">{metric}</CardTitle>
                <p className="text-white/70 text-sm mt-2">{subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 bg-[#0C0F1D] border-t border-white/10">
        <h3 className="text-3xl font-semibold text-center mb-8">Solicita tu diagnóstico gratuito</h3>
        <form className="max-w-xl mx-auto space-y-6">
          <Input placeholder="Nombre" />
          <Input placeholder="Empresa" />
          <Input type="email" placeholder="Correo electrónico" />
          <Textarea placeholder="¿Qué proceso te gustaría transformar?" />
          <Button className="w-full bg-[#34E4CB] text-black hover:opacity-90">Enviar</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-white/40 py-8 text-sm bg-[#0C0F1D] border-t border-white/10">
        © {new Date().getFullYear()} BOOST. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Index;
