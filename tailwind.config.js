module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        page: "hsl(var(--page))",
        topbar: "hsl(var(--topbar))",
        card: "hsl(var(--card))",
        sidebar: "hsl(var(--sidebar))",
        "button-ghost": "hsl(var(--button-ghost))",
        "quick-action-violet": "hsl(var(--quick-action-violet))",
        "quick-action-pink": "hsl(var(--quick-action-pink))",
        "quick-action-blue": "hsl(var(--quick-action-blue))",
        "quick-action-green": "hsl(var(--quick-action-green))",
        "quick-action-orange": "hsl(var(--quick-action-orange))",
        "quick-action-indigo": "hsl(var(--quick-action-indigo))",
        "metric-tint-violet": "hsl(var(--metric-tint-violet))",
        "metric-tint-green": "hsl(var(--metric-tint-green))",
        "metric-tint-orange": "hsl(var(--metric-tint-orange))",
        "metric-tint-blue": "hsl(var(--metric-tint-blue))",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
