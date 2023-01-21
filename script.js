const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 200; //100px
function shadow (e) {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    let {offsetX: x, offsetY: y} = e;
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = Math.round ((x / width * walk)-(walk/2)); // if walk is 200, so we want to go on 100 or -100 but not further
    const yWalk = Math.round ((y / height * walk)-(walk/2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 #434242,
    ${xWalk*-1}px ${yWalk}px 0 #404258 ,
    ${yWalk}px ${xWalk*-1}px 0 #474E68,
    ${yWalk*-1}px ${xWalk}px 0 #6B728E`;
}

hero.addEventListener('mousemove', shadow);