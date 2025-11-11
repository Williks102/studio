"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const quoteSchema = z.object({
  name: z.string().min(2, "Le nom est requis."),
  contact: z.string().min(10, "Un contact valide est requis."),
  email: z.string().email("Une adresse e-mail valide est requise."),
  formula: z.string({ required_error: "Une formule est requise." }),
  people: z.coerce.number().min(1, "Le nombre de personnes est requis."),
})

type QuoteFormValues = z.infer<typeof quoteSchema>

export function QuoteForm({ dict }: { dict: any }) {
  const { toast } = useToast()

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      people: 1,
    },
  })

  function onSubmit(data: QuoteFormValues) {
    const message = `
      *Nouvelle demande de devis*

      *Nom et prénoms:* ${data.name}
      *Contact:* ${data.contact}
      *Adresse mail:* ${data.email}
      *Formule:* ${data.formula}
      *Nombre de personnes:* ${data.people}
    `.trim().replace(/\n\s+/g, '\n');

    const whatsappUrl = `https://wa.me/2250704353535?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');

    toast({
      title: dict.successTitle,
      description: dict.successDescription,
    })
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.contact}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="formula"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.formula}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={dict.chooseFormula} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="brunch">{dict.formulas.brunch}</SelectItem>
                    <SelectItem value="private-experience">{dict.formulas.private}</SelectItem>
                    <SelectItem value="buffet">{dict.formulas.buffet}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="people"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.people}</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button size="lg" type="submit" className="w-full md:w-auto" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? dict.submitting : dict.submit}
        </Button>
      </form>
    </Form>
  )
}
