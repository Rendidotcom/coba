const fs = require("fs");
const path = require("path");

// Daftar file JS yang akan disalin
const preloadFiles = [
  "entryPoint.js",
  "shared-domains-vendor.js",
  "dayjs.js",
  "floating-vue-vendor.js",
  "unhead-vue.js",
  "pinia.js",
  "i18next.js",
  "vue-router.js",
  "lodash.js",
  "axios.js",
  "qs.js",
  "vuex.js",
  "sentry-package.js",
  "vue-gtag.js"
];

// Lokasi asal dan tujuan
const sourceDir = path.join(__dirname, "public", "assets", "v2", "adminv3", "scripts");
const destDir = path.join(__dirname, "public", "scripts");

// Pastikan folder tujuan ada
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Salin file satu per satu
preloadFiles.forEach((file) => {
  const src = path.join(sourceDir, file);
  const dest = path.join(destDir, file);

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied: ${file}`);
  } else {
    console.warn(`⚠️ File not found: ${file}`);
  }
});
