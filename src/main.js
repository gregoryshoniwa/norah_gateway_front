import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import BootstrapVue3 from "bootstrap-vue-3";

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./assets/custom.scss";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import VueApexCharts from 'vue3-apexcharts';

import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App).use(router);

app.use(VueSweetalert2);
app.use(VueAxios, axios)

app.use(VueApexCharts);


app.use(BootstrapVue3);
app.use(AOS.init());
app.mount("#app");
