export type Formula = {
    icon: 'PartyPopper' | 'ShieldCheck' | 'Users';
    title: string;
    shortDescription: string;
    longDescription: string;
  };
  
  export const formulas: Formula[] = [
    {
      icon: 'PartyPopper',
      title: "Brunch",
      shortDescription: "Un moment de partage gourmand et convivial pour vos week-ends.",
      longDescription: "Notre formule brunch est une invitation à la détente et à la gourmandise. Chaque week-end, découvrez un buffet varié avec des saveurs sucrées et salées, des plats chauds, des viennoiseries, des jus frais et des spécialités africaines revisitées. C'est l'occasion parfaite de se retrouver en famille ou entre amis dans une ambiance chaleureuse."
    },
    {
      icon: 'ShieldCheck',
      title: "Expérience culinaire privée",
      shortDescription: "Un chef à votre disposition pour une soirée exclusive et mémorable.",
      longDescription: "Vivez une soirée d'exception avec notre expérience culinaire privée. Un de nos chefs se consacre entièrement à votre table pour créer un menu sur mesure selon vos envies. C'est la formule idéale pour une occasion spéciale, un dîner romantique ou une célébration intime, où chaque plat est une œuvre d'art."
    },
    {
      icon: 'Users',
      title: "Buffet",
      shortDescription: "Une abondance de saveurs pour vos événements et célébrations.",
      longDescription: "Pour vos événements, nous proposons une formule buffet généreuse et variée. Un large éventail de nos meilleures créations, des entrées aux desserts, est présenté pour ravir tous vos convives. Idéal pour les anniversaires, les réceptions professionnelles ou toute autre grande célébration."
    },
  ];
  