import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      text: "Dorita ha sido un apoyo fundamental para mi hijo. En solo unos meses vimos cambios increíbles en su comportamiento y confianza.",
      relation: "Madre de paciente",
    },
    {
      name: "Carlos Rodríguez",
      text: "Profesional, empática y dedicada. Mi hija ahora maneja mejor sus emociones gracias a las sesiones con Dorita.",
      relation: "Padre de paciente",
    },
    {
      name: "Ana Martínez",
      text: "Las técnicas que aprendimos en las sesiones familiares han transformado la dinámica en casa. Eternamente agradecidos.",
      relation: "Madre de paciente",
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Lo que dicen las <span className="text-primary">familias</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Testimonios de padres que han confiado en nuestro trabajo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-primary/10 hover:border-primary/30">
                <CardContent className="pt-6">
                  <Quote className="h-10 w-10 text-accent mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.relation}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;