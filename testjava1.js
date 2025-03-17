document.getElementById("form2").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form submit default
  alert("Terima kasih atas review Anda!");
  // Reset form setelah submit
  document.getElementById("form2").reset();
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
function changeSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  updateSlider();
}

function updateSlider() {
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function autoSlide() {
  setInterval(() => {
    changeSlide(1);
  }, 3500);
}
autoSlide();
