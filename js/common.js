// 세부메뉴 보이기
const header = document.querySelector("#header");
const headerLogo = document.querySelector("#header .logo img");
const headerGnb = document.querySelector("#header .gnb ul");
const depth2 = document.querySelectorAll("#header .depth2");
const hamburger = document.querySelector(".hamburger");

headerGnb.addEventListener("mouseover", () => {
  header.classList.add("show-depth2", "bg-white");
  headerLogo.setAttribute("src", "img/common/logo.svg");
  
  depth2.forEach((el) => {
    const depth2List = depth2[1].querySelectorAll("li");
    el.style.height = `${depth2List.length * depth2List[0].offsetHeight + 24}px`;
  });
});

headerGnb.addEventListener("mouseout", () => {
  header.classList.remove("show-depth2", "bg-white");
  headerLogo.setAttribute("src", "img/common/logo-w.svg");
  
  depth2.forEach((el) => {
    el.style.height = `0`;
  });
});

// 헤더 스크롤 이벤트
// const headerTop = header.getBoundingClientRect().top;

// window.addEventListener("scroll", () => {
//   // console.log(window.scrollY);
//   headerLogo.setAttribute("src", "img/common/logo-w.svg");
//   if(window.scrollY > headerTop + header.offsetHeight) {
//     console.log("50이야");
//     headerLogo.setAttribute("src", "img/common/logo.svg");
//   }
//   header.classList.toggle(
//     "is-sticky",
    
// );
// });