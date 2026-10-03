export type GalleryMetaKey =
  | "g1"
  | "g2"
  | "g3"
  | "g4"
  | "g5"
  | "g6"
  | "g7"
  | "g8"
  | "g9"
  | "g10"
  | "g11";

export type GalleryMedia = {
  id: string;
  src: string;
  type: "image" | "video";
  poster?: string;
  grid: string;
  shift: string;
  metaKey: GalleryMetaKey;
};

export const MEDIA = {
  hero: {
    video: "/assets/ram-full-works.mp4",
    poster: "/assets/gallery-03.jpg",
  },
  about: "/assets/gallery-01.jpg",
  cta: "/assets/gallery-04.jpg",
  services: {
    "paint-correction": "/assets/gallery-03.jpg",
    "ceramic-coating": "/assets/gallery-08.jpg",
    "auto-detailing": "/assets/gallery-04.jpg",
    polishing: "/assets/gallery-07.jpg",
    waxing: "/assets/gallery-09.jpg",
    "stain-removal": "/assets/gallery-05.jpg",
    more: "/assets/gallery-10.jpg",
  },
  gallery: [
    {
      id: "g1",
      src: "/assets/gallery-04.jpg",
      type: "image" as const,
      grid: "g1",
      shift: "-.05",
      metaKey: "g1" as const,
    },
    {
      id: "g2",
      src: "/assets/audi-s4.mp4",
      type: "video" as const,
      poster: "/assets/gallery-08.jpg",
      grid: "g2",
      shift: ".06",
      metaKey: "g2" as const,
    },
    {
      id: "g3",
      src: "/assets/gallery-02.jpg",
      type: "image" as const,
      grid: "g3",
      shift: "-.04",
      metaKey: "g3" as const,
    },
    {
      id: "g4",
      src: "/assets/gallery-06.jpg",
      type: "image" as const,
      grid: "g4",
      shift: ".08",
      metaKey: "g4" as const,
    },
    {
      id: "g5",
      src: "/assets/f250-exterior.mp4",
      type: "video" as const,
      poster: "/assets/gallery-04.jpg",
      grid: "g5",
      shift: "-.06",
      metaKey: "g5" as const,
    },
    {
      id: "g6",
      src: "/assets/gallery-08.jpg",
      type: "image" as const,
      grid: "g6",
      shift: ".04",
      metaKey: "g6" as const,
    },
    {
      id: "g7",
      src: "/assets/gallery-01.jpg",
      type: "image" as const,
      grid: "g7",
      shift: "-.08",
      metaKey: "g7" as const,
    },
    {
      id: "g8",
      src: "/assets/audi-maintenance.mp4",
      type: "video" as const,
      poster: "/assets/gallery-05.jpg",
      grid: "g8",
      shift: ".05",
      metaKey: "g8" as const,
    },
    {
      id: "g9",
      src: "/assets/gallery-09.jpg",
      type: "image" as const,
      grid: "g9",
      shift: "-.03",
      metaKey: "g9" as const,
    },
    {
      id: "g10",
      src: "/assets/gallery-10.jpg",
      type: "image" as const,
      grid: "g10",
      shift: ".07",
      metaKey: "g10" as const,
    },
    {
      id: "g11",
      src: "/assets/gallery-07.jpg",
      type: "image" as const,
      grid: "g11",
      shift: "-.04",
      metaKey: "g11" as const,
    },
  ] satisfies readonly GalleryMedia[],
};
