/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 349:
/***/ (function() {

if (document.getElementById("page1Identifier")) {
  const items = document.querySelectorAll(".item-at")

  function toggleAccordion(item) {
    const title = item.querySelector(".title-at")
    const tab = item.querySelector(".tab-at")

    title.classList.toggle("active")
    tab.classList.toggle("active")

    if (title.classList.contains("active")) {
      tab.style.maxHeight = tab.scrollHeight + "px"
    } else {
      tab.style.maxHeight = null
    }
  }

  function initializeAccordion() {
    items.forEach((item) => {
      item.addEventListener("click", () => {
        toggleAccordion(item)
      })
      item.addEventListener("click", () => {
        item.classList.toggle("active")
      })
    })
  }

  initializeAccordion()
}


/***/ }),

/***/ 446:
/***/ (function() {

//toggle lang
document.addEventListener('DOMContentLoaded', function () {
  const currentLang = document.getElementById('currentLangFooter');
  const langEn = document.getElementById('langEnFooter');
  const langUa = document.getElementById('langUaFooter');


  currentLang.addEventListener('click', function () {
      document.querySelector('.language-dropdown').classList.toggle('show');
  });

  langEn.addEventListener('click', function () {
      currentLang.innerText = 'en';
      document.querySelector('.language-dropdown').classList.remove('show');
  });

  langUa.addEventListener('click', function () {
    currentLang.innerText = 'ua';
    document.querySelector('.language-dropdown').classList.remove('show');
});
});

/***/ }),

/***/ 16:
/***/ (function() {

//toggle lang
document.addEventListener("DOMContentLoaded", function () {
  const currentLangs = document.getElementsByClassName("currentLang");
  const langEns = document.getElementsByClassName("langEn");

  for (let i = 0; i < currentLangs.length; i++) {
    langEns[i].addEventListener("click", function () {
      const currentLangText = currentLangs[i].innerText;

      currentLangs[i].innerText = langEns[i].innerText;

      langEns[i].innerText = currentLangText;
    });
  }
});


//open-close menu
document.addEventListener("DOMContentLoaded", function () {
  function toggleMenu() {
    itemMenu.classList.toggle("open-menu")
    bodyOverflow.style.overflow = "hidden"
  }

  const openMenu = document.getElementById("open-menu")
  const closeMenu = document.getElementById("close-menu")
  const itemMenu = document.getElementById("mob-menu")
  const bodyOverflow = document.body

  openMenu.addEventListener("click", toggleMenu)
  closeMenu.addEventListener("click", function () {
    itemMenu.classList.remove("open-menu")
    bodyOverflow.style.overflow = ""
  })
})

//fixed header
const header = document.getElementById("header")
let isHidden = false
let lastScrollTop = 0

window.addEventListener("scroll", function () {
  const st = window.pageYOffset || document.documentElement.scrollTop

  if (st > lastScrollTop && st > 100) {
    if (!isHidden) {
      header.classList.remove("header-show")
      header.classList.add("header-hide")
      isHidden = true
    }
  } else {
    if (isHidden) {
      header.classList.remove("header-hide")
      header.classList.add("header-show")
      isHidden = false
    }
  }

  lastScrollTop = st <= 0 ? 0 : st
})


/***/ }),

