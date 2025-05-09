import React from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// Define the type for our class
export interface ClassType {
  title: string;
  price: string;
  color: string;
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un email válido.",
  }),
  phone: z.string().min(8, {
    message: "Por favor ingresa un número telefónico válido.",
  }),
  level: z.string({
    required_error: "Por favor selecciona tu nivel de experiencia.",
  }),
  date: z.date({
    required_error: "Por favor selecciona una fecha para tu clase.",
  }),
  time: z.string({
    required_error: "Por favor selecciona un horario para tu clase.",
  }),
  comments: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ClassReservationFormProps {
  classType: ClassType;
  onClose: () => void;
  isRental?: boolean;
}

const availableTimes = [
  "08:00", "09:00", "10:00", "11:00", "12:00", 
  "13:00", "14:00", "15:00", "16:00", "17:00"
];

export function ClassReservationForm({ classType, onClose, isRental }: ClassReservationFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      comments: "",
    },
  });

  function onSubmit(data: FormValues) {
    // Format the date in Spanish
    const formattedDate = format(data.date, "dd 'de' MMMM 'de' yyyy", { locale: es });
    
    // Create WhatsApp message
    const message = (isRental
      ? `¡Hola! Quiero reservar un arriendo de equipo:\n\n` +
        `📋 *Detalles del Arriendo:*\n`
      : `¡Hola! Quiero reservar una clase de surf:\n\n` +
        `📋 *Detalles de la Reserva:*\n`
    ) +
      `• ${isRental ? 'Equipo' : 'Clase'}: ${classType.title}\n` +
      `• Precio: ${classType.price}\n` +
      `• Nombre: ${data.name}\n` +
      `• Email: ${data.email}\n` +
      `• Teléfono: ${data.phone}\n` +
      `• Nivel: ${data.level}\n` +
      `• Fecha: ${formattedDate}\n` +
      `• Horario: ${data.time} hrs\n` +
      `${data.comments ? `• Comentarios: ${data.comments}\n` : ''}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number (replace with your actual number)
    const whatsappNumber = "56942938748"; // Replace with your actual WhatsApp number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    toast.success("¡Reserva enviada con éxito!", {
      description: "Serás redirigido a WhatsApp para confirmar tu reserva.",
    });
    
    onClose();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="mb-6 text-center">
          <h2 className="text-xl font-bold text-surf-blue-dark">Reservar {classType.title}</h2>
          <p className="text-gray-500">Precio: {classType.price}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="tu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="+56 9 1234 5678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nivel de Experiencia</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu nivel" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="principiante">Principiante (Primera vez)</SelectItem>
                    <SelectItem value="basico">Básico (Algunas clases)</SelectItem>
                    <SelectItem value="intermedio">Intermedio (Me pongo de pie)</SelectItem>
                    <SelectItem value="avanzado">Avanzado (Surfeo regularmente)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP", { locale: es })
                        ) : (
                          <span>Selecciona una fecha</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => 
                        date < new Date(new Date().setHours(0, 0, 0, 0)) // Disable past dates
                      }
                      initialFocus
                      locale={es}
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Horario</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un horario" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {availableTimes.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time} hrs
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comentarios Adicionales (Opcional)</FormLabel>
              <FormControl>
                <textarea 
                  className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="¿Algo más que debamos saber?" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancelar
          </Button>
          <Button 
            type="submit" 
            className={cn(
              "text-white",
              classType.color === "bg-white" ? "bg-surf-coral hover:bg-surf-coral-dark" : "bg-surf-blue hover:bg-surf-blue-dark"
            )}
          >
            Confirmar Reserva
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ClassReservationForm;
