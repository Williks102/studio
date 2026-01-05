"use client"

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getShowcaseData } from '@/lib/showcase-data';

export function Showcase({ dict }: { dict: any }) {
    const showcaseItems = getShowcaseData(dict);

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {showcaseItems.map((item) => {
                        const image = PlaceHolderImages.find((img) => img.id === item.imageId);
                        return (
                            <Link href={item.href} key={item.id} className="group block overflow-hidden rounded-lg">
                                <div className="relative h-96">
                                    {image && (
                                        <Image
                                            src={image.imageUrl}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            data-ai-hint={image.imageHint}
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                        <div className="mb-2">
                                            <span className="inline-block rounded-full bg-accent/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground backdrop-blur-sm">
                                                {item.badge}
                                            </span>
                                        </div>
                                        <h3 className="font-headline text-3xl font-bold">{item.title}</h3>
                                        <p className="mt-2 max-w-xs text-sm">{item.description}</p>
                                        <div className="mt-4 flex items-center text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <span>{item.linkText}</span>
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