/***/ 130:
/***/ (function() {

if (document.getElementById("page1Identifier")) {
  jQuery(document).ready(function ($) {
    /*** Location switcher ***/
    $("#switch-location").change(function () {
      if ($(this).is(":checked")) {
        $("#ua-details").hide()
        $("#int-details").fadeIn()
      } else {
        $("#int-details").hide()
        $("#ua-details").fadeIn()
      }
    })

    /*** Tabs ***/
    $(".support .tabs").each(function () {
      var $tabs = $(this)

      $tabs.find(".tabs-nav li").click(function () {
        var $clickedTab = $(this)
        var targetTab = $clickedTab.find("a").attr("href")

        $tabs.find(".tabs-content > div").hide()
        $(targetTab).fadeIn()

        $tabs.find(".tabs-nav li").removeClass("active")
        $clickedTab.addClass("active")

        return false
      })
    })

    /*** Styled select ***/
    $(".support .select-custom select").each(function () {
      var $this = $(this),
        numberOfOptions = $(this).children("option").length

      $this.addClass("select-hidden")
      $this.after('<div class="select-styled"></div>')

      var $styledSelect = $this.next("div.select-styled")
      $styledSelect.text($this.children("option").eq(0).text())

      var $list = $("<ul />", {
        class: "select-options",
      }).insertAfter($styledSelect)

      for (var i = 0; i < numberOfOptions; i++) {
        $("<li />", {
          text: $this.children("option").eq(i).text(),
          rel: $this.children("option").eq(i).val(),
        }).appendTo($list)
        if ($this.children("option").eq(i).is(":selected")) {
          $('li[rel="' + $this.children("option").eq(i).val() + '"]').addClass(
            "is-selected"
          )
        }
      }

      var $listItems = $list.children("li")

      $styledSelect.click(function (e) {
        e.stopPropagation()
        $("div.select-styled.active")
          .not(this)
          .each(function () {
            $(this).removeClass("active").next("ul.select-options").hide()
          })
        $(this).toggleClass("active").next("ul.select-options").toggle()
      })

      $listItems.click(function (e) {
        e.stopPropagation()
        $styledSelect.text($(this).text()).removeClass("active")
        $this.val($(this).attr("rel")).trigger("change")
        $list.find("li.is-selected").removeClass("is-selected")
        $list
          .find('li[rel="' + $(this).attr("rel") + '"]')
          .addClass("is-selected")
        $list.hide()
      })

      $(document).click(function () {
        $styledSelect.removeClass("active")
        $list.hide()
      })
    })

    /*** Copy button ***/
    $(".support .btn-copy").on("click", function (e) {
      e.preventDefault()

      var btn = $(this),
        value = btn.data("value"),
        $temp = $("<input>")

      $("body").append($temp)
      $temp.val(value).select()
      document.execCommand("copy")
      $temp.remove()

      btn.addClass("copied").find("span").text("Скопійовано")

      setTimeout(function () {
        btn.removeClass("copied").find("span").text("Скопіювати")
      }, 2000)
    })

    /*** Currensy change ***/
    $("#select-currency").on("change", function () {
      var currency = $(this).val()

      var buttonsCurrencyValues = {
        uah: [200, 500, 1000],
        usd: [20, 100, 300],
        eur: [20, 100, 300],
      }

      $(".buttons-set .btn").each(function (index, el) {
        $(el)
          .html(
            "+ " +
              buttonsCurrencyValues[currency][index] +
              ' <span class="text-light">' +
              currency.toUpperCase() +
              "</span>"
          )
          .attr("data-value", buttonsCurrencyValues[currency][index])
      })
    })

    /*** Donate form buttons ***/
    $(".donate-form .btn").on("click", function (e) {
      e.preventDefault()

      var val = parseInt($(this).attr("data-value")),
        input = $(this).parents(".donate-form").find('input[type="number"]')

      input.val(+input.val() + val)
    })
  })
}


/***/ }),

/***/ 146:
/***/ (function() {

if (document.getElementById("page1Identifier")) {
  const openPopUp = document.getElementById("openSliderPopUp")
  const closePopUp = document.getElementById("closeSliderPopUp")
  const contentPopUp = document.getElementById("contentSliderPopUp")
  const bodyOverflow = document.body

  openPopUp.addEventListener("click", function (e) {
    e.preventDefault()
    contentPopUp.classList.add("active")
    bodyOverflow.style.overflow = "hidden"
  })

  closePopUp.addEventListener("click", function () {
    contentPopUp.classList.remove("active")
    bodyOverflow.style.overflow = "auto"
  })
}


/***/ }),

/***/ 508:
/***/ (function() {

if (document.getElementById('page1Identifier')) {
  const blocks = document.querySelectorAll('.project__title-bread__item');
  const contentBlocks = document.querySelectorAll(
    '.project__content-item-wrap'
  );

  blocks.forEach((block, index) => {
    block.addEventListener('click', () => {
      blocks.forEach((b) => b.classList.remove('active'));
      contentBlocks.forEach((c) => c.classList.remove('active'));

      block.classList.add('active');
      contentBlocks[index].classList.add('active');
    });
  });
}


/***/ }),

