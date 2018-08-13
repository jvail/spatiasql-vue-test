import Vue from "vue";
import App from "./App.vue";

/* eslint-disable no-console */
import { Database } from "spatiasql"
const db = new Database();
db.exec("SELECT sqlite_version(), spatialite_version(), proj4_version(), geos_version()")
  .then(res => {
    console.log(res[0][0].values[0])
  })
  .catch(err => console.log(err));

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
