// Mobile menu 
$('.header-menu__btn').on('click', function () {
  $('.header-menu__btn').toggleClass('header-menu__btn--active');
  $('.header-menu__wrapper').toggleClass('header-menu__wrapper--active');
  $("html").toggleClass("modal--overflow");
});

// first slider 
$(function(){
$('.product-wrapper').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow: '<button class="slick-btn slick-prev"><img src="img/svg/slider-btn-left.svg" alt="prev"></button>',
  nextArrow: '<button class="slick-btn slick-next"><img src="img/svg/slider-btn-right.svg" alt="next"></button>',
  responsive: [ {
      breakpoint: 1313,
      settings: {
        slidesToShow: 3,
      }
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
   ]
});

});

  // calculate step 1 
$(".point-one").on("click", function() {
        $(".point-one").toggleClass("calculate-count__point--active");
    
        $(".logo--one").toggleClass("calculate-count__point--green");

      });
$(".point-two").on("click", function() {
        $(".point-two").toggleClass("calculate-count__point--active");
        $(".logo--two").toggleClass("calculate-count__point--green");
    });
$(".point-three").on("click", function() {
        $(".point-three").toggleClass("calculate-count__point--active");
        $(".logo--three").toggleClass("calculate-count__point--green");
    });
$(".point-four").on("click", function() {
        $(".point-four").toggleClass("calculate-count__point--active");
        $(".logo--four").toggleClass("calculate-count__point--green");
    });
$(".point-five").on("click", function() {
        $(".point-five").toggleClass("calculate-count__point--active");
        $(".logo--five").toggleClass("calculate-count__point--green");
    });

  // calculate step 2
  $(".point-one--active").on("click", function() {
    $(".point-one--active").toggleClass("calculate-choose__box-forma");

    $(".logo-one--active").toggleClass("icon-btn--active");

  });
$(".point-two--active").on("click", function() {
    $(".point-two--active").toggleClass("calculate-choose__box-forma");
    $(".logo-two--active").toggleClass("icon-btn--active");
});
$(".point-three--active").on("click", function() {
    $(".point-three--active").toggleClass("calculate-choose__box-forma");
    $(".logo-three--active").toggleClass("icon-btn--active");
});
$(".point-four--active").on("click", function() {
    $(".point-four--active").toggleClass("calculate-choose__box-forma");
    $(".logo-four--active").toggleClass("icon-btn--active");
});
$(".point-five--active").on("click", function() {
    $(".point-five--active").toggleClass("calculate-choose__box-forma");
    $(".logo-five--active").toggleClass("icon-btn--active");
});

$(".point-six--active").on("click", function() {
  $(".point-six--active").toggleClass("calculate-choose__box-forma");
  $(".logo-six--active").toggleClass("icon-btn--active");
});

//////////////

$(".title-one").on("click", function() {
  $(".title-one").toggleClass("calculate-choose__box-forma");

  $(".logo-one--active").toggleClass("icon-btn--active");

});

$(".title-two").on("click", function() {
  $(".title-two").toggleClass("calculate-choose__box-forma");

  $(".logo-two--active").toggleClass("icon-btn--active");

});

$(".title-three").on("click", function() {
  $(".title-three").toggleClass("calculate-choose__box-forma");

  $(".logo-three--active").toggleClass("icon-btn--active");

});

$(".title-four").on("click", function() {
  $(".title-four").toggleClass("calculate-choose__box-forma");

  $(".logo-four--active").toggleClass("icon-btn--active");

});

$(".title-five").on("click", function() {
  $(".title-five").toggleClass("calculate-choose__box-forma");

  $(".logo-five--active").toggleClass("icon-btn--active");

});

