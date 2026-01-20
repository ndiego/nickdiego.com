import NextImage from "next/image";
import { ReactNode } from "react";

type ImageSize = "default" | "small";

export interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  size?: ImageSize;
  caption?: ReactNode;
  priority?: boolean;
  bordered?: boolean;
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
}: ImageProps) {
  const { wrapperClassName, sizes } = sizeConfig[size];

  return (
    <figure
      className={`my-8 ${size === "small" ? "flex flex-col items-center" : ""}`}
    >
      <div className={wrapperClassName}>
        <NextImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={`w-full h-auto rounded-md ${bordered ? "border border-border" : ""}`}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-foreground [&_a]:transition-colors">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
