gsap.to("#page2 h1",{
    transform:"translate(-175%)",
    scrollTrigger:{
        trigger:"#page2", // note when we use pin we target main page
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2, // for smooth scrole
        pin:true //for stop a screen
    }
})