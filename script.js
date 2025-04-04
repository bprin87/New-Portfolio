
// GSAP plugin for hero animation
document.addEventListener("DOMContentLoaded", function () {
    let tl = gsap.timeline();

        
    tl.from(".site-logo", {
        x: -100,
        rotation: -360,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
    

    // Step 1: Animate Navigation Items First
    tl.from(".nav-menu li, .website-enquiry button", {
        x: -100,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2 // Each item appears 0.2s apart
    });

    // Step 2: Animate Hero Section After Navigation Completes
    tl.from(".hero h1", { opacity: 0, y: -30, duration: 0.8, ease: "power2.out" })
      .from(".hero h2", { opacity: 0, y: -30, duration: 0.8, ease: "power2.out" }, "-=0.4") // Starts slightly earlier
      .from(".hero h3", { opacity: 0, y: -30, duration: 0.8, ease: "power2.out" }, "-=0.4")
      .from(".hero p", { opacity: 0, y: -30, duration: 0.8, ease: "power2.out" }, "-=0.4")
      .from(".hero button", { opacity: 0, y: -30, duration: 0.8, ease: "power2.out" }, "-=0.4");

});

document.addEventListener("DOMContentLoaded", function () {
    gsap.to("textPath", {
        duration: 6,
        repeat: -1,
        ease: "linear",
        attr: { startOffset: "100%" }
    });
});

// Open and close enquiry modal
document.addEventListener("DOMContentLoaded", function () {

    const modal = document.querySelector(".enquiry-modal");
    const openModalButtons = document.querySelectorAll(".open-modal");
    const closeModalButton = document.querySelector(".close-enquiry-modal");
    const modalBackground = document.querySelector(".modal-background");
    const body = document.body;

    // Ensure modal is hidden when the page loads
    modalBackground.style.display = "none";

        // Open modal on any button click
        openModalButtons.forEach(button => {
            button.addEventListener("click", function (e) {
                e.preventDefault();
                modalBackground.style.display = "flex";

                // Disable Scrolling
                modal.style.display = "block";
                body.style.overflow = "hidden";
                modal.scrollTop = 0;
            });
        });
    
    // Close modal clicking on button
    closeModalButton.addEventListener("click", function () {
        modalBackground.style.display = "none";
        modal.style.display = "none";
        body.style.overflow = "auto";
    });

    // Close modal clicking outside of form
    modalBackground.addEventListener("click", function (event) {
        if (event.target === modalBackground) {
            modalBackground.style.display = "none";
            body.style.overflow = "auto";
        }
    });
    
});


gsap.registerPlugin(ScrollTrigger);

// Move each card off screen on scroll
const cards = gsap.utils.toArray(".card");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".work",
    pin: true,
    scrub: true,
    start: "top top",
    end: () => "+=" + cards.length * 1.5 * window.innerHeight,
  }
});

const baseDelay = 1; // seconds to wait before first slide

cards.forEach((card, i) => {
  if (i < cards.length - 1) {
    const delay = baseDelay + i * 1.5;

    // Step 1: Straighten the card before sliding
    tl.to(card, {
        rotate: 0,
        rotateY: 0,
        rotateZ: 0,
        duration: 0.3,
        ease: "power2.out"
      }, delay - 0.3);
  
      // Step 2: Slide the card off screen
      tl.to(card, {
      x: "-150vw",
      duration: 1,
      ease: "power2.inOut"
    }, delay);
  }
});

// tilt cards
gsap.utils.toArray(".card").forEach((card, i) => {
    gsap.fromTo(card, {
      y: i * 30,
      scale: 1 - i * 0.03
    }, {
      scrollTrigger: {
        trigger: card,
        start: "top center+=100",
        end: "bottom top",
        scrub: true
      },
      y: 0,
      scale: 1,
      ease: "power2.out"
    });
  });
  
// Add ScrollTrigger animation for the final card
gsap.to(".final-card", {
    scrollTrigger: {
      trigger: ".final-card",
      start: "top 75%",
      end: "top 50%",
      scrub: true
    },
    rotate: 0,
    rotateY: 0,
    rotateZ: 0,
    ease: "power2.out"
  });

// //slide header left
let headingSlide = gsap.timeline({
    scrollTrigger: {
      trigger: ".work",
      start: "top top",
      end: "+=400",
      scrub: true
    }
});

headingSlide
  .to(".work-heading", {
    x: "-27vw",
    opacity: "0",
    ease: "power2.out",
  })
  .to(".card-container", {
    y: -100,
    ease: "power2.out"
  }, ">");


// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    
  // Select the element that contains all the carousel slides
  const track = document.querySelector(".carousel-track");

  // Convert the list of child elements (slides) into an array for easier manipulation
  const slides = Array.from(track.children);

  // Loop through each original slide and create a duplicate for seamless looping
  slides.forEach((slide) => {
      // Create a deep copy of the slide (including all child elements like SVG and text)
      const clone = slide.cloneNode(true);
      
      // Append the cloned slide to the end of the carousel track
      track.appendChild(clone);
  });

});

