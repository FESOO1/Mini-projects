let body = document.querySelector('body');
let switchBtn = document.querySelector('.switch');
let container = document.querySelector('.toggle-container');

document.querySelector('.switch').addEventListener('click', () => {
    body.classList.toggle('switcher');
})


document.querySelector('.switch').addEventListener('click', () => {
    switchBtn.classList.toggle('switchbtn');
})

document.querySelector('.switch').addEventListener('click', () => {
    container.classList.toggle('container');
})