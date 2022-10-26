// really need to have a separate file to manage the backend  interact...
import Firebase from "@/backend/firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3hnCr53ymWbVd8EHIYxUQkV363AZ8w_Y",
  authDomain: "wifi-share-1e6ca.firebaseapp.com",
  databaseURL:
    // "https://wifi-share-1e6ca-default-rtdb.asia-southeast1.firebasedatabase.app",
    "http://127.0.0.1:9000/?ns=wifi-share-1e6ca",
  projectId: "wifi-share-1e6ca",
  storageBucket: "wifi-share-1e6ca.appspot.com",
  messagingSenderId: "113886751340",
  appId: "1:113886751340:web:bd6335935c01f102378649",
};

// export the PATH to keep the router can dynamic change
export const PATH = {
  BASE_URI: "wifi-share",
  RECORDS: "RECORDS",
  RECORDS_CHECKOUT: () => [PATH.BASE_URI, PATH.RECORDS].join("/"),
};

const db = new Firebase(firebaseConfig);

const APIs = {
  async handlerRecords() {
    // this is a function to determine whether to make an initialized
    const globalPostsChk = await db.checkoutValue(PATH.RECORDS_CHECKOUT());
    if (!globalPostsChk.state) {
      // not initialized RECORDS
      await db.updateValue(PATH.RECORDS_CHECKOUT(), [], false);
    }
    // already initialized RECORDS
    return true;
  },
  async addRecord(record: object) {
    return await db.updateValue(PATH.RECORDS_CHECKOUT(), record, true);
  },

  async online() {
    return await db.serverOnline(PATH.BASE_URI);
  },

  async regRecordsMonitor(reactive: any) {
    console.log(">>", reactive);
    return await db.startMonitoringNormal(PATH.RECORDS_CHECKOUT(), reactive);
  },
  // unregisterMonitors
  unregisterMonitors(monitor: () => void) {
    return db.stopMonitoring(monitor);
  },
};

export default APIs;
