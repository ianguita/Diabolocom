<script lang="ts">
import Button from "./Button.vue";
import { i18n } from "../locales/i18n";
import { defineComponent } from "vue";

// Define the Vue component
export default defineComponent({
  components: {
    Button,
  },
  setup() {
    // Make 'i18n' available in the template
    return { i18n };
  },
});
</script>

<template>
  <!-- Render a div with two Button components -->
  <div
    class="flex flex-col gap-2 bg-zinc-900 px-5 py-5 rounded-lg border border-neutral-700"
  >
    <!-- Button to switch the locale to English -->
    <Button
      @click="i18n.global.locale.value = 'en-us'"
      :text="i18n.global.t('message.english')"
      data-testid="english"
    ></Button>
    <!-- Button to switch the locale to French -->
    <Button
      @click="i18n.global.locale.value = 'fr-fr'"
      :text="i18n.global.t('message.french')"
      data-testid="french"
    ></Button>
  </div>
</template>

<!-- Import external styles -->
<style src="../style.css"></style>
