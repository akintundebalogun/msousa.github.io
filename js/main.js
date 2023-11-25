gsap.registerPlugin(ScrollTrigger);
init();

function init() {
  charSplit();
  displayCont(".fade-cont");
  contactTabs();

  maps();

  //setTimeout(() => {
  //document.documentElement.classList.add("is-ready");

  if (jQuery(".project_list").length > 0) {
    var containerEl = document.querySelector(".project_list .row");
    mixitup(containerEl);
  }

  if (jQuery(".partners_logo-list").length > 0) {
    jQuery(".partners_logo-list").slick({
      dots: false,
      infinite: false,
      arrows: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 10000,
      cssEase: "linear",
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
      ],
    });
  }

  if (jQuery(".partnership_list_slick").length > 0) {
    let arrows =false;
    let swipe =false;
    
    if(jQuery(".partnership_list_slick").hasClass('nav_display')){ 
      arrows =true;
      swipe =true;
    }
    jQuery(".partnership_list_slick").slick({
      dots: false,
      infinite: false,
      arrows: arrows,
      speed: 300,
      variableWidth: true,
      slidesToScroll: 1,
      swipe: swipe,
      infinite: false,
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
      ],
    });
  }

  if (jQuery(".partnership_list_slick").length > 0) {
    $(".partnership_list_slick").slick({
      dots: false,
      infinite: false,
      arrows: false,
      speed: 300,
      variableWidth: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            variableWidth: true,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            variableWidth: true,
            arrows: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
          },
        },
      ],
    });
  }

  if (jQuery(".smooth-scroll").length > 0) {
    // Locomotive();

    if (mobile() == false) {
      statsNumbs();
      innovateSec();
      projects();
    } else {
      displayCont(".mb-fade-cont");
    }
  }

  if(jQuery(".partners_summary").length > 0){
    skrollr.init();
  }
  //}, 700);
}

function mobile() {
  if (window.innerWidth < "992") {
    return true;
  }

  return false;
}

function Locomotive() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    //smooth: true,
    //multiplier: 0.3,
    //getSpeed: true,
    //getDirection: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("[data-scroll-container]", {
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

    pinType: document.querySelector("[data-scroll-container]").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}


jQuery(".form-check-input").change(function() {
  //if(this.checked) {
      jQuery('.sidebar-filer').submit(); 
  //}
});

// --- ORANGE PANEL ---
/*gsap.from(".stats_number .element_sticky", {
  scrollTrigger: {
    trigger: ".stats_number",
    scroller: ".smooth-scroll",
    scrub: true,
    pin: ".stats_number .element_sticky",
    start: "top top",
    end: "+=300%",
  },
  y: 0,
  transformOrigin: "left center",
  ease: "none",
});*/

/*gsap.from(".innovate_summary", {
  //y: -600,
 // y: (i, target) => -600 * target.dataset.speed,
  ease: "none",
  scrollTrigger: {
    trigger: ".innovate_summary",
    start: "center center",
    //end: "+=" + ( 200 - window.innerHeight/4),
    end: "+=300", 
    scrub: true,
   // markers: true,
    scroller: ".smooth-scroll",
  }
});*/

function charSplit() {
  const target = document.querySelectorAll(".lines");
  const results = Splitting({ target: target, by: "lines" });

  const panels = gsap.utils.toArray(results);
  panels.forEach((char, i) => {
    char.lines.forEach((char2, ind) => {
      gsap.from(char2, {
        scrollTrigger: {
          trigger: results[i].lines,
          //scroller: ".smooth-scroll",
          // start: "top 80%",
          start: "top center",
          //end: "+=20%",
        },
        opacity: 0,
        delay: ind / 5,
        y: 20,
        transformOrigin: "top",
      });
    });
  });
}

function contactTabs() {
  const triggerTabList = document.querySelectorAll("#myTab button");
  triggerTabList.forEach((triggerEl) => {
    const tabTrigger = new bootstrap.Tab(triggerEl);

    triggerEl.addEventListener("click", (event) => {
      event.preventDefault();
      tabTrigger.show();
      document
        .querySelector(".map-details-items.active")
        .classList.remove("active");
      console.dir(event.srcElement.parentElement.classList.add("active"));
    });
  });
}

