/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
// Import our custom CSS

import { registerPlugins } from "@/plugins";


import "@/styles/settings.scss";
import "@/assets/scss/sample.scss";
import "@/assets/scss/sidebar.scss";
import "@/assets/scss/admin.scss";
import "@/assets/scss/footer.scss";
import "@/assets/scss/home.scss";
import "@/assets/scss/category.scss";

import "@/assets/scss/review.scss"

import "@/assets/scss/product.scss";
import "@/assets/scss/header.scss";


import "@/assets/scss/review.scss"
import "@/assets/scss/product.scss";
import "@/assets/scss/header.scss";


// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
