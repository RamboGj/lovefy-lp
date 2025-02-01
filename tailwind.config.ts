import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Satoshi: ['Satoshi', 'sans-serif'],
        SatoshiMedium: ['Satoshi-Medium', 'sans-serif'],
        SatoshiBold: ['Satoshi-Bold', 'sans-serif'],
        SatoshiBlack: ['Satoshi-Black', 'sans-serif'],
      },
      colors: {
        brand500: 'var(--brand500)',
        brand400: 'var(--brand400)',
        brand300: 'var(--brand300)',
        brand200: 'var(--brand200)',
        brand100: 'var(--brand100)',

        neutral600: 'var(--neutral600)',
        neutral500: 'var(--neutral500)',
        neutral400: 'var(--neutral400)',
        neutral300: 'var(--neutral300)',
        neutral200: 'var(--neutral200)',
        neutral100: 'var(--neutral100)',

        success500: 'var(--success500)',
        success400: 'var(--success400)',
        success300: 'var(--success300)',
        success200: 'var(--success200)',
        success100: 'var(--success100)',

        error500: 'var(--error500)',
        error400: 'var(--error400)',
        error300: 'var(--error300)',
        error200: 'var(--error200)',
        error100: 'var(--error100)',

        warning500: 'var(--warning500)',
        warning400: 'var(--warning400)',
        warning300: 'var(--warning300)',
        warning200: 'var(--warning200)',
        warning100: 'var(--warning100)',

        feedbackNeutral500: 'var(--feedbackNeutral500)',
        feedbackNeutral400: 'var(--feedbackNeutral400)',
        feedbackNeutral300: 'var(--feedbackNeutral300)',
        feedbackNeutral200: 'var(--feedbackNeutral200)',
        feedbackNeutral100: 'var(--feedbackNeutral100)',

        alphaWhite88: 'var(--alphaWhite88)',
        alphaWhite16: 'var(--alphaWhite16)',
        alphaWhite08: 'var(--alphaWhite08)',
        alphaWhite04: 'var(--alphaWhite04)',

        alphaBlack88: 'var(--alphaBlack88)',
        alphaBlack16: 'var(--alphaBlack16)',
        alphaBlack08: 'var(--alphaBlack08)',
        alphaBlack04: 'var(--alphaBlack04)',
      },
    },
  },
  plugins: [],
} satisfies Config;
