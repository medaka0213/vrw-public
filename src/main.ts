import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'primeflex/primeflex.css';
import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import AutoComplete from 'primevue/autocomplete';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';

import { FontAwesome } from "@/plugins/font-awesome.ts"


createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue)
    .component("fa", FontAwesome)
    .component('Button', Button)
    .component('Checkbox', Checkbox)
    .component('AutoComplete', AutoComplete)
    .component('Dropdown', Dropdown)
    .component('InputNumber', InputNumber)
    .mount('#app')
