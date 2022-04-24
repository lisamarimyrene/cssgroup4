//Documentation: https://scrollmagic.io/docs/ScrollMagic.Scene.html

//Controller
let controller = new ScrollMagic.Controller();


// ––––––––– New scene - SCENE 1 –––––––––
let scene1 = new ScrollMagic.Scene({
    //Choose trigger element
    triggerElement: '.frames--frame1'
})
    //Give trigger element a toggle, and class
    .setClassToggle('.frames--frame1', 'show1')
    //Add the scene to the controller
    .addTo(controller)


// ––––––––– New scene - SCENE 2 –––––––––
let scene2 = new ScrollMagic.Scene({
    //Choose trigger element
    triggerElement: '.frames--frame2'
})
    //Give trigger element a toggle, and class
    .setClassToggle('.frames--frame2', 'show2')
    //Add the scene to the controller
    .addTo(controller)


// ––––––––– New Scene - SCENE 3 –––––––––
let scene3 = new ScrollMagic.Scene({
    //Choose trigger element
    triggerElement: '.frames--frame3'
})
    //Give trigger element a toggle, and class
    .setClassToggle('.frames--frame3', 'show3')
    //Add the scene to the controller
    .addTo(controller)


// ––––––––– New Scene - SCENE 4 –––––––––
let scene4 = new ScrollMagic.Scene({
    //Choose trigger element
    triggerElement: '.frames--frame4'
})
    //Give trigger element a toggle, and class
    .setClassToggle('.frames--frame4', 'show4')
    //Add the scene to the controller
    .addTo(controller)


// ––––––––– New Scene - SCENE 5 –––––––––
let scene5 = new ScrollMagic.Scene({
    //Choose trigger element
    triggerElement: '.frames--frame5'
})
    //Give trigger element a toggle, and class
    .setClassToggle('.frames--frame5', 'show5')
    //Add the scene to the controller
    .addTo(controller)


// ––––––––– New Scene - SCENE 6 –––––––––
let scene6 = new ScrollMagic.Scene({
    //Choose trigger element
    triggerElement: '.frames--frame6'
})
    //Give trigger element a toggle, and class
    .setClassToggle('.frames--frame6', 'show6')
    //Add the scene to the controller
    .addTo(controller)


// ––––––––– New Scene - SCENE 7 –––––––––
let scene7 = new ScrollMagic.Scene({
    //Choose trigger element
    triggerElement: '.frames--frame7'
})
    //Give trigger element a toggle, and class
    .setClassToggle('.frames--frame7', 'show7')
    //Add the scene to the controller
    .addTo(controller)


// ––––––––– New Scene - SCENE 8 –––––––––
let scene8 = new ScrollMagic.Scene({
    //Choose trigger element
    triggerElement: '.frames--frame8'
})
    //Give trigger element a toggle, and class
    .setClassToggle('.frames--frame8', 'show8')
    //Add the scene to the controller
    .addTo(controller)


// ––––––––– New Scene - SCENE 9 –––––––––
let scene9 = new ScrollMagic.Scene({
    //Choose trigger element
    triggerElement: '.frames--frame9'
})
    //Give trigger element a toggle, and class
    .setClassToggle('.frames--frame9', 'show9')
    //Add the scene to the controller
    .addTo(controller)


// ––––––––– New Scene - SCENE 10 –––––––––
let scene10 = new ScrollMagic.Scene({
    //Choose trigger element
    triggerElement: '.frames--frame10'
})
    //Give trigger element a toggle, and class
    .setClassToggle('.frames--frame10', 'show10')
    //Add the scene to the controller
    .addTo(controller)


// ––––––––– New Scene - SCENE 11 –––––––––
let scene11 = new ScrollMagic.Scene({
    //Choose trigger element
    triggerElement: '.frames--frame11'
})
    //Give trigger element a toggle, and class
    .setClassToggle('.frames--frame11', 'show11')
    //Add the scene to the controller
    .addTo(controller)

    
//Function that scroll back to top when 'topBtn' is clicked
document.getElementById("topBtn").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//Get the information frame, an put it into a variable
const infoFrame = document.querySelector("#infoFrame");

//Make the information frame hidden by default
infoFrame.style.visibility = 'hidden';

//Function that makes the information frame visible when 'infoBtn' is clicked
document.getElementById("infoBtn").onclick = function() {
    infoFrame.style.visibility = 'visible';
}

//Function that makes the information frame hidden when 'closeBtn' is clicked
document.getElementById("closeBtn").onclick = function() {
    infoFrame.style.visibility = 'hidden';
}