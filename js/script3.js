const line = document.querySelectorAll('svg>line');
const cursor = document.querySelector('.cursor');
console.log(line)
window.addEventListener('mousemove',function (event){
    let x = event.pageX;
    let y = event.pageY;
    line.forEach(val =>{
        val.setAttribute('x2',x);
        val.setAttribute('y2',y)
    })

    cursor.style.top = y+'px';
    cursor.style.left = x+'px';
})