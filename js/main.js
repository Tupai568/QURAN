const menu = document.querySelector(".bx-menu");
const navbar = document.querySelector(".lis");
const dataSurah = document.querySelector(".dataSurah");

function surah() {
  fetch("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
    .then((respon) => respon.json())
    .then((data) => {
      let card = "";
      data.forEach((element) => (card += dataAyat(element)));
      dataSurah.innerHTML = card;
    })
    .catch((error) => console.log(error));
}

function dataAyat(element) {
  return `<div class="boxAyat" onclick="direct('${element.nomor}')">
  <div class="gabung">
    <div class="number">
      <h1>${element.nomor}</h1>
    </div>
    <div class="judul">
      <h1>${element.nama}</h1>
      <h4>${element.arti}</h4>
    </div>
  </div>
  <div class="totalAyat">
    <h1>${element.asma}</h1>
    <h4>${element.ayat} ayat</h4>
  </div>
</div>`;
}

function direct(index) {
  const url = `home.html?surah=${index}`;
  window.location.href = url;
}

surah();

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});