function displayCont(str) {
  const panels = gsap.utils.toArray(str);
  panels.forEach((panel, i) => {
    gsap.from(panel, {
      scrollTrigger: {
        //trigger: panel.children,
        trigger: panel,
        //start: "top 80%",
        //end: "top 20%",
        start: "top center",
        //scroller: ".smooth-scroll",
      },
      opacity: 0,
      //delay: 1,
      y: 20,
      transformOrigin: "top",
    });
  });
}

function statsNumbs() {
  if (jQuery(".stats_number_list").length > 0) {
    let panels = gsap.utils.toArray(".stats_number_list .stats_number_items");

    gsap.set(panels[0], { y: "50%", opacity: 0 });
    gsap.set([panels[1], panels[2], panels[3]], { y: "70%", opacity: 0 });

    ScrollTrigger.create({
      trigger: ".stats_number",
      pin: ".stats_number .container",
      //pinSpacing: false,
      //scroller: ".smooth-scroll",
      scrub: true,
      start: "top top",
      end: "+=160%",
    });

    gsap.to(panels[0], {
      scrollTrigger: {
        trigger: ".stats_number",
        //scroller: ".smooth-scroll",
        scrub: true,
        start: "-=10% top",
        end: "+=50%",
      },
      y: 0,
      opacity: 1,
      transformOrigin: "right center",
      ease: "none",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".stats_number",
          //scroller: ".smooth-scroll",
          scrub: true,
          start: "15% top",
          end: "+=40%",
        },
      })
      .to(panels[1], {
        y: 0,
        transformOrigin: "right center",
        ease: "none",
      })
      .to(
        panels[1],
        {
          opacity: 1,
        },
        "-=0.5"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".stats_number",
          //scroller: ".smooth-scroll",
          scrub: true,
          start: "35% top",
          end: "+=40%",
        },
      })
      .to(panels[2], {
        y: 0,
        transformOrigin: "right center",
        ease: "none",
      })
      .to(
        panels[2],
        {
          opacity: 1,
        },
        "-=0.5"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".stats_number",
          //scroller: ".smooth-scroll",
          scrub: true,
          start: "52% top",
          end: "+=40%",
        },
      })
      .to(panels[3], {
        y: 0,
        transformOrigin: "right center",
        ease: "none",
      })
      .to(
        panels[3],
        {
          opacity: 1,
        },
        "-=0.5"
      );
  }
}

function innovateSec() {
  if (jQuery(".innovate_summary").length > 0) {
    ScrollTrigger.create({
      trigger: ".innovate_summary",
      pin: ".innovate_summary .container-fluid",
      pinSpacing: false,
      //scroller: ".smooth-scroll",
      scrub: true,
      start: "top top",
      end: "+=150%",
    });

    gsap.set(".innovate_summary .bg", { y: "150%", width: "10%" });
    gsap.set(".innovate_summary .bg img", { scale: 3 });
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".innovate_summary",
        start: "-=80% top",
        end: "+=90%",
        scrub: true,
        //scroller: ".smooth-scroll",
      },
    });
    tl.to(".innovate_summary .bg", {
      //scale: 0.2,
      y: "0%",
      width: "100%",
      transformOrigin: "bottom center",
      ease: "none",
    });
    tl.to(
      ".innovate_summary .bg img",
      {
        scale: 1,
        transformOrigin: "bottom center",
        ease: "none",
      },
      "<"
    );
  }
}

