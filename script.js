// Elements
const textEl = document.getElementById("text");
const filenameEl = document.getElementById("filename");
const sizeEl = document.getElementById("size");
const fgEl = document.getElementById("fg");
const bgEl = document.getElementById("bg");

const sizeLabel = document.getElementById("sizeLabel");
const meta = document.getElementById("meta");

const qrcodeContainer = document.getElementById("qrcode");

const generateBtn = document.getElementById("generate");
const downloadBtn = document.getElementById("download");
const copyBtn = document.getElementById("copy");
const regenerateBtn = document.getElementById("regenerate");
const clearBtn = document.getElementById("clear");

let qr = null;

// Generate QR
function renderQRCode() {
  const text = textEl.value || "";
  const size = parseInt(sizeEl.value);
  const fg = fgEl.value;
  const bg = bgEl.value;

  sizeLabel.textContent = size;
  meta.textContent = `Size: ${size}px`;

  qrcodeContainer.innerHTML = "";

  qr = new QRCode(qrcodeContainer, {
    text,
    width: size,
    height: size,
    colorDark: fg,
    colorLight: bg,
    correctLevel: QRCode.CorrectLevel.M
  });
}

// Convert to PNG
async function getPNG() {
  const canvas = qrcodeContainer.querySelector("canvas");
  const img = qrcodeContainer.querySelector("img");

  if (canvas) return canvas.toDataURL("image/png");

  if (img) {
    const temp = document.createElement("canvas");
    temp.width = img.naturalWidth;
    temp.height = img.naturalHeight;
    const ctx = temp.getContext("2d");

    await new Promise(res => {
      if (img.complete) res();
      else img.onload = res;
    });

    ctx.drawImage(img, 0, 0);
    return temp.toDataURL("image/png");
  }

  throw new Error("Generate a QR first.");
}

// Download as PNG
downloadBtn.onclick = async () => {
  try {
    const dataURL = await getPNG();
    const filename = (filenameEl.value || "qr_code").replace(/[^a-zA-Z0-9_\-]/g, "_");

    const a = document.createElement("a");
    a.href = dataURL;
    a.download = `${filename}.png`;
    a.click();
  } catch {
    alert("Generate a QR first.");
  }
};

// Copy to clipboard
copyBtn.onclick = async () => {
  try {
    const dataURL = await getPNG();
    const blob = await (await fetch(dataURL)).blob();
    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);

    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy Image"), 800);
  } catch {
    alert("Copy not supported.");
  }
};

generateBtn.onclick = renderQRCode;
regenerateBtn.onclick = renderQRCode;

clearBtn.onclick = () => (qrcodeContainer.innerHTML = "");

sizeEl.oninput = () => (sizeLabel.textContent = sizeEl.value);

window.onload = renderQRCode;
