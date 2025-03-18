function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
}
setInterval(updateClock, 1000);
updateClock(); // Panggil sekali agar tidak kosong saat halaman dimuat

const quotes = [
    "Perpustakaan adalah jantung ilmu pengetahuan.",
    "Buku adalah jendela dunia, dan perpustakaan adalah pintunya.",
    "Perpustakaan bukan hanya tempat membaca, tapi juga tempat menemukan diri sendiri.",
    "Membaca adalah perjalanan yang bisa dilakukan tanpa meninggalkan tempat duduk.",
    "Satu buku bisa mengubah hidup, dan perpustakaan memiliki ribuan buku."
];

let index = 0;
const quoteElement = document.getElementById("quotes");

function showNextQuote() {
    quoteElement.classList.remove("visible");
    setTimeout(() => {
        quoteElement.textContent = quotes[index];
        quoteElement.classList.add("visible");
        index = (index + 1) % quotes.length;
    }, 1000);
}

setInterval(showNextQuote, 4000);
showNextQuote();
