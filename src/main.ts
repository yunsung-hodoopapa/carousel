import App from "./app";

const createCarouselWrapper = () => {
  const $wrapper = document.createElement("div");
  $wrapper.classList.add("wrap");

  return $wrapper;
};

const createTitle = () => {
  const $title = document.createElement("h1");
  $title.classList.add("title");
  $title.innerText = "CarouSel";

  return $title;
};

const createSection = () => {
  const $section = document.createElement("section");
  $section.classList.add("section");
  $section.setAttribute("id", "section");

  return $section;
};
const root = document.querySelector("#app") as HTMLElement;

(() => {
  const $wrapper = createCarouselWrapper();
  const $title = createTitle();
  const $section = createSection();

  $wrapper.appendChild($title);
  $wrapper.appendChild($section);

  root.appendChild($wrapper);
})();

document.addEventListener("DOMContentLoaded", () => App(root));
