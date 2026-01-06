export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    imageId: string;
  }
  
  export interface MenuCategory {
    id: 'starters' | 'mainCourses' | 'desserts' | 'drinks';
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
            imageId: 'menu-dessert-1', // Placeholder
        },
        {
            id: 'starter-4',
            name: dict.dishes.saladeFraicheur.name,
            description: dict.dishes.saladeFraicheur.description,
            price: 6000,
            imageId: 'menu-starter-1', // Placeholder
        },
      ],
    },
    {
      id: 'mainCourses',
      title: dict.mainCourses,
      items: [
        {
          id: 'main-1',
          name: dict.dishes.fonioCremeux.name,
          description: dict.dishes.fonioCremeux.description,
          price: 7000,
          imageId: 'menu-main-1',
        },
        {
          id: 'main-2',
          name: dict.dishes.demiPintadeRoti.name,
          description: dict.dishes.demiPintadeRoti.description,
          price: 10000,
          imageId: 'menu-main-2',
        },
        {
            id: 'main-3',
            name: dict.dishes.carreAgneauRoti.name,
            description: dict.dishes.carreAgneauRoti.description,
            price: 15500,
            imageId: 'menu-lunch-1', // Placeholder
        },
        {
            id: 'main-4',
            name: dict.dishes.paveCapitaineRoti.name,
            description: dict.dishes.paveCapitaineRoti.description,
            price: 10000,
            imageId: 'menu-lunch-2', // Placeholder
        },
        {
            id: 'main-5',
            name: dict.dishes.choukouyaMouton.name,
            description: dict.dishes.choukouyaMouton.description,
            price: 9000,
            imageId: 'menu-dinner-1', // Placeholder
        },
        {
            id: 'main-6',
            name: dict.dishes.choukouyaPoulet.name,
            description: dict.dishes.choukouyaPoulet.description,
            price: 8500,
            imageId: 'menu-dinner-2', // Placeholder
        },
        {
            id: 'main-7',
            name: dict.dishes.gambasGrillees.name,
            description: dict.dishes.gambasGrillees.description,
            price: 14000,
            imageId: 'menu-main-1', // Placeholder
        },
      ],
    },
    {
      id: 'desserts',
      title: dict.desserts,
      items: [
        {
          id: 'dessert-1',
          name: dict.dishes.thiakry.name,
          description: dict.dishes.thiakry.description,
          price: 3000,
          imageId: 'menu-dessert-1',
        },
        {
          id: 'dessert-2',
          name: dict.dishes.exoticFruitSalad.name,
          description: dict.dishes.exoticFruitSalad.description,
          price: 3500,
          imageId: 'menu-dessert-2',
        },
      ],
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
