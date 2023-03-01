const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const allImages = document.querySelector('.main-slider-images');
const am = document.querySelectorAll('a');

for(const element of am){
    element.addEventListener('click', cambiarMundo);
}

let index = 1;
btn1.checked = true;

btn1.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-0%)';
    index = 1;
});

btn2.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-33.33%)';
    index = 2;
});

btn3.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-66.66%)';
    index = 3;
});


function cambiarMundo(event){
    let attr = event.currentTarget.getAttribute('value');
    localStorage.setItem("data", attr);
}

function disp(){
    console.log(localStorage.getItem("data"));
}



function cambiar(){
    if(index < 3)
        index += 1;
    else
        index = 1;

    switch(index){
        case 1:
            allImages.style.transform = 'translateX(-0%)';
            btn1.checked = true;
            break;
        case 2:
            allImages.style.transform = 'translateX(-33.33%)';
            btn2.checked = true;
            break;

        case 3:
            allImages.style.transform = 'translateX(-66.66%)';
            btn3.checked = true;
            break;
    }
}

window.setInterval(cambiar, 4000);

