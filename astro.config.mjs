import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.anuragpatnaik.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
