// 홈 화면 설치(PWA)를 위한 최소 서비스 워커
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {});
