/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
                gray: {
                    800: "#2b2b2b",
                },
            },
            fontFamily: {
                body: ["Inter", "sans-serif"],
            },
            fontSize: {
                base: "1rem",
            },
            letterSpacing: {
                tighter: "-0.005em",
            },
            lineHeight: {
                relaxed: "1.5",
            },
            boxSizing: {
                border: "border-box",
            },
            spacing: {
                headerGap: "var(--header-gap)",
                gutter: "var(--gutter)",
                sidebarWidth: "var(--sidebar-width)",
                scrollPaddingTop: "6.5rem",
            },
            gridTemplateColumns: {
                layout: "var(--gutter) var(--sidebar-width) 3rem 1fr var(--gutter)",
            },
            gridTemplateRows: {
                layout: "var(--header-height) var(--header-gap) 1fr calc(var(--gutter) + 3rem)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
