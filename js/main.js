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

let i = 0;
let n = 0;
let k = 0;
let m = 0;
let x = 0;
let y = 0;
let z = 0;

let progressHTML = setInterval(() => {
  if (i < 4) {
    i++;
    $(`.point_html:nth-child(${i})`).css('background-color', '#F1642B');
    $(`.point_html:nth-child(${i})`).css('opacity', '1');
    $(`.point_html:nth-child(${i})`).css('transform', 'scale(1.2, 1.2)');
  } else {
    clearInterval (progressHTML);
  }
}, 700);

let progressCSS = setInterval(() => {
  if (n < 4) {
    n++;
    $(`.point_css:nth-child(${n})`).css('background-color', '#33A9DC');
    $(`.point_css:nth-child(${n})`).css('opacity', '1');
    $(`.point_css:nth-child(${n})`).css('transform', 'scale(1.2, 1.2)');
  } else {
    clearInterval (progressCSS);
  }
}, 700);

let progressJS = setInterval(() => {
  if (k < 3) {
    k++;
    $(`.point_js:nth-child(${k})`).css('background-color', '#F0DA51');
    $(`.point_js:nth-child(${k})`).css('opacity', '1');
    $(`.point_js:nth-child(${k})`).css('transform', 'scale(1.2, 1.2)');
  } else {
    clearInterval (progressJS);
  }
}, 700);

let progressNODE = setInterval(() => {
  if (m < 1) {
    m++;
    $(`.point_nodejs:nth-child(${m})`).css('background-color', '#83CD29');
    $(`.point_nodejs:nth-child(${m})`).css('opacity', '1');
    $(`.point_nodejs:nth-child(${m})`).css('transform', 'scale(1.2, 1.2)');
  } else {
    clearInterval (progressNODE);
  }
}, 700);

let progressSASS = setInterval(() => {
  if (x < 4) {
    x++;
    $(`.point_sass:nth-child(${x})`).css('background-color', '#CB6699');
    $(`.point_sass:nth-child(${x})`).css('opacity', '1');
    $(`.point_sass:nth-child(${x})`).css('transform', 'scale(1.2, 1.2)');
  } else {
    clearInterval (progressSASS);
  }
}, 700);

let progressJQUERY = setInterval(() => {
  if (y < 2) {
    y++;
    $(`.point_jquery:nth-child(${y})`).css('background-color', '#0768AC');
    $(`.point_jquery:nth-child(${y})`).css('opacity', '1');
    $(`.point_jquery:nth-child(${y})`).css('transform', 'scale(1.2, 1.2)');
  } else {
    clearInterval (progressJQUERY);
  }
}, 700);

let progressBOOTSTRAP = setInterval(() => {
  if (z < 5) {
    z++;
    $(`.point_bootstrap:nth-child(${z})`).css('background-color', '#8211FA');
    $(`.point_bootstrap:nth-child(${z})`).css('opacity', '1');
    $(`.point_bootstrap:nth-child(${z})`).css('transform', 'scale(1.2, 1.2)');
  } else {
    clearInterval (progressBOOTSTRAP);
  }
}, 700);