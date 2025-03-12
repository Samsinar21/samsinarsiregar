document.addEventListener("DOMContentLoaded", function() {
    // Pesan sambutan
    const message = "Selamat Datang di Perpustakaan Sederhana Samsinar Siregar!";
    const words = message.split(" "); // Memisahkan pesan menjadi kata-kata
    const wordCount = words.length; // Menghitung jumlah kata
    const readingSpeed = 250; // Rata-rata kata per menit
    const duration = (wordCount / readingSpeed) * 60 * 1000; // Durasi dalam milidetik

    // Membuat elemen div untuk pesan sambutan
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = message;
    welcomeMessage.style.position = "fixed";
    welcomeMessage.style.top = "10px"; // Posisi vertikal di atas
    welcomeMessage.style.left = "50%"; // Posisi horizontal di tengah
    welcomeMessage.style.transform = "translateX(-50%)"; // Menggeser elemen ke tengah
    welcomeMessage.style.backgroundColor = "#71bbb2"; // Warna senada dengan header
    welcomeMessage.style.color = "white";
    welcomeMessage.style.padding = "20px 40px"; // Padding lebih besar
    welcomeMessage.style.borderRadius = "10px"; // Sudut lebih melengkung
    welcomeMessage.style.zIndex = "1000";
    welcomeMessage.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)"; // Bayangan
    welcomeMessage.style.fontSize = "20px"; // Ukuran font lebih besar
    welcomeMessage.style.textAlign = "left"; // Teks rata tengah
    welcomeMessage.style.opacity = "1"; // Awalnya terlihat
    welcomeMessage.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"; // Transisi untuk opacity dan transform

    // Menambahkan pesan ke body
    document.body.appendChild(welcomeMessage);

    // Menghilangkan pesan setelah durasi yang dihitung
    setTimeout(() => {
        welcomeMessage.style.opacity = "0"; // Mengurangi opacity
        welcomeMessage.style.transform = "translateX(-50%) scale(0.9)"; // Efek mengecil
        setTimeout(() => {
            document.body.removeChild(welcomeMessage); // Menghapus elemen setelah transisi
        }, 500); // Waktu untuk transisi
    }, duration); // Waktu tampil pesan
});
