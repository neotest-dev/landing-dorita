import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

// Definición de tipos para los items de la galería
interface GalleryItem {
    type: 'video' | 'image';
    src: string;
    alt: string;
    size: string;
}

const Gallery = () => {
    // Estado para el elemento multimedia seleccionado que se mostrará en el modal
    const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);

    const galleryItems: GalleryItem[] = [
        {
            type: 'video',
            src: 'https://res.cloudinary.com/dgrd5ktrg/video/upload/v1764046552/VID_20251115_175619_nh7rdw.mp4',
            alt: 'Video sobre la metodología de trabajo en terapia infantil',
            size: 'col-span-2 row-span-2',
        },
        {
            type: 'image',
            src: gallery1,
            alt: 'Sala de terapia infantil equipada con juegos',
            size: 'col-span-1 row-span-1',
        },
        {
            type: 'image',
            src: gallery2,
            alt: 'Niño participando en una actividad de arteterapia',
            size: 'col-span-1 row-span-1',
        },
        {
            type: 'image',
            src: gallery3,
            alt: 'Sesión de consejería familiar en un ambiente acogedor',
            size: 'col-span-1 row-span-1',
        },
        {
            type: 'image',
            src: gallery4,
            alt: 'Materiales didácticos y terapéuticos',
            size: 'col-span-1 row-span-1',
        },
        {
            type: 'image',
            src: gallery2,
            alt: 'Niño participando en una actividad de arteterapia',
            size: 'col-span-1 row-span-1',
        },
    ];

    const openModal = (item: GalleryItem) => setSelectedMedia(item);
    const closeModal = () => setSelectedMedia(null);

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
                        Un vistazo a nuestro espacio y metodología de trabajo
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto h-[600px]">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${item.size} relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer`}
                            onClick={() => openModal(item)}
                        >
                            {item.type === 'video' ? (
                                <video
                                    src={item.src}
                                    className="w-full h-full object-cover"
                                    playsInline
                                    autoPlay
                                    muted
                                    loop
                                >
                                    Tu navegador no soporta el tag de video.
                                </video>
                            ) : (
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            )}
                            {/* La descripción en hover ya está implementada aquí */}
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.alt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal para mostrar el contenido multimedia */}
            <AnimatePresence>
                {selectedMedia && (
                    <div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-4xl"
                            onClick={(e) => e.stopPropagation()} // Evita que el clic se propague al fondo
                        >
                            <div className="bg-black/50 p-2 rounded-lg">
                                {selectedMedia.type === 'video' ? (
                                    <video src={selectedMedia.src} className="w-full max-h-[80vh] h-auto rounded-md" controls autoPlay>
                                        Tu navegador no soporta el tag de video.
                                    </video>
                                ) : (
                                    <img src={selectedMedia.src} alt={selectedMedia.alt} className="w-full max-h-[80vh] h-auto rounded-md" />
                                )}
                                {/* Descripción debajo del contenido en el modal */}
                                <p className="text-white text-center mt-3 text-base">
                                    {selectedMedia.alt}
                                </p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="absolute -top-2 -right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold shadow-lg hover:bg-gray-200 transition-colors"
                                aria-label="Cerrar"
                            >
                                &times;
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;