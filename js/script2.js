const container = document.querySelector('.container');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const d = document.querySelector('.d');
window.addEventListener('mousemove' , function (event){
    let x = event.pageX;
    let y = event.pageY;
    let top = window.innerHeight - y;
    let left = window.innerWidth - x;
    
    
    b.style.setProperty('clip-path','inset(0px 0px '+top+'px '+x+'px)');
    c.style.setProperty('clip-path','inset('+y+'px '+left+'px 0px 0px)');
    d.style.setProperty('clip-path','inset('+y+'px 0px 0px '+x+'px)');
})
