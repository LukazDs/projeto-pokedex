function makeCard() {
  const cards = document.querySelector(".container");

  for (let i = 0; i < 10; i++) {
    cards.innerHTML += `<div class="card" onclick="changeColor(this)"><h1>${
      i + 1
    }</h1></div>`;
  }
}

function changeColor(element) {
  element.classList.toggle("card-selected");
}

makeCard();
