<script setup lang="ts">
import ComponentA from "./components/ComponentA.ce.vue";
import ComponentB from "./components/ComponentB.ce.vue";
import ComponentC from "./components/ComponentC.ce.vue";
import ComponentD from "./components/ComponentD.ce.vue";
</script>

<template>
  <!-- Render a grid with two columns and a gap of 3 -->
  <div class="grid grid-cols-2 gap-3">
    <!-- Render ComponentA, ComponentB, ComponentC, and ComponentD in the grid -->
    <ComponentA />
    <ComponentB />
    <ComponentC />
    <ComponentD />
  </div>
</template>
