let buttons = document.querySelectorAll(".item .quest img");
let questions = document.querySelectorAll(".item");
console.log(questions);

console.log(buttons);

buttons.forEach(function (elm, index, array) {
  elm.onclick = function () {
    questions.forEach(function (elem) {
      elem.classList.add("inactive");
      elem.setAttribute("id", "");
    });

    questions[index].setAttribute("id", "active");
    let active_q = questions[index];
  };
});

var countDownDate = new Date("Jan 1, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
  if (distance < 0) {
    document.getElementById("day").innerHTML = "expired";
  }
}, 1000);
