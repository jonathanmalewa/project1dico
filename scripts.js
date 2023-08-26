// Fungsi untuk menggulir halaman dengan efek smooth scroll
function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  const offset = 60;

  if (targetElement) {
    const targetPosition = targetElement.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

// Fungsi untuk memantau scroll dan menambahkan kelas "active" ke elemen artikel yang muncul dalam tampilan layar
function checkScroll() {
  const articleCards = document.querySelectorAll(".article-card");
  const screenPosition = window.innerHeight / 1.3;

  articleCards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;

    if (cardPosition < screenPosition) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

// Tambahkan event listener untuk memantau scroll
window.addEventListener("scroll", checkScroll);

// Tambahkan event listener untuk setiap tautan menu
const menuLinks = document.querySelectorAll(".nav-list a");

menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    smoothScroll(targetId);
  });
});

// Tambahkan event listener untuk tombol "Hubungi Kami"
const contactButton = document.querySelector(".scroll-button a");

contactButton.addEventListener("click", function (e) {
  e.preventDefault();
  const targetId = this.getAttribute("href").substring(1);
  smoothScroll(targetId);
});

// Panggil fungsi checkScroll pada saat halaman dimuat
checkScroll();
