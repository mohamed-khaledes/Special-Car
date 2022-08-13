/****************************************************************** */
// Local Storage
/****************************************************************** */

// Check if local storage has the color-option or empty
let maincolor = window.localStorage.getItem("color-option");
if(maincolor !== null){
    // take the color from localStorage if found
    document.documentElement.style.setProperty('--main-color',window.localStorage.getItem("color-option"));
    document.querySelectorAll('.colors-list li').forEach((element)=>{
        element.classList.remove('active');
        if(element.dataset.color === maincolor){
            element.classList.add('active')
        }
    })
    
}
// variables for random background options 
let backgroundOptions = true;
// set background interval
let backgroundInterval;
// check if local storage has the background option or empty
let backgroundLocalstorage = localStorage.getItem('background-option');
if(backgroundLocalstorage !== null){
    // take the background optin from local storage
    backgroundOptions = localStorage.getItem('background-option');
    if(backgroundLocalstorage === 'true'){
        backgroundOptions = true
    }else{
        backgroundOptions = false;
    }
    document.querySelectorAll('.random-background span').forEach((element) =>{
        element.classList.remove('active')
    });
    if(backgroundLocalstorage === 'true'){
        document.querySelector('.random-background .yes').classList.add('active')
    }else{
        document.querySelector('.random-background .no').classList.add('active')
    }
}
// check if local storage has the background image or empty
// Select the landing page
let landingPage = document.querySelector(".landing-page");
let backgroundImg = localStorage.getItem('background-img');
if(backgroundImg !== null){
    landingPage.style.backgroundImage = backgroundImg;
}

// check if local storage has the event from show or hide bullet or empty
let navBullets = document.querySelector('.nav-bullets');
let displayBullets = localStorage.getItem('display-Bullets');
if (displayBullets !== null){
    if(displayBullets === 'block'){
        navBullets.style.display = 'block';
        document.querySelector('.show-bullets .show').classList.add('active');
        document.querySelector('.show-bullets .hide').classList.remove('active')
    }else{
        navBullets.style.display = 'none';
        document.querySelector('.show-bullets .hide').classList.add('active')
        document.querySelector('.show-bullets .show').classList.remove('active')
    }
}
/********************************************************************* */
// End Local Storage
/******************************************************************** */
// Handel Functions
// Handel Active class
function HandelActiveClass(ev){
    ev.target.parentElement.querySelectorAll('.active').forEach((ele) =>{
        ele.classList.remove('active')
        });
    // add class active to target e
    ev.target.classList.add('active');
}
// End Handel Functions
/******************************************************************** */
// Start setting box
let settingBox = document.querySelector('.settings-box');
let setBtn = document.querySelector('.set-btn');
let setIcon = document.querySelector(".set");
// button for open setting
setBtn.addEventListener('click',function(){
    setBtn.classList.toggle("fa-spin")
    settingBox.classList.toggle("open");
    settingBox.classList.toggle("addBS")
});
// Switch colors
let colorList = document.querySelectorAll('.colors-list li');
colorList.forEach(function(li){
    li.addEventListener('click',(e)=>{
        // function to handel active calss
        HandelActiveClass(e)
        document.documentElement.style.setProperty('--main-color',`${e.target.dataset.color}`);
        // set the target color to localStorage
        window.localStorage.setItem('color-option',e.target.dataset.color);
    });
});
// Random Background Option
let randomBgElement = document.querySelectorAll('.random-background span');
randomBgElement.forEach((span)=>{
    span.addEventListener('click',function(e){
        // function to handel active class
        HandelActiveClass(e)
        if (e.target.dataset.bg === 'yes'){
            backgroundOptions = true;
            localStorage.setItem('background-option',true)
            randomizeBackground();
        }else{
            backgroundOptions = false;
            localStorage.setItem('background-option',false)
            clearInterval(backgroundInterval)
        }
    })
});
// End Random Background Option
// Start show Bullets and hide bullets
let showBullets = document.querySelectorAll('.show-bullets span');
showBullets.forEach((ele)=>{
    ele.addEventListener('click',function(e){
        showBullets.forEach((span)=>{
            span.classList.remove('active');
            e.target.classList.add("active");
        })
        if(e.target.dataset.sb ==="show"){
            navBullets.style.display = 'block';
            localStorage.setItem('display-Bullets','block');
        }else{
            navBullets.style.display = 'none';
            localStorage.setItem('display-Bullets','none')
        }
    })
})
// End setting box
/********************************************************************* */
// Landing Background Images
// Create the Array 
let imgs = ['landing1.jpg','landing2.jpg','landing3.jpg','landing4.jpg','landing5.jpg'];
// function to acces on random background
function randomizeBackground(){
    if (backgroundOptions === true){
        backgroundInterval = setInterval(function(){
            // set the random variable
            let random =Math.floor(Math.random() * imgs.length);
            // set the background 
            landingPage.style.backgroundImage = `url(../imgs/${imgs[random]})`;
            localStorage.setItem('background-img',landingPage.style.backgroundImage)
        },10000);
    }
}
    randomizeBackground();
