// const image = "/cat.svg";
// cat이 저장 되있는 상태에서 없는 cow.svg를 업데이트 하려고 시도하면 실패해서 업데이트가 되지 않음 -> 즉, sw.js에서만 에러가 나고 기존 cat.svg를 그대로 보여줌
const image = "/cow.svg"; 

self.addEventListener("install", (event) => {
  console.log("V1 installing…");

  // cache a cat WEBP
  event.waitUntil(
    caches.open("static-v1").then((cache) => cache.add(image))
  );
});

self.addEventListener("activate", (event) => {
  console.log("V1 now ready to handle fetches!");
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (url.pathname === '/api') {
    event.respondWith(new Response(JSON.stringify({ data: 'CORS가 났더라도 가로채기 때문에 상관없음' })));
  }

  // serve the cat WEBP from the cache if the request is
  // same-origin and the path is '/dog.webp'
  if (url.origin == location.origin && url.pathname == "/dog.svg") {
    event.respondWith(caches.match(image));
  }
});
