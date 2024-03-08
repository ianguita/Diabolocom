<script lang="ts">
import Button from "./Button.vue";
import { store } from "../stores/store";
import { defineComponent } from "vue";
import { i18n } from "../locales/i18n";

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
  <!-- Render a div with a Button component -->
  <div
    class="flex flex-col gap-2 bg-zinc-900 px-5 py-5 rounded-lg border border-neutral-700"
  >
    <!-- Button to reset the store value -->
    <Button
      @click="store.reset()"
      :text="i18n.global.t('message.reset')"
      data-testid="reset"
    ></Button>
  </div>
</template>

<!-- Import external styles -->
<style src="../style.css"></style>
