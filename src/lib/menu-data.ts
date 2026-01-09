export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price?: number;
    imageId: string;
  }
  
  export interface MenuCategory {
    id: 'starters' | 'mainCourses' | 'burgers' | 'africanFlavors' | 'sides' | 'desserts' | 'sorbets' | 'drinks';
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
          price: 4000,
          imageId: 'menu-starter-1',
        },
        {
          id: 'starter-2',
          name: dict.dishes.croquettesTubercules.name,
          description: dict.dishes.croquettesTubercules.description,
          price: 4000,
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
            price: 6000,
            imageId: 'menu-starter-4', 
        },
      ],
    },
    {
      id: 'mainCourses',
      title: dict.mainCourses,
      items: [
        {
          id: 'main-fonio',
          name: dict.dishes.fonioCremeux.name,
          description: dict.dishes.fonioCremeux.description,
          price: 7000,
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
            id: 'main-3',
            name: dict.dishes.carreAgneauRoti.name,
            description: dict.dishes.carreAgneauRoti.description,
            price: 15500,
            imageId: 'menu-main-3', 
        },
        {
            id: 'main-4',
            name: dict.dishes.paveCapitaineRoti.name,
            description: dict.dishes.paveCapitaineRoti.description,
            price: 10000,
            imageId: 'menu-main-4', 
        },
        {
            id: 'main-chouk-mouton',
            name: dict.dishes.choukouyaMouton.name,
            description: dict.dishes.choukouyaMouton.description,
            price: 9000,
            imageId: '',
        },
        {
            id: 'main-chouk-poulet',
            name: dict.dishes.choukouyaPoulet.name,
            description: dict.dishes.choukouyaPoulet.description,
            price: 8500,
            imageId: '',
        },
        {
            id: 'main-6',
            name: dict.dishes.gambasGrillees.name,
            description: dict.dishes.gambasGrillees.description,
            price: 14000,
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
      id: 'drinks',
      title: dict.drinks,
      items: [
        {
          id: 'drink-1',
          name: dict.dishes.bissapJuice.name,
          description: dict.dishes.bissapJuice.description,
          price: 2000,
          imageId: 'menu-drink-1',
        },
        {
          id: 'drink-2',
          name: dict.dishes.gingerJuice.name,
          description: dict.dishes.gingerJuice.description,
          price: 2000,
          imageId: 'menu-drink-2',
        },
      ],
    },
  ];