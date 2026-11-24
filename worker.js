// Decodes Data Matrix codes off the main thread so the camera view stays smooth.
importScripts('zxing-reader.js');

const OPTS = {
  formats: ['DataMatrix'],
  tryHarder: true,
  tryRotate: true,
  tryInvert: true,
  tryDownscale: true,
  maxNumberOfSymbols: 24
};

const ready = (async () => {
  const res = await fetch('zxing_reader.wasm');
  if (!res.ok) throw new Error('wasm ' + res.status);
  const buf = await res.arrayBuffer();
  await ZXingWASM.prepareZXingModule({ overrides: { wasmBinary: buf }, fireImmediately: true });
})();

ready.then(
  () => postMessage({ type: 'ready' }),
  (e) => postMessage({ type: 'failed', error: String(e) })
);

onmessage = async (e) => {
  const { id, w, h, buf, quick } = e.data;
  try {
    await ready;
    const img = { data: new Uint8ClampedArray(buf), width: w, height: h, colorSpace: 'srgb' };
    const opts = quick ? { ...OPTS, tryDownscale: false } : OPTS;
    const r = await ZXingWASM.readBarcodes(img, opts);
    const results = r
      .filter((x) => x.isValid && x.text)
      .map((x) => {
        const p = x.position;
        return { text: x.text, pts: [p.topLeft, p.topRight, p.bottomRight, p.bottomLeft].map((q) => [q.x, q.y]) };
      });
    postMessage({ type: 'result', id, results });
  } catch (err) {
    postMessage({ type: 'result', id, results: [], error: String(err) });
  }
};
