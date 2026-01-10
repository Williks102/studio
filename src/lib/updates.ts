export interface Update {
    id: string;
    date: string;
    title: string;
    content: string;
    type: 'info' | 'promotion' | 'event' | 'menu';
    isActive: boolean;
  }
  
  export const updates: Update[] = [
    {
      id: '1',
      date: '2025-12-13',
      title: 'Nouveau menu de saison',
      content: 'Découvrez notre nouvelle carte automnale avec des plats aux saveurs d\'Afrique de l\'Ouest revisités.',
      type: 'menu',
      isActive: true
    },
    {
      id: '2',
      date: '2025-12-13',
      title: 'Soirée Live Acoustique',
      content: 'Ce vendredi, laissez-vous emporter par une ambiance musicale unique avec notre duo acoustique. Réservation conseillée !',
      type: 'event',
      isActive: true
    },
    {
        id: '3',
        date: '2024-11-01',
        title: 'Promotion Afterwork',
        content: 'Du mardi au jeudi, de 18h à 20h, profitez de -20% sur tous nos cocktails.',
        type: 'promotion',
        isActive: false
    },
    {
        id: '4',
        date: '2024-10-25',
        title: 'Fermeture exceptionnelle',
        content: 'Le restaurant sera exceptionnellement fermé le lundi 28 octobre pour une privatisation. Nous vous retrouvons dès mardi !',
        type: 'info',
        isActive: false
      }
  ];
  