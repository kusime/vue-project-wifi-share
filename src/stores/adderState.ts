import { defineStore } from "pinia";
import getDate from "@/pubFunctions/getDate";
import randomUUID from "@/pubFunctions/randomUUID";
import alertState from "@/stores/alertState";
import APIs from "@/backend/APIs";
const navState = defineStore("adderState", {
  state() {
    return {
      SSID: "",
      PASSWORD: "",
      DATE: "",
    };
  },
  getters: {
    dataPackage(state) {
      // use this to get the metadata
      return {
        SSID: state.SSID,
        PASSWORD: state.PASSWORD,
        DATE: getDate(),
        UUID: randomUUID(),
      };
    },
  },
  actions: {
    clearInputs() {
      this.SSID = "";
      this.PASSWORD = "";
    },
    async onSubmit() {
      const alert = alertState();
      console.log("onSubmit >>", this.dataPackage);
      if (this.SSID === "" || this.PASSWORD === "") {
        alert.showAlert("Please enter some values..", alert.types.warning);
        return;
      }
      // do not let the state between state have some connection , the state will only be used controlling the views
      if (await APIs.online()) {
        await APIs.addRecord(this.dataPackage);
        alert.showAlert("Submit Success ..", alert.types.success);
        this.clearInputs();
        return;
      }
      alert.showAlert("Server Lost Connection...", alert.types.error);
    },
  },
});
export default navState;
