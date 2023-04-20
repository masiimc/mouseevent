const LG = document.querySelector('.mouseLG');
const SM = document.querySelector('.mouseSM');
const span = document.querySelectorAll('span');
let ulTop = document.querySelector('ul').offsetTop;
let ulBot = document.querySelector('ul').offsetHeight + document.querySelector('ul').offsetTop;

console.log(ulTop, ulBot);

document.body.addEventListener('mousemove', function (event) {
    let x = event.pageX;
    let y = event.pageY;

    if (!(y + 20 > ulTop && y - 20 < ulBot)) {
        console.log('yoooo');
        LG.classList.remove('hover');
        span.forEach(val =>{
            val.style.transform = '';
        })
    }

    LG.style.left= x + 'px';
    LG.style.top= y + 'px';
    SM.style.left= x + 'px';
    SM.style.top= y + 'px';

})



document.querySelector('ul').onmousemove = function (event){
    let temp = (event.target);
    let x = event.offsetX;
    let y = event.offsetY;
    let w = event.clientX;
    let h = event.clientY;
    let mx = Math.floor(x / w * (30 * 2) - 30);
    let my = Math.floor(y / h * (10 * 2) - 10);
    console.log(x,y,w,h,mx,my);
    if(
        temp.innerHTML == 'Home' ||
        temp.innerHTML == 'Concat' ||
        temp.innerHTML == 'Menu'
    ){
        LG.classList.add('hover');
        temp.style.transform = `translate(${mx}px,${my}px)`;
    }else{
        console.log(false);
        LG.classList.remove('hover');
        span.forEach(val =>{
            val.style.transform = '';
        })
    }
}

