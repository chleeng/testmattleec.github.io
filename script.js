// const imgDFR=380,spinner=document.querySelector(".spinner"),skillLogos=spinner.querySelectorAll("img");function skillTransition(){var e,t=navigator.userAgent.toLowerCase(),n=!1;try{n=/constructor/i.test(window.HTMLElement)||(e=!window.safari||safari.pushNotification,"[object SafariRemoteNotification]"===e.toString())}catch(s){}(n=n||-1!=t.indexOf("safari")&&!(-1!=t.indexOf("chrome"))&&-1!=t.indexOf("version/"))?skillLogos.forEach((e,t)=>{e.style.transition="transform 1s, opacity 1s",e.style.transform="rotateY("+t*(360/skillLogos.length)+"deg) translateZ(380px)",e.style.opacity="1",e.style.transitionDelay=".500s"}):skillLogos.forEach((e,t)=>{e.style.transition="transform 1s, opacity 1s",e.style.transform="rotateY("+t*(360/skillLogos.length)+"deg) translateZ(380px)",e.style.opacity="1",e.classList.add("imgReflect"),e.style.transitionDelay=".500s"}),initResponsive()}function initResponsive(){let e=window.innerWidth,t=Math.min(e/3,380),n;n=e<=574?Math.max(50,100-(574-e)/5.24):100,spinner.style.width=n+"px",spinner.style.height=n+"px",skillLogos.forEach((e,n)=>{e.style.transform="rotateY("+n*(360/skillLogos.length)+"deg) translateZ("+t+"px)"})}function responsive(){let e=window.innerWidth,t=Math.min(e/3,380),n;n=e<=574?Math.max(50,100-(574-e)/5.24):100,spinner.style.width=n+"px",spinner.style.height=n+"px",".0s"!=skillLogos[0].style.transitionDelay?skillLogos.forEach((e,n)=>{e.style.transform="rotateY("+n*(360/skillLogos.length)+"deg) translateZ("+t+"px)",e.style.transitionDelay=".0s"}):skillLogos.forEach((e,n)=>{e.style.transform="rotateY("+n*(360/skillLogos.length)+"deg) translateZ("+t+"px)"})}window.onload=function(){skillTransition()},window.addEventListener("resize",responsive),document.addEventListener("DOMContentLoaded",function(){let e=new IntersectionObserver((e,t)=>{let n=e[0];n.isIntersecting&&(n.target.querySelectorAll(".no-animation").forEach(e=>{e.classList.remove("no-animation")}),t.unobserve(n.target))},{rootMargin:"0px",threshold:.2}),t=document.querySelector(".timelineInit");e.observe(t)}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".skillName").forEach(function(e){e.addEventListener("mouseenter",function(){document.querySelectorAll('.skillName[data-name="'+e.getAttribute("data-name")+'"]').forEach(function(e){e.classList.add("skillName-hovered")})}),e.addEventListener("mouseleave",function(){document.querySelectorAll('.skillName[data-name="'+e.getAttribute("data-name")+'"]').forEach(function(e){e.classList.remove("skillName-hovered")})})})});















// const imgDFR = 380
// const spinner = document.querySelector(".spinner");
// const skillLogos = spinner.querySelectorAll('img');

// function skillTransition() {
//     var navUA = navigator.userAgent.toLowerCase(); 
//     var checkSafari = false;
//     try {
//         checkSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
//     } catch(err) {}
//     checkSafari = (checkSafari || ((navUA.indexOf('safari') != -1)&& (!(navUA.indexOf('chrome')!= -1) && (navUA.indexOf('version/')!= -1))));

//     if (checkSafari) {
//         skillLogos.forEach((skills, index) => {
//             skills.style.transition = "transform 1s, opacity 1s";
//             skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + imgDFR + "px)";
//             skills.style.opacity = "1";
//             skills.style.transitionDelay = ".500s";
//         });
//     } else {
//         skillLogos.forEach((skills, index) => {
//             skills.style.transition = "transform 1s, opacity 1s";
//             skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + imgDFR + "px)";
//             skills.style.opacity = "1";
//             skills.classList.add('imgReflect');
//             skills.style.transitionDelay = ".500s";
//         });
//     }
//     initResponsive();
// }

