'use strict';

$(function () {
  var auto, visible = true;
  var start_delay = 2; //seconds
  var total_autoplay_duration = 90;
  var end = 45000;

  //gsap.registerPlugin(ScrollToPlugin);
  //gsap.registerPlugin(ScrollTrigger);

  function finished() {
    //console.log('completed');
    $('#play').fadeTo(1000, 0, function () {
      visible = false;
    });
  }

  $('#play').on('click', function () {
    var scrollTop = end - $(window).scrollTop();
    total_autoplay_duration = scrollTop > 0 ? Math.round(scrollTop / 310) : 100;
    console.log('scrollTop: = ' + $(window).scrollTop());
    console.log('total_autoplay_duration = '+total_autoplay_duration);
    auto = gsap.to(window, { duration: total_autoplay_duration, scrollTo: { y: 'max', autoKill: false }, onComplete: finished });
    $(this).fadeTo(1000, 0, function () {
      visible = false;
    })
  })

  function autoKill() {
    if (!visible && $(window).scrollTop() < 28000) {
      visible = true;
      $('#play').fadeTo(1000, 1);
    }
  }

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-trigger",
      pin: true,
      scrub: 1,
      start: "top top",
      end: "+="+end,
      markers: 0,
      toggleActions: "play pause play reset",
    },
  });

  var counter = 0;

  tl.to("[data-slide='intro'] .elmt1", {
    opacity: 0,
    duration: 1,
    delay:start_delay,
    y: -500,
    onComplete: function () {
      //console.log('fade');
      $('#play').fadeTo(1000, 0, function () {
        visible = false;
      })
    }
    // onEnter: function () {
    //   setTimeout(function () {
    //     auto = gsap.to(window, { duration: total_autoplay_duration, scrollTo: { y: 'max', autoKill: false }, onComplete: finished });
    //   }, 1000);
    // }
  })

  .to ("[data-slide='intro'] .bar-blue", {
    opacity: 0,
    y: 200
  }, "-=1")
  
  .fromTo ("[data-slide='meet-the-phone']",{
    opacity: 0,
    y: 100
  },{
    opacity: 1,
    y: 0
  }, "-=0.5")

  .to ("[data-slide='meet-the-phone']",{
    opacity:0,
    delay: 2
  })

  .to ("#sticky-bar", {
    opacity: 1,

  })
    // DATA SLIDE 1
    .from("[data-slide='1']", {
      opacity: 0
    })
    .to("[data-slide='1']", {
      opacity: 0,
      delay: 2
    })

    // DATA SLIDE 2
    .from("[data-slide='2']", {
      opacity: 0,

    })
    .fromTo("[data-slide='2'] .elmt1", {opacity: 0, x:-100}, {opacity: 1, delay: 2, x:0}, ">-2")
    .fromTo("[data-slide='2'] .elmt2", {
      opacity: 0,
      x:100
    }, {
      opacity: 1,
      x:0,
      delay: 2,
      onComplete: function () {
        counter = 0;
        $("[data-slide='3'] .count-up .num").text(counter);
      }
    })
    .to("[data-slide='2']", {
      opacity: 0,
      delay:1,
    })

    // DATA SLIDE 3
    .from("[data-slide='3']", {
      opacity: 0,
      onComplete: function () {
        var timer = setInterval(function () {
          counter++;
          if (counter <= 92)
            $("[data-slide='3'] .count-up .num").text(counter);
          else
            clearInterval(timer);
        }, 20);
      }
    })
    .from("[data-slide='3'] .count-up", {
      opacity: 0,
      scale: 1
    })
    .to("[data-slide='3'] .count-up", {
      opacity: 1,
      duration: 1,
    })
    .to("[data-slide='3'] .count-up", {
      duration: 3,
      scale: 0.6667,
      y: 50
    })
    .fromTo("[data-slide='3'] .lead", {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 2,
    },">-2")
    .fromTo("[data-slide='3'] .heading", {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 2,
    })
    .to("[data-slide='3']", {
      opacity: 0,
      duration: 2,
      delay: 2,
      y: -500
    })

    // DATA SLIDE 4
    .from("[data-slide='4']", {
      opacity: 0,
      duration: 1,
    })
    .fromTo("[data-slide='4'] .heading", {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 2,
    })
    .fromTo("[data-slide='4'] .increase", {
      color: '#fff',
      scale: 0.667
    }, {
      color: '#94b5de',
      scale: 1.5,
      padding: '0 30px',
      duration: 1
    }, ">-2")
    .to("[data-slide='4']", {
      opacity: 0,
      duration: 1,
      delay: 1
    })

    // DATA SLIDE 1
    .from("[data-slide='5a']", {
      opacity: 0,
      y: 50
    })
    .to("[data-slide='5a']", {
      opacity: 0,
      y: 0,
      delay:3,
    })

    // DATA SLIDE 5
    .from("[data-slide='5']", {
      opacity: 0,
      duration: 1,
    })
    .from("[data-slide='5'] .phone1", {
      x: 190,
      duration: 2
    })
    .from("[data-slide='5'] .phone3", {
      x: -190,
      duration: 2
    }, ">-2")
    .fromTo("[data-slide='5'] #phone-expand",
      {scale: 1}, {scale: 0, y: '-200px', duration:3}, ">-1"
    )
    .fromTo("[data-slide='5'] .lead", {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
    }, ">-4")
    .to("[data-slide='5'] .lead", {
      opacity: 0,
    }, ">-1")
    .to("[data-slide='5']", {
      opacity: 0,
      duration: 1,
      delay: 1
    })

    // DATA SLIDE 6
    .from("[data-slide='6']", {
      opacity: 0,
      duration: 1
    }, ">-5.5")
    .fromTo("[data-slide='6'] .idq-chip", {
      scale: 0,
      y: -50
    }, {
      scale: 1,
      duration: 3,
    }, ">-5")
    .fromTo("[data-slide='6'] .line", {
      height: 0,
      y: -300
    }, {
      height: 350,
      duration: 2
    }, "-=3")
    .to("[data-slide='6']", {
      duration: 2,
      delay: 1
    })

    // DATA SLIDE 7
    // .from("[data-slide='7']", { opacity: 0, duration: 1})
    .fromTo("[data-slide='7'] .data-keys", {
      opacity: 0
    }, {
      opacity: 1
    }, ">-1.5")
    .fromTo("[data-slide='7'] .data-key-1", {
      y: -3000
    }, {
      y: 500,
      duration: 20
    }, ">-.5")
    .fromTo("[data-slide='7'] .data-key-2", {
      y: -3000
    }, {
      y: 500,
      duration: 20
    }, ">-21")
    .fromTo("[data-slide='7'] .data-key-3", {
      y: -3000
    }, {
      y: 500,
      duration: 20
    }, ">-22")
    .fromTo("[data-slide='7'] .elmt1", {opacity: 0,y: 50}, {opacity: 1,y: 0,duration: 1}, "-=20")
    .to("[data-slide='7'] .elmt1", {opacity: 0,},"<4")
    .fromTo("[data-slide='7'] .elmt2", {opacity: 0,y: 50}, {opacity: 1,y: 0,duration: 1}, "-=15")
    .to("[data-slide='7'] .elmt2", {opacity: 0}, "<4")
    .fromTo("[data-slide='7'] .elmt3", {opacity: 0,y: 50}, {opacity: 1,y: 0,duration: 1}, "-=10")
    .to("[data-slide='7'] .elmt3", {opacity: 0}, "<4")
    .to("[data-slide='7']", {
      opacity: 0,
      duration: 1
    })
    .to("[data-slide='6']", {
      opacity:0,
      y:-1000,
      duration:3
    }, "-=6")

    // DATA SLIDE 8
    .fromTo("[data-slide='8'] .secured-phone", {
      opacity: 1,
      y:1500,
    }, {
      opacity: 1,
      y: 0,
      duration: 3,
    },"-=8")

    .fromTo("[data-slide='8'] .lead", {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 2,
    },"-=4")
    .to("[data-slide='8']", {
      opacity: 0,
      duration: 1,
      delay: 2
    })

    // DATA SLIDE 9
    .from("[data-slide='9']", {
      opacity: 0,
      duration: 1
    })
    .fromTo("[data-slide='9'] .lead", {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 2,
      stagger: 0.5
    })
    .to("[data-slide='9']", {
      opacity: 0,
      duration: 1
    })

    // DATA SLIDE 10
    .from("[data-slide='10']", {
      opacity: 0,
      duration: 1
    })
    .fromTo("[data-slide='10'] .lead", {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 2,
      stagger: 0.5
    })
    .to("[data-slide='10']", {
      opacity: 0,
      duration: 1
    })

    // DATA SLIDE 11
    .from("[data-slide='11']", {
      opacity: 0,
      duration: 1
    })
    .fromTo("[data-slide='11'] .heading", {
      opacity: 0,
    }, {
      opacity: 1,
      stagger: 0.5
    })
    .fromTo("[data-slide='11'] .bar-blue", {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 2,
    })
    .to("[data-slide='11']", {
      opacity: 0,
      duration: 1
    })

    // DATA SLIDE 12
    .from("[data-slide='12']", {
      opacity: 0,
      duration: 1
    })
    .fromTo("[data-slide='12'] .samsung-phone", {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1
    })
    .fromTo("[data-slide='12'] .heading", {
      opacity: 0,
    }, {
      opacity: 1,
    }, ">-0.5")
    .fromTo("[data-slide='12'] a", {opacity: 0,}, {opacity: 1,stagger: 0.5})
    .to("[data-slide='12']", {opacity: 0,duration: 1,delay: 1})

    // DATA SLIDE 13
    .from("[data-slide='13']", {
      opacity: 0,
      duration: 1,
      onComplete: finished
    })
    .to("[data-slide='13']", {
      opacity: 1,
      duration: 1,
      delay: 2

    });


 // window.addEventListener("scroll", function () {
  $(document).on('mousewheel touchmove', function(){
    if (auto != undefined ) {
      auto.kill();
      //autoKill();
    }
  });

});