const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const allImages = document.querySelector('.main-slider-images');
const am = document.querySelectorAll('a'); //este esta considerando a todos los a



function cambiarMundo(event){
    let attr = event.currentTarget.getAttribute('value');
    localStorage.setItem("data", attr);
}

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




function disp(){
    product_img = document.getElementById("product-img-cont");
    title = document.getElementById("product-title");
    autor = document.getElementById("product-autor");
    price = document.getElementById("price");

    const img_product = document.createElement('img');
    let url_img = "./assets/books/" +   String(localStorage.getItem("data")) + ".png";
    img_product.setAttribute('src', url_img);
    img_product.classList.add('class');
    img_product.setAttribute('class', 'product-img');
    product_img.appendChild(img_product);


    //https://raw.githubusercontent.com/irojasc/genesis-web.github.io/main/content/GN_2109.txt

    let url = "https://raw.githubusercontent.com/irojasc/genesis-web.github.io/main/content/" + String(localStorage.getItem("data")) + ".txt";
    console.log(url);

    $.get(url, function (data, status, textStatus, jqXHR) {  // success callback
        let data_book = data.split('|');
        console.log(data_book[0]);
        title.innerText = String(data_book[0]);
        autor.innerText = String(data_book[1]);
        price.innerText = String(data_book[3]) + ".00";
    });
}