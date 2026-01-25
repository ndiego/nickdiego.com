"use client";

import NextImage from "next/image";
import { ReactNode, useState } from "react";
import { Maximize, X } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogClose,
} from "@/components/ui/dialog";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

type ImageSize = "default" | "small" | "wide";

export interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  size?: ImageSize;
  caption?: ReactNode;
  priority?: boolean;
  bordered?: boolean;
  expandable?: boolean;
}

const sizeConfig: Record<
  ImageSize,
  { wrapperClassName: string; sizes: string }
> = {
  default: {
    wrapperClassName: "w-full",
    sizes: "(max-width: 672px) 100vw, 672px",
  },
  small: {
    wrapperClassName: "w-[60%]",
    sizes: "(max-width: 672px) 60vw, 403px",
  },
  wide: {
    wrapperClassName: "w-full lg:w-[calc(100%+8rem)] lg:-ml-16",
    sizes: "(max-width: 672px) 100vw, 800px",
  },
};

export function Image({
  src,
  alt,
  width,
  height,
  size = "default",
  caption,
  priority = false,
  bordered = true,
  expandable = false,
}: ImageProps) {
  const { wrapperClassName, sizes } = sizeConfig[size];
  const [isOpen, setIsOpen] = useState(false);

  const imageElement = (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={`w-full h-auto rounded-md ${bordered ? "border border-border" : ""}`}
    />
  );

  const imageContent = expandable ? (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        className="relative block w-full pointer-events-none md:pointer-events-auto md:cursor-zoom-in group"
        aria-label={`Expand image: ${alt}`}
      >
        {imageElement}
        <span className="hidden md:block absolute top-2 right-2 p-1.5 rounded-md bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize className="h-4 w-4" />
        </span>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Popup
          data-slot="dialog-content"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0"
        >
          <DialogClose
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors cursor-pointer outline-none pointer-events-auto"
            aria-label="Close expanded image"
          >
            <X className="h-6 w-6" />
          </DialogClose>
          <figure
            className="pointer-events-auto max-w-full max-h-full flex flex-col items-center data-[open]:animate-in data-[closed]:animate-out data-[closed]:zoom-out-95 data-[open]:zoom-in-95"
            style={{ width: Math.min(width, 1200) }}
          >
            <NextImage
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="100vw"
              className="w-full max-h-[calc(100vh-8rem)] h-auto rounded-md"
            />
            {caption && (
              <figcaption className="mt-4 text-center text-sm text-white/80 [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-white [&_a]:transition-colors">
                {caption}
              </figcaption>
            )}
          </figure>
        </DialogPrimitive.Popup>
      </DialogPortal>
    </Dialog>
  ) : (
    <div className={wrapperClassName}>{imageElement}</div>
  );

  if (expandable) {
    return (
      <figure
        className={`my-8 ${size === "small" ? "flex flex-col items-center" : ""}`}
      >
        <div className={wrapperClassName}>{imageContent}</div>
        {caption && (
          <figcaption className="mt-3 text-center text-sm text-muted-foreground [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-foreground [&_a]:transition-colors">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure
      className={`my-8 ${size === "small" ? "flex flex-col items-center" : ""}`}
    >
      {imageContent}
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-foreground [&_a]:transition-colors">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
