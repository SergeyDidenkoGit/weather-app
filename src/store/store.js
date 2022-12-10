import { createStore } from "vuex";
import { ipModule } from "@/store/ipModule";
import { weatherModule } from "@/store/weatherModule";

export default createStore({
  modules: {
    ip: ipModule,
    weather: weatherModule,
  },
});