// function initResponsive() {
//     let screenWidth = window.innerWidth;
//     let translateZValue = Math.min(screenWidth / 3, imgDFR);
//     let newSize;

//     if (screenWidth <= 574) {
//         newSize = Math.max(50, 100 - (574 - screenWidth) / 5.24);
//     } else {
//         newSize = 100;
//     }

//     spinner.style.width = newSize + "px";
//     spinner.style.height = newSize + "px";

//     skillLogos.forEach((skills, index) => {
//         skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + translateZValue + "px)";
//     });
// }

// function responsive() {
//     let screenWidth = window.innerWidth;
//     let translateZValue = Math.min(screenWidth / 3, imgDFR);
//     let newSize;

//     if (screenWidth <= 574) {
//         newSize = Math.max(50, 100 - (574 - screenWidth) / 5.24);
//     } else {
//         newSize = 100;
//     }

//     spinner.style.width = newSize + "px";
//     spinner.style.height = newSize + "px";

//     if (skillLogos[0].style.transitionDelay != ".0s") {
//         skillLogos.forEach((skills, index) => {
//             skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + translateZValue + "px)";
//             skills.style.transitionDelay = ".0s";
//         });
//     } else {
//         skillLogos.forEach((skills, index) => {
//             skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + translateZValue + "px)";
//         });
//     }
// }

// window.onload = function() {
//     skillTransition();
// };

// window.addEventListener('resize', responsive);

// document.addEventListener('DOMContentLoaded', function() {
//     const observer = new IntersectionObserver((entries, observer) => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//             entry.target.querySelectorAll('.no-animation').forEach(element => {
//                 element.classList.remove('no-animation');
//             });
//             observer.unobserve(entry.target);
//         }
//     }, {
//         rootMargin: '0px',
//         threshold: 0.2
//     });

//     const section = document.querySelector('.timelineInit');
//     observer.observe(section);
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var testers = document.querySelectorAll('.skillName');

//     testers.forEach(function(tester) {
//         tester.addEventListener('mouseenter', function() {
//             var matchingTesters = document.querySelectorAll('.skillName[data-name="' + tester.getAttribute('data-name') + '"]');
//             matchingTesters.forEach(function(t) {
//                 t.classList.add('skillName-hovered');
//             });
//         });

//         tester.addEventListener('mouseleave', function() {
//             var matchingTesters = document.querySelectorAll('.skillName[data-name="' + tester.getAttribute('data-name') + '"]');
//             matchingTesters.forEach(function(t) {
//                 t.classList.remove('skillName-hovered');
//             });
//         });
//     });
// });













// const imgDFR = 380
// const spinner = document.querySelector(".spinner");
// const skillLogos = spinner.querySelectorAll('img');

// // function skillTransition() {
// //     var navUA = navigator.userAgent.toLowerCase(); 
// //     var checkSafari = false;
// //     try {
// //         checkSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
// //     } catch(err) {}
// //     checkSafari = (checkSafari || ((navUA.indexOf('safari') != -1)&& (!(navUA.indexOf('chrome')!= -1) && (navUA.indexOf('version/')!= -1))));

// //     if (checkSafari) {
// //         skillLogos.forEach((skills, index) => {
// //             skills.style.transition = "transform 1s, opacity 1s";
// //             skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + imgDFR + "px)";
// //             skills.style.opacity = "1";
// //             skills.style.transitionDelay = ".500s";
// //         });
// //     } else {
// //         skillLogos.forEach((skills, index) => {
// //             skills.style.transition = "transform 1s, opacity 1s";
// //             skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + imgDFR + "px)";
// //             skills.style.opacity = "1";
// //             skills.classList.add('imgReflect');
// //             skills.style.transitionDelay = ".500s";
// //         });
// //     }
// //     initResponsive();
// // }

// function skillTransition() {
//     var navUA = navigator.userAgent.toLowerCase(); 
//     var checkSafari = false;
//     try {
//         checkSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
//     } catch(err) {}
//     checkSafari = (checkSafari || ((navUA.indexOf('safari') != -1)&& (!(navUA.indexOf('chrome')!= -1) && (navUA.indexOf('version/')!= -1))));

