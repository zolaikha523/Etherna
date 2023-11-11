new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      }
  });

/*
*add header
*/
document.addEventListener('DOMContentLoaded', function () {
  let selectHeader = document.getElementById('header');
  let selectTopbar = document.getElementById('topbar');

  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled');
        }
      } else {
        selectHeader.classList.remove('header-scrolled');
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled');
        }
      }
    };

    // Add an event listener for the 'scroll' event
    window.addEventListener('scroll', headerScrolled);
  }
});

/*on('click', '.navbar .dropdown > a', function(e) {
  if (select('#navbar').classList.contains('navbar-mobile')) {
    e.preventDefault()
    this.nextElementSibling.classList.toggle('dropdown-active')
  }
}, true)*/
  document.addEventListener("DOMContentLoaded", function () {
    
    const activePage = window.location.pathname;
    var navLinks = document.querySelectorAll('.navbar ul a').forEach(link=>{
      if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
      }
    })
     });

/**
   * Mobile nav toggle
   */

$('.mobile-nav-toggle').on('click', function(e) {
  $('#navbar').toggleClass('navbar-mobile');
  $(this).toggleClass('bi-list bi-x');
});

 //Prevent default behavior when a dropdown link is clicked
$('.navbar .dropdown > a').on('click', function(e) {
  if (select('#navbar').classList.contains('navbar-mobile')) {
    e.preventDefault();
    this.nextElementSibling.classList.toggle('dropdown-active');
  }
});

// Prevent default behavior when a dropdown link is clicked
$('.navbar .dropdown > a').on('click', function(e) {
  if ($('#navbar').hasClass('navbar-mobile')) {
    e.preventDefault(); // Prevent the default behavior (e.g., navigating to a new page)
    $(this).next().toggleClass('dropdown-active');
  }
});


/**
   * when click on link in mobile navbar remove the navbar and scroll to a spsefic section
   */
    document.addEventListener('DOMContentLoaded', function () {
      const scrolltoLinks = document.querySelectorAll('.scrollto');
  
      scrolltoLinks.forEach(function (link) {
          link.addEventListener('click', function (e) {
              e.preventDefault();
              
              let navbar = document.querySelector('#navbar')
              if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = document.querySelector('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
              }
  
              // Scroll to the target section
              const targetId = this.getAttribute('href').substring(1); // Remove the '#' from the href
              console.log(targetId);
              const targetSection = document.getElementById(targetId);
  
              if (targetSection) {
                  targetSection.scrollIntoView({ behavior: 'smooth' });
              }
          });
      });
  });


 

/*
*add active class
*/



  /*
   * Initiate aos.js
   */
        AOS.init({ duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });

  /*
   * Initiate Pure Counter 
   */
        new PureCounter();
  /**
   * Skills animation
   */

   /*
   * bac to top button
   */
     $(document).ready(function(){
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>100){
          $(".back-to-top").addClass("active");
        }
        else{
          $(".back-to-top").removeClass("active");
        }
      });
    });
    
   /*
   * portfolio filter
   */

   $(document).ready(function(){
    $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if (value == 'all'){
        $('.portfolio-item').show(1000);
      }
      else{
        $('.portfolio-item').not('.'+value ).hide(1000);
        $('.portfolio-item').filter('.'+value ).show(1000);

      }
    });
  });

  /*
   * navbar
   */

  $(document).ready(function(){
    $('.navbar-toggler').click(function(){
     $(".navbar").toggleClass("active")
    });
  });



  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>100){
        $(".progress-bar1").addClass("active1");
      }
      else{
        $(".progress-bar1").removeClass("active1");
      }
    });
  });
   

  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
