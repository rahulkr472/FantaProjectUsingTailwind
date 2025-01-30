const tl = gsap.timeline({scrollTrigger: {
    trigger: ".two",
    start:"0% 95%",
    end: "50% 50%",
    // markers: true,
    scrub: true
}})

tl.to(".one .fanta", {
    top: "113%",
    right:"65%",
    duration:.8,
    
},"fanta")

tl.to(".one .halfOrange", {
    top: "155%",
    left:"23%",
    duration:.8,
    rotateZ:"360deg"
    // zIndex: "99"
    
}, "fanta")

tl.to(".one .orange", {
    top: "167%",
    right:"10%",
    duration:.8,
    // zIndex: "99"
    
}, "fanta")

tl.to(".one .leafLeft", {
    top: "115%",
    left:"79%",
    duration:.8,
    rotate: "110deg"
    // zIndex: "99"
    
}, "fanta")
tl.to(".one .leafRight", {
    top: "115%",
    left:"2%",
    duration:.8,
    rotate: "360deg"
    // zIndex: "99"
    
}, "fanta")

const tl2 = gsap.timeline({scrollTrigger: {
    trigger: ".three",
    start:"0% 90%",
    end: "50% 50%",
    // markers: true,
    scrub: true
}})

tl2.to(".one .fanta", {
    top: "212%",
    right:"35%",
    duration:.8,
    scale:1,
    rotateZ:"360deg"
    
}, "fanta2")

tl2.to(".one .halfOrange", {
    top: "203%",
    left:"42%",
    duration:.8,
    scale:1.3,
    rotateZ:"360deg"
    
    
}, "fanta2")
tl2.to(".two .pepsi", {
    top: "216%",
    left:"15%",
    duration:.8,
    scale:1.1,
    rotateZ:"360deg"
    
}, "fanta2")

tl2.to(".two .sprit", {
    top: "216%",
    left:"84%",
    duration:.8,
    scale:1.2,
    rotateZ:"360deg"
    
}, "fanta2")

