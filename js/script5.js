

const main = document.querySelector('#main');
const crosur = document.querySelector('.mouseBody');
let imageBar = document.querySelector('.up-down');
let next = document.querySelector('#next');
document.body.addEventListener('mousemove',function (event){
    let x = event.pageX - 7;
    let y = event.pageY - 7;


    // crosur.style.top = y+'px';
    // crosur.style.left = x+'px';

    let top = imageBar.offsetTop;
    let bottom = imageBar.offsetTop + imageBar.clientHeight

    if(y > top && y < bottom ){
        if(x > (next.clientWidth)/2){
            crosur.innerHTML = '< next';
        }else{
            crosur.innerHTML = '< prev';
        }
        imageBar.classList.add('up-down-1');
        crosur.classList.add('next-style');
        x = event.pageX - 20;
        y = event.pageY - 20;

    }else{
        imageBar.classList.remove('up-down-1');
        crosur.classList.remove('next-style');
        crosur.innerHTML = '';
    }

    crosur.style.transform = `translate(${x}px,${y}px)`
})




const nexprev = document.querySelector('#nexprev');
let _translate = 996;

next.onmouseup = function (event){
    let x = event.pageX;
    console.log(x);
    if(x > (next.clientHeight)/2){
       if(_translate == 1992){
        _translate = 996;
       }else{
        _translate += 332;
       }

    }else{
        if(_translate == 0){
            _translate = 996;
        }else{
            _translate -= 332;
        }
    }
    nexprev.style.transform = `translateX(-${_translate}px)`;
}
