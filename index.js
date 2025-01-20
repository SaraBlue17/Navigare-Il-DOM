// Stampa in ordine in console:

// l'elemento padre di ul
const ulElement = document.querySelector("ul");
console.log("L'elemento padre di ul:", ulElement.parentElement);

// il secondo elemento figlio di ul:
const secondChild = ulElement.children[1];
console.log("Il secondo elemento figlio di ul:", secondChild.innerText);

// l'elemento fratello successivo del secondo li:
const nextSibling = secondChild.nextElementSibling;
console.log(
  "L'elemento fratello successivo del secondo li",
  nextSibling.innerText
);

// l'elemento fratello precedente del secondo li.
const previusSibling = secondChild.previousElementSibling;
console.log(
  "L'elemento fratello precedente del secondo li:",
  previusSibling.innerText
);

// Video soluzione

const html = document.documentElement;
// console.log(html);
const body = html.children(1);
// console.log(body);
const ul = body.children[0];
const secondLi = ul.children[1];

console.log(ul.parentElement);
console.log(secondLi.innerHTML);
console.log(secondLi.nextElementSibling.innerHTML);
console.log(secondLi - previousElementSibling.innerHTML);
