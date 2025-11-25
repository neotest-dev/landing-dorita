import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import portraitImage from "@/assets/psychologist-portrait.jpg";
import { Heart, Brain, Users, BookOpen } from "lucide-react";

const About = () => {
  const competencies = [
    {
      icon: Heart,
      title: "Terapias emocionales",
      color: "text-accent",
    },
    {
      icon: Brain,
      title: "Problemas de conducta",
      color: "text-secondary",
    },
    {
      icon: BookOpen,
      title: "Dificultades escolares",
      color: "text-orange",
    },
    {
      icon: Users,
      title: "Orientación para padres",
      color: "text-primary",
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Sobre <span className="text-secondary">Mí</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Psicóloga infantil dedicada al bienestar emocional de niños y familias
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src={portraitImage}
                alt="Dorita Crizólogo - Psicóloga Infantil"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 shadow-lg">
              <p className="text-primary-foreground font-bold text-2xl">+10</p>
              <p className="text-primary-foreground text-sm">Años de experiencia</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">Dorita Crizólogo</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Psicóloga colegiada especializada en psicología infantil con más de 10 años de experiencia. 
                Mi enfoque humanista y profesional busca acompañar a los niños en su desarrollo emocional, 
                brindando herramientas tanto a los pequeños como a sus familias para superar desafíos y 
                fortalecer vínculos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabajo con metodologías lúdicas y terapéuticas adaptadas a cada edad, creando un espacio 
                seguro donde los niños puedan expresarse libremente y desarrollar todo su potencial.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {competencies.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className={`${item.color} bg-muted p-3 rounded-full`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <p className="font-semibold">{item.title}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;