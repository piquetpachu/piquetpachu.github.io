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

//Formulario

  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert("Mensaje enviado correctamente 👍");
      form.reset();
    } else {
      alert("Hubo un error, intentá de nuevo");
    }
  });
