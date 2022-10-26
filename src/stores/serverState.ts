import { defineStore } from "pinia";
import APIs from "@/backend/APIs";

const serverState = defineStore("serverState", {
  state() {
    return {
      online: undefined,
      currentInterval: 0,
    };
  },
  getters: {
    currentServerState(state) {
      return state.online === undefined
        ? "init"
        : state.online
        ? "online"
        : "offline";
    },
  },
  actions: {
    registerMonitor() {
      this.currentInterval = setInterval(async () => {
        this.online = await APIs.online();
        console.log(this.online);
      }, 1500);
    },
    initializeServerState() {
      setTimeout(async () => {
        this.online = await APIs.online(); // immediately try to connect to the API
      }, 500);
    },
    removeInterval() {
      console.log("clear interval > ", this.currentInterval);
      if (this.currentInterval !== 0) {
        clearInterval(this.currentInterval);
      }
    },
  },
});
export default serverState;
