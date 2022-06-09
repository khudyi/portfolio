(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

// let point_html = document.querySelectorAll(`.point_html :nth-child(2)`).style = 'background-color: #F1642B; transform: scale(1.2, 1.2); opacity: 1;';

let changeColor = () => {
  
}

  setInterval(changeColor, 1000);

// let point_html = document.querySelector(`#progress_html :nth-child(1)`);
    // point_html.style = 'background-color: #F1642B; transform: scale(1.2, 1.2); opacity: 1;';
    // point_html.style = 'opacity: 1';
    // $(`.point_html:nth-child(${i})`).css('background-color', '#000');