$(".title-six").on("click", function() {
  $(".title-six").toggleClass("calculate-choose__box-forma");

  $(".logo-six--active").toggleClass("icon-btn--active");

});

  // calculate step 4
  // on click one 
  
  $(".calculate-inner__logo--one").on("click", function() {
    $(".calculate-choose__box--one").toggleClass("calculate-choose__box-jsparams");
    $(".box-title__js--one").toggleClass("calculate-choose__box-jsactive");
    $(".logo-js--active").toggleClass("logo-color__js--active");
  });

  $(".title-target--one").on("click", function() {
    $(".calculate-choose__box--one").toggleClass("calculate-choose__box-jsparams");
    $(".box-title__js--one").toggleClass("calculate-choose__box-jsactive");
    $(".logo-js--active").toggleClass("logo-color__js--active");
  });

  $(".calculate-inner__logo--two").on("click", function() {
    $(".calculate-choose__box--two").toggleClass("calculate-choose__box-jsparams");
    $(".box-title__js--two").toggleClass("calculate-choose__box-jsactive");
    $(".logo-two__js--active").toggleClass("logo-color__js--active");
  });

  $(".title-target--two").on("click", function() {
    $(".calculate-choose__box--two").toggleClass("calculate-choose__box-jsparams");
    $(".box-title__js--two").toggleClass("calculate-choose__box-jsactive");
    $(".logo-two__js--active").toggleClass("logo-color__js--active");
  });



// Overlay 
  $('.modal').click(function(){
    $(".modal").removeClass("modal--active");
    $("body").removeClass("modal--overflow");
  });

  $('.modal-wrapper').click(function(){
    $(".modal").addClass("modal--active");
    $("body").addClass("modal--overflow");
    return false;
  });
  $('.modal-form__button').click(function(){
    $(".modal").removeClass("modal--active");
    return false;
  });
  //////////////////////////////////

// slider 
  $('.about-completed__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    prevArrow: '<button class="slick-prev__completed"><img src="img/svg/completed-slider-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn__completed slick-next__completed"><img src="img/svg/completed-slider-right.svg" alt="next"></button>',
    responsive: [ {
        breakpoint: 935,
        settings: {
            arrows: false,
            slidesToShow: 2,
        }
      },
      {
        breakpoint: 629,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
    } ]
  });


  $('.reviews-wrapper').slick({
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<button class="slick-prev__btn slick-prev__reviews"><img src="img/svg/completed-slider-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-next__btn slick-next__reviews"><img src="img/svg/completed-slider-right.svg" alt="next"></button>',
    responsive: [ {
        breakpoint: 1337,
        settings: {
            slidesToShow: 2,
            
        }
         },
        {
          breakpoint: 1060,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerMode: false,

          }
    } ]
  });



  $(".btn-count__one").on("click", function() {
    $(".count-box__one").toggleClass("count-box__one-disabled");
    $(".count-box__two").addClass("count-box--active");
  });
  

  $(".btn-count__two").on("click", function() {
    $(".count-box__two").removeClass("count-box--active");
    $(".count-box__three").addClass("count-box--active");
  });
  
  $(".btn-count__three").on("click", function() {
    $(".count-box__three").removeClass("count-box--active");
    $(".count-box__four").addClass("count-box--active");
  });
  
  $(".btn-count__four").on("click", function() {
    $(".count-box__four").removeClass("count-box--active");
    $(".count-box__five").addClass("count-box--active");
  });

  $(".btn-count__five").on("click", function() {
    $(".count-box__five").removeClass("count-box--active");
    $(".count-box__one").addClass("count-box--active");
  });

  $(".services-info__button").on("click", function() {
    $(".modal").addClass("modal--active");
    $("body").addClass("modal--overflow");
  });

  $(".modal-form__button").on("click", function() {
    $(".modal").removeClass("modal--active");
    $("body").removeClass("modal--overflow");
  });


  $(".info-more__text-btn").on("click", function() {
    $(".modal").addClass("modal--active");
    $("body").addClass("modal--overflow");
  });

  $(".order-btn__get").on("click", function() {
    $(".popup-get").addClass("modal--active");
    $("body").addClass("modal--overflow");
  });

  $(".order-btn__order").on("click", function() {
    $(".popup-offer").addClass("modal--active");
    $("body").addClass("modal--overflow");
  });

  $(".header-btn").on("click", function() {
    $(".popup-callback").addClass("modal--active");
    $("body").addClass("modal--overflow");
  });

  $(".btn-count__five").on("click", function() {
    $(".popup-posted").addClass("modal--active");
    $("body").addClass("modal--overflow");
  });

  $(".popup-posted, .modal-posted").on("click", function() {
    $(".popup-posted").removeClass("modal--active");
    $("body").removeClass("modal--overflow");
    return false;
  });


  // form 
  $(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
  
  });




