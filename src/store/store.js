import { createStore } from "vuex";
import { ipModule } from "@/store/ipModule";
import { weatherModule } from "@/store/weatherModule";
import { autocompleteModule } from "@/store/autocompleteModule";

export default createStore({
  modules: {
    ip: ipModule,
    weather: weatherModule,
    autocomplete: autocompleteModule,
  },
});
