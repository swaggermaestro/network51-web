'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b2e1309550a2d65020bcb8de0b2f9179",
"assets/AssetManifest.bin.json": "9388117d9fecfb18b042e1a9fcf7f864",
"assets/AssetManifest.json": "4d1ecda9f884903c99093944d7677fea",
"assets/assets/fonts/Urbanist-Black.ttf": "06b9bd346b763cf5ad3cc2ace60a2f21",
"assets/assets/fonts/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/assets/fonts/Urbanist-ExtraBold.ttf": "f4a05764495d2286312d1c6edd9513b4",
"assets/assets/fonts/Urbanist-Light.ttf": "46ffc15bcd0fb7da54fc241cb43ece28",
"assets/assets/fonts/Urbanist-Medium.ttf": "9ffbd4b23b829ddd499aaf5eb925a86c",
"assets/assets/fonts/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/fonts/Urbanist-SemiBold.ttf": "ae731014b8aa4267df78b8e854d006ef",
"assets/assets/images/52418822654_1877431fac_b.jpg": "9e16dcc1a79ba39448d7b24240f3e316",
"assets/assets/images/avatar.52324017.png": "523240175adcb6ca6f06838fded11367",
"assets/assets/images/BC2021_Gallery2.jpg": "1c310e1371253533bcb7dc8784ce3b99",
"assets/assets/images/bootcamp-full-body-workout.jpg": "4db84361beb86e8590972fd04c654661",
"assets/assets/images/ChristoWiese.jpg": "839f4ee0428a5dbd1c474a3f4d5643e8",
"assets/assets/images/conference.jpg": "4a430486fde38bd723730583892b2b9b",
"assets/assets/images/hero-great-chefs-dinner.jpg": "a5dbd3785a46251d80773bc581852328",
"assets/assets/images/JacquesConcerned.png": "a5c3fb7f9eb6a439925ba3bfe1d0057c",
"assets/assets/images/jon%2520sean.png": "b12dc09b61d6ff81121f47d77d14606c",
"assets/assets/images/pexels-photo-114296.jpeg": "44d72d5b449b41c47814da570c53e3ec",
"assets/assets/images/profilepic1.png": "c9f35a69d8e5362da968305b1b20d1f8",
"assets/assets/images/profilepic2.png": "c3dba53be60366e2a574a03220b55a05",
"assets/assets/images/rugby.jpg": "36eb4c6f5facf2f38da0da306b005fd5",
"assets/assets/images/Screenshot-2023-11-29-at-8.59.38-AM-1024x698.png": "0bf737f3cd1fd27f3cd75004b503e929",
"assets/assets/images/siya-kolisi-portrait.png": "bbcefaed47168460ab8561c62ce662bf",
"assets/assets/logos/google.png": "53679787545a8a5fd223e50d35b4b293",
"assets/assets/logos/huis-marais-logo.jpg": "da57fb8cf3a045501262c3f886cbb779",
"assets/assets/logos/ic_home.svg": "3248814d051a2c8ef4a463f4a0619d52",
"assets/assets/logos/linkedin.png": "9627eab4effc6fcc419b3790344694d8",
"assets/assets/logos/N51.png": "dd2c42bdd5fa1892edf8bfac6a472f54",
"assets/assets/logos/network51_full_logo.svg": "2ad99b0456e39961245d28caae02902f",
"assets/assets/logos/Stellenbosch_University_New_Logo.jpg": "823151e8a65aeca0edb83dcbd3a7d5b0",
"assets/assets/logos/Zwartkop.jpg": "ed6e978d1805db3c54c499b737699352",
"assets/FontManifest.json": "3d2e91b5d179ec05e6045f440b0f3b78",
"assets/fonts/MaterialIcons-Regular.otf": "359a377e23cf08ff7af6253908ce7780",
"assets/network51_white.png": "a05a656956f7ff65634115d348ba56e8",
"assets/NOTICES": "337158ac71272c12875d1c42532ee723",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "3afdc74ef05f1092bf4a31f8ce3788f3",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "72f9098b7a713c7ec4dc8a3fa86ba0f9",
"icons/Icon-192.png": "8d02d42c70b9b047c83743df51ed8d2e",
"icons/Icon-512.png": "edc66ec3c7ad2172ea89b249558e63e0",
"icons/Icon-maskable-192.png": "8d02d42c70b9b047c83743df51ed8d2e",
"icons/Icon-maskable-512.png": "edc66ec3c7ad2172ea89b249558e63e0",
"index.html": "aec268d4b62f354ac7827ef744a10a13",
"/": "aec268d4b62f354ac7827ef744a10a13",
"main.dart.js": "23db0726578dad28b78a4eabe587fd29",
"manifest.json": "c55e713a054ccb7bdc82b9461457a922",
"version.json": "3996b7f42b55ce779f9305991bc841e2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
