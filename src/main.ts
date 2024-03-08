import { createApp, defineCustomElement } from "vue";
import "./style.css";
import App from "./App.vue";
import { i18n } from "./locales/i18n";
import ComponentA from "./components/ComponentA.ce.vue";
import ComponentB from "./components/ComponentB.ce.vue";
import ComponentC from "./components/ComponentC.ce.vue";
import ComponentD from "./components/ComponentD.ce.vue";

// Create a Vue application with the App component
const app = createApp(App);

// Use the i18n plugin with the Vue application
app.use(i18n);

// Mount the Vue application to an HTML element with the id 'app'
app.mount("#app");

// Define custom elements for each component
const componentA = defineCustomElement(ComponentA);
const componentB = defineCustomElement(ComponentB);
const componentC = defineCustomElement(ComponentC);
const componentD = defineCustomElement(ComponentD);

// Register the custom elements with custom tag names
customElements.define("component-a-window", componentA);
customElements.define("component-b-window", componentB);
customElements.define("component-c-window", componentC);
customElements.define("component-d-window", componentD);
