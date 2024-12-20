// Fungsi iteratif
function kombinasiIteratif(n, r) {
    if (r > n) return 0;
    let num = 1, den = 1;
    for (let i = 1; i <= r; i++) {
      num *= n - i + 1;
      den *= i;
    }
    return Math.floor(num / den);
  }
  
  // Fungsi rekursif
  function kombinasiRekursif(n, r) {
    if (r === 0 || r === n) return 1;
    return kombinasiRekursif(n - 1, r - 1) + kombinasiRekursif(n - 1, r);
  }
  
  // Fungsi untuk menghitung waktu eksekusi
  function measureTime(func, n, r) {
    const start = performance.now();
    const result = func(n, r);
    const end = performance.now();
    return { result, time: (end - start).toFixed(6) };
  }
  
  // Event listener tombol
  document.getElementById("compareBtn").addEventListener("click", () => {
    const n = parseInt(document.getElementById("n").value);
    const r = parseInt(document.getElementById("r").value);
  
    if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) {
      alert("Harap masukkan nilai n dan r yang valid!");
      return;
    }
  
    // Hitung hasil
    const iterResult = measureTime(kombinasiIteratif, n, r);
    const rekResult = measureTime(kombinasiRekursif, n, r);
  
    // Tampilkan hasil
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
      <p><strong>Iteratif:</strong> Hasil = ${iterResult.result}, Waktu = ${iterResult.time} ms</p>
      <p><strong>Rekursif:</strong> Hasil = ${rekResult.result}, Waktu = ${rekResult.time} ms</p>
    `;
  });
  