import { mount } from "@vue/test-utils";
import ComponentA from "../components/ComponentA.ce.vue";
import { describe, expect, it } from "vitest";
import { store } from "../stores/store";

// Define selectors for the increment and decrement buttons
const incrementButtonSelector = "[data-testid=increment]";
const decrementButtonSelector = "[data-testid=decrement]";

// Mount the component for testing
const wrapper = mount(ComponentA, {
  global: {
    mocks: {
      $t: (msg: string) => msg, // Mock the $t function for i18n
    },
  },
});

describe("componentA", () => {
  it("clicks on increment button", () => {
    // Expect the initial count to be 0
    expect(store.count).toBe(0);
    // Trigger a click event on the increment button
    wrapper.find(incrementButtonSelector).trigger("click");
    // Expect the count to be 1 after clicking the increment button
    expect(store.count).toBe(1);
  });
  it("clicks on decrement button twice", () => {
    // Expect the initial count to be 1
    expect(store.count).toBe(1);
    // Trigger a click event on the decrement button
    wrapper.find(decrementButtonSelector).trigger("click");
    // Expect the count to be 0 after clicking the decrement button
    expect(store.count).toBe(0);
    // Trigger another click event on the decrement button
    wrapper.find(decrementButtonSelector).trigger("click");
    // Expect the count to still be 0 after clicking the decrement button again
    expect(store.count).toBe(0);
  });
});
