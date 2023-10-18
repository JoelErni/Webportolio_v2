window.addEventListener("scroll", scroll);

function scroll() {
    intro_animation()
}

function intro_animation(){
    document.getElementById("intro").style.filter = `blur(${window.scrollY/25}px)`
}

addEventListener("mousemove", (event) => {});

onmousemove = (event) => {
    var mousePos = { x: event.clientX, y: event.clientY };
    const screen_width = screen.availWidth;
    const screen_height = screen.availHeight;
    
    var rotation_sensitivity = 25;
    var shadow_offset = 50;

    var x = (mousePos.y - (screen_height / 2)) / screen_height;
    var y = (mousePos.x - (screen_width / 2)) / screen_width;

    document.getElementById("title_container").style.transform = `rotateX(${x * rotation_sensitivity}deg) rotateY(${-y * rotation_sensitivity}deg)`

    document.getElementById("title_name").style.textShadow = `${-y * shadow_offset}px ${-x * shadow_offset}px #080908`
    document.getElementById("title_underline").style.boxShadow = `${-y * shadow_offset / 2.5}px ${-x * shadow_offset  / 2.5}px #080908`
    document.getElementById("title_desc").style.textShadow = `${-y * shadow_offset / 5}px ${-x * shadow_offset / 5}px #080908`

    document.getElementById("intro_arrow").style.filter = `drop-shadow(${-y * shadow_offset / 10}px ${-x * shadow_offset / 10}px #080908)`


    console.log(x_rotation, y_rotation)
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