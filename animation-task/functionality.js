const square = document.getElementById("square")
const button = document.getElementById("move")
let clicks = 0

button.addEventListener("click", () => {
    if (clicks % 2 == 0) {
        moveRight(square)
    } else {
        moveLeft(square)
    }
    clicks++

})



function moveRight(element) {
    interval = setInterval(move, 25)
    let pos = 0
    function move() {
        pos++
        element.style.left = pos + "px"
        if (pos == 100){
            clearInterval(interval)
        }
    }
}

function moveLeft(element) {
    interval = setInterval(move, 25)
    let pos = 100
    function move() {
        element.style.left = pos + "px"
        pos--
        if (pos == 0){
            clearInterval(interval)
        }
    }
}