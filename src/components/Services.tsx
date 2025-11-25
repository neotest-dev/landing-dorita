import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, Heart, Users, BrainCircuit, Shapes, GraduationCap } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: ClipboardCheck,
            title: "Evaluación Diagnóstica",
            description: "Análisis integral para identificar el perfil cognitivo, emocional y conductual del niño o adolescente.",
            color: "bg-primary/10 text-primary",
            borderColor: "border-primary/20",
        },
        {
            icon: Heart,
            title: "Terapia Individual",
            description: "Un espacio seguro y personalizado para potenciar la autoestima y la inteligencia emocional.",
            color: "bg-accent/10 text-accent",
            borderColor: "border-accent/20",
        },
        {
            icon: Users,
            title: "Orientación Familiar",
            description: "Estrategias y pautas de crianza para fortalecer la dinámica y comunicación en el hogar.",
            color: "bg-secondary/10 text-secondary",
            borderColor: "border-secondary/20",
        },
        {
            icon: BrainCircuit,
            title: "Apoyo en Aprendizaje",
            description: "Intervención especializada en TDAH, dislexia y otras dificultades académicas.",
            color: "bg-orange/10 text-orange",
            borderColor: "border-orange/20",
        },
        {
            icon: Shapes,
            title: "Talleres Grupales",
            description: "Actividades lúdicas para el desarrollo de habilidades sociales, empatía y trabajo en equipo.",
            color: "bg-accent/10 text-accent",
            borderColor: "border-accent/20",
        },
        {
            icon: GraduationCap,
            title: "Orientación Vocacional",
            description: "Acompañamiento en el proceso de autoconocimiento para una elección de carrera informada.",
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
                            <Card
                                className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${service.borderColor} group`}>
                                <CardHeader>
                                    <div
                                        className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
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