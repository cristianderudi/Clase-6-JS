const cardData = [
  {
    imgSrc: "https://www.w3schools.com/w3images/popsicle.jpg",
    alt: "Popsicle",
    title: "All I Need Is a Popsicle",
    description: "Lorem ipsum text praesent tincidunt ipsum lipsum.",
  },
  {
    imgSrc: "https://www.w3schools.com/w3images/salmon.jpg",
    alt: "Salmon",
    title: "Salmon For Your Skin",
    description:
      "Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.",
  },
  {
    imgSrc: "https://www.w3schools.com/w3images/sandwich.jpg",
    alt: "Sandwich",
    title: "The Perfect Sandwich, A Real Classic",
    description:
      "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
  },
  {
    imgSrc: "https://www.w3schools.com/w3images/croissant.jpg",
    alt: "Croissant",
    title: "Le French",
    description:
      "Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.",
  },
];

cardData.forEach((card) => {
  let cardElement = `<div class="w3-quarter">
  <img
    src="${card.imgSrc}"
    alt="${card.alt}"
    style="width: 100%"
  />
  <h3>${card.title}</h3>
  <p>
    ${card.description}
  </p>
  </div>`;
});

function miFuncion() {
  alert("Me hiciste click");
}

let elh3 = document.querySelector("h3");

console.log(elh3);

let w3quarter = document.querySelector(".w3-quarter");

console.log(w3quarter);

let losParrafos = document.querySelectorAll("p");

/* for (const unParrafo of losParrafos) {
  console.log(unParrafo);
} */

losParrafos.forEach((unParrafo) => {
  unParrafo.style.color = "white";
  unParrafo.style.backgroundColor = "black";
});

let idAbout = document.querySelector("hr#about");

console.log(idAbout);

let elh1 = document.querySelector("h1");

if (elh1 != null) {
  console.log(elh1);
} else {
  console.error("H1 no encontrado");
}

let sandwich = document.getElementById("sandwich");
let imgSandwich = sandwich.getElementsByTagName("img");
console.log(imgSandwich);

let elh6 = document.querySelector("h6");
//elh6.innerText = "Con pasión por la buena comida";
//elh6.innerText += " and Delicious";
elh6.innerHTML = "<em>Con pasión por la <strong>buena comida</strong></em>";
console.log(elh6.innerHTML);
