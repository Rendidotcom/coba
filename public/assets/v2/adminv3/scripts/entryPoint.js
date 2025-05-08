// File: assets/v2/adminv3/scripts/entryPoint.js

(function () {
    const data = window.serverData;
  
    // 1. Log server data
    console.log("Server Data:", data);
  
    // 2. Load FontAwesome CSS jika belum ada
    const faCss = data.faCssFile;
    if (faCss && !document.querySelector(`link[href="${faCss}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = faCss;
      document.head.appendChild(link);
    }
  
    // 3. Load preload JS files
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = `${data.cdnPrefix}${src}`;
        script.async = false;
        script.onload = () => resolve(src);
        script.onerror = () => reject(new Error(`Gagal load: ${src}`));
        document.body.appendChild(script);
      });
  
    async function initApp() {
      try {
        console.log("Memuat preload JS files...");
  
        for (const js of data.preloadJsFiles) {
          await loadScript(js);
          console.log(`✅ Loaded: ${js}`);
        }
  
        console.log("✅ Semua preload script berhasil dimuat.");
        // Tambahkan kode inisialisasi Vue, Router, Pinia, dll. di sini jika dibutuhkan.
      } catch (error) {
        console.error("❌ Error loading JS:", error);
      }
    }
  
    document.addEventListener("DOMContentLoaded", initApp);
  })();
  