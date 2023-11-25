//gsap.registerPlugin(ScrollTrigger);

$(".partners_logo-list").slick({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 4,
  infinite: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

/*gsap.from(results[i].lines,{
        scrollTrigger:{
            trigger: results[i].lines,
            start: 'top 80%',
            end: 'top 20%',
            //scrub: true,
            markers: true,
        },
        opacity: 0,
        stagger: 0.1,
        duration: 0.3,
        y:20,
        transformOrigin:'top',
    })*/

/*gsap.from('.solutions_item',{
    scrollTrigger:{
        trigger: '.solutions_item',
        start: 'top 80%',
        end: 'top 20%',
        //scrub: true,
        markers: true,
    },
    opacity: 0,
    stagger: 0.1,
    duration: 0.3,
    y:20,
    transformOrigin:'top',
})

ScrollTrigger.create({
    trigger: ".solutions_item",
    start: "top center",
    onEnter: () => {
      $("._skills ._skill-main_title").addClass("activate");
      $("._skills ._skills-title h3").addClass("activate");
      //skillControl();
      //$("._skills ._skills-controls ul").addClass("activate");
    },
  });*/

/*scroll.on('scroll', (args) => {
    // Get all current elements : args.currentElements
    if(typeof args.currentElements['hey'] === 'object') {
        let progress = args.currentElements['hey'].progress;
        console.log(progress);
        // ouput log example: 0.34
        // gsap example : myGsapAnimation.progress(progress);
    }
});*/

setTimeout(() => {
  document.documentElement.classList.add("is-ready");

  /*let options = {
    el: document.querySelector("#js-scroll"),
    smooth: true,
    getSpeed: true,
    getDirection: true,
    multiplier: 1,
    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  };
  
  const locoScroll = new LocomotiveScroll(options);*/

  initSmoothScroll();
  charSplit();
  displaySolutions();
  stickyFunc();

  //test();

  /*locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
   return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    //pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
  });
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh(); */
}, 700);

function initSmoothScroll(container) {
  ScrollTrigger.defaults({ scroller: "[data-scroll-container]" });

  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 0.1,
    getSpeed: true,
    getDirection: true,
  });

  scroll.on("scroll", (instance) => {
    ScrollTrigger.update();
    document.documentElement.setAttribute("data-scrolling", instance.direction);
  });

  ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
      return arguments.length
        ? scroll.scrollTo(value, 0, 0)
        : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("[data-scroll-container]").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => scroll.update());

  ScrollTrigger.refresh();
}

function charSplit() {
  const target = document.querySelectorAll(".lines");
  const results = Splitting({ target: target, by: "lines" });

  const panels = gsap.utils.toArray(results);
  panels.forEach((char, i) => {
    char.lines.forEach((char2, ind) => {
      /*char2.forEach((char3,v) => { 
                  console.log(char3.classList.add('line-'+ind))
              })*/
      gsap.from(char2, {
        scrollTrigger: {
          trigger: results[i].lines,
          start: "top 80%",
          end: "top 20%",
          //scrub: true,
          //markers: true,
        },
        opacity: 0,
        delay: ind / 5,
        y: 20,
        transformOrigin: "top",
      });
    });
  });
}

function displaySolutions() {
  const panels = gsap.utils.toArray(".solutions_list .row .col-lg-6");
  panels.forEach((panel, i) => {
    gsap.from(panel.children, {
      scrollTrigger: {
        trigger: panel.children,
        start: "top 80%",
        end: "top 20%",
        //scrub: true,
        // markers: true,
      },
      opacity: 0,
      delay: 1,
      y: 20,
      transformOrigin: "top",
    });
  });
}

function stickyFunc() {
  //window.scroll.on('scroll', ScrollTrigger.update)
  /*const cards = gsap.utils.toArray("");

  cards.forEach((section) => {

    console.log(section)
    gsap.from(section, {
      ScrollTrigger: {
        trigger: section,
        pin: true,
        start: "top center",
        end: "top 100px",
        scrub: true,
      },
      x: 400,
      ease: "none",
      duration: 3,
      opacity: 0,
      //rotate:
    });
  });*/

  const panels = gsap.utils.toArray(".stats_number_list .stats_number_items");
  panels.forEach((panel, i) => {
    var tl = gsap.timeline(panel, {
      scrollTrigger: {
        trigger: panel,
        scroller: ".smooth-scroll",
        pin: '.stats_number',
        start: "top top",
        end: "+=100%",
        scrub: true,
        markers: true,
      },
      /*opacity: 0,
      delay: 1,
      y: 100,
      transformOrigin: "top",*/
    });

    /*tl.from(".stats_number_items h1", {
      scale: 0.3,
      rotation: 45,
      autoAlpha: 0,
      ease: "power2",
    });*/
  });

  /* const cards = gsap.utils.toArray('.stats_number_list .stats_number_items')
    let lastCard = ScrollTrigger.create({
            trigger: cards[cards.length - 1],
            start: 'center center',
        })
       cards.forEach((section) => {
             const inner = section
             ScrollTrigger.create({
                          scroller: '.stats_number',
                          trigger: section,
                          start: '50% 50%',
                          end: () => lastCard.start,
                          pin: inner,
                          pinSpacing: false,
                          pinType: 'transform',
                      })
                   })*/
}

function loadAnimation() {
  document
    .querySelectorAll("[data-reveal]")
    .forEach(function (currentValue, index) {
      console.log(currentValue);
    });
}

/*******
 * 
 * 
 * 
 * locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
/*});

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
 */

function test() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed",
  });

  // --- RED PANEL ---
  gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".line-1",
      scroller: ".smooth-scroll",
      scrub: true,
      start: "top bottom",
      end: "top top",
      onUpdate: (self) => console.log(self.direction),
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
  });

  // --- ORANGE PANEL ---
  gsap.from(".line-2", {
    scrollTrigger: {
      trigger: ".orange",
      scroller: ".smooth-scroll",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
  });

  // --- PURPLE/GREEN PANEL ---
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "..stats_number",
      scroller: ".smooth-scroll",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
  });

  tl.from(".purple p", {
    scale: 0.3,
    rotation: 45,
    autoAlpha: 0,
    ease: "power2",
  })
    .from(
      ".line-3",
      { scaleX: 0, transformOrigin: "left center", ease: "none" },
      0
    )
    .to(".purple", { backgroundColor: "#28a92b" }, 0);

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
