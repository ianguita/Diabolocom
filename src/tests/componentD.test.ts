import { mount } from "@vue/test-utils";
import ComponentD from "../components/ComponentD.ce.vue";
import { describe, expect, it } from "vitest";
import { i18n } from "../locales/i18n";

// Define selectors for the English and French buttons
const englishButtonSelector = "[data-testid=english]";
const frenchButtonSelector = "[data-testid=french]";

// Mount the component for testing
const wrapper = mount(ComponentD, {
  global: {
    mocks: {
      $t: (msg: string) => msg, // Mock the $t function for i18n
    },
  },
});

describe("componentD", () => {
  // Test case for changing the locale
  it("changes locale", async () => {
    // Expect the initial locale to be 'en-us'
    expect(i18n.global.locale.value).toBe("en-us");
    // Trigger a click event on the French button
    wrapper.find(frenchButtonSelector).trigger("click");
    // Expect the locale to be 'fr-fr' after clicking the French button
    expect(i18n.global.locale.value).toBe("fr-fr");
    // Trigger a click event on the English button
    wrapper.find(englishButtonSelector).trigger("click");
    // Expect the locale to be 'en-us' after clicking the English button
    expect(i18n.global.locale.value).toBe("en-us");
  });
});
