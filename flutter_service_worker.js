'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "26f6871dc27ff12220cdde4c1765e9c9",
"assets/AssetManifest.bin.json": "7df2852e710ebd9b0ed6f2105eb9c7d7",
"assets/AssetManifest.json": "2fc6f48d0d31c65cbc875029b1a6567d",
"assets/FontManifest.json": "83b1ace5135595fbfd5ef2e19df55aac",
"assets/fonts/MaterialIcons-Regular.otf": "ed851d5b1574456ce8fefccc8c81c44b",
"assets/NOTICES": "cddb40bddaf17fe79b63547e0077f259",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/res/fonts/BillSmith.ttf": "67592b9d5da72c1fd22dc59bdc2669ab",
"assets/res/fonts/KumbhSans-Bold.ttf": "77dcc56c8b4c555de97279047829eb8c",
"assets/res/fonts/KumbhSans-ExtraBold.ttf": "8877db37fd35d38c8cdd8c75c77d7fc3",
"assets/res/fonts/KumbhSans-Light.ttf": "437a0a83bf3e0d68d46e5b622456f307",
"assets/res/fonts/KumbhSans-Medium.ttf": "cf06877944512b3fff5dad023bb86ee0",
"assets/res/fonts/KumbhSans-Regular.ttf": "ccee8d1a95492b85c2eca5e17aefa2a6",
"assets/res/icons/applogo.png": "f42014ce152c9057b224fc99001334c4",
"assets/res/icons/back.png": "fa4f114d499e4c56983c82a6bc480b27",
"assets/res/icons/badge.png": "e4f59d3d8144c9f5ab1bd6cc21871946",
"assets/res/icons/blink.png": "bd70a25e8c7f6618b7bf851288704e36",
"assets/res/icons/close.png": "4719cc3e5c02830341ce1ec56ebbb722",
"assets/res/icons/cup.png": "63b4ab7dfb222a00b8d0db7623896217",
"assets/res/icons/download_app.png": "3765b8986add00f9dc45879d51351834",
"assets/res/icons/forward.png": "f6c6b8fda967d9d03b67dfa6231a6aab",
"assets/res/icons/group.png": "caf7a1c845af570624239c9b5c78955c",
"assets/res/icons/heart.png": "1ffd02d80efabecc34137ccd52023436",
"assets/res/icons/home.png": "91e60f3f8208d1eb6269617347c13c35",
"assets/res/icons/icon1.png": "a25918a2863fa71b71ae66686804c72f",
"assets/res/icons/icon2.png": "50cd5d47a07a9df532796df9333513bb",
"assets/res/icons/icon3.png": "57fd8eccfd6d40a510e07cd2edfe3366",
"assets/res/icons/icon4.png": "6b5da73cfbd109a7fa016ed8cdd87553",
"assets/res/icons/icon5.png": "cbe6f9539b5dbf270ab2061da33f8961",
"assets/res/icons/icon6.png": "57fd8eccfd6d40a510e07cd2edfe3366",
"assets/res/icons/icon_loc.png": "43f1d361da623e31ef32b45b361db967",
"assets/res/icons/mail.png": "eb3a68cfc2fb31fe684c4f5f0427b49a",
"assets/res/icons/medical.png": "d30f867098dceca3f99bb56130eeb1c9",
"assets/res/icons/menu.png": "8ac353e0fab31a86c237f1956ac179f5",
"assets/res/icons/message.png": "578c49b7bb396bae2deddd0634abcf38",
"assets/res/icons/nav2.png": "4e5707d0e4665810ab9e47adcce24cc2",
"assets/res/icons/nav3.png": "45826f6e983b2923a6b79dc832a6b8bd",
"assets/res/icons/nav4.png": "bcfa62d5baca303d75c4a7839ce66b81",
"assets/res/icons/nav5.png": "28a632357454b91734707cdf20cb917b",
"assets/res/icons/nav6.png": "628565a8ec0e5d8cf9390cf1a08579ed",
"assets/res/icons/nav7.png": "2e62981242389162178badfd31dd2c9d",
"assets/res/icons/payment1.png": "b4d7ff7ee5c70d3d63707573e79f5ee6",
"assets/res/icons/payment2.png": "0f465e402f0cd3f136ae7d08c8864f35",
"assets/res/icons/payment3.png": "b8c03af1bbc56ae62729282214c1ceab",
"assets/res/icons/payment4.png": "69d7f99aab860fb3456f7fc85b8cd9a7",
"assets/res/icons/phone.png": "22d51c7712830d2e8d2ce97f446240f0",
"assets/res/icons/quotes.png": "16a773e5b447cbb32a45d0386b6c8323",
"assets/res/icons/sqrillnav.png": "97db50bcb51f02243c72a4533beb63b0",
"assets/res/icons/star.png": "1f350dfd9d7338bae4cddf5edc5f677d",
"assets/res/icons/star2.png": "e13074ea4c5cfc111c6d94c4541b5f01",
"assets/res/icons/star_spark.gif": "683df42cbc1d0fc786277f052ca0f5fd",
"assets/res/icons/tooth.png": "e5a6d8fe21f05950829393080e2b02c1",
"assets/res/images/about.png": "4062e8b0e3532b4dc3c4307932379b53",
"assets/res/images/about_white.png": "215b13ff8acbb16b1dabbdc6a2d772dc",
"assets/res/images/appstore.png": "ca0cdae0bcfb5f685e5c52787b9bb9db",
"assets/res/images/arrow-back.png": "fa572290360645e339b45ede7bdffac6",
"assets/res/images/avatar-1.png": "7fc8b120094daf95105062e3f10c2f80",
"assets/res/images/avatar-2.png": "05fcb0876565294ad8bdf4176f0443a0",
"assets/res/images/avatar-3.png": "70ef82e83b5db3a757224344fc648d44",
"assets/res/images/avatar.png": "138803b8ef81d7cfb60eb0f4ac3c1473",
"assets/res/images/badge_circle.png": "14760eaba97b80c9f2565af173215a3d",
"assets/res/images/bg.png": "807c924ae79bf0fb181e2be9e8a06026",
"assets/res/images/bottom_wave.png": "90e317a3ae4e4e5bcba609b0ecaf8244",
"assets/res/images/call_icon.png": "4ed981fc50d5d85d94459f7a788b410a",
"assets/res/images/card_bg.png": "fe3341e1ad2e68080bde2d4eb7d95f67",
"assets/res/images/circle_left.png": "21abb88cadc9599c1533cf91d4a05764",
"assets/res/images/circle_right.png": "74261755ed54b393a258ca5a96234e90",
"assets/res/images/city1.png": "d4996fb9498c1bf4f3c69f6c3cdb1cd4",
"assets/res/images/city2.png": "0d18af014815b1f1e452e8c15a4bd86b",
"assets/res/images/city3.png": "d874bcd0fd6711a65bb68dcc30f32013",
"assets/res/images/city4.png": "d064d396d3b608e06634d7043c4e8784",
"assets/res/images/city5.png": "add3e35a9d06fdad298281ebb92ca0bf",
"assets/res/images/clinic_map.png": "87e318d1412a97b0aa31d5a7cb960bdb",
"assets/res/images/contact_white.png": "d7ed53bbd8f43dfc2aafc3798383568b",
"assets/res/images/cup_circle.png": "002a637b7b473263f0cbd5560982d747",
"assets/res/images/curved_bg.png": "856264a810ecd1c238e80068c2321911",
"assets/res/images/direction.png": "137df2d795ba9334049bbcca8cb7faf4",
"assets/res/images/down_circle.png": "a364da76d5fd1883b5e62e80ee31a3b7",
"assets/res/images/facebook.png": "a087e82cb28734a7d0385482663af505",
"assets/res/images/flag.png": "c64f5f6f84e523d6a6fa5d9224ee5482",
"assets/res/images/flower_circle.png": "d48d7b48b0756f0390c71d368440a768",
"assets/res/images/home_badge.png": "e4cbdbd3bbad8851151f1bf6c39849a0",
"assets/res/images/home_side.png": "72b8b11564bcb8b6193fb65dbb469d37",
"assets/res/images/home_top_wave.png": "f86eeb5a0f5f1002e334bbbfcb1c5783",
"assets/res/images/home_white.png": "88634ffd2b2eaa67f5b0d0fd847dd6d4",
"assets/res/images/img1.png": "ad765a8bf2b3a0eb8d57df8bc2654d25",
"assets/res/images/img2.png": "1865316fe4f2523d663ec1077f80b524",
"assets/res/images/img3.png": "506f01c13fe8c48bc060d7a04781ad62",
"assets/res/images/img4.png": "49e9195c376b9540b6783457f29dc268",
"assets/res/images/img5.png": "e87749c26143c782e9cbfe06e5b8558d",
"assets/res/images/img6.png": "3a94e32c712cde3b36634dc6be779c3a",
"assets/res/images/img7.png": "d4bbea14a09a6e6bc664ae15f3bd3df8",
"assets/res/images/img8.png": "9735c54ea44222afaf87ce91a493d47e",
"assets/res/images/img9.png": "2e259001d05204f2170dbec24e5bb45e",
"assets/res/images/instagram.png": "1bd2371c1f74a6fba0c74ddfc0332f6a",
"assets/res/images/loader_logo.png": "d70fc6dbcb27b370674e7141facf91a3",
"assets/res/images/loc.png": "4ac04150f5d19c0366557912ac406225",
"assets/res/images/location_frame.png": "9da333deb944c06ea4d511c86908a034",
"assets/res/images/logo.png": "f210c59f4bc8087855bfde789f526063",
"assets/res/images/logo_full.png": "c3ba92066602c97cde74b4dd6c055479",
"assets/res/images/logo_full_color.png": "164138f0afe95227fd2a65ef50180f4d",
"assets/res/images/logo_spark.png": "53ec1361079fcc2bd1ebbef2d3c0530f",
"assets/res/images/mobile_app.png": "3c1bdc3bfa9e73a8b7e92d34f9b1029d",
"assets/res/images/nav2_white.png": "4e5707d0e4665810ab9e47adcce24cc2",
"assets/res/images/nav3_white.png": "08d48890a595fa8da6948c95bf5a9c1f",
"assets/res/images/pancard.png": "f02abb8113409fadcef5c7b90ae6064b",
"assets/res/images/pattern.png": "19034e3bf5ed524d2b39ab69155cdfc0",
"assets/res/images/people.png": "953fac2d1f4eeb51f0d88310ddfd3be3",
"assets/res/images/phone.png": "34aef4176752f5376581d61d87f5bebc",
"assets/res/images/phone_orange.png": "7ef32429e6ce56ad54d78aa58839865a",
"assets/res/images/picture.png": "bfe889376e65a5c87949ef4dbc0d5c0c",
"assets/res/images/placeholder.png": "5de6ea0fe267ee9a5cf435ad9dfc8156",
"assets/res/images/playstore.png": "13d3d612a218ca1754d555a8f9454d04",
"assets/res/images/privacy.png": "94a15af03a8363d68d6e16df5eb539ba",
"assets/res/images/privacy_white.png": "b99e82df007c62b2431e42fa453cb3a4",
"assets/res/images/profile.png": "cdeb25c5ac1529e6dfc769e3522750a0",
"assets/res/images/refund.png": "7880d6b8e1e363edcd8360963bb482ca",
"assets/res/images/refund_white.png": "f4b60d492ddac4135bdad5123a82b4b0",
"assets/res/images/roads.png": "eefe30056faf9eec2bf9fc4d18cba962",
"assets/res/images/shadow.png": "4ac68f25a2d6017d0cc3534a0be65132",
"assets/res/images/spark.png": "bf429cc163c2d0fdd606fc0c89b29b24",
"assets/res/images/sqrillnav.png": "daf35c76a23fae1b573c8532ac39870c",
"assets/res/images/star_frame.png": "4d4d469092aeb2142644331b0e964707",
"assets/res/images/strip.png": "a3046f4ab066d2a35ba2177e570c727d",
"assets/res/images/strip2.png": "87755939579f68de255b844531860561",
"assets/res/images/strip3.png": "c936486711b12a3e5f8d66ea1b115909",
"assets/res/images/terms.png": "e8292bb335faf481d6a56da8e1323f00",
"assets/res/images/terms1.png": "6ee52d2dabd4f44102cfa8c41f6dbb68",
"assets/res/images/terms_white.png": "220ee61d9e498399be18a6e69ab4e6d6",
"assets/res/images/title_frame.png": "3191c31cdb152351f232a148d188189e",
"assets/res/images/top_frame.png": "34a4079d2b59f584cbe10c3b6cbbdeed",
"assets/res/images/twitter.png": "4290043ce44154c683980186e0d2d672",
"assets/res/images/wave.png": "133c3d1111f2048c2a06f967fbe4bdc2",
"assets/res/images/whatsapp_orange.png": "d8db1c3671546b074e083ee78a94b313",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "c48326462cad19e10417089deafc6629",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "5131703e7f28499654bc5887f48374af",
"icons/android-icon-192x192.png": "1002ac8af1069b80c78e74d74de8e66e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/ms-icon-144x144.png": "167b7a503ed43bd75f165c47f1277a60",
"icons/ms-icon-310x310.png": "4ac44c8b30a8294a2042c266d4206e4b",
"index.html": "125ce95ba2e8f7cd6e0f86745f39b0ca",
"/": "125ce95ba2e8f7cd6e0f86745f39b0ca",
"loader.gif": "e9255f8d0ea1a76d649dadcca444e75a",
"loader_logo.png": "d70fc6dbcb27b370674e7141facf91a3",
"main.dart.js": "76251d27bf7f67ea3cad61723937ae40",
"manifest.json": "2e4b07231fa487c17548a0724edb76cf",
"version.json": "54e9c7672f7e70cf85872c4b2ac887ef"};
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
