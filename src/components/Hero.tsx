import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {

  const heroImageUrl = "https://res.cloudinary.com/dgrd5ktrg/image/upload/c_crop,w_500,h_350/v1764045876/dorita_us6wkq.jpg";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
              <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl lg:text-6xl font-bold leading-tight lg:leading-snug xl:leading-[1.2]"
              >
                  Bienestar psicológico para{" "}
                  <span className="text-accent">niños</span> y{" "}
                  <span className="text-secondary">familias</span>
              </motion.h1>

              <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground"
            >
              Apoyo profesional para el desarrollo emocional, conductual y social de los niños.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#contacto">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agenda una consulta
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImageUrl}
                alt="Dorita Crizólogo trabajando con niños"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;