/***/ 794:
/***/ (function() {

if (document.getElementById('page1Identifier')) {
  const introSlider = new Swiper('.intro-slider__items', {
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    loop: true,
    watchSlidesProgress: true,
  });

  document.addEventListener(
    'mouseenter',
    (event) => {
      const el = event.target;
      if (el && el.matches && el.matches('.swiper-container')) {
        el.swiper.autoplay.stop();
        el.classList.add('swiper-paused');

        const activeNavItem = el.querySelector(
          '.swiper-pagination-bullet-active'
        );
        activeNavItem.style.animationPlayState = 'paused';
      }
    },
    true
  );

  document.addEventListener(
    'mouseleave',
    (event) => {
      const el = event.target;
      if (el && el.matches && el.matches('.swiper-container')) {
        el.swiper.autoplay.start();
        el.classList.remove('swiper-paused');

        const activeNavItem = el.querySelector(
          '.swiper-pagination-bullet-active'
        );

        activeNavItem.classList.remove('swiper-pagination-bullet-active');

        setTimeout(() => {
          activeNavItem.classList.add('swiper-pagination-bullet-active');
        }, 10);
      }
    },
    true
  );

  const aboutSlider = new Swiper('.slider__about', {
    slidesPerView: 3,
    spaceBetween: 12,
    loop: true,
    speed: 1500,
    slideToClickedSlide: true,
    breakpoints: {
      1000: {
        slidesPerView: 1.3,
        spaceBetween: 20,
        slideToClickedSlide: true,
      },

      580: {
        slidesPerView: 1.5,
        spaceBetween: 12,
      },

      480: {
        slidesPerView: 1.5,
        spaceBetween: 12,
      },

      320: {
        slidesPerView: 1.09,
        spaceBetween: 12,
      },
    },
  });

  const projectSlider1 = new Swiper('.gallery-banner__photo1', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    speed: 1500,

    navigation: {
      nextEl: '.project-gallery-btn-next',
      prevEl: '.project-gallery-btn-prev',
      clickable: 'true',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
  });

  const projectSlider2 = new Swiper('.gallery-banner__photo2', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    speed: 1500,

    navigation: {
      nextEl: '.project-gallery-btn-next',
      prevEl: '.project-gallery-btn-prev',
      clickable: 'true',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
  });

  const projectSlider3 = new Swiper('.gallery-banner__photo3', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    speed: 1500,

    navigation: {
      nextEl: '.project-gallery-btn-next',
      prevEl: '.project-gallery-btn-prev',
      clickable: 'true',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
  });

  const projectSlider4 = new Swiper('.gallery-banner__photo4', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    speed: 1500,

    navigation: {
      nextEl: '.project-gallery-btn-next',
      prevEl: '.project-gallery-btn-prev',
      clickable: 'true',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
  });

  const projectSlider5 = new Swiper('.gallery-banner__photo5', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    speed: 1500,

    navigation: {
      nextEl: '.project-gallery-btn-next',
      prevEl: '.project-gallery-btn-prev',
      clickable: 'true',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
  });

  const projectSlider6 = new Swiper('.gallery-banner__photo6', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    speed: 1500,

    navigation: {
      nextEl: '.project-gallery-btn-next',
      prevEl: '.project-gallery-btn-prev',
      clickable: 'true',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
  });

  const photoreportsSlider = new Swiper('.photoreports__content-slider', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    speed: 1500,
    loop: false,

    navigation: {
      nextEl: '.photoreports__content-navigation-next',
      prevEl: '.photoreports__content-navigation-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },

      320: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
    },
  });

  const popupSlider = new Swiper('.popup-slider', {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1500,
    loop: false,

    navigation: {
      nextEl: '.popup-navigation-next',
      prevEl: '.popup-navigation-prev',
    },
  });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(794);
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_projectTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(508);
/* harmony import */ var _modules_projectTabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_projectTabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(146);
/* harmony import */ var _modules_popups__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_popups__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_payment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(130);
/* harmony import */ var _modules_payment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_payment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_faq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(349);
/* harmony import */ var _modules_faq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_faq__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(446);
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_footer__WEBPACK_IMPORTED_MODULE_6__);








}();
/******/ })()
;