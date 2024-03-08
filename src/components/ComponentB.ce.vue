<script lang="ts">
import { defineComponent } from "vue";
import { store } from "../stores/store";
import Chart from "./Chart.vue";
import { i18n } from "../locales/i18n";

// Define the Vue component
export default defineComponent({
  components: {
    Chart,
  },
  setup() {
    // Make 'i18n' and 'store' available in the template
    return { i18n, store };
  },
});
</script>

<template>
  <!-- Render a div with a heading and a Chart component -->
  <div
    class="flex flex-col gap-2 bg-zinc-900 px-5 py-5 rounded-lg border border-neutral-700"
  >
    <!-- Heading displaying the count from the store -->
    <h1 class="text-center" data-testid="count">
      {{ i18n.global.t("message.countN", [store.count]) }}
    </h1>
    <!-- Chart component -->
    <Chart data-testid="chart"></Chart>
  </div>
</template>

<!-- Import external styles -->
<style src="../style.css"></style>
