let keyResults = document.querySelectorAll(".key");
let results = document.querySelectorAll(".result");
const btn = document.getElementsByTagName("button");

keyResults = Array.from(keyResults);
results = Array.from(results);

// console.log(keyResults, results, btn);

window.addEventListener("keydown", (eve) => {
  
  btn[0].classList.add("deActive");
  keyResults.forEach((key) => {
    key.classList.add("active");
  });
//   console.log(eve.code);
  results[0].innerText = eve.key;
  if (eve.code == "Space") {
    results[0].innerText = "Space";
  }
  results[1].innerText = eve.keyCode;
  results[2].innerText = eve.code;
});
