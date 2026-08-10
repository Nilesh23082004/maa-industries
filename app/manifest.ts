import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maa Industries",
    short_name: "Maa Industries",
    description:
      "Heavy CNC machining, VMC turning, and precision component manufacturing in Rakhial, Ahmedabad.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#ff6a1a",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
