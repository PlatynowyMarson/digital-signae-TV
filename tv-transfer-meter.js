(function () {
  var key = 'ans-tv-transfer-meter-v1';
  var show = /(?:\?|&)stats=1(?:&|$)/.test(window.location.search);
  var previous = { bytes: 0, loads: 0 };
  var measured = false;
  var bytes = 0;
  var resourceIndex = 0;
  var navigationCounted = false;
  var loadCounted = false;
  var i, entries, item, overlay;

  try { previous = JSON.parse(window.localStorage.getItem(key) || '{}') || previous; } catch (ignore) {}
  previous.bytes = Number(previous.bytes) || 0;
  previous.loads = Number(previous.loads) || 0;

  function countTransfer() {
    if (!window.performance || !performance.getEntriesByType) return;
    if (!navigationCounted) {
      entries = performance.getEntriesByType('navigation');
      if (entries.length && typeof entries[0].transferSize === 'number') {
        measured = true;
        bytes += entries[0].transferSize;
      }
      navigationCounted = true;
    }
    entries = performance.getEntriesByType('resource');
    if (entries.length < resourceIndex) resourceIndex = 0;
    for (i = resourceIndex; i < entries.length; i += 1) {
      item = entries[i];
      if (typeof item.transferSize === 'number') {
        measured = true;
        bytes += item.transferSize;
      }
    }
    resourceIndex = entries.length;
  }

  function update() {
    countTransfer();
    if (measured) {
      previous.bytes += bytes;
      if (!loadCounted) { previous.loads += 1; loadCounted = true; }
      try { window.localStorage.setItem(key, JSON.stringify(previous)); } catch (ignore) {}
    }
    if (!show) { bytes = 0; return; }
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;z-index:99999;left:1vw;bottom:1vh;padding:1.1vw 1.4vw;background:#071f18;color:#fff;border:1px solid #d6b145;font:1.1vw Arial;box-shadow:0 8px 25px #000;';
      document.body.appendChild(overlay);
    }
    overlay.textContent = measured
      ? 'Transfer tego TV: ' + (previous.bytes / 1048576).toFixed(2) + ' MB (' + previous.loads + ' otwarć)'
      : 'Przeglądarka TV nie udostępnia pomiaru transferu.';
    bytes = 0;
  }

  function start() { window.setTimeout(update, 3000); window.setInterval(update, 30000); }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
}());
