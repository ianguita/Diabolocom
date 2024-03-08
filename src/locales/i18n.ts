import { createI18n } from "vue-i18n";
import * as enUS from "./en-us.json";
import * as frFR from "./fr-fr.json";

// Define messages for each locale
const messages = {
  "en-us": {
    message: {
      ...enUS, // Spread operator to include all properties from enUS
    },
  },
  "fr-fr": {
    message: {
      ...frFR, // Spread operator to include all properties from frFR
    },
  },
};

// Create and export the i18n instance
export const i18n = createI18n({
  locale: "en-us", // Default locale
  fallbackLocale: "en-us", // Fallback locale
  messages, // Messages for each locale
  legacy: false, // Use the new Vue I18n API
});
