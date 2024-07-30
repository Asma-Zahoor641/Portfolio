// Hamburger menu toggle
let hamburger = document.querySelector(".ham");
let navigation = document.querySelector(".nav");
let navlist_second = document.querySelector(".nav-list-second");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("active-nav");
  navlist_second.classList.toggle("active-nav-list-second");
  if (navigation.classList.contains("active-nav")) {
    hamburger.src = "cross.svg";
  } else {
    hamburger.src = "hamburger.svg";
  }
});



// GSAP animation for navigation
gsap.from(".nav", {
  x: 2000
});


// // Typed.js initialization
var typed = new Typed("#profession", {
  strings: ["Frontend Web Developer", "Wordpress Developer", "Editor"],
  typeSpeed: 200,
  backSpeed: 200,
  loop: true,
});

// Circular progress bars for skills
let htmlprog = document.getElementsByClassName("html-prog")[0];
let cssprog = document.getElementsByClassName("css-prog")[0];
let jsprog = document.getElementsByClassName("js-prog")[0];

let htmlvalue = document.getElementsByClassName("html-value")[0];
let cssvalue = document.getElementsByClassName("css-value")[0];
let jsvalue = document.getElementsByClassName("js-value")[0];

let h = 0;
let c = 0;
let j = 0;

let html = setInterval(() => {
  h += 1;
  htmlvalue.textContent = `${h}%`;
  htmlprog.style.background = `conic-gradient(var(--primary-color) ${3.6 * h}deg, rgb(8, 0, 0) 0deg)`;
  htmlprog.style.backgroundSize = "100% 100%";
  if (h >= 90) {
    clearInterval(html);
  }
}, 40);

let css = setInterval(() => {
  c += 1;
  cssvalue.textContent = `${c}%`;
  cssprog.style.background = `conic-gradient(var(--primary-color) ${3.6 * c}deg, rgb(8, 0, 0) 0deg)`;
  cssprog.style.backgroundSize = "100% 100%";
  if (c >= 80) {
    clearInterval(css);
  }
}, 40);

let js = setInterval(() => {
  j += 1;
  jsvalue.textContent = `${j}%`;
  jsprog.style.background = `conic-gradient(var(--primary-color) ${3.6 * j}deg, rgb(8, 0, 0) 0deg)`;
  jsprog.style.backgroundSize = "100% 100%";
  if (j >= 70) {
    clearInterval(js);
  }
}, 40);

// Linear progress bars for skills
document.addEventListener('DOMContentLoaded', () => {
  const skills = {
    react: 90,
    java: 75,
    dsa: 60,
    python: 85
  };

  const animateProgress = (skill, target) => {
    const progressBar = document.querySelector(`.inner-${skill}-prog`);
    const valueElement = document.querySelector(`.${skill}-value`);
    let currentValue = 0;

    const interval = setInterval(() => {
      progressBar.style.width = `${++currentValue}%`;
      valueElement.textContent = `${currentValue}%`;
      if (currentValue >= target) clearInterval(interval);
    }, 40);
  };

  Object.entries(skills).forEach(([skill, target]) => animateProgress(skill, target));
});


// Newsletter subscription
function subscribe() {
  var email = document.getElementById('email').value;
  if (validateEmail(email)) {
    alert('Subscribed successfully!');
  } else {
    alert('Please enter a valid email address.');
  }
}

function validateEmail(email) {
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}



// // Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// // Animate project cards with stagger effect
gsap.from(".project-card", {
  opacity: 0,
  y:0,
  x:0,
  duration: 1.5,
  stagger: 0.3,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".project-container",
    start: "top 85%",
    end: "bottom 15%",
    toggleActions: "play none none none",
  }
});

// // Animate testimonial cards with stagger effect
gsap.from(".testimonial-card", {
  opacity: 0,
  y: 0,
  duration: 1.5,
  stagger: 0.3,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".testimonial-container",
    start: "top 85%",
    end: "bottom 15%",
    toggleActions: "play none none none",
  }
});

// // Animate contact section with split effect
// const contactTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#contact",
//     start: "top 85%",
//     end: "bottom 15%",
//     toggleActions: "play none none none",
//   }
// });

// contactTl.from(".left-contact", {
//   opacity: 0,
//   x: -50,
//   duration: 1.5,
//   ease: "power4.out",
// }).from(".right-contact", {
//   opacity: 0,
//   x: 50,
//   duration: 1.5,
//   ease: "power4.out",
// }, "<");
