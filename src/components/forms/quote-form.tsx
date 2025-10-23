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
import { handleQuote } from "@/app/actions"

const quoteSchema = z.object({
  name: z.string().min(2, "Le nom est requis."),
  contact: z.string().min(10, "Un contact valide est requis."),
  email: z.string().email("Une adresse e-mail valide est requise."),
  formula: z.string({ required_error: "Une formule est requise." }),
  people: z.coerce.number().min(1, "Le nombre de personnes est requis."),
})

type QuoteFormValues = z.infer<typeof quoteSchema>

export function QuoteForm() {
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

  async function onSubmit(data: QuoteFormValues) {
    const result = await handleQuote(data)
    if (result.success) {
      toast({
        title: "Devis demandé",
        description: "Votre demande de devis a été envoyée avec succès. Nous vous contacterons bientôt.",
      })
      form.reset()
    } else {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: result.message || "Une erreur est survenue.",
      })
    }
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
                <FormLabel>Nom et prénoms</FormLabel>
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
                <FormLabel>Contact</FormLabel>
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
              <FormLabel>Adresse mail</FormLabel>
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
                <FormLabel>Formule</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez une formule" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="brunch">Brunch</SelectItem>
                    <SelectItem value="private-experience">Expérience culinaire privée</SelectItem>
                    <SelectItem value="buffet">Buffet</SelectItem>
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
                <FormLabel>Nombre de personnes</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button size="lg" type="submit" className="w-full md:w-auto" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Envoi..." : "Demander un devis"}
        </Button>
      </form>
    </Form>
  )
}
