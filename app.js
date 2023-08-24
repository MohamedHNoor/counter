const buttons = document.querySelectorAll(".btn");
const countValue = document.getElementById("value");
// initial count
let count = 0;

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    // check for btn class
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    // change count value color
    if (count > 0) {
      countValue.style.color = "green";
    } else if (count < 0) {
      countValue.style.color = "red";
    } else {
      countValue.style.color = "black";
    }
    // set the count dynamic
    countValue.textContent = count;
  });
});
