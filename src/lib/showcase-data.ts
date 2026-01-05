export interface ShowcaseItem {
    id: string;
    badge: string;
    title: string;
    description: string;
    href: string;
    linkText: string;
    imageId: string;
}

export const getShowcaseData = (dict: any): ShowcaseItem[] => [
    {
        id: 'gastronomy',
        badge: dict.gastronomy.badge,
        title: dict.gastronomy.title,
        description: dict.gastronomy.description,
        href: '/menu',
        linkText: dict.gastronomy.linkText,
        imageId: 'showcase-gastronomy',
    },
    {
        id: 'ambiance',
        badge: dict.ambiance.badge,
        title: dict.ambiance.title,
        description: dict.ambiance.description,
        href: '#vibes',
        linkText: dict.ambiance.linkText,
        imageId: 'showcase-ambiance',
    },
    {
        id: 'brunch',
        badge: dict.brunch.badge,
        title: dict.brunch.title,
        description: dict.brunch.description,
        href: '#formulas',
        linkText: dict.brunch.linkText,
        imageId: 'showcase-brunch',
    },
    {
        id: 'events',
        badge: dict.events.badge,
        title: dict.events.title,
        description: dict.events.description,
        href: '#updates',
        linkText: dict.events.linkText,
        imageId: 'showcase-events',
    },
];
