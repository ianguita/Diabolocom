import { mount } from "@vue/test-utils";
import ComponentB from "../components/ComponentB.ce.vue";
import { describe, expect, it } from "vitest";
import { i18n } from "../locales/i18n";

// Define selectors for the count and chart elements
const count = "[data-testid=count]";
const chart = "[data-testid=chart]";

// Mount the component for testing
const wrapper = mount(ComponentB, {
  global: {
    mocks: {
      $t: (msg: string) => msg, // Mock the $t function for i18n
    },
    plugins: [i18n], // Use the i18n plugin
  },
});

describe("componentB", () => {
  // Test case for checking the visibility of the count and chart elements
  it("shows count and chart", () => {
    // Expect the count element to be visible
    expect(wrapper.find(count).isVisible()).toBe(true);
    // Expect the chart element to be visible
    expect(wrapper.find(chart).isVisible()).toBe(true);
  });
});
