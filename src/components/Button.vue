<script setup lang="ts">
// 'text' prop of type String
defineProps({
  text: String,
});
</script>

<template>
  <!-- Button displaying 'text' prop -->
  <button
    class="uppercase px-5 py-2 rounded-lg bg-neutral-800 border border-neutral-700"
  >
    {{ text }}
  </button>
</template>
