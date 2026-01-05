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
          name: dict.dishes.africanSalad.name,
          description: dict.dishes.africanSalad.description,
          price: 4500,
          imageId: 'menu-starter-1',
        },
        {
          id: 'starter-2',
          name: dict.dishes.tunaPastels.name,
          description: dict.dishes.tunaPastels.description,
          price: 3500,
          imageId: 'menu-starter-2',
        },
      ],
    },
    {
      id: 'mainCourses',
      title: dict.mainCourses,
      items: [
        {
          id: 'main-1',
          name: dict.dishes.chickenYassa.name,
          description: dict.dishes.chickenYassa.description,
          price: 8500,
          imageId: 'menu-main-1',
        },
        {
          id: 'main-2',
          name: dict.dishes.beefMaafe.name,
          description: dict.dishes.beefMaafe.description,
          price: 9500,
          imageId: 'menu-main-2',
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