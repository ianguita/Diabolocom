import { mount } from "@vue/test-utils";
import ComponentC from "../components/ComponentC.ce.vue";
import { describe, expect, it } from "vitest";
import { store } from "../stores/store";

// Define selector for the reset button
const resetButtonSelector = "[data-testid=reset]";

// Mount the component for testing
const wrapper = mount(ComponentC, {
  global: {
    mocks: {
      $t: (msg: string) => msg, // Mock the $t function for i18n
    },
  },
});

describe("componentC", () => {
  // Test case for clicking the reset button
  it("clicks on reset button", () => {
    // Set the count in the store to 10
    store.count = 10;
    // Trigger a click event on the reset button
    wrapper.find(resetButtonSelector).trigger("click");
    // Expect the count in the store to be 0 after clicking the reset button
    expect(store.count).toBe(0);
  });
});
