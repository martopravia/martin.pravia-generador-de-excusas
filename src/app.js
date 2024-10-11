import "bootstrap";
import "./styles.css";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function excuseGenerator() {
  const randomNumberIndex = arr => Math.floor(Math.random() * arr.length);
  let excuse =
    who[randomNumberIndex(who)] +
    " " +
    action[randomNumberIndex(action)] +
    " " +
    what[randomNumberIndex(what)] +
    " " +
    when[randomNumberIndex(when)];
  document.getElementById("excuse").innerHTML = excuse;
}
window.onload = excuseGenerator;
