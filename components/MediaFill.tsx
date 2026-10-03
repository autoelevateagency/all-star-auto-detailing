import type { JSX } from "react";

type MediaFillProps = {
  src: string;
  type: "image" | "video";
  alt?: string;
  poster?: string;
  className?: string;
  priority?: boolean;
};

export const MediaFill = ({
  src,
  type,
  alt = "",
  poster,
  className = "media",
  priority = false,
}: MediaFillProps): JSX.Element => {
  if (type === "video") {
    return (
      <div className={className} aria-hidden={alt ? undefined : true}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          preload={priority ? "auto" : "metadata"}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className={className} aria-hidden={alt ? undefined : true}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} />
    </div>
  );
};
