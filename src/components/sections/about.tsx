export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Á propos de nous
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Né de la passion pour les saveurs africaines et du désir de les sublimer, Le Lof est un lieu où la tradition rencontre la modernité. Ici, chaque assiette raconte une histoire, celle d'un continent riche en couleurs, en épices et en émotions. Notre équipe de passionnés vous promet un voyage gustatif inoubliable, entre authenticité et créativité.
          </p>
        </div>
        <div className="mt-12 rounded-lg border bg-card p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold font-headline text-primary">Nos horaires d'ouverture</h3>
            <div className="mt-4 flex flex-col items-center justify-center space-y-2 text-foreground/80 md:flex-row md:space-x-8 md:space-y-0">
                <p><span className="font-semibold">Journée :</span> 11H - 15H</p>
                <p><span className="font-semibold">Soir :</span> 18H - 00H</p>
            </div>
        </div>
      </div>
    </section>
  )
}