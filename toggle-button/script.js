let body = document.querySelector('body');
let switchBtn = document.querySelector('.switch');

document.querySelector('.switch').addEventListener('click', () => {
    body.classList.toggle('switcher');
})


document.querySelector('.switch').addEventListener('click', () => {
    switchBtn.classList.toggle('switchbtn');
})