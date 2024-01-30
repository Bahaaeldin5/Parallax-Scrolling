let header = document.querySelector("header");
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountainsBehind = document.getElementById("mountains-behind");
let mountainsFront = document.getElementById("mountains-front");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = (value * .25) + 'px';
    moon.style.top = 50 + (value * 1.05) + 'px';
    mountainsBehind.style.top = 100 +(value * .5) + 'px';
    mountainsFront.style.top = (value * 0) + 'px';
    text.style.marginRight = (value * 4) + 'px';
    btn.style.marginTop = (value) + 'px';
    header.style.top = (value * .5) + 'px';
});