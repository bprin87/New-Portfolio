
// GSAP plugin for hero animation
document.addEventListener("DOMContentLoaded", function () {
    let tl = gsap.timeline();

    // Step 1: Animate Navigation Items First
    tl.from(".site-logo, .nav-menu li, .website-enquiry button", {
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