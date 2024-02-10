// 메인비주얼 자동 슬라이드
const mainSlide = document.querySelectorAll(".main-slide");
const slogan = document.querySelector("#main-visual .heading");
const catchphrase = ["미래 환경을 주도하는 기업,", "고객만족에 최선을 다하는 기업,", "끊임없이 도전하는 기업,"];
let currentIndex = 0;

setInterval(() => {
  let nextIndex = (currentIndex + 1) % mainSlide.length;
  mainSlide[currentIndex].style.opacity = 0;
  mainSlide[nextIndex].style.opacity = 1;
  slogan.querySelector(".change-copy").innerText = catchphrase[nextIndex];
  currentIndex = nextIndex;
}, 4500);

// main-visual heading 애니메이션
gsap.fromTo(slogan,
  {y: 80, autoAlpha: 0},
  {y: 0, autoAlpha: 1, duration: 1.4, overwrite: "auto", ease: "expo"}
)

// main-product heading 애니메이션
gsap.timeline({
  scrollTrigger: {
    trigger: "#main-product .heading",
    start: "top 90%",
    end: "bottom 50%",
    scrub: 1,
  }
})
.to("#main-product .heading", {width: "100%", duration: 3, overwrite: "auto", ease: "expo"})

// product-list 애니메이션
const slideToRow = (itemList, animationCallback) => {
  gsap.utils.toArray(itemList).forEach((item, index) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top 80%",
      end: "bottom 30%",
      onEnter: () => {animationCallback(item, index)},
      onLeaveBack: () => {item.style.opacity = 0;},
    });
    
    item.style.opacity = 0;
  });
}

const animationSlide = (item, index, duration) => {
  gsap.fromTo(item,
    {x: index % 2 === 0 ? -60 : 60, autoAlpha: 0},
    {x: 0, autoAlpha: 1, duration: duration, overwrite: "auto", ease: "expo"}
  );
}

const animationGrayScale = (item) => {
  ScrollTrigger.create({
    trigger: item,
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => {gsap.to(item, {filter: "grayscale(0)", duration: 0.8, ease: "expo"});},
    onLeaveBack: () => {item.style.filter = "grayscale(1)";},
  });
  
  item.style.filter = "grayscale(1)";
}

slideToRow(".product-desc h4", (item, index) => {animationSlide(item, index, 1)});
slideToRow(".product-desc p", (item, index) => {animationSlide(item, index, 1.25)});
gsap.utils.toArray(".product-img").forEach((item) => {animationGrayScale(item)});