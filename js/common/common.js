// 세부메뉴 보이기
const header = document.querySelector("#header");
const headerLogo = document.querySelector("#header .logo img");
const headerGnb = document.querySelector("#header .gnb ul");
const depth2 = document.querySelectorAll("#header .depth2");
const hamburger = document.querySelector(".hamburger");

const updateLogo = () => {
  const logoSrc = header.classList.contains("scroll-down") ? "/img/common/logo.svg" : "/img/common/logo-w.svg";
  headerLogo.setAttribute("src", logoSrc);
};

const showDepth2 = () => {
  header.classList.add("show-depth2", "bg-white");
  headerLogo.setAttribute("src", "/img/common/logo.svg");

  depth2.forEach((el) => {
    const depth2List = depth2[1].querySelectorAll("li");
    el.style.height = `${depth2List.length * depth2List[0].offsetHeight + 24}px`;
  });
};

const hideDepth2 = () => {
  header.classList.remove("show-depth2", "bg-white");
  updateLogo();
  
  depth2.forEach(el => el.style.height = "0");
};

headerGnb.addEventListener("mouseover", showDepth2);
headerGnb.addEventListener("mouseout", hideDepth2);

// 헤더 스크롤 이벤트
const getScrollTop = () => {
  return window.scrollY !== undefined ? window.scrollY : document.documentElement.scrollTop || document.body.scrollTop;
};

const headerScroll = () => {
  header.classList.toggle("scroll-down", getScrollTop() > 80);
  updateLogo();
};

window.addEventListener("scroll", headerScroll);

// 사이트맵 보이기
const sitemap = document.querySelector("#sitemap");
const wrap = document.querySelector(".wrap");
const sitemapDepth1 = document.querySelectorAll("#sitemap .depth1 > li > a");
const sitemapDepth2 = document.querySelectorAll("#sitemap .depth2");

const showSitemap = () => {
  hamburger.classList.toggle("close");
  wrap.classList.toggle("show-sitemap");
};

hamburger.addEventListener("click", showSitemap);

// 사이트맵 아코디언 메뉴 클릭 이벤트
const toggleDepth2 = (index) => {
  sitemapDepth1.forEach((el, i) => {
    if(i !== index) {
      el.classList.remove("open");
      sitemapDepth2[i].style.height = 0;
      sitemapDepth2[i].style.padding = "0 0.5rem";
    }
  });

  sitemapDepth1[index].classList.toggle("open");
  const depth2List = sitemapDepth2[index].querySelectorAll("li");
  const isOpen = sitemapDepth1[index].classList.contains("open");
  sitemapDepth2[index].style.height = isOpen ? `${depth2List.length * depth2List[0].offsetHeight + 16}px` : 0;
  sitemapDepth2[index].style.padding = isOpen ? "0.5rem" : "0 0.5rem";
};

const sitemapClickEvent = () => {
  sitemapDepth1.forEach((el, index) => el.addEventListener("click", (e) => {
    e.preventDefault();
    toggleDepth2(index);
  }));
};

// 모바일 환경에서만 실행할 이벤트
const delay = 300;
let timer = null;

const isMobile = (eventCallback) => {
  const handleResize = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if(window.innerWidth <= 767) {
        eventCallback();
      }
    }, delay);
  };

  handleResize();

  window.addEventListener("resize", handleResize);
};

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

document.addEventListener("DOMContentLoaded", () => {
  isMobile(() => {
    if(lnbDepth1) {
      lnbClickEvent();
    }
    sitemapClickEvent();
  });
});