function projects() {
  if (jQuery(".projects_summary").length > 0) {
    gsap.set(".projects_summary .projects_list.is_content_holder", {
      width: "33.333%",
    });

    ScrollTrigger.create({
      trigger: ".projects_summary",
      start: "60% center",
      end: "+=205%",
      //scroller: ".smooth-scroll",
      scrub: true,
      pin: ".projects_container",
      pinSpacing: true,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".projects_summary",
          start: "20% center",
          end: "+=205%",
          //scroller: ".smooth-scroll",
          scrub: true,
        },
      })
      .to(".projects_summary .projects_list.is_content_holder", {
        width: "105%",
        height: "105%",
        y: "-100%",
        transformOrigin: "bottom center",
      })
      .to(
        ".projects_summary .projects_list .projects_item",
        {
          height: "100%",
        },
        "<"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".projects_summary",
          start: "35% center",
          end: "+=10%",
          //scroller: ".smooth-scroll",
          scrub: true,
        },
      })
      .to(".projects_summary .projects_list .projects_item .content", {
        opacity: 1,
      })
      .from(
        ".projects_summary .projects_list .projects_item .content .main-cont",
        {
          y: "20%",
          opacity: 0,
          onComplete: function (isActive) {
            console.log(isActive);
            document
              .querySelector(
                ".projects_summary .projects_list.is_content_holder"
              )
              .classList.add("is_completed");
          },
        },
        "<"
      );
  }
}

function maps() {
  if (jQuery(".map-container").length > 0) {
    jQuery(".map-container").mapael({
      map: {
        name: "world_countries",
        defaultArea: {
          attrs: {
            fill: "#4D7FA9",
            stroke: "#11548C",
          },
          attrsHover: {
            fill: "#4D7FA9",
          },
          text: {
            attrs: {
              fill: "#505444",
            },
            attrsHover: {
              fill: "#000",
            },
          },
        },
        defaultPlot: {
          attrs: {
            fill: "#70d1f4",
            opacity: 1,
          },
          attrsHover: {
            opacity: 1,
          },
          text: {
            attrs: {
              fill: "#ffffff",
            },
            attrsHover: {
              fill: "#000",
            },
          },
        },
      },
      plots: {
        nigeria: {
          type: "circle",
          size: 20,
          latitude: 10.758888888889,
          longitude: 8.8413888888889,
          tooltip: { content: "Nigeria" },
        },
        ghana: {
          type: "circle",
          size: 16,
          latitude: 8.758888888889,
          longitude: 2.8413888888889,
          tooltip: { content: "Ghana" },
        },
        iverycoast: {
          type: "circle",
          size: 16,
          latitude: 5.758888888889,
          longitude: 11.8413888888889,
          tooltip: { content: "Ivory Coast" },
        },
        italy: {
          type: "circle",
          size: 16,
          latitude: 43.758888888889,
          longitude: 18.8413888888889,
          tooltip: { content: "Italy" },
          attrs: { fill: "#ffffff" },
        },
        greece: {
          type: "circle",
          size: 16,
          latitude: 45.758888888889,
          longitude: 25.8413888888889,
          tooltip: { content: "Greece" },
          attrs: { fill: "#ffffff" },
        },
        slovenia: {
          type: "circle",
          size: 16,
          latitude: 45.758888888889,
          longitude: 13.8413888888889,
          tooltip: { content: "Slovenia" },
          attrs: { fill: "#ffffff" },
        },
        spain: {
          type: "circle",
          size: 16,
          latitude: 38.758888888889,
          longitude: -4.8413888888889,
          tooltip: { content: "Spain" },
          attrs: { fill: "#ffffff" },
        },
        france: {
          type: "circle",
          size: 16,
          latitude: 43.758888888889,
          longitude: -1.8413888888889,
          tooltip: { content: "France" },
          attrs: { fill: "#ffffff" },
        },
        belgium: {
          type: "circle",
          size: 16,
          latitude: 48.758888888889,
          longitude: 0.8413888888889,
          tooltip: { content: "Belgium" },
          attrs: { fill: "#ffffff" },
        },
        netherland: {
          type: "circle",
          size: 16,
          latitude: 52.758888888889,
          longitude: 7.8413888888889,
          tooltip: { content: "Netherland" },
          attrs: { fill: "#ffffff" },
        },
        germany: {
          type: "circle",
          size: 19,
          latitude: 52.758888888889,
          longitude: 18.8413888888889,
          tooltip: { content: "Germany" },
          attrs: { fill: "#ffffff" },
        },
      },
    });
  }
}
