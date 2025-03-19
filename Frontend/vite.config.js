import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",  // Use "/" instead of "./" for proper routing
  build: {
    outDir: "dist",
  },
});
