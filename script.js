window.addEventListener("scroll", scroll);

function scroll() {
    intro_animation()
}

function intro_animation(){
    document.getElementById("intro").style.filter = `blur(${window.scrollY/25}px)`
}

addEventListener("mousemove", (event) => {});

const shadow_color = '#080908'
const screen_width = screen.availWidth;
const screen_height = screen.availHeight;
const rotation_sensitivity = 50;
const shadow_offset = 50;
const title_elements = [
    ['title_name', 1],
    ['title_underline', 0.4],
    ['title_desc', 0.2],
    ['intro_arrow', 0.1]
]
onmousemove = (event) => {
    for(i = 0; i < title_elements.length; i++){
        var element = document.getElementById(title_elements[i][0]);
        var mousePos = { x: event.clientX, y: event.clientY };
        var x = (mousePos.y - screen_height / 2) / screen_height;
        var y = (mousePos.x - screen_width / 2) / screen_width;

        element.style.transform = `rotateX(${x * rotation_sensitivity}deg) rotateY(${-y * rotation_sensitivity}deg)`;
        element.style.filter = `drop-shadow(${-y * shadow_offset * title_elements[i][1]}px ${-x * shadow_offset * title_elements[i][1]}px ${shadow_color})`
    }
};


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