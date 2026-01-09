export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price?: number;
    imageId: string;
  }
  
  export interface MenuCategory {
    id: 'starters' | 'mainCourses' | 'burgers' | 'africanFlavors' | 'sides' | 'desserts' | 'sorbets' | 'coffeeAndTea' | 'sodas' | 'waters' | 'beers' | 'naturalJuices' | 'localJuices' | 'detox' | 'mocktails' | 'signatures' | 'aperitifs' | 'whiskyLiqueur' | 'cognac' | 'winesByGlass' | 'redWines' | 'whiteWines' | 'roseWines';
    title: string;
    items: MenuItem[];
  }
  
  export const getMenuData = (dict: any): MenuCategory[] => [
    {
      id: 'starters',
      title: dict.starters,
      items: [
        {
          id: 'starter-1',
          name: dict.dishes.miniBrochettes.name,
          description: dict.dishes.miniBrochettes.description,
          price: 8000,
          imageId: 'menu-starter-1',
        },
        {
          id: 'starter-2',
          name: dict.dishes.croquettesTubercules.name,
          description: dict.dishes.croquettesTubercules.description,
          price: 6000,
          imageId: 'menu-starter-2',
        },
        {
            id: 'starter-3',
            name: dict.dishes.veloutePatatesDouces.name,
            description: dict.dishes.veloutePatatesDouces.description,
            price: 6000,
            imageId: '',
        },
        {
            id: 'starter-4',
            name: dict.dishes.saladeFraicheur.name,
            description: dict.dishes.saladeFraicheur.description,
            price: 8000,
            imageId: 'menu-starter-4', 
        },
        {
          id: 'starter-5',
          name: dict.dishes.carpaccioAnanas.name,
          description: dict.dishes.carpaccioAnanas.description,
          imageId: '',
      },
      ],
    },
    {
      id: 'mainCourses',
      title: dict.mainCourses,
      items: [
        {
            id: 'main-chouk-poulet',
            name: dict.dishes.choukouyaPoulet.name,
            description: dict.dishes.choukouyaPoulet.description,
            price: 8500,
            imageId: '',
        },
        {
            id: 'main-chouk-mouton',
            name: dict.dishes.choukouyaMouton.name,
            description: dict.dishes.choukouyaMouton.description,
            price: 9000,
            imageId: '',
        },
        {
            id: 'main-5',
            name: dict.dishes.demiPintadeRoti.name,
            description: dict.dishes.demiPintadeRoti.description,
            price: 10000,
            imageId: '',
        },
        {
            id: 'main-4',
            name: dict.dishes.paveCapitaineRoti.name,
            description: dict.dishes.paveCapitaineRoti.description,
            price: 12000,
            imageId: 'menu-main-4', 
        },
        {
            id: 'main-6',
            name: dict.dishes.gambasGrillees.name,
            description: dict.dishes.gambasGrillees.description,
            price: 14000,
            imageId: '',
        },
        {
            id: 'main-3',
            name: dict.dishes.carreAgneauRoti.name,
            description: dict.dishes.carreAgneauRoti.description,
            price: 18000,
            imageId: 'menu-main-3', 
        },
        {
          id: 'main-fonio',
          name: dict.dishes.fonioCremeux.name,
          description: dict.dishes.fonioCremeux.description,
          price: 7000,
          imageId: '',
        },
        {
          id: 'main-1',
          name: dict.dishes.filetBoeuf.name,
          description: dict.dishes.filetBoeuf.description,
          imageId: '',
        },
      ],
    },
    {
      id: 'burgers',
      title: dict.burgers,
      items: [
        {
          id: 'burger-1',
          name: dict.dishes.lofTerroirFusion.name,
          description: dict.dishes.lofTerroirFusion.description,
          price: 12500,
          imageId: 'menu-burger-1',
        },
        {
          id: 'burger-2',
          name: dict.dishes.lofSupremeFusion.name,
          description: dict.dishes.lofSupremeFusion.description,
          price: 12500,
          imageId: 'menu-burger-2',
        },
        {
          id: 'burger-3',
          name: dict.dishes.lofGreenFusion.name,
          description: dict.dishes.lofGreenFusion.description,
          price: 12500,
          imageId: 'menu-burger-3',
        },
      ]
    },
    {
      id: 'africanFlavors',
      title: dict.africanFlavors.title,
      items: [
        {
          id: 'flavor-1',
          name: dict.dishes.sauceGraine.name,
          description: dict.dishes.sauceGraine.description,
          price: 10000,
          imageId: 'menu-flavor-1',
        },
        {
          id: 'flavor-2',
          name: dict.dishes.saucePistache.name,
          description: dict.dishes.saucePistache.description,
          price: 10000,
          imageId: 'menu-flavor-2',
        },
        {
          id: 'flavor-3',
          name: dict.dishes.sauceGouagouassou.name,
          description: dict.dishes.sauceGouagouassou.description,
          price: 10000,
          imageId: 'menu-flavor-3',
        },
        {
          id: 'flavor-4',
          name: dict.dishes.kedjenouPintade.name,
          description: dict.dishes.kedjenouPintade.description,
          price: 10000,
          imageId: 'menu-flavor-4',
        },
        {
          id: 'flavor-5',
          name: dict.dishes.soupePecheur.name,
          description: dict.dishes.soupePecheur.description,
          price: 10000,
          imageId: 'menu-flavor-5',
        },
        {
          id: 'flavor-6',
          name: dict.dishes.ragoutJarret.name,
          description: dict.dishes.ragoutJarret.description,
          price: 10000,
          imageId: 'menu-flavor-6',
        },
        {
          id: 'flavor-7',
          name: dict.dishes.sauceFeuille.name,
          description: dict.dishes.sauceFeuille.description,
          price: 10000,
          imageId: 'menu-flavor-7',
        },
        {
          id: 'flavor-8',
          name: dict.dishes.sauceWereWere.name,
          description: dict.dishes.sauceWereWere.description,
          price: 10000,
          imageId: 'menu-flavor-8',
        },
        {
          id: 'flavor-9',
          name: dict.dishes.sauceGombo.name,
          description: dict.dishes.sauceGombo.description,
          price: 10000,
          imageId: 'menu-flavor-9',
        },
        {
          id: 'flavor-10',
          name: dict.dishes.sauceArachide.name,
          description: dict.dishes.sauceArachide.description,
          price: 10000,
          imageId: 'menu-flavor-10',
        },
        {
          id: 'flavor-11',
          name: dict.dishes.tchep.name,
          description: dict.dishes.tchep.description,
          price: 10000,
          imageId: 'menu-flavor-11',
        },
      ]
    },
    {
      id: 'sides',
      title: dict.sides,
      items: [
        { id: 'side-1', name: dict.dishes.fonioPilaf.name, description: dict.dishes.fonioPilaf.description, imageId: '' },
        { id: 'side-2', name: dict.dishes.fritesPatateDouce.name, description: dict.dishes.fritesPatateDouce.description, imageId: '' },
        { id: 'side-3', name: dict.dishes.fritesIgname.name, description: dict.dishes.fritesIgname.description, imageId: '' },
        { id: 'side-4', name: dict.dishes.rizCoco.name, description: dict.dishes.rizCoco.description, imageId: '' },
        { id: 'side-5', name: dict.dishes.pureeTaro.name, description: dict.dishes.pureeTaro.description, imageId: '' },
        { id: 'side-6', name: dict.dishes.legumesGrilles.name, description: dict.dishes.legumesGrilles.description, imageId: '' },
        { id: 'side-7', name: dict.dishes.attieke.name, description: dict.dishes.attieke.description, imageId: '' },
        { id: 'side-8', name: dict.dishes.alloco.name, description: dict.dishes.alloco.description, imageId: '' },
      ]
    },
    {
      id: 'desserts',
      title: dict.desserts,
      items: [
        {
          id: 'dessert-1',
          name: dict.dishes.parisBrest.name,
          description: dict.dishes.parisBrest.description,
          price: 7000,
          imageId: '',
        },
        {
          id: 'dessert-2',
          name: dict.dishes.cheesecakeMangue.name,
          description: dict.dishes.cheesecakeMangue.description,
          price: 6500,
          imageId: '',
        },
        {
          id: 'dessert-3',
          name: dict.dishes.tartelettesChocolat.name,
          description: dict.dishes.tartelettesChocolat.description,
          price: 7000,
          imageId: '',
        },
        {
          id: 'dessert-4',
          name: dict.dishes.crumbleAnanas.name,
          description: dict.dishes.crumbleAnanas.description,
          price: 6000,
          imageId: '',
        },
      ],
    },
    {
      id: 'sorbets',
      title: dict.sorbets.title,
      items: [
        { id: 'sorbet-1', name: dict.dishes.sorbetMangue.name, description: dict.dishes.sorbetMangue.description, price: 3500, imageId: 'menu-sorbet-1' },
        { id: 'sorbet-2', name: dict.dishes.sorbetPassion.name, description: dict.dishes.sorbetPassion.description, price: 3500, imageId: 'menu-sorbet-2' },
        { id: 'sorbet-3', name: dict.dishes.sorbetBissap.name, description: dict.dishes.sorbetBissap.description, price: 3500, imageId: 'menu-sorbet-3' },
        { id: 'sorbet-4', name: dict.dishes.sorbetTamarin.name, description: dict.dishes.sorbetTamarin.description, price: 3500, imageId: 'menu-sorbet-4' },
        { id: 'sorbet-5', name: dict.dishes.sorbetBaobab.name, description: dict.dishes.sorbetBaobab.description, price: 3500, imageId: 'menu-sorbet-5' },
        { id: 'sorbet-6', name: dict.dishes.sorbetCitron.name, description: dict.dishes.sorbetCitron.description, price: 3500, imageId: 'menu-sorbet-6' },
      ]
    },
    {
      id: 'signatures',
      title: dict.signatures,
      items: [
        { id: 'sig-1', name: dict.dishes.punchDuLof.name, description: dict.dishes.punchDuLof.description, price: 10000, imageId: '' },
        { id: 'sig-2', name: dict.dishes.sexyBaby.name, description: dict.dishes.sexyBaby.description, price: 10000, imageId: '' },
        { id: 'sig-3', name: dict.dishes.miaNazir.name, description: dict.dishes.miaNazir.description, price: 10000, imageId: '' },
        { id: 'sig-4', name: dict.dishes.perfectIce.name, description: dict.dishes.perfectIce.description, price: 10000, imageId: '' },
        { id: 'sig-5', name: dict.dishes.expressionDuBarman.name, description: dict.dishes.expressionDuBarman.description, price: 10000, imageId: '' },
      ],
    },
    {
      id: 'aperitifs',
      title: dict.aperitifs,
      items: [
        { id: 'ap-1', name: dict.dishes.campari.name, description: '', price: 4000, imageId: '' },
        { id: 'ap-2', name: dict.dishes.aperol.name, description: '', price: 4000, imageId: '' },
        { id: 'ap-3', name: dict.dishes.afro.name, description: '', price: 4000, imageId: '' },
      ],
    },
    {
      id: 'whiskyLiqueur',
      title: dict.whiskyLiqueur,
      items: [
        { id: 'wl-1', name: dict.dishes.jackDaniels.name, description: '', price: 5000, imageId: '' },
        { id: 'wl-2', name: dict.dishes.redLabel.name, description: '', price: 5000, imageId: '' },
        { id: 'wl-3', name: dict.dishes.blackLabel.name, description: '', price: 60000, imageId: '' },
        { id: 'wl-4', name: dict.dishes.chivas.name, description: '', price: 60000, imageId: '' },
        { id: 'wl-5', name: dict.dishes.baileys.name, description: '', price: 60000, imageId: '' },
      ],
    },
    {
      id: 'cognac',
      title: dict.cognac,
      items: [
        { id: 'co-1', name: dict.dishes.hennessyVS.name, description: '', price: 8500, imageId: '' },
        { id: 'co-2', name: dict.dishes.hennessyXO.name, description: '', price: 8500, imageId: '' },
      ],
    },
    {
      id: 'winesByGlass',
      title: dict.winesByGlass,
      items: [
        { id: 'wine-glass-1', name: dict.dishes.wineByGlassWhite.name, description: dict.dishes.wineByGlassWhite.description, price: 5000, imageId: '' },
        { id: 'wine-glass-2', name: dict.dishes.wineByGlassRed.name, description: dict.dishes.wineByGlassRed.description, price: 5000, imageId: '' },
        { id: 'wine-glass-3', name: dict.dishes.wineByGlassRose.name, description: dict.dishes.wineByGlassRose.description, price: 5000, imageId: '' },
      ],
    },
    {
      id: 'redWines',
      title: dict.redWines,
      items: [
        { id: 'red-wine-1', name: dict.dishes.chateauRocDeSegur.name, description: '', price: 35000, imageId: '' },
        { id: 'red-wine-2', name: dict.dishes.laCroixBonis.name, description: '', price: 48000, imageId: '' },
        { id: 'red-wine-3', name: dict.dishes.chateauDesArnaud.name, description: '', price: 35000, imageId: '' },
        { id: 'red-wine-4', name: dict.dishes.coteDuRhoneRocca.name, description: '', price: 30000, imageId: '' },
        { id: 'red-wine-5', name: dict.dishes.nicolasDeBourgueil.name, description: '', price: 28000, imageId: '' },
        { id: 'red-wine-6', name: dict.dishes.sancerreRed.name, description: '', price: 45000, imageId: '' },
        { id: 'red-wine-7', name: dict.dishes.domaineALaBaume.name, description: '', price: 25000, imageId: '' },
        { id: 'red-wine-8', name: dict.dishes.chanvermeil.name, description: '', price: 15000, imageId: '' },
        { id: 'red-wine-9', name: dict.dishes.belleVille.name, description: '', price: 15000, imageId: '' },
        { id: 'red-wine-10', name: dict.dishes.chevalierDore.name, description: '', price: 20000, imageId: '' },
      ],
    },
    {
      id: 'whiteWines',
      title: dict.whiteWines,
      items: [
        { id: 'white-wine-1', name: dict.dishes.sancerreWhite.name, description: '', price: 42000, imageId: '' },
        { id: 'white-wine-2', name: dict.dishes.pouillyFume.name, description: '', price: 42000, imageId: '' },
        { id: 'white-wine-3', name: dict.dishes.sauvignonBlanc.name, description: '', price: 20000, imageId: '' },
        { id: 'white-wine-4', name: dict.dishes.chablis.name, description: '', price: 42000, imageId: '' },
        { id: 'white-wine-5', name: dict.dishes.irresistibleWhite.name, description: '', price: 15000, imageId: '' },
        { id: 'white-wine-6', name: dict.dishes.refugeMoelleux.name, description: '', price: 30000, imageId: '' },
        { id: 'white-wine-7', name: dict.dishes.refugeSec.name, description: '', price: 25000, imageId: '' },
      ],
    },
    {
      id: 'roseWines',
      title: dict.roseWines,
      items: [
        { id: 'rose-wine-1', name: dict.dishes.plaisirRose.name, description: '', price: 15000, imageId: '' },
        { id: 'rose-wine-2', name: dict.dishes.cheminDesSables.name, description: '', price: 15000, imageId: '' },
      ],
    },
    {
        id: 'waters',
        title: dict.waters,
        items: [
          { id: 'water-1', name: dict.dishes.celeste.name, description: '', price: 2500, imageId: '' },
          { id: 'water-2', name: dict.dishes.kirene.name, description: '', price: 3000, imageId: '' },
          { id: 'water-3', name: dict.dishes.perrier.name, description: '', price: 4000, imageId: '' },
        ],
    },
    {
        id: 'beers',
        title: dict.beers,
        items: [
            { id: 'beer-1', name: dict.dishes.beaufort.name, description: '', price: 2000, imageId: '' },
            { id: 'beer-2', name: dict.dishes.heineken.name, description: '', price: 2000, imageId: '' },
            { id: 'beer-3', name: dict.dishes.desperados.name, description: '', price: 2000, imageId: '' },
            { id: 'beer-4', name: dict.dishes.castelle.name, description: '', price: 2000, imageId: '' },
            { id: 'beer-5', name: dict.dishes.corona.name, description: '', price: 2000, imageId: '' },
            { id: 'beer-6', name: dict.dishes.tequila.name, description: '', price: 2000, imageId: '' },
        ]
    },
    {
        id: 'naturalJuices',
        title: dict.naturalJuices,
        items: [
            { id: 'natural-juice-1', name: dict.dishes.orangeJuice.name, description: '', price: 2500, imageId: '' },
            { id: 'natural-juice-2', name: dict.dishes.pineappleJuice.name, description: '', price: 2500, imageId: '' },
            { id: 'natural-juice-3', name: dict.dishes.mangoJuice.name, description: '', price: 2500, imageId: '' },
        ]
    },
    {
        id: 'localJuices',
        title: dict.localJuices,
        items: [
            { id: 'local-juice-1', name: dict.dishes.bissapJuice.name, description: '', price: 2000, imageId: '' },
            { id: 'local-juice-2', name: dict.dishes.gingerJuice.name, description: '', price: 2000, imageId: '' },
            { id: 'local-juice-3', name: dict.dishes.tamarindJuice.name, description: '', price: 2000, imageId: '' },
        ]
    },
    {
        id: 'detox',
        title: dict.detox,
        items: [
            { id: 'detox-1', name: dict.dishes.lofCucumber.name, description: '', price: 2500, imageId: '' },
        ]
    },
    {
        id: 'mocktails',
        title: dict.mocktails,
        items: [
            { id: 'mocktail-1', name: dict.dishes.akwabaLof.name, description: dict.dishes.akwabaLof.description, price: 5000, imageId: '' },
            { id: 'mocktail-2', name: dict.dishes.virginMojito.name, description: dict.dishes.virginMojito.description, price: 5000, imageId: '' },
            { id: 'mocktail-3', name: dict.dishes.boraBora.name, description: dict.dishes.boraBora.description, price: 5000, imageId: '' },
            { id: 'mocktail-4', name: dict.dishes.virginBloodyMary.name, description: dict.dishes.virginBloodyMary.description, price: 5000, imageId: '' },
        ]
    },
    {
      id: 'coffeeAndTea',
      title: dict.coffeeAndTea,
      items: [
        { id: 'coffee-1', name: dict.dishes.minexpresso.name, description: '', price: 2000, imageId: '' },
        { id: 'coffee-2', name: dict.dishes.americano.name, description: '', price: 2000, imageId: '' },
        { id: 'coffee-3', name: dict.dishes.latte.name, description: '', price: 2000, imageId: '' },
        { id: 'coffee-4', name: dict.dishes.cappuccino.name, description: '', price: 2000, imageId: '' },
        { id: 'coffee-5', name: dict.dishes.tea.name, description: '', price: 2000, imageId: '' },
        { id: 'coffee-6', name: dict.dishes.greenBlackTea.name, description: '', price: 2000, imageId: '' },
        { id: 'coffee-7', name: dict.dishes.iceTea.name, description: '', price: 2000, imageId: '' },
        { id: 'coffee-8', name: dict.dishes.camomille.name, description: '', price: 2000, imageId: '' },
        { id: 'coffee-9', name: dict.dishes.homemadeInfusion.name, description: '', price: 2000, imageId: '' },
      ],
    },
    {
      id: 'sodas',
      title: dict.sodas,
      items: [
        { id: 'soda-1', name: dict.dishes.coca.name, description: '', price: 1500, imageId: '' },
        { id: 'soda-2', name: dict.dishes.sprite.name, description: '', price: 1500, imageId: '' },
        { id: 'soda-3', name: dict.dishes.fanta.name, description: '', price: 1500, imageId: '' },
        { id: 'soda-4', name: dict.dishes.schweppes.name, description: '', price: 1500, imageId: '' },
      ],
    },
  ];
