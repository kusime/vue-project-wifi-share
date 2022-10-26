import { defineStore } from "pinia";
const duration = 2000;
const alertState = defineStore("alertState", {
  state() {
    return {
      show: false,
      message: "Please wait...",
      type: "info",
      types: {
        info: "info",
        success: "success",
        error: "error",
        warning: "warning",
      },
    };
  },
  actions: {
    closeAlert() {
      setTimeout(() => {
        this.show = false;
        this.message = "Please wait...";
        this.type = "info";
      }, duration);
    },
    showAlert(message: string, type: string): void {
      this.show = true;
      this.message = message;
      this.type = type;
      this.closeAlert();
    },
  },
});
export default alertState;
