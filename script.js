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

/*active_sign.setAttribute("src","./images/substract(1).svg");*/
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
var prev1 = document.getElementById("previous1");
var next1 = document.getElementById("next1");
var arr1 = [
  {
    title: "Day1",
    d1: "8:00-10:00 presentation of the event",
    d2: "10:00-12:00 presentation of the sponsors",
    d3: "13:00 coffee break and lauch of the show",
  },
  {
    title: "Day2",
    d1: "8:00-11:00 competition continues",
    d2: "11:15-12:30 lunch break",
    d3: "13:00 resume the competition",
  },
  ,
  {
    title: "Day3",
    d1: "8:00-11:00 continuing the event ",
    d2: "12:00 winners announcement",
    d3: "13:00 closing ceremony",
  },
];
var i = 0;
document.getElementById("Day").innerHTML = arr1[0].title;
document.getElementById("task1").innerHTML = arr1[0].d1;
document.getElementById("task2").innerHTML = arr1[0].d2;
document.getElementById("task3").innerHTML = arr1[0].d3;

next1.addEventListener("click", function () {
  i++;
  if (i > arr.length - 1) {
    i = 0;
  }
  document.getElementById("Day").innerHTML = arr1[i].title;
  document.getElementById("task1").innerHTML = arr1[i].d1;
  document.getElementById("task2").innerHTML = arr1[i].d2;
  document.getElementById("task3").innerHTML = arr1[i].d3;
});
prev1.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = arr.length - 1;
  }
  document.getElementById("Day").innerHTML = arr1[i].title;
  document.getElementById("task1").innerHTML = arr1[i].d1;
  document.getElementById("task2").innerHTML = arr1[i].d2;
  document.getElementById("task3").innerHTML = arr1[i].d3;
});

var prev = document.getElementById("previous");
var next = document.getElementById("next");

var arr = [
  "images/oredoo.png",
  "images/sonatrach.png",
  "images/intel.png",
  "images/nvidia.png",
];

i = 0;

document.getElementById("frame").src = arr[0];

next.addEventListener("click", function () {
  i++;
  if (i > arr.length - 1) {
    i = 0;
  }
  document.getElementById("frame").src = arr[i];
});

prev.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = arr.length - 1;
  }
  document.getElementById("frame").src = arr[i];
});
