"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type VideoModalProps = {
  image: string;
  title: string;
};

export function VideoModal({ image, title }: VideoModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="group relative flex min-h-[360px] w-full items-center justify-center overflow-hidden rounded-lg text-white shadow-premium">
          <Image src={image} alt={title} fill sizes="100vw" className="object-cover transition duration-700 group-hover:scale-105" />
          <span className="absolute inset-0 bg-navy-950/55" />
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-navy-950 shadow-gold transition group-hover:scale-105">
            <Play className="ml-1 h-8 w-8 fill-current" />
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-navy-950/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[91] w-[min(92vw,980px)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-3 shadow-premium">
          <div className="flex items-center justify-between px-2 pb-3">
            <Dialog.Title className="font-heading text-2xl font-semibold text-slateText">
              {title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Close video">
                <X className="h-5 w-5" />
              </Button>
            </Dialog.Close>
          </div>
          <div className="grid aspect-video place-items-center rounded-md bg-navy-radial text-center text-white">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-gold-400">Video Tour</p>
              <p className="mt-3 text-lg text-white/80">Frontend demo modal ready for a future video embed.</p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
