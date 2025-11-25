import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿A qué edades atiende?",
      answer: "Atiendo a niños desde los 3 hasta los 12 años. Para adolescentes, puedo hacer una evaluación inicial y derivar a colegas especializados si es necesario.",
    },
    {
      question: "¿Cuánto dura una sesión?",
      answer: "Las sesiones individuales duran aproximadamente 50 minutos. Las sesiones familiares pueden extenderse hasta 60-70 minutos dependiendo de las necesidades.",
    },
    {
      question: "¿Con qué frecuencia se realizan las sesiones?",
      answer: "Lo ideal es comenzar con sesiones semanales. Según el progreso del niño, podemos espaciar las sesiones a quincenal o mensual para seguimiento.",
    },
    {
      question: "¿Los padres pueden estar presentes en las sesiones?",
      answer: "En las primeras sesiones y con niños pequeños, sí. A medida que avanzamos, se trabaja con el niño individualmente para generar un espacio de confianza, aunque siempre mantenemos comunicación constante con los padres.",
    },
    {
      question: "¿Cuándo veré resultados?",
      answer: "Cada caso es único. Algunos cambios se notan en las primeras semanas, mientras que otros requieren un proceso más largo. Lo importante es el compromiso de la familia en el proceso terapéutico.",
    },
    {
      question: "¿Emite informes o certificados?",
      answer: "Sí, emito informes psicológicos detallados cuando son requeridos por colegios, consultorios médicos u otras instituciones. También proporciono certificados de asistencia a terapia si son necesarios.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resuelve tus dudas más comunes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;