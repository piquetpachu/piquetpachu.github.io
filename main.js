const modal = document.getElementById("demoModal");
const modalTitle = document.getElementById("modalTitle");
const modalTech = document.getElementById("modalTech");
const modalVideo = document.getElementById("modalVideo");

function openModal(title, tech, videoSrc) {
  modalTitle.textContent = title;
  modalTech.textContent = tech;
  modalVideo.src = videoSrc;
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  modalVideo.pause();
  modalVideo.src = "";
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
