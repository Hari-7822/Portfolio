import anime from 'animejs/lib/anime.es';


var header = anime.timeline( {

    
    direction: 'alternative',
    easing : 'spring(1.5, 80, 10, 10)'
    
});

header.add({

    targets: '.head',
    translateY : [-300, 25],
    duration: 1900,
    endDelay : 750,
    // rotate: '0.2turn'

})

var x = anime.timeline( { 
    direction : 'alternative',
    easing: 'easeInOutSine'
 } );

x.add( {

    targets : '.skills',
    translateX : [-400, 15],
    duration: 950,
    endDelay: 800

} )