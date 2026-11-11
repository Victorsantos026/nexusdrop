import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tinta: "#14122B",
        violeta: { 50: "#F5F3FF", 100: "#EDE9FE", 500: "#7C5CFC", 600: "#6A45F0", 700: "#5632D6" },
        indigo: { 500: "#4F6BFF" },
      },
      fontFamily: { sans: ["var(--fonte-inter)", "system-ui", "sans-serif"] },
      boxShadow: {
        suave: "0 10px 40px -12px rgba(106,69,240,.25)",
        tela: "0 40px 80px -30px rgba(40,25,110,.45), 0 8px 24px -8px rgba(40,25,110,.2)",
      },
    },
  },
  plugins: [],
};
export default config;
