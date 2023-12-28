/**
 * Sliders
 */
const sliders = () => {
  new Swiper('.js-company-swiper', {
    loop: false,
    noSwiping: false,
    spaceBetween: 15,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    autoHeight: true,
    pagination: {
      el: `.company .swiper-dots`,
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
    },
  });
  new Swiper('.js-statistics-swiper', {
    loop: false,
    noSwiping: false,
    spaceBetween: 15,
    slidesPerView: 3,
    watchSlidesProgress: true,
    freeMode: {
      enabled: true,
    },
  });
  new Swiper('.js-profile-partners-swiper', {
    loop: false,
    noSwiping: false,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    pagination: {
      el: `.js-profile-partners-swiper .swiper-dots`,
      clickable: true,
    },
    freeMode: {
      enabled: true,
    },
    breakpoints: {
      0: {
        noSwiping: false,
      },
      992: {
        noSwiping: true,
      },
    },
  });
  new Swiper('.js-profile-statistics-swiper', {
    loop: false,
    noSwiping: false,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    pagination: {
      el: `.js-profile-statistics-swiper .swiper-pagination`,
      type: 'progressbar',
      clickable: true,
    },
    freeMode: {
      enabled: true,
    },
    breakpoints: {
      0: {
        noSwiping: false,
      },
      992: {
        noSwiping: true,
      },
    },
  });
  new Swiper('.js-balances-swiper', {
    loop: false,
    noSwiping: false,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    freeMode: {
      enabled: true,
    },
    pagination: {
      el: `.js-balances-swiper .swiper-pagination`,
      type: 'progressbar',
      clickable: true,
    },
    breakpoints: {
      0: {
        noSwiping: false,
      },
      1280: {
        noSwiping: true,
      },
    },
  });
  new Swiper('.js-plans-swiper', {
    loop: false,
    noSwiping: false,
    spaceBetween: 15,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        noSwiping: false,
        centeredSlides: true,
      },
      768: {
        noSwiping: false,
        centeredSlides: false,
      },
      992: {
        noSwiping: true,
      },
    },
  });
  new Swiper('.js-coins-swiper', {
    loop: false,
    noSwiping: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    freeMode: {
      enabled: true,
    },
    breakpoints: {
      0: {
        noSwiping: false,
        spaceBetween: 15,
        slidesPerView: 'auto',
      },

      768: {
        spaceBetween: 0,
        noSwiping: true,
        slidesPerView: 7,
      },
    },
  });
  new Swiper('.js-reviews-swiper', {
    loop: false,
    spaceBetween: 30,
    slidesPerView: 2,
    speed: 1000,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    navigation: {
      prevEl: '.reviews [ref="prev"]',
      nextEl: '.reviews [ref="next"]',
    },
    pagination: {
      el: `.reviews .swiper-dots`,
      clickable: true,
    },
    freeMode: {
      enabled: false,
    },
    breakpoints: {
      0: {
        spaceBetween: 15,
        slidesPerView: 1,
      },

      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 70,
        slidesPerView: 2,
      },
    },
  });
};

/**
 * Accordion
 */
const accordion = () => {
  var linkToggle = document.querySelectorAll('.js-toggle');

  linkToggle.forEach((el) => {
    el.addEventListener('click', function (event) {
      event.preventDefault();

      var container = document.getElementById(this.dataset.container);

      if (!container.classList.contains('active')) {
        container.classList.add('active');
        el.classList.add('active');
        container.style.height = 'auto';

        var height = container.clientHeight + 'px';

        container.style.height = '0px';

        setTimeout(function () {
          container.style.height = height;
        }, 0);
      } else {
        container.style.height = '0px';

        container.addEventListener(
          'transitionend',
          function () {
            container.classList.remove('active');
            el.classList.remove('active');
          },
          {
            once: true,
          }
        );
      }
    });
  });
};

/**
 * Dropdown
 */
const dropdown = () => {
  const dropdownElement = document.querySelectorAll('.js-dropdown');

  dropdownElement.forEach((element) => {
    element.addEventListener('click', function (e) {
      this.classList.toggle('open');
    });
  });

  document.addEventListener('click', (e) => {
    dropdownElement.forEach((element) => {
      if (!element.contains(e.target)) {
        element.classList.remove('open');
      }
    });
  });
};

// Animations

class Animations {
  constructor() {
    (this.animationSize = 30),
      (this.ease = 'Power1.easeInOut(2)'),
      (this.controller = new ScrollMagic.Controller());
  }

