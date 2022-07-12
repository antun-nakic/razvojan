import sum from "./sum.js";
import dodajKomponentu from "./dodajElement.js";
import "./style.css";

document.getElementById("forma").addEventListener("submit", (event) => {
  event.preventDefault();
  let a = parseInt(document.getElementById("prvi").value);
  let b = parseInt(document.getElementById("drugi").value);
  console.log(sum(a, b));
  document.body.appendChild(dodajKomponentu());
});
