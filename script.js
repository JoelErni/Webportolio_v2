var c1 = '#080908';
var c2 = '#E6E8e6';
var c3 = '#3772FF';
var c4 = '#DF2935';
var c5 = '#FDCA40';

setInterval(() => {
    background();
}, 100);

var background_rotation = 0;
function background(){
    document.querySelector('html').style = `background-image: linear-gradient(${background_rotation}deg, ${c3}, ${c4}, ${c5});`
    background_rotation++;
}
