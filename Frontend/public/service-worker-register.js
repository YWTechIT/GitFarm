/* eslint-disable no-restricted-globals */
import { Workbox } from "workbox-window";

const { MODE } = process.env;

export default function registerServiceWorker() {
  if (MODE !== "production") return;

  if ("serviceWorker" in navigator) {
    const wb = new Workbox("service-worker.js");

    wb.addEventListener("installed", (event) => {
      if (event.isUpdate) {
        if (confirm("New app update is available!. Click OK to refresh")) {
          window.location.reload();
        }
      }
    });
    wb.register();
  }
}
