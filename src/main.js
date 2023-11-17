import { createApp } from 'vue'
import App from '@src/App.vue'
import router from "@src/router";

import "@src/styles/styles.scss";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);

app
    .use(vuetify)
    .use(router);

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark-theme");
}

app.mount('#app');
