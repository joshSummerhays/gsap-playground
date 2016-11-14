// ufo tween
TweenMax.to(".svg", 6, {
    x: 600,
    scale: 0.3,
    backgroundColor: "pink",
    border: "25px solid black",
    borderRadius: 95,
    repeat: -1,
    yoyo: true,
    rotation: 360,
    delay: 2,
    repeatDelay: 2,
});
// TweenMax.to(".ufo-big", 2, {transform: translateY(30)});
// TweenMax.to(".ufo-small", 2, {top: 100});
// TweenMax.to(".building", 2, {left: 200});

    let number = 0;
let updating = () => {
    document.getElementsByTagName('H2')[0].innerHTML = number++;
}
let starting = () => {
    console.log('start');
}
let end = () => {
    console.log('end');
}

// parrot tween
TweenMax.to(".parrot-svg", 3, {
    x:800,
    ease: [SlowMo.ease.config(0.1, 2, false), Back.easeOut.config(3)],
    onUpdate: updating,
    onStart: starting,
    onComplete: end
    
});

