const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const reduceBtn = document.getElementById('reduce');

let counterVal = 0;
addBtn.addEventListener('click', function(event) {
    counterVal += 1;
    counter.innerHTML = counterVal;
    if(counterVal>50 || counterVal < 0) {
        return false;
    }
})
reduceBtn.addEventListener('click', function(event) {
    counterVal -= 1;
    counter.innerHTML = counterVal;
})