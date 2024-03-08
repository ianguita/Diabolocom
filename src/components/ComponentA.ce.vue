<script lang="ts">
import Button from "./Button.vue";
import { store } from "../stores/store";
import { i18n } from "../locales/i18n";
import { defineComponent } from "vue";

// Define the Vue component
export default defineComponent({
  components: {
    Button,
  },
  setup() {
    // Make 'i18n' and 'store' available in the template
    return { i18n, store };
  },
});
</script>

<template>
  <!-- Render a div with two buttons -->
  <div
    class="flex flex-col gap-2 bg-zinc-900 px-5 py-5 rounded-lg border border-neutral-700"
  >
    <!-- Button to increment the store value -->
    <Button
      @click="store.increment()"
      :text="i18n.global.t('message.increment')"
      data-testid="increment"
    ></Button>
    <!-- Button to decrement the store value -->
    <Button
      @click="store.decrement()"
      :text="i18n.global.t('message.decrement')"
      data-testid="decrement"
    ></Button>
  </div>
</template>

<!-- Import external styles -->
<style src="../style.css"></style>
