<script setup lang="ts">
import { computed } from "vue";
import { store } from "../stores/store";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "vue-chartjs";
import { i18n } from "../locales/i18n";

// Register necessary components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

// Compute data for the chart
const data = computed(() => ({
  labels: Array.from(store.totalCounts.keys()),
  datasets: [
    {
      label: i18n.global.t("message.count"),
      backgroundColor: "#989898",
      borderColor: "#4c4c4c",
      data: store.totalCounts,
    },
  ],
}));

// Define options for the chart
const options = {
  responsive: true,
  maintainAspectRatio: true,
};
</script>

<template>
  <!-- Render a Line chart with the computed data and options -->
  <Line ref="line" :data="data" :options="options" />
</template>
