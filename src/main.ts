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
import Image from 'primevue/image';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';                     //optional for row
import Galleria from 'primevue/galleria';
import Card from 'primevue/card';

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
    .component('Image', Image)
    .component('DataTable', DataTable)
    .component('Column', Column)
    .component('ColumnGroup', ColumnGroup)
    .component('Row', Row)
    .component('Galleria', Galleria)
    .component('Card', Card)
    .mount('#app')
