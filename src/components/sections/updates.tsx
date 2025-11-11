"use client"

import { updates } from '@/lib/updates';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, Tag, Info, Gift } from 'lucide-react';
import { format } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';
import { useParams } from 'next/navigation';

const updateTypeConfig = (dict: any) => ({
  info: { label: dict.info, icon: Info, color: 'bg-blue-500' },
  promotion: { label: dict.promotion, icon: Gift, color: 'bg-green-500' },
  event: { label: dict.event, icon: Calendar, color: 'bg-purple-500' },
  menu: { label: dict.menu, icon: Tag, color: 'bg-yellow-500' },
});

export function Updates({ dict }: { dict: any }) {
  const params = useParams();
  const lang = params.lang === 'en' ? enUS : fr;
  const config = updateTypeConfig(dict.types);

  const activeUpdates = updates.filter(update => update.isActive).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section id="updates" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activeUpdates.map(update => {
            const updateConfig = config[update.type as keyof typeof config];
            const Icon = updateConfig.icon;
            return (
              <Card key={update.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs font-semibold">
                      <Icon className="mr-1.5 h-3.5 w-3.5" />
                      {updateConfig.label}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1.5 h-4 w-4" />
                      <time dateTime={update.date}>
                        {format(new Date(update.date), 'd MMMM yyyy', { locale: lang })}
                      </time>
                    </div>
                  </div>
                  <CardTitle className="pt-4 font-headline text-xl">{update.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{update.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
