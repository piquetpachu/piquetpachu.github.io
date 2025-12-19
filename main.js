const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const modal = document.getElementById("demoModal");
const modalTitle = document.getElementById("modalTitle");
const modalTech = document.getElementById("modalTech");
const modalVideo = document.getElementById("modalVideo");

function openModal(title, tech, video) {
  modalTitle.textContent = title;
  modalTech.textContent = tech;
  modalVideo.src = video;
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  modalVideo.pause();
  modalVideo.src = "";
}

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
