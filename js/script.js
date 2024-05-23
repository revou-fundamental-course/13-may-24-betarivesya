function hitungLuas() {
    // Ambil nilai dari input base dan height
    const alas = parseFloat(document.getElementById('base').value);
    const tinggi = parseFloat(document.getElementById('height').value);

    // Validasi input
    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        alert('Harap masukkan nilai positif yang valid untuk alas dan tinggi.');
        return;
    }

    // Hitung luas segitiga
    const luas = 0.5 * alas * tinggi;

    // Tampilkan hasil luas di dalam elemen result-area
    document.getElementById('result-area').textContent = `Luas segitiga adalah ${luas.toFixed(2)} cm²`;
}

function hitungKeliling() {
    // Ambil nilai dari input side1, side2, dan side3
    const sisi1 = parseFloat(document.getElementById('side1').value);
    const sisi2 = parseFloat(document.getElementById('side2').value);
    const sisi3 = parseFloat(document.getElementById('side3').value);

    // Validasi input
    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3) || sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
        alert('Harap masukkan nilai positif yang valid untuk semua sisi.');
        return;
    }

    // Hitung keliling segitiga
    const keliling = sisi1 + sisi2 + sisi3;

    // Tampilkan hasil keliling di dalam elemen result-perimeter
    document.getElementById('result-perimeter').textContent = `Keliling segitiga adalah ${keliling.toFixed(2)} cm`;
}

document.getElementById('toggle-perimeter').addEventListener('click', function() {
    const bagianKeliling = document.getElementById('perimeter-section');
    const gambarKeliling = document.getElementById('perimeter-image');
    if (bagianKeliling.style.display === 'none') {
        bagianKeliling.style.display = 'block';
        gambarKeliling.style.display = 'block';
    } else {
        bagianKeliling.style.display = 'none';
        gambarKeliling.style.display = 'none';
    }
});

