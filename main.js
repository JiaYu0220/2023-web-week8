import "./assets/scss/all.scss";
import Swiper from "swiper/bundle";
import "bootstrap/dist/js/bootstrap.min.js";

const introSwiper = new Swiper(".intro-swiper", {
  // 左右箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // swiper 斷點設定為 mobile first
  breakpoints: {
    576: {
      autoplay: true, //等同于以下设置
      /*autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
          },*/
    },
  },
});

const commentSwiper = new Swiper(".comment-swiper", {
  // slide 間距
  spaceBetween: 24,
  slidesPerView: 4,
  direction: "vertical",
  allowTouchMove: false,

  breakpoints: {
    768: {
      slidesPerView: 2,
      direction: "horizontal",
      allowTouchMove: true,
      // Scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
        //需增加 draggable 可拉動下方滾動條
        draggable: true,
      },
      // 使 swiper 可以使用滑鼠滾輪捲動
      mousewheel: true,
    },
    992: {
      slidesPerView: 3,
      direction: "horizontal",
      allowTouchMove: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        //需增加 draggable 可拉動下方滾動條
        draggable: true,
      },
      // 使 swiper 可以使用滑鼠滾輪捲動
      mousewheel: true,
    },
  },
});

console.log("Hello world!");
