import Image from 'next/image';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getMenuData, MenuCategory, MenuItem } from '@/lib/menu-data';

type MenuPageProps = {
    params: { lang: Locale };
};

const MenuCard = ({ item, currency }: { item: MenuItem; currency: string }) => {
    const image = PlaceHolderImages.find((img) => img.id === item.imageId);

    return (
        <Card className="overflow-hidden flex flex-col">
            {image && (
                <div className="relative aspect-[4/3] w-full">
                    <Image
                        src={image.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                    />
                </div>
            )}
            <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription>{item.description}</CardDescription>
                <p className="mt-4 text-lg font-semibold text-foreground self-end">
                    {item.price.toLocaleString('fr-FR')} {currency}
                </p>
            </CardContent>
        </Card>
    );
};

const MenuSection = ({ category }: { category: MenuCategory; }) => (
    <section id={category.id} className="py-8 md:py-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8">
            {category.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((item) => (
                <MenuCard key={item.id} item={item} currency="FCFA" />
            ))}
        </div>
    </section>
);

export default async function MenuPage(props: MenuPageProps) {
    const { params } = props;
    const { lang } = params;
    const dict = await getDictionary(lang);
    const menuData = getMenuData(dict.menuPage);

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header dict={{ ...dict.header, bookingModal: dict.bookingModal }} />
            <main className="flex-1">
                <div className="container mx-auto px-4 md:px-6 py-16">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                            {dict.menuPage.title}
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            {dict.menuPage.description}
                        </p>
                    </div>

                    {menuData.map((category) => (
                        <MenuSection key={category.id} category={category} />
                    ))}
                </div>
            </main>
            <Footer dict={dict.footer} />
        </div>
    );
}