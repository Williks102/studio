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
    dict: any;
};


export function BookingModal({ onOpenChange, dict }: BookingModalProps) {
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
        <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          {dict.bookingModal.title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-background max-h-[90dvh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="font-headline text-2xl text-primary">{dict.bookingModal.title}</DialogTitle>
          <DialogDescription>
            {dict.bookingModal.description}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 overflow-y-auto">
            <div className="px-6 pb-6">
                <BookingForm setModalOpen={handleOpenChange} dict={dict.bookingModal.form} />
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
