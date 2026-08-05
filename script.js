/* =========================================================
   SILVER FOX NAVIGATOR
   MAIN JAVASCRIPT
========================================================= */



document.addEventListener(
"DOMContentLoaded",
()=>{



/* =========================================================
   MOBILE NAVIGATION
========================================================= */


const menuButton =
document.getElementById(
"menuButton"
);



const navigation =
document.querySelector(
".navigation"
);




if(menuButton && navigation){



menuButton.addEventListener(
"click",
()=>{


const open =

navigation.classList.toggle(
"open"
);



menuButton.setAttribute(
"aria-expanded",
open
);



});




/* Close menu after navigation */

document

.querySelectorAll(
".navigation a"
)

.forEach(
link=>{


link.addEventListener(
"click",
()=>{


navigation.classList.remove(
"open"
);



menuButton.setAttribute(
"aria-expanded",
"false"
);



});



});



}





/* =========================================================
   VIDEO GALLERY SYSTEM
========================================================= */



window.toggleSubGrid =
function(category){



const targetGrid =

document.getElementById(
"grid-" + category
);



if(!targetGrid)
return;





const alreadyOpen =

targetGrid.classList.contains(
"active"
);





closeAllGrids();





if(!alreadyOpen){



targetGrid.classList.add(
"active"
);



setTimeout(
()=>{


targetGrid.scrollIntoView({

behavior:
"smooth",

block:
"start"

});



},
150
);



}



};







window.closeAllGrids =

function(){



document

.querySelectorAll(
".expanded-video-container"
)

.forEach(
grid=>{


grid.classList.remove(
"active"
);



});



};





});

/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
========================================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{



const sections =

document.querySelectorAll(
"main[id], section[id]"
);



const navLinks =

document.querySelectorAll(
".navigation a"
);





function updateActiveNavigation(){



let currentSection = "";





sections.forEach(
section=>{



const sectionTop =

section.offsetTop - 180;





if(
window.scrollY >= sectionTop
){


currentSection =
section.id;



}



});






navLinks.forEach(
link=>{


link.classList.remove(
"active"
);





const linkTarget =

link.getAttribute(
"href"
);



if(
linkTarget ===
"#" + currentSection
){


link.classList.add(
"active"
);



}



});



}







window.addEventListener(
"scroll",
updateActiveNavigation
);



updateActiveNavigation();





});










/* =========================================================
   LAZY LOAD YOUTUBE IFRAMES
========================================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{



const videos =

document.querySelectorAll(
"iframe"
);






const videoObserver =

new IntersectionObserver(

entries=>{



entries.forEach(
entry=>{



if(
entry.isIntersecting
){



const iframe =
entry.target;





if(
iframe.dataset.src
){



iframe.src =
iframe.dataset.src;



iframe.removeAttribute(
"data-src"
);



}





videoObserver.unobserve(
iframe
);



}



});



},


{

rootMargin:
"200px"

}


);






videos.forEach(
video=>{


videoObserver.observe(
video
);



});



});










/* =========================================================
   CLOSE OPEN GALLERY WITH ESCAPE KEY
========================================================= */


document.addEventListener(
"keydown",
event=>{


if(
event.key ===
"Escape"
){



if(
typeof closeAllGrids ===
"function"
){



closeAllGrids();



}



}



});

/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{



const revealElements =

document.querySelectorAll(
".section, .about-section, .video-card"
);





const revealObserver =

new IntersectionObserver(

entries=>{



entries.forEach(
entry=>{



if(
entry.isIntersecting
){



entry.target.classList.add(
"visible"
);



revealObserver.unobserve(
entry.target
);



}



});



},


{

threshold:
0.15

}



);







revealElements.forEach(
element=>{


element.classList.add(
"hidden"
);



revealObserver.observe(
element
);



});



});









/* =========================================================
   SMOOTH HERO BUTTON SCROLLING
========================================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{



document

.querySelectorAll(
".hero-button"
)

.forEach(
button=>{


button.addEventListener(
"click",
event=>{



const destination =

button.getAttribute(
"href"
);





if(
destination &&
destination.startsWith("#")
){



event.preventDefault();





const target =

document.querySelector(
destination
);





if(target){



target.scrollIntoView({

behavior:
"smooth",

block:
"start"

});



}



}



});



});



});










/* =========================================================
   MAP READY HOOK
========================================================= */


/*

Future interactive globe integration.

Example:

window.loadDroneLocation({

 name:"Cadair Idris",

 latitude:52.705,

 longitude:-3.907,

 video:"youtube-id"

});

*/


window.loadDroneLocation =

function(location){



console.log(
"Drone location loaded:",
location
);



/*

Future code:

1. Create globe marker

2. Attach GPS coordinates

3. Open video popup

4. Connect YouTube player



*/



};









/* =========================================================
   VIDEO CARD KEYBOARD ACCESSIBILITY
========================================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{



const cards =

document.querySelectorAll(
".video-card"
);





cards.forEach(
card=>{



card.setAttribute(
"tabindex",
"0"
);



card.addEventListener(
"keydown",
event=>{



if(
event.key ===
"Enter"
||
event.key ===
" "
){



card.click();



}



});



});



});










/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{



document

.querySelectorAll(
"img"
)

.forEach(
image=>{



image.addEventListener(
"error",
()=>{



console.warn(

"Image failed to load:",

image.src

);



});



});



});










/* =========================================================
   SITE INITIALISATION MESSAGE
========================================================= */


console.log(

"%cSilver Fox Navigator loaded successfully",

`

color:#c9a36d;

font-size:16px;

font-family:serif;

`

);
