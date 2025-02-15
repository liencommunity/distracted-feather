import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
npx react-native init ServiceXpress
cd ServiceXpress

# Installation des dépendances Firebase et navigation
npm install @react-navigation/native @react-navigation/stack
npm install @react-native-firebase/app @react-native-firebase/auth
npm install @react-native-firebase/firestore
npm install react-native-maps react-native-geolocation-service
npm install react-native-stripe-sdk
