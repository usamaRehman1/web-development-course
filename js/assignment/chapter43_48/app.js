// Task 03
function delStu(e){
    e.parentElement.parentElement.remove()
}

// Task 04 

function changeImg() {
    document.getElementById('changeImg').src = './deal_2.jpeg'
}

function preImg() {
    document.getElementById('changeImg').src = './deal_1.jpeg'
}

// Task 05
let i = 0;
function Inc() {
    let count = document.getElementById("count").innerText = ++i ;
}
function dec() {
    let count = document.getElementById("count").innerText = --i ;
}