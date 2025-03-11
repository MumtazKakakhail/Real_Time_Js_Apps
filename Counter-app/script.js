
const counterDisplay = document.getElementById("counter")
let count = 0;

function increase() {
    count++; 
    updateCounter(); 
}


function decrease() {
    if (count > 0) { 
        count--; 
    } else {
        alert("Counter can't be negative!"); 
    }
    updateCounter(); 
}


function reset() {
    count = 0;
    updateCounter(); 
}

function updateCounter() {
    counterDisplay.textContent = count;
}