/* Start opening navbar */
let navbar = document.querySelector('.navbar');
let navbarBtn = document.querySelector('.menu');
let closenavbar = document.querySelector('.close-nav')
navbarBtn.addEventListener('click',(e)=>{
    navbar.classList.toggle('open-nav');
});
closenavbar.addEventListener('click',function(){
    navbar.classList.toggle('open-nav');
})
/* End opening navbar */
/*Start nav bar scroll */
    let sectionTransfar = document.querySelectorAll('.navbar-nav .li');
    let navLinks = document.querySelectorAll('.navbar-nav a');
    sectionTransfar.forEach((link)=>{
        link.addEventListener("click",(e) =>{
            e.preventDefault();
            // remove and add active class to the links
            navLinks.forEach((link)=>{
                link.classList.remove('active');
                e.target.classList.add('active')
            })
            let direction = e.target.dataset.direction;
            console.log(direction)
            document.querySelector(direction).scrollIntoView({
                behavior:"smooth",
            });
        });
    });
/*End nav bar scroll */
// End landing page
/********************************************************************* */
/********************************************************************* */
// Start About Us
let carImg = document.querySelector('.img-box');
// End About Us
/****************************************************************************** */
// Start Our Progress
let circleTwo = document.querySelectorAll('.percent .circleTwo');
let dot = document.querySelectorAll(".dot");
let percentNumber = document.querySelectorAll(".number")
let OurProgress = document.querySelector('.our-progress');

    window.onscroll = function(){
        // code for About Us in onscroll
        if(window.scrollY > 600){
            carImg.style.left = '0';
        }else{
            carImg.style.left = '1000px'
        };
        // End  code for About Us in onscroll
        // code for our progress
        if(window.scrollY > 1300 ){
            circleTwo.forEach((ele) => {
                ele.style.animationName = "fadeIN";
            })
            dot.forEach((ele) => {
                ele.style.animationName = "animationDot";
                        })
            percentNumber.forEach((ele) => {
                ele.style.animationName = "num";
            })
        }
        // code for scroll to top
        if(window.scrollY > 1000){
            scrollBtn.style.opacity = '1';
        }else{
            scrollBtn.style.opacity = '0';
        }
    };
// End Our Progress
//******************************************************************** */
// Start Our Gallary
    let ourGallary = document.querySelectorAll(".gallary img");
    ourGallary.forEach((img) => {
        // event on click 
        img.addEventListener("click" ,(e) =>{
            // create an overlay div
            let overlay = document.createElement('div');
            // add class popup-overlay
            overlay.className = 'popup-overlay';
            // add overlay to the body
            document.body.appendChild(overlay);
            // Create a popup box
            let popupBox = document.createElement('div');
            // add class popup-box to div
            popupBox.className = 'popup-box';
            // create the title popup 
            let popupTitle = document.createElement('h3');
            // add class to popup title
            popupTitle.className = 'popup-title';
            // add the img alt to the title
            if(img.alt !== null){
                let popupText = document.createTextNode(img.alt);
                popupTitle.appendChild(popupText);
                popupBox.appendChild(popupTitle)
            }
            // Create the image
            let popupImage = document.createElement('img');
            // Designation the image src
            popupImage.src = img.src;
            // add the popupImage to popupBox
            popupBox.appendChild(popupImage);
            // add popupBox to the body
            document.body.appendChild(popupBox);
            // Create the remove Button
            let removeBtn = document.createElement('span');
            removeBtn.className = 'remove-btn'
            let BtnText =document.createTextNode('X');
            removeBtn.appendChild(BtnText);
            popupBox.appendChild(removeBtn);
        });
    });
    document.addEventListener('click',function(e){
        if(e.target.className == 'remove-btn'){
            // remve the current popup
            e.target.parentNode.remove();
            //remove the overlay
            document.querySelector('.popup-overlay').remove();
        }
    });
    // swiper testemonials and gallary
        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            },
            pagination: {
            el: ".swiper-pagination",
            },
        });
// End Our Gallary
/******************************************************************* */
// Start nav bullets
// select all bullet 
let allbullets = document.querySelectorAll(".nav-bullets .bullet");
allbullets.forEach((bullet) =>{
    bullet.addEventListener('click', (e) =>{
        let goal = e.target.dataset.section;
        document.querySelector(goal).scrollIntoView({
            behavior:'smooth'
        });
    })
})
// End nav bullets
/*************************************************************** */


// Start Scroll to top
let scrollBtn = document.querySelector('.scrollToTop');
scrollBtn.addEventListener('click',(e) =>{
    window.scrollTo({
        top :0,
        behavior:"smooth"
    })
})
// End Scroll to top