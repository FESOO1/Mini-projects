let text1 = document.querySelector('.text-1');
let text2 = document.querySelector('.text-2');
let text3 = document.querySelector('.text-3');
let text4 = document.querySelector('.text-4');

// TEXT 1

document.querySelector('.box-1').addEventListener('click', function() {
    text2.style.display = 'none';
})

document.querySelector('.box-1').addEventListener('click', function() {
    text3.style.display = 'none';
})

document.querySelector('.box-1').addEventListener('click', function() {
    text4.style.display = 'none';
})

document.querySelector('.box-1').addEventListener('click', function() {
    text1.style.display = 'unset';
})

// TEXT 2

document.querySelector('.box-2').addEventListener('click', function() {
    text2.style.display = 'unset';
})

document.querySelector('.box-2').addEventListener('click', function() {
    text1.style.display = 'none';
})

document.querySelector('.box-2').addEventListener('click', function() {
    text3.style.display = 'none';
})

document.querySelector('.box-2').addEventListener('click', function() {
    text4.style.display = 'none';
})


// TEXT 3

document.querySelector('.box-3').addEventListener('click', function() {
    text3.style.display = 'unset';
})

document.querySelector('.box-3').addEventListener('click', function() {
    text2.style.display = 'none';
})

document.querySelector('.box-3').addEventListener('click', function() {
    text4.style.display = 'none';
})

document.querySelector('.box-3').addEventListener('click', function() {
    text1.style.display = 'none';
})

// TEXT 4

document.querySelector('.box-4').addEventListener('click', function() {
    text4.style.display = 'unset';
})

document.querySelector('.box-4').addEventListener('click', function() {
    text3.style.display = 'none';
})

document.querySelector('.box-4').addEventListener('click', function() {
    text2.style.display = 'none';
})

document.querySelector('.box-4').addEventListener('click', function() {
    text1.style.display = 'none';
})