// page-header heading 애니메이션
gsap.from("#page-header .heading h2", {y: 60, autoAlpha: 0, duration: 1})

// 모바일 환경 lnb 클릭 이벤트
const lnbDepth1 = document.querySelector(".lnb .depth1 > li p");
const lnbDepth2 = document.querySelector(".lnb .depth2");

const lnbClickEvent = () => {
  const depth2List = lnbDepth2.querySelectorAll("li");

  lnbDepth1.addEventListener("click", () => {
    if(lnbDepth1.classList.contains("open")) {
      lnbDepth1.classList.remove("open");
      lnbDepth2.style.height = "0"
    } else {
      lnbDepth1.classList.add("open");
      lnbDepth2.style.height = `${depth2List.length * depth2List[0].offsetHeight + 16}px`;
    }
  });
};

isMobile(lnbClickEvent);