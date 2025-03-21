
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
    
            // Close modal
    closeModalButton.addEventListener("click", function () {
        modalBackground.style.display = "none";
        modal.style.display = "none";
        body.style.overflow = "auto";
    });
    
});

