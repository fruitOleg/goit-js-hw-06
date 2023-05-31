const itemElm = document.querySelectorAll(".item");
console.log(`Number of categories: ${Number(itemElm.length)}`);

itemElm.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${Number(item.lastElementChild.children.length)}`);
});