//     setTimeout(() => {
//         skillLogos.forEach((skills, index) => {
//             skills.style.transition = "transform 1s, opacity 1s";
//             skills.style.transform = `rotateY(${index * (360 / skillLogos.length)}deg) translateZ(${imgDFR}px)`;
//             skills.style.opacity = "1";
//             if (!checkSafari) {
//                 skills.classList.add('imgReflect');
//             }
//             skills.style.transitionDelay = ".500s";
//         });
//         initResponsive();
//     }, 50);
// }

// function initResponsive() {
//     let screenWidth = window.innerWidth;
//     let translateZValue = Math.min(screenWidth / 3, imgDFR);
//     let newSize;

//     if (screenWidth <= 574) {
//         newSize = Math.max(50, 100 - (574 - screenWidth) / 5.24);
//     } else {
//         newSize = 100;
//     }

//     spinner.style.width = newSize + "px";
//     spinner.style.height = newSize + "px";

//     skillLogos.forEach((skills, index) => {
//         skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + translateZValue + "px)";
//     });
// }

// function responsive() {
//     let screenWidth = window.innerWidth;
//     let translateZValue = Math.min(screenWidth / 3, imgDFR);
//     let newSize;

//     if (screenWidth <= 574) {
//         newSize = Math.max(50, 100 - (574 - screenWidth) / 5.24);
//     } else {
//         newSize = 100;
//     }

//     spinner.style.width = newSize + "px";
//     spinner.style.height = newSize + "px";

//     if (skillLogos[0].style.transitionDelay != ".0s") {
//         skillLogos.forEach((skills, index) => {
//             skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + translateZValue + "px)";
//             skills.style.transitionDelay = ".0s";
//         });
//     } else {
//         skillLogos.forEach((skills, index) => {
//             skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + translateZValue + "px)";
//         });
//     }
// }

// window.onload = function() {
//     skillTransition();
//     // skillTransition;
// };

// // document.addEventListener("DOMContentLoaded", function(arg) {
// //     // do something cool
// //     skillTransition();
// // });

// // window.onload = function(){
// //     window.document.body.onload = skillTransition; // note removed parentheses
// // };

// window.addEventListener('resize', responsive);

// document.addEventListener('DOMContentLoaded', function() {
//     const observer = new IntersectionObserver((entries, observer) => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//             entry.target.querySelectorAll('.no-animation').forEach(element => {
//                 element.classList.remove('no-animation');
//             });
//             observer.unobserve(entry.target);
//         }
//     }, {
//         rootMargin: '0px',
//         threshold: 0.2
//     });

//     const section = document.querySelector('.timelineInit');
//     observer.observe(section);
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var testers = document.querySelectorAll('.skillName');

//     testers.forEach(function(tester) {
//         tester.addEventListener('mouseenter', function() {
//             var matchingTesters = document.querySelectorAll('.skillName[data-name="' + tester.getAttribute('data-name') + '"]');
//             matchingTesters.forEach(function(t) {
//                 t.classList.add('skillName-hovered');
//             });
//         });

//         tester.addEventListener('mouseleave', function() {
//             var matchingTesters = document.querySelectorAll('.skillName[data-name="' + tester.getAttribute('data-name') + '"]');
//             matchingTesters.forEach(function(t) {
//                 t.classList.remove('skillName-hovered');
//             });
//         });
//     });
// });








const imgDFR = 380
const spinner = document.querySelector(".spinner");
const skillLogos = spinner.querySelectorAll('img');

// function skillTransition() {
//     var navUA = navigator.userAgent.toLowerCase(); 
//     var checkSafari = false;
//     try {
//         checkSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
//     } catch(err) {}
//     checkSafari = (checkSafari || ((navUA.indexOf('safari') != -1)&& (!(navUA.indexOf('chrome')!= -1) && (navUA.indexOf('version/')!= -1))));

//     if (checkSafari) {
//         skillLogos.forEach((skills, index) => {
//             skills.style.transition = "transform 1s, opacity 1s";
//             skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + imgDFR + "px)";
//             skills.style.opacity = "1";
//             skills.style.transitionDelay = ".500s";
//         });
//     } else {
//         skillLogos.forEach((skills, index) => {
//             skills.style.transition = "transform 1s, opacity 1s";
//             skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + imgDFR + "px)";
//             skills.style.opacity = "1";
//             skills.classList.add('imgReflect');
//             skills.style.transitionDelay = ".500s";
//         });
//     }
//     initResponsive();
// }

