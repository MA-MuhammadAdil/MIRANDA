const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let tl = gsap.timeline();

tl.to("#page1", {
  y: "100vh",
  scale: 0.6,
  duration: 0,
});

tl.to("#page1", {
  y: "30vh",
  duration: 1,
  delay: 1,
});

tl.to("#page1", {
  y: "0vh",
  rotate: 360,
  scale: 1,
  duration: 0.8,
});

var card1 = document.querySelector("#card1");
var card2 = document.querySelector("#card2");
var card3 = document.querySelector("#card3");
var card4 = document.querySelector("#card4");

function mouseovercard() {
  card1.addEventListener("mouseover", function () {
    gsap.to("#card2, #card3, #card4", {
      x: "65%",
    });
  });

  card1.addEventListener("mouseleave", () => {
    gsap.to("#card2, #card3, #card4", {
      x: "0%",
    });
  });

  card2.addEventListener("mouseover", function () {
    gsap.to("#card3, #card4", {
      x: "60%",
    });
  });

  card2.addEventListener("mouseleave", () => {
    gsap.to("#card3, #card4", {
      x: "0%",
    });
  });

  card3.addEventListener("mouseover", function () {
    gsap.to("#card4", {
      x: "60%",
    });
  });

  card3.addEventListener("mouseleave", () => {
    gsap.to("#card4", {
      x: "0%",
    });
  });
}

// function mouseleave(){
//     card1.addEventListener("mouseleave",()=>{
//         gsap.to("#card2, #card3, #card4",{
//             x:"-0%"
//         })
//     })

//     card1.addEventListener("mouseleave",()=>{
//         gsap.to("#card3, #card4",{
//             x:"-0%"
//         })
//     })

// }
mouseovercard();
mouseleave();
