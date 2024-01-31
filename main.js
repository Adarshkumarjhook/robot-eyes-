/*
 var tl = gsap.timeline({
     scrollTrigger: {
         trigger: '.page_1',
         // markers: true,
         scroller: 'body',
         start: '50% 50%',
         end: '100% 50%',
         scrub: 3,
         pin: true,


     }
 });
 
 */





var mouse = document.getElementById('mouse')
window.addEventListener('touchmove', (e) => {
    var x_ = e.touches[0].clientX;
    var y_ = e.touches[0].clientY;
    mouse.style.top = y_ + 'px';
    mouse.style.left = x_ + 'px';

    //console.log(y_+"_____"+x_);

    var rot = 35;
    var rot_1 = -35;
    var m_width = 15;
    var m_left = x_ - 200 + 25;


    if (x_ < 492) {
        // console.log(x_);
        rot = 0;
        rot_1 = -30;
        m_width = 10;
        m_left = x_ - 200 + 75;

    }



    gsap.to('.a', {
        duration: 0.5,
        rotate: rot,
        // top: /*150*/,
        left: x_,

    }, 'a')


    gsap.to('.b', {
        duration: 0.5,
        rotate: rot_1,
        // top: /*150*/,
        left: x_ - 200,


    }, 'a')


    gsap.to('.m', {
        duration: 7,
        // top: /*150*/,
        left: m_left,
        width: m_width + 'vw'

    }, 'a')


    gsap.to('.n', {
        duration: 7,
        // top: /*150*/,
        left: x_ - 200 + 25 + 195,



    }, 'a')





})






window.addEventListener('click', (e) => {
    // var x_ = e.touches[0].clientX;
    //  var y_ = e.touches[0].clientY;
    //    mouse.style.top = y_ + 'px';
    //    mouse.style.left = x_ + 'px';

    //console.log(y_+"_____"+x_);
    /*
     if (y_<650) {
       //  console.log(y_/10);
     }
     */


    gsap.to('.a', {
        duration: 0.5,
        rotate: -30,
        // left:450,

    }, 'a')


    gsap.to('.b', {
        duration: 0.5,
        rotate: 30,
        //  left: 250,


    }, 'a')

    gsap.to('.m', {
        duration: 0.5,
        // left:450,
      


    }, 'a')


    gsap.to('.n', {
        duration: 0.5,

    }, 'a')




})









/*

    gsap.to('.a', {
        duration: 2,
        rotate: -20,
        left:450,

    }, 'a')


    gsap.to('.b', {
        duration: 2,
        rotate: 20,
        left: 250,


    }, 'a')


*/