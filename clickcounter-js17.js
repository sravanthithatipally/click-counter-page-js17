let containerele = document.getElementById("clickCounterContainer");
let buttonele = document.getElementById("incrementBtn");
let countvalue = document.getElementById("counterValue");

let count = localStorage.getItem("clickCount");
if (count === null) {
    countvalue.textContent = 0;
} else {
    countvalue.textContent = count;
}

function clicked() {
    let previousvalue = countvalue.textContent;
    let num_count = parseInt(previousvalue);
    num_count = num_count + 1;
    localStorage.setItem("clickCount", num_count);
    countvalue.textContent = num_count;
}