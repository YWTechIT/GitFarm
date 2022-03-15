/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";

clientsClaim();
self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

const CACHE_NAME = "offline-html";
const FALLBACK_HTML_URL = "/offline.html";

self.addEventListener("install", async (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.add(FALLBACK_HTML_URL)),
  );
});

self.addEventListener("fetch", (event) => {
  event.request.mode === "navigate" &&
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.open(CACHE_NAME).then((cache) => cache.match("/offline.html")),
      ),
    );
});
