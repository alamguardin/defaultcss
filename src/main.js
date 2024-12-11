import "./output/default.css";

document.addEventListener("submit", (e) => {
	e.preventDefault();
});

// Modal example
const modal = document.querySelector("#modal");
const openModal = document.querySelector("#showModal");
const closeModal = document.querySelector("#cancel");

openModal.addEventListener("click", () => {
	modal.showModal();
});

closeModal.addEventListener("click", () => {
	modal.close();
});
