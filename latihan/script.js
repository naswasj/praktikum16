const header1 = document.getElementById("h1") //element node
const p = document.getElementsByTagName("p") //html collection
const list = document.querySelectorAll("li") //html collection

header1.style.backgroundColor = "pink"
container2.style.backgroundColor = "lemonchiffon"
container1.style.backgroundColor = "lemonchiffon"

const list1 = document.querySelector("li:nth-child(1)")
list1.textContent = "List Baru 1";
list1.style.fontSize = "25px";
list1.style.fontFamily = "calibri"
list1.style.backgroundColor = "lightsalmon";

const list2 = document.querySelector("li:nth-child(2)")
list2.textContent = "List Baru 2";
list2.style.fontSize = "25px";
list2.style.fontFamily = "Concolas"
list2.style.backgroundColor = "plum";

const list3 = document.querySelector("li:nth-child(3)")
list3.textContent = "List Baru 3";
list3.style.fontSize = "25px";
list3.style.fontFamily = "arial"
list3.style.backgroundColor = "lightblue";

// yg lebih singkatnya
// const lists = document.querySelectorAll("li");
// const texts = ["Teks Baru List 1", "Teks Baru List 2", "Teks Baru List 3"];
// const colors = ["lightsalmon", "plum", "lightblue"];
// const fonts = ["calibri", "Consolas", "arial"];

// lists.forEach((list, index) => {
//   list.textContent = texts[index];
//   list.style.fontSize = "25px";
//   list.style.fontFamily = fonts[index];
//   list.style.backgroundColor = colors[index];
// });