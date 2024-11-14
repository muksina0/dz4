const btnPlus = document.querySelector('.increment')
const btnMinus = document.querySelector('.decrement')
const counterResults = document.querySelector('.counter')

let counter = 0

btnPlus.addEventListener('click', () => {
    counter++
    counterResults.innerHTML = counter
    counterResults.style.color = 'green'
})
btnMinus.addEventListener('click', () => {
    if (counter>0){
        counter--
        counterResults.innerHTML = counter
        counterResults.style.color = 'red'
    }
})

counterResults.innerHTML =   counter

//2
const bigBlog = document.querySelector('.wrapper')
const postionChaild = document.querySelector('.cordinat')
bigBlog.addEventListener('mousemove', (event) => {
    const x = event.offsetX
    const y = event.offsetY
    postionChaild.textContent = `X:${x}, Y:${y}`
})


const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const textTraffic = document.querySelector('.text_traffic')
const colorTrafficChange = (color) => {
    red.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')

    if (color.toLowerCase() === 'красный'){
        red.classList.add('active')
        alert('STOP')
    }else if(color.toLowerCase() === 'жёлтый'){
        yellow.classList.add('active')
        alert('WAIT')
    }else if(color.toLowerCase() === 'зелёный'){
        green.classList.add('active')
        alert('GO')
    }else{
        alert('Не правильный цвет')
    }
}
const writeColor = prompt('Введите цвет светофора (Красный,Зелёный,Жёлтый)')
colorTrafficChange(writeColor)