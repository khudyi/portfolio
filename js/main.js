(function ($) {
  "use strict";

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
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

  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery);

let i = 0;
let n = 0;
let k = 0;
let m = 0;
let x = 0;
let y = 0;
let z = 0;
let w = 0;

// Animation on Scroll
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
        checkAndAnimateHtmlSkills();
        checkAndAnimateCssSkills();
        checkAndAnimateJsSkills();
        checkAndAnimateNodeJsSkills();
        checkAndAnimateSassSkills();
        checkAndAnimateJquerySkills();
        checkAndAnimateBootstrapSkills();
        checkAndAnimateReactSkills();
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

let skillHtml = document.querySelector('#skill-html');
let skillCss = document.querySelector('#skill-css');
let skillJs = document.querySelector('#skill-js');
let skillNodeJs = document.querySelector('#skill-nodejs');
let skillSass = document.querySelector('#skill-sass');
let skillJquery = document.querySelector('#skill-jquery');
let skillBootstrap = document.querySelector('#skill-bootstrap');
let skillReact = document.querySelector('#skill-react');

function checkAndAnimateHtmlSkills() {
  if (skillHtml.classList.contains('_active')) {
    setInterval(() => {
      if (i < 4) {
        i++;
        $(`.point_html:nth-child(${i})`).css('background-color', '#F1642B');
        $(`.point_html:nth-child(${i})`).css('opacity', '1');
        $(`.point_html:nth-child(${i})`).css('transform', 'scale(1.2, 1.2)');
      }
    }, 700);
  }
}

function checkAndAnimateCssSkills() {
  if (skillCss.classList.contains('_active')) {
    setInterval(() => {
      if (n < 4) {
        n++;
        $(`.point_css:nth-child(${n})`).css('background-color', '#33A9DC');
        $(`.point_css:nth-child(${n})`).css('opacity', '1');
        $(`.point_css:nth-child(${n})`).css('transform', 'scale(1.2, 1.2)');
      }
    }, 700);
  }
}

function checkAndAnimateJsSkills() {
  if (skillJs.classList.contains('_active')) {
    setInterval(() => {
      if (k < 3) {
        k++;
        $(`.point_js:nth-child(${k})`).css('background-color', '#F0DA51');
        $(`.point_js:nth-child(${k})`).css('opacity', '1');
        $(`.point_js:nth-child(${k})`).css('transform', 'scale(1.2, 1.2)');
      }
    }, 700);
  }
}

function checkAndAnimateNodeJsSkills() {
  if (skillNodeJs.classList.contains('_active')) {
    setInterval(() => {
      if (m < 1) {
        m++;
        $(`.point_nodejs:nth-child(${m})`).css('background-color', '#83CD29');
        $(`.point_nodejs:nth-child(${m})`).css('opacity', '1');
        $(`.point_nodejs:nth-child(${m})`).css('transform', 'scale(1.2, 1.2)');
      }
    }, 700);
  }
}

function checkAndAnimateSassSkills() {
  if (skillSass.classList.contains('_active')) {
    setInterval(() => {
      if (x < 4) {
        x++;
        $(`.point_sass:nth-child(${x})`).css('background-color', '#CB6699');
        $(`.point_sass:nth-child(${x})`).css('opacity', '1');
        $(`.point_sass:nth-child(${x})`).css('transform', 'scale(1.2, 1.2)');
      }
    }, 700);
  }
}

function checkAndAnimateJquerySkills() {
  if (skillJquery.classList.contains('_active')) {
    setInterval(() => {
      if (y < 2) {
        y++;
        $(`.point_jquery:nth-child(${y})`).css('background-color', '#0768AC');
        $(`.point_jquery:nth-child(${y})`).css('opacity', '1');
        $(`.point_jquery:nth-child(${y})`).css('transform', 'scale(1.2, 1.2)');
      }
    }, 700);
  }
}

function checkAndAnimateBootstrapSkills() {
  if (skillBootstrap.classList.contains('_active')) {
    setInterval(() => {
      if (z < 5) {
        z++;
        $(`.point_bootstrap:nth-child(${z})`).css('background-color', '#8211FA');
        $(`.point_bootstrap:nth-child(${z})`).css('opacity', '1');
        $(`.point_bootstrap:nth-child(${z})`).css('transform', 'scale(1.2, 1.2)');
      }
    }, 700);
  }
}

function checkAndAnimateReactSkills() {
  if (skillReact.classList.contains('_active')) {
    setInterval(() => {
      if (w < 1) {
        w++;
        $(`.point_react:nth-child(${w})`).css('background-color', '#5FD3F3');
        $(`.point_react:nth-child(${w})`).css('opacity', '1');
        $(`.point_react:nth-child(${w})`).css('transform', 'scale(1.2, 1.2)');
      }
    }, 700);
  }
}