function skillTransition() {
    var navUA = navigator.userAgent.toLowerCase(); 
    var checkSafari = false;
    try {
        checkSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
    } catch(err) {}
    checkSafari = (checkSafari || ((navUA.indexOf('safari') != -1)&& (!(navUA.indexOf('chrome')!= -1) && (navUA.indexOf('version/')!= -1))));

    // skillLogos.forEach((skills, index) => {
    //     skills.style.transition = "transform 1s, opacity 1s";
    //     skills.style.transform = `rotateY(${index * (360 / skillLogos.length)}deg) translateZ(${imgDFR}px)`;
    //     skills.style.opacity = "1";
    //     if (!checkSafari) {
    //         skills.classList.add('imgReflect');
    //     }
    //     skills.style.transitionDelay = ".500s";
    // });
    setTimeout(() => {
        skillLogos.forEach((skills, index) => {
            skills.style.transition = "transform 1s, opacity 1s";
            skills.style.transform = `rotateY(${index * (360 / skillLogos.length)}deg) translateZ(${imgDFR}px)`;
            skills.style.opacity = "1";
            if (!checkSafari) {
                skills.classList.add('imgReflect');
            }
        });
        initResponsive();
    }, 500);
    initResponsive();
}

function initResponsive() {
    let screenWidth = window.innerWidth;
    let translateZValue = Math.min(screenWidth / 3, imgDFR);
    let newSize;

    if (screenWidth <= 574) {
        newSize = Math.max(50, 100 - (574 - screenWidth) / 5.24);
    } else {
        newSize = 100;
    }

    spinner.style.width = newSize + "px";
    spinner.style.height = newSize + "px";

    skillLogos.forEach((skills, index) => {
        skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + translateZValue + "px)";
    });
}

function responsive() {
    let screenWidth = window.innerWidth;
    let translateZValue = Math.min(screenWidth / 3, imgDFR);
    let newSize;

    if (screenWidth <= 574) {
        newSize = Math.max(50, 100 - (574 - screenWidth) / 5.24);
    } else {
        newSize = 100;
    }

    spinner.style.width = newSize + "px";
    spinner.style.height = newSize + "px";

    if (skillLogos[0].style.transitionDelay != ".0s") {
        skillLogos.forEach((skills, index) => {
            skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + translateZValue + "px)";
            skills.style.transitionDelay = ".0s";
        });
    } else {
        skillLogos.forEach((skills, index) => {
            skills.style.transform = "rotateY(" + (index * (360 / skillLogos.length)) + "deg) translateZ(" + translateZValue + "px)";
        });
    }
}

// window.onload = function() {
//     skillTransition();
//     // skillTransition;
// };

// document.addEventListener("DOMContentLoaded", function(arg) {
//     // do something cool
//     skillTransition();
// });

// window.onload = function(){
//     window.document.body.onload = skillTransition; // note removed parentheses
// };

// window.addEventListener('resize', responsive);

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries, observer) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.no-animation').forEach(element => {
                element.classList.remove('no-animation');
            });
            observer.unobserve(entry.target);
        }
    }, {
        rootMargin: '0px',
        threshold: 0.2
    });

    const section = document.querySelector('.timelineInit');
    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', function() {
    var testers = document.querySelectorAll('.skillName');

    testers.forEach(function(tester) {
        tester.addEventListener('mouseenter', function() {
            var matchingTesters = document.querySelectorAll('.skillName[data-name="' + tester.getAttribute('data-name') + '"]');
            matchingTesters.forEach(function(t) {
                t.classList.add('skillName-hovered');
            });
        });

        tester.addEventListener('mouseleave', function() {
            var matchingTesters = document.querySelectorAll('.skillName[data-name="' + tester.getAttribute('data-name') + '"]');
            matchingTesters.forEach(function(t) {
                t.classList.remove('skillName-hovered');
            });
        });
    });
});



window.addEventListener ? 
    window.addEventListener("load",skillTransition,false) 
    : 
    window.attachEvent && window.attachEvent("onload",skillTransition);

window.addEventListener('resize', responsive);