"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/forms/booking-form"
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

type BookingModalProps = {
    onOpenChange?: (open: boolean) => void;
};


export function BookingModal({ onOpenChange }: BookingModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (onOpenChange) {
      onOpenChange(open);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          Réservez maintenant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-background max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">Réserver une table</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire pour faire une demande de réservation.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 pr-6 -mr-6">
            <div className="pr-1">
                <BookingForm setModalOpen={handleOpenChange} />
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
