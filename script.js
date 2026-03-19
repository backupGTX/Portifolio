function contato() {
  alert("Bora conversar 😎");
}

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  document.documentElement.style.setProperty("--x", x + "%");
  document.documentElement.style.setProperty("--y", y + "%");
});
