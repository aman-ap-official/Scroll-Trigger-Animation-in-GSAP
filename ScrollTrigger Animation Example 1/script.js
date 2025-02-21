gsap.from("#page2 h1",{
    opacity:0, // for opacity
    duration:2, // for duration
    x:500, // for move to x axis
    scrollTrigger:{ // scroll Trigger animation code
        trigger:"#page2 h1",  // for trigger a page and h1
       scroller:"body", 
       markers:true, // for see starting and ending point
       start:"top 50%" // for start a animation top 50%..
    }

})

gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page2 h2",
       scroller:"body",
       markers:true,
       start:"top 50%"
    }
})