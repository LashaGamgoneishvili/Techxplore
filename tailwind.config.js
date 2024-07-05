/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // keyframes: {
      //   slideInY: {
      //     "0%": {
      //       transform: "translateY(-5%), translateX(0)",

      //       opacity: "0.5",
      //     },
      //     "100%": {
      //       transform: "translateY(10), translateX(0)",
      //       opacity: "1",
      //     },
      //   },
      // },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-100%)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        // slideInY: {
        //   "0%": { transform: "translateY(-5%)" },
        //   "100%": { transform: "translateX(0)" },
        // },
        slideInX: {
          "0%": {
            // transform: "translateY(-5%)",
            transform: "translateX(-3%)",

            opacity: "0",
          },
          "100%": {
            // transform: "translateY(0)",
            transform: "translateX(-15)",
            opacity: "1",
          },
        },
        slideInY: {
          "0%": {
            transform: "translateY(-5%), translateX(0)",

            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(10), translateX(0)",
            opacity: "1",
          },
        },
        slideOutY: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-5%)",
            opacity: "0",
          },
        },

        customBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
        },
        blinkingBg: {
          "0%, 100%": { transform: "scale(1.93)" },
          "50%": { transform: "scale(2)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        appearHeader: "slideInY  1s ease-out ",
        fadeOut: "fadeOut 2s ease-out forwards",
        appear: "slideInX  0.5s ease-out ",
        appearFromTop: "slideInY 0.5s ease-out ",
        disAppear: "slideOutY  0.5s ease-out ",
        blinkingBg: "blinkingBg 2s ease-out infinite",
        fadeIn: "fadeIn 2s ease-in forwards",
        slideInBigText: "slideIn 0.8s ease-out forwards",
        slideInSmallText: "slideIn 1s ease-out forwards",
        slideInButton: "slideIn 1.2s ease-out forwards",
        customBounce: "customBounce 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
