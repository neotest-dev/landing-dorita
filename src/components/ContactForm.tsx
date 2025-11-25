import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "Nombre muy largo"),
  phone: z.string().regex(/^[0-9]{9,15}$/, "Ingresa un número válido (9-15 dígitos)"),
  email: z.string().email("Ingresa un email válido"),
  consultType: z.string().min(1, "Selecciona un tipo de consulta"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000, "Mensaje muy largo"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      consultType: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const whatsappMessage = `Hola, soy ${data.name}.\nTipo de consulta: ${data.consultType}\nTeléfono: ${data.phone}\nEmail: ${data.email}\n\nMensaje: ${data.message}`;
    const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "¡Perfecto!",
      description: "Te estamos redirigiendo a WhatsApp para completar tu consulta.",
    });
    
    reset();
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-muted/50 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-secondary">Contáctame</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Completa el formulario y te contactaré por WhatsApp
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">¿Listo para comenzar?</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Estoy aquí para ayudarte. Completa el formulario y me pondré en contacto contigo 
                lo antes posible para agendar una primera consulta.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Teléfono</p>
                  <p className="text-muted-foreground">+51 999 999 999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-muted-foreground">dorita.crizologo@email.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Consultorio</p>
                  <p className="text-muted-foreground">Av. Principal 123, San Isidro<br/>Lima, Perú</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-card p-8 rounded-3xl shadow-xl border-2 border-border space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  placeholder="Tu nombre completo"
                  {...register("name")}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Celular *</Label>
                <Input
                  id="phone"
                  placeholder="999999999"
                  {...register("phone")}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Tipo de consulta *</Label>
                <Controller
                  name="consultType"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className={errors.consultType ? "border-destructive" : ""}>
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        <SelectItem value="evaluacion">Evaluación psicológica</SelectItem>
                        <SelectItem value="terapia">Terapia infantil</SelectItem>
                        <SelectItem value="familiar">Consejería familiar</SelectItem>
                        <SelectItem value="talleres">Talleres para niños</SelectItem>
                        <SelectItem value="informes">Informes psicológicos</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.consultType && (
                  <p className="text-sm text-destructive">{errors.consultType.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje *</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntame brevemente el motivo de tu consulta..."
                  rows={4}
                  {...register("message")}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar por WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;