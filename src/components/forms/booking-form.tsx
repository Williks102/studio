"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { fr, enUS } from "date-fns/locale";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DialogFooter } from "../ui/dialog"
import { useParams } from "next/navigation";


interface BookingFormProps {
  setModalOpen: (open: boolean) => void;
  dict: any;
}

export function BookingForm({ setModalOpen, dict }: BookingFormProps) {
  const params = useParams();
  const lang = params.lang === 'en' ? enUS : fr;

  const bookingSchema = z.object({
    name: z.string().min(2, "Le nom est requis."),
    phone: z.string().min(10, "Un numéro de téléphone valide est requis."),
    email: z.string().email("Une adresse e-mail valide est requise."),
    date: z.date({ required_error: "Une date est requise." }),
    time: z.string({ required_error: "Une heure est requise." }),
    guests: z.coerce.number().min(1, "Il doit y avoir au moins 1 personne."),
    message: z.string().optional(),
  })
  
  type BookingFormValues = z.infer<typeof bookingSchema>

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      guests: 1,
      message: "",
    },
  })

  function onSubmit(data: BookingFormValues) {
    const formattedDate = format(data.date, "eeee dd LLLL yyyy", { locale: lang });
    const message = `
      *Nouvelle demande de réservation*

      *Nom & Prénoms:* ${data.name}
      *Téléphone:* ${data.phone}
      *Email:* ${data.email}
      *Date:* ${formattedDate}
      *Heure:* ${data.time}
      *Nombre de personnes:* ${data.guests}
      *Message:* ${data.message || "Aucun"}
    `.trim().replace(/\n\s+/g, '\n');

    const whatsappUrl = `https://wa.me/2250704353535?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    form.reset();
    setModalOpen(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-4 pr-1">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.name}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                  <FormItem>
                  <FormLabel>{dict.phone}</FormLabel>
                  <FormControl>
                      <Input type="tel" {...field} />
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
                  <FormLabel>{dict.email}</FormLabel>
                  <FormControl>
                      <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                  </FormItem>
              )}
              />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>{dict.date}</FormLabel>
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
                            format(field.value, "PPP", { locale: lang })
                          ) : (
                            <span>{dict.chooseDate}</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        locale={lang}
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                        initialFocus
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
                  <FormLabel>{dict.time}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={dict.chooseTime} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="12:00">12:00</SelectItem>
                      <SelectItem value="13:00">13:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="18:00">18:00</SelectItem>
                      <SelectItem value="19:00">19:00</SelectItem>
                      <SelectItem value="20:00">20:00</SelectItem>
                      <SelectItem value="21:00">21:00</SelectItem>
                      <SelectItem value="22:00">22:00</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.guests}</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.message}</FormLabel>
                <FormControl>
                  <Textarea placeholder={dict.specialOccasion} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <DialogFooter className="pt-4 pr-1">
            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? dict.submitting : dict.submit}
            </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