  animate(triggerClass, tl) {
    let trigger = document.querySelector(triggerClass);

    if (!trigger) {
      return;
    }
    new ScrollMagic.Scene({
      triggerElement: triggerClass,
      offset: -450,
    })
      .setTween(tl)
      .addTo(this.controller);
  }

  after() {
    this.animate(
      'main',
      new TimelineLite().to('main', 0.5, {
        opacity: 1,
      })
    );
  }
  init() {
    gsap.config({
      nullTargetWarn: false,
    });

    [
      '.header',
      '.intro',
      '.statistics',
      '.company',
      '.using',
      '.plans',
      '.calculate',
      '.earn',
      '.reviews',
      '.faq',
    ].forEach((el) => {
      this.animate(
        el,
        new TimelineLite().fromTo(
          el,
          0.7,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            ease: this.ease,
          }
        )
      );
    });

    this.animate(
      '.intro',
      new TimelineLite()
        .fromTo(
          '.intro-media',
          0.5,
          {
            scale: 0.8,
          },
          {
            scale: 1,
            ease: this.ease,
          },
          '+=.2'
        )
        .fromTo(
          '.intro-media img',
          0.3,
          {
            autoAlpha: 0,
            x: -15,
          },
          {
            autoAlpha: 1,
            x: 0,
            ease: this.ease,
            stagger: {
              each: 0.1,
            },
          }
        )
    );

    this.animate(
      '.using-media',
      new TimelineLite()
        .fromTo(
          '.using-media',
          0.5,
          {
            scale: 0.8,
          },
          {
            scale: 1,
            ease: this.ease,
          }
        )
        .fromTo(
          '.using-media__item',
          0.2,
          {
            autoAlpha: 0,
            x: -15,
          },
          {
            autoAlpha: 1,
            x: 0,
            ease: this.ease,
            stagger: {
              each: 0.1,
            },
          }
        )
    );

    this.animate(
      '.plans',
      new TimelineLite().fromTo(
        '.plans .plan',
        0.5,
        {
          autoAlpha: 0,
          y: -15,
        },
        {
          autoAlpha: 1,
          y: 0,
          ease: this.ease,
          stagger: {
            each: 0.1,
          },
        },
        '+=.5'
      )
    );

    this.animate(
      '.calculate-profit',
      new TimelineLite()
        .fromTo(
          '.calculate-profit',
          0.5,
          {
            scale: 0.8,
          },
          {
            scale: 1,
            ease: this.ease,
          }
        )
        .fromTo(
          '.calculate-profit .col',
          0.4,
          {
            autoAlpha: 0,
            x: -15,
          },
          {
            autoAlpha: 1,
            x: 0,
            ease: this.ease,
            stagger: {
              each: 0.2,
            },
          }
        )
    );

    this.animate(
      '.auth-layout',
      new TimelineLite()
        .fromTo(
          '.auth-form__content',
          0.5,
          {
            autoAlpha: 0,
            x: -15,
          },
          {
            autoAlpha: 1,
            x: 0,
            ease: this.ease,
          }
        )
        .fromTo(
          '.auth-layout__media-img',
          1,
          {
            autoAlpha: 0,
            scale: 1.2,
          },
          {
            autoAlpha: 1,
            scale: 1,
            ease: this.ease,
            stagger: {
              each: 0.1,
            },
          },
          '-=.3'
        )
    );
  }
}

/**
 * Menu
 */
