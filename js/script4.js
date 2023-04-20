const crosur = document.querySelector('.crosur');
const change = document.querySelector('.change');


window.addEventListener('mousemove', function (event) {
    let x = event.pageX;
    let y = event.pageY;

    crosur.style.top = y + 'px';
    crosur.style.left = x + 'px';
});


change.addEventListener('mousemove', function (event) {
    let storage = change.getBoundingClientRect();
    
    mx = event.offsetX;
    my = event.offsetY;
    let Xmove = 100, Ymove = 100;

    let centerX = (change.offsetWidth / 2);
    let centerY = change.clientHeight / 2;


    if (mx > centerX) {
        Xmove = -200 * Math.floor(mx / 100) - 50;
    }

    if (mx < centerX) {
        Xmove = 200 * Math.floor(mx / 100) - 50;
    }

    if (my > centerY) {
        Ymove = -200 * Math.floor(my / 100) - 50;
    }

    if (my < centerY) {
        Ymove = 200 * Math.floor(my / 100) - 50;
    }

    if((storage.bottom + 50) >= window.innerHeight){
        Ymove += -120;
        console.log(1);
    }

    if((storage.top - 50 ) <= 0){
        Ymove += 120;
        console.log(2);
    }


    if((storage.right + 50) >= window.innerWidth){
        Xmove += -120;
        console.log(3);
    }

    if((storage.left - 50) <= 0){
        Xmove += 120;
        console.log(4);
    }

    change.style.transform = 'translate(' + Math.floor(Xmove) + 'px,' + Math.floor(Ymove) + 'px)';
    // console.log(storage);
});



