import { reactive } from "vue";

// Define and export the reactive store
export const store = reactive({
  count: 0, // Initial count
  totalCounts: [0], // Initial total counts
  increment() {
    // Increment the count and update the graph
    this.count++;
    this.updateGraph();
  },
  decrement() {
    // Decrement the count (if it's greater than 0) and update the graph
    if (this.count > 0) this.count--;
    this.updateGraph();
  },
  reset() {
    // Reset the count and update the graph
    this.count = 0;
    this.updateGraph();
  },
  updateGraph() {
    // Update the total counts with the current count
    this.totalCounts = [...this.totalCounts, this.count];
  },
});
