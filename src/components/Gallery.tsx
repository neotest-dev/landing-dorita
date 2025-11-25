import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { Play } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      src: gallery1,
      alt: "Sesión de terapia con juegos educativos",
      size: "col-span-2 row-span-2",
    },
    {
      src: gallery2,
      alt: "Sala de terapia infantil",
      size: "col-span-1 row-span-1",
    },
    {
      src: gallery3,
      alt: "Terapia con arte y creatividad",
      size: "col-span-1 row-span-1",
    },
    {
      src: gallery4,
      alt: "Espacio de lectura terapéutica",
      size: "col-span-2 row-span-1",
    },
  ];

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Galería <span className="text-orange">Multimedia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conoce nuestro espacio y metodología de trabajo
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${image.size} relative group overflow-hidden rounded-2xl shadow-lg`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}

          {/* Video placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-2 lg:col-span-1 relative group overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-accent to-secondary cursor-pointer"
          >
            <div className="w-full h-full flex items-center justify-center min-h-[300px]">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-10 w-10 ml-1" fill="white" />
                </div>
                <p className="font-semibold text-lg">Ver video</p>
                <p className="text-sm opacity-90">Metodología de trabajo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;