const pageHeading = document.querySelector("#page-header .heading h2.m-br_visible");
const mainContent = document.querySelector("#main section:not(#page-header)");
const mainContentIds = mainContent.getAttribute("id").split(" ");

const mobilePageHeading = [
  {
    id: "greeting",
    content: "CEO인사말"
  },
  {
    id: "history",
    content: "대표 연혁"
  },
  {
    id: "rnd",
    content: "인증 및 특허"
  },
];

mainContentIds.forEach(id => {
  const matchedHeading = mobilePageHeading.find(heading => heading.id === id);
  if (matchedHeading) {
    pageHeading.innerText = matchedHeading.content;
  }
});