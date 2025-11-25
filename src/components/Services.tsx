import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, Heart, Users, Presentation, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Evaluación psicológica",
      description: "Evaluaciones completas para identificar necesidades específicas del niño",
      color: "bg-primary/10 text-primary",
      borderColor: "border-primary/20",
    },
    {
      icon: Heart,
      title: "Terapia infantil",
      description: "Sesiones terapéuticas individuales adaptadas a cada niño",
      color: "bg-accent/10 text-accent",
      borderColor: "border-accent/20",
    },
    {
      icon: Users,
      title: "Consejería familiar",
      description: "Orientación y apoyo para fortalecer vínculos familiares",
      color: "bg-secondary/10 text-secondary",
      borderColor: "border-secondary/20",
    },
    {
      icon: Presentation,
      title: "Talleres para niños",
      description: "Talleres grupales de habilidades sociales y emocionales",
      color: "bg-orange/10 text-orange",
      borderColor: "border-orange/20",
    },
    {
      icon: FileText,
      title: "Informes psicológicos",
      description: "Informes profesionales detallados para colegios e instituciones",
      color: "bg-primary/10 text-primary",
      borderColor: "border-primary/20",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Mis <span className="text-accent">Servicios</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Atención especializada y personalizada para cada necesidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${service.borderColor} group`}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;