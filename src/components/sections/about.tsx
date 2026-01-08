export function About({ dict }: { dict: any }) {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            {dict.description}
          </p>
        </div>
        <div className="mt-12 rounded-lg border bg-card p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold font-headline text-primary">{dict.hoursTitle}</h3>
            <div className="mt-4 flex flex-col items-center justify-center space-y-2 text-muted-foreground md:flex-row md:space-x-8 md:space-y-0">
                <p>{dict.weekHours}</p>
                <p>{dict.sundayHours}</p>
            </div>
        </div>
      </div>
    </section>
  )
}
