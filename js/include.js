function includeHTML(selector, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch(err => console.error("Erro ao carregar:", file));
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("#nav", "components/nav.html");
  includeHTML("#footer", "components/footer.html");
});