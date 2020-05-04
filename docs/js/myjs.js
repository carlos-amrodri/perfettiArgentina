var mescla = $("#mescla1");
mescla.shuffleLetters();



// setInterval ( function(){
//     mescla.shuffleLetters();
// },4000);

let tween = gsap.to("#movimiento", {rotation: 360, duration: 5, ease: "elastic"});
tween.repeat(-1);

// var mostrar = $("#aparecer");

var tl = gsap.timeline({repeat : -1, repeatDelay : 1, yoyo: true});
tl.to("#aparecer",{opacity: 1, duration: 1, ease: "bounce"})
.to("#aparecer",{color: "#1e88e5", duration: 1, ease: "power4"});

