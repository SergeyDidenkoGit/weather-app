import { createStore } from "vuex";
import { ipModule } from "@/store/ipModule";

export default createStore({
  modules: {
    ip: ipModule,
  },
});
