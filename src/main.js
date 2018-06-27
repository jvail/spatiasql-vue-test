import Vue from "vue";
import App from "./App.vue";
import SQL from "sql.js";

let obj = {
  db: new Promise((res, rej) => {
    function wasm(SQL) {
      const db = new SQL.Database();
      res(db);
    }
    require("spatiasql")(wasm);
  })
};

obj.db.then(db => {
  console.log(db.exec("select sqlite_version()")[0].values[0]);
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
