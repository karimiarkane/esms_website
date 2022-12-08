let buttons = document.querySelectorAll(".item .quest img");
let questions = document.querySelectorAll('.item');
console.log(questions);

console.log(buttons);

buttons.forEach(function (elm, index, array) {
    elm.onclick = function () {
        questions.forEach(function (elem) {
            elem.classList.add("inactive");
            elem.setAttribute("id","");
        })
     
        questions[index].setAttribute("id","active");
        let active_q = questions[index];
    }
});

console.log(active_q)
/*active_sign.setAttribute("src","./images/substract(1).svg");*/




