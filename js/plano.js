document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const plano = params.get("plano");

  if (plano === "1") {
    document.getElementById("plano-1").classList.remove("d-none");
  }

  if (plano === "2") {
    document.getElementById("plano-2")?.classList.remove("d-none");
  }

  if (plano === "3") {
    document.getElementById("plano-3")?.classList.remove("d-none");
  }
});