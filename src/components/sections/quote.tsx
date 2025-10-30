import { QuoteForm } from "@/components/forms/quote-form"

export function Quote() {
  return (
    <section id="quote" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Faire une Reservation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Organisez votre prochain événement avec nous. Remplissez le formulaire ci-dessous.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border bg-card p-8 shadow-sm">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  )
}