const common = () => {
  const activeClass = 'is-active',
    body = 'body',
    overlay = '.body-overlay',
    mobileMenu = '.mobile-menu',
    header = '.header',
    lockClass = 'is-lock';

  function toggleMenu() {
    $('#menu-toggle').toggleClass('open');
    $(mobileMenu).toggleClass(activeClass);
    $(header).toggleClass(activeClass);
    $(body).toggleClass(lockClass);
    $(overlay).toggleClass(activeClass);
  }
  function hideMenu() {
    $('#menu-toggle').removeClass('open');
    $(mobileMenu).removeClass(activeClass);
    $(header).removeClass(activeClass);
    $(body).removeClass(lockClass);
    $(overlay).removeClass(activeClass);
  }
  $('#menu-toggle').click(function () {
    toggleMenu();
  });
  $(overlay).click(function () {
    hideMenu();
  });
  /**
   * Stars
   */
  let starRating = 0;
  $('.stars, .star-ratings').each(function () {
    const stars = +$(this).data('stars');
    for (const star of [1, 2, 3, 4, 5]) {
      if (star <= stars) {
        $(this).append(`<span class="stars__star is-active" data-star="${star}">
        <svg class="svg-icon">
          <use href="icons/symbol/svg/sprite.symbol.svg#star"></use>
        </svg></span>`);
      } else {
        $(this)
          .append(`<span class="stars__star" data-star="${star}"><svg class="svg-icon">
          <use href="icons/symbol/svg/sprite.symbol.svg#star"></use>
        </svg></span>`);
      }
    }
  });

  $('.star-ratings .stars__star').hover(
    function () {
      let hoveredStars = $(this).prevAll().add(this);
      hoveredStars.addClass('hovered');
      let allStars = $(this).siblings().add(this);
      allStars.removeClass('rated-star');
    },
    function () {
      var allStars = $(this).siblings().add(this);
      allStars.removeClass('hovered unhovered');
      allStars.slice(0, starRating).addClass('rated-star');
    }
  );

  $('.star-ratings .stars__star').on('click', function () {
    let $input = $(this).closest('.star-ratings-wrap').find('input');
    let allStars = $(this).siblings().add(this);
    allStars.removeClass('rated-star');
    let hoveredStars = $(this).prevAll().add(this);
    hoveredStars.addClass('rated-star');
    starRating = hoveredStars.length;
    $input.val($(this).data('star'));
  });
  $('.star-ratings .stars__star:nth-child(4)').trigger('click');

  /**
   * Select
   */
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var url = state.element.dataset.iconSrc;
    var $state = $(
      `<span class="field-currency__item"><span class="field-currency__image-wrapper"><img src="${url}" class="field-currency__image" /></span> ${state.text}</span>`
    );
    return $state;
  }
  $('.js-select').each(function () {
    let self = $(this);
    $(this).select2({
      theme: 'custom',
      minimumResultsForSearch: -1,
      placeholder: self.data('placeholder'),
      dropdownParent: self.parent(),
    });
  });
  $('.js-select').on('select2:open', function () {
    var optionsContainer = $('.select2-results__options').get(0);
    setTimeout(function () {
      new SimpleBar(optionsContainer);
    }, 0);
  });
  // $('.js-select-currency').each(function () {
  //   let self = $(this);
  //   $(this).select2({
  //     minimumResultsForSearch: -1,
  //     templateResult: formatState,
  //     dropdownParent: self.parent(),
  //   });
  // });
  // $('.js-select-currency').on('select2:open', function () {
  //   var optionsContainer = $('.select2-results__options').get(0);
  //   setTimeout(function () {
  //     new SimpleBar(optionsContainer);
  //   }, 0);
  // });
  // $('.js-select-currency').on('select2:select', function (e) {
  //   let iconSrc = e.params.data.element.dataset.iconSrc;
  //   let availiable = e.params.data.element.dataset.availiable;
  //   let min = e.params.data.element.dataset.min;
  //   $(this)
  //     .parents('.field-currency')
  //     .find('.field-currency__icon img')
  //     .attr('src', iconSrc);
  //   $(this)
  //     .parents('.field-currency')
  //     .find('.field-currency__availiable')
  //     .text(availiable);
  //   $(this).parents('.field-currency').find('.field-currency__min').text(min);
  // });
  let activeInput;
  let activeChooseCurrency;

  $('.field-choose-currency').on('click', function () {
    let $input = $(this).find('input');
    activeInput = $input;
    activeChooseCurrency = $(this);
  });
  $('.choose-currency__btn').on('click', function () {
    let val = $(this).data('value');
    let icon = $(this).find('img').attr('src');

    if (!activeInput) {
      return;
    }
    activeInput.val(val);
    activeChooseCurrency
      .find('.field-choose-currency__icon img')
      .attr('src', icon);
    activeChooseCurrency.find('.field-choose-currency__value').text(val);
    $(this).closest('.modal-window').find('[data-fancybox-close]').click();
  });

  /**
   * Fancybox
   */
  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  });
  window.Modal = Fancybox;
  /**
   * Notifications
   */
  window.notifier = new AWN({
    position: 'bottom-right',
  });
  /**
   * Copy
   */
  $('body').delegate('.js-copy-button', 'click', function (e) {
    e.preventDefault;
    const copyInput = $(this).parents('.js-copy').find('.js-copy-input');
    copyInput[0].select();
    copyInput[0].setSelectionRange(0, 9999);
    document.execCommand('copy');
    window.notifier.success(' ', { labels: { success: 'Copied' } });
  });
  /**
   * Anchor
   */
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    hideMenu();
    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset()?.top - 30,
      },
      500
    );
  });
};

$(document).ready(function () {
  const animations = new Animations();
  common();
  accordion();
  dropdown();
  sliders();
  animations.init();
  animations.after();
});
