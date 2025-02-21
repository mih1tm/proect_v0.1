import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import vuetify from './plugins/vuetify'
import store from './stores/store.js'

const app = createApp(App)

app.use(store)
app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
