import { defineStore } from "pinia";
import { ref, toRaw } from "vue";

const codeState = defineStore("codeState", {
  state() {
    return {
      Records: [],
      RecordsMonitor: toRaw(ref()),
    };
  },
});
export default codeState;
