gsap.from("#page1 #box",{
    scale: 0, // for scale
    delay: 1, // for delay
    duration: 2, // for duration
    rotate:360, // for rotate
})
gsap.from("#page2 #box",{
    scale: 0, 
    delay: 1,
    duration: 2,
    rotate:360,
    // scrollTrigger:"#page2 #box"  // This is easy way to use scrollTrigger...

    scrollTrigger:{ // for scrollTrigger
        trigger:"#page2 #box", // for trigger a page and box
        scroller:"body",  // for body
        markers:true, //for debug
        start: "top 60%" //when the top of the trigger hits the top of the viewport
    }
})