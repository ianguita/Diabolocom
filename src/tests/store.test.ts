import { expect, describe, it } from "vitest";
import { store } from "../stores/store";

describe("store", () => {
  // Test case for incrementing the count and updating totalCounts
  it("increments count and updates totalCounts", () => {
    // Increment the count in the store
    store.increment();
    // Expect the count in the store to be 1
    // Expect totalCounts to reflect the increment
    expect(store.count).toBe(1);
    expect(store.totalCounts).toEqual([0, 1]);
  });
  // Test case for decrementing the count and updating totalCounts
  it("decrements count and updates totalCounts", () => {
    // Decrement the count in the store
    store.decrement();
    // Expect the count in the store to be 0
    // Expect totalCounts to reflect the decrement
    expect(store.count).toBe(0);
    expect(store.totalCounts).toEqual([0, 1, 0]);
  });
  // Test case for resetting the count and updating totalCounts
  it("resets count and updates totalCounts", () => {
    // Reset the count in the store
    store.reset();
    // Expect the count in the store to be 0
    // Expect totalCounts to reflect the reset
    expect(store.count).toBe(0);
    expect(store.totalCounts).toEqual([0, 1, 0, 0]);
  });
  // Test case for incrementing the count twice and updating totalCounts
  it("increments count twice and updates totalCounts", () => {
    // Increment the count in the store twice
    store.increment();
    store.increment();
    // Expect the count in the store to be 2
    // Expect totalCounts to reflect the two increments
    expect(store.count).toBe(2);
    expect(store.totalCounts).toEqual([0, 1, 0, 0, 1, 2]);
  });
});
