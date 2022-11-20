import anime from 'animejs/lib/anime.es';


anime( {

    targets: '.head',

    translateY : [-300, 25],
    duration: 900,
    delay : 750,
    direction: 'alternative',
    easing : 'spring(1.5, 80, 10, 10)'

});
