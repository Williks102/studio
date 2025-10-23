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
      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">Réserver une table</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire pour faire une demande de réservation.
          </DialogDescription>
        </DialogHeader>
        <BookingForm setModalOpen={handleOpenChange} />
      </DialogContent>
    </Dialog>
  )
}
