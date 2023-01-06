const board = document.querySelector('#board')
const colors = ['blue', 'yellow', 'purple','blueviolet','orange','salmon','fuchsia','gold','hotpink','limegreen',]
const SQUARES_NUMBERS = 1000

for (let i = 0; i < SQUARES_NUMBERS; i++ ){
    const squere = document.createElement('div')
    squere.classList.add('squere')

    squere.addEventListener('mouseover', () => {
        setColor(squere)
    })

    squere.addEventListener('mouseleave', () => {
        removeColor(squere)
    })

    board.append(squere)
}
function setColor(elem) {
    const color = getRandomColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${rgb(55, 53, 53)}, 0 0 10px ${color}`
}
function removeColor(elem) {
    elem.style.backgroundColor = 'rgb(63, 64, 64)'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
} 