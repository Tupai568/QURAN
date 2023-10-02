const menu = document.querySelector(".bx-menu");
const navbar = document.querySelector(".lis");
const resultSurah = document.querySelector(".resultSurah");

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

const params = new URLSearchParams(window.location.search);
const surahValue = params.get("surah");

if (!surahValue) {
  window.location.href = "index.html";
}

fetch(`https://api.npoint.io/99c279bb173a6e28359c/surat/${surahValue}`)
  .then((respon) => respon.json())
  .then((data) => {
    let card = "";
    data.forEach((element) => (card += result(element)));
    resultSurah.innerHTML = card;
  })
  .catch((error) => console.log(error));

function result(element) {
  return `<div class="box">
  <h1>${element.ar}</h1>
  <h4>${element.id}</h4>
</div>`;
}
