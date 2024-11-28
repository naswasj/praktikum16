// document.addEventListener("DOMContentLoaded", () => {
// const header1 = document.getElementById("h1") //element node
// const p = document.getElementsByTagName("p") //html collection
// const list = document.querySelectorAll("li") //html collection

// header1.style.backgroundColor = "Purple"
// p[0].style.color = "Yellow"
// list[0].style.color = "Blue"
// });

// const list2 = document.querySelector("li:nth-child(2)")
// const anchor = document.querySelectorAll("#a a")
// list2.style.backgroundColor = "Grey";
// anchor.style.fontSize = "40px";

const sebuahNode = document.getElementById("h1")
sebuahNode.innerHTML = "<em>JavaScript</em>"

// const nodeSection = document.getElementById("a")
const nodeP = nodeSection.querySelector("p")
const list = "<ol><li>ayamgoreng</li><li>ayam rebus</li></ol>"
nodeP.innerHTML = list

// const nodeH1 = document.getElementById("h1")
nodeH1.style.fontFamily = "Concolas"
nodeH1.style.backgroundColor = "Gold"
nodeH1.style.textShadow = "10px 10px 10px"

const nodeH1 = document.getElementById("h1")
nodeH1.getAttribute("id")

const nodeSection = document.getElementById("a")
const nodeP1 = nodeSection.querySelector("p")
nodeP1.setAttribute("id", "P1")

const nodeDiv2 = document.getElementById("container2")
const nodeUl = nodeDiv2.querySelector("ul")
nodeUl.removeAttribute("id")