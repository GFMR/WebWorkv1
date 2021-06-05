let btnMenuOpen = document.getElementById('btnMenuOpen'),
    btnMenuClose = document.getElementById('btnMenuClose'),
    liContainer = document.getElementById('liContainer'),
    navigation = document.getElementById('navigation');
    
btnMenuOpen.addEventListener('click', function() {
    navigation.classList.remove('hidden');
    navigation.classList.add('transition');
});

btnMenuClose.addEventListener('click', function() {
    navigation.classList.add('hidden');
});

const sliderImpresion = document.querySelector("#impresionSlider");
let sliderSectionImpresion = document.querySelectorAll(".slider__section--impresion")
let sliderSectionLastImpresion = sliderSectionImpresion[sliderSectionImpresion.length -1];

sliderImpresion.insertAdjacentElement("afterbegin", sliderSectionLastImpresion);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section--impresion")[0];
    sliderImpresion.style.marginLeft = "-200%";
    sliderImpresion.style.transition = "all 0.5s";
    setTimeout(function(){
        sliderImpresion.style.transition = "none"
        sliderImpresion.insertAdjacentElement('beforeend', sliderSectionFirst);
        sliderImpresion.style.marginLeft = "-100%";
    }, 500);
}

setInterval(function(){
    Next();
},5000);

setInterval(function(){
    Nextlogo();
},3000);

const sliderLogo = document.querySelector("#sliderLogo");
let sliderSectionLogo = document.querySelectorAll(".slider__section--logo")
let sliderSectionLastLogo = sliderSection[sliderSectionLogo.length -1];

sliderLogo.insertAdjacentElement("afterbegin", sliderSectionLastLogo);

function Nextlogo() {
    let sliderSectionFirstLogo = document.querySelectorAll(".slider__section--logo")[0];
    sliderLogo.style.marginLeft = "-0.1%";
    setTimeout(function(){
        sliderLogo.insertAdjacentElement('beforeend', sliderSectionFirstLogo);
        sliderLogo.style.marginLeft = "-0.1%";
    }, 1);
}