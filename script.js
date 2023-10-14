var c1 = '#080908';
var c2 = '#E6E8e6';
var c3 = '#3772FF';
var c4 = '#DF2935';
var c5 = '#FDCA40';

window.addEventListener("scroll", scroll);

setInterval(() => {
    background();
}, 100);

var background_rotation = 0;
function background(){
    document.querySelector('html').style = `background-image: linear-gradient(${background_rotation}deg, ${c3}, ${c4}, ${c5});`
    background_rotation++;
}

function scroll() {
    intro_animation()
}

function intro_animation(){
    document.getElementById("intro").style.filter = `blur(${window.scrollY/25}px)`
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
    
            if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("show");
            } else if(elementTop > windowHeight) {
            reveals[i].classList.remove("show");
            }
        }
    }