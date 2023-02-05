// 예시 코드입니다.
// 이런 식으로 createElement -> appendChild 하는 방식으로 작업해보세요.
const imageNubmer = 5;
const imageSize = 480;

const section = document.querySelector("#section");
const container = document.createElement("div");
container.classList.add("container");
section.appendChild(container);

// 캐러셀 생성
const carousel = document.createElement("div");
carousel.classList.add("carousel-wrap");

// 캐러셀 점 생성
const dotCarousel = document.createElement("div");
dotCarousel.classList.add("dot-carousel");

// 자식 등록
container.appendChild(carousel);
container.appendChild(dotCarousel);

let image, dot;

/** 캐러셀 이미지 생성 및 dot 생성
 *
 * @param {Number} n 캐러셀 이미지 개수
 */
const makeImage = (n = imageNubmer) => {
  carousel.style.width = `${100 * n}%`;

  for (let i = 0; i < n; i++) {
    image = document.createElement("div");
    dot = document.createElement("div");

    image.classList.add("image", i);
    dot.classList.add("dot", i);

    image.innerHTML = i;

    carousel.appendChild(image);
    dotCarousel.appendChild(dot);
  }
};

makeImage();

const images = document.querySelectorAll(".image");
const dots = document.querySelectorAll(".dot");

// 캐러셀 이동 거리
let distance = 0;

// dot 위치
let dotCnt = 0;

// 왼쪽 버튼
const lBtn = document.createElement("button");
lBtn.style.left = "10px";
lBtn.innerText = "<";
container.appendChild(lBtn);

// 왼쪽 버튼 클릭 시 이미지, dot 이동
lBtn.addEventListener("click", () => {
  moveIamge("L");
});

// 오른쪽 버튼
const rBtn = document.createElement("button");
rBtn.style.right = "10px";
rBtn.innerHTML = ">";
container.appendChild(rBtn);

// 오른족 버튼 클릭 시 이미지, dot 이동
rBtn.addEventListener("click", () => {
  moveIamge("R");
});

/** 이미지와 dot을 이동시키는 함수
 *
 * @param {string} direction 방향 R or L or D(dot의미)
 * @param {number} n dot을 클릭 시 이동해야 할 dot의 위치
 */
const moveIamge = (direction, n) => {
  let before = dotCnt;
  switch (direction) {
    case "R":
      distance -= imageSize;
      dotCnt++;

      if (distance < -imageSize * (images.length - 1)) {
        distance = 0;
      }
      if (dotCnt >= dots.length) {
        dotCnt = 0;
      }
      break;
    case "L":
      distance += imageSize;
      dotCnt--;

      if (distance > 0) {
        distance = -imageSize * (images.length - 1);
      }
      if (dotCnt < 0) {
        dotCnt = dots.length - 1;
      }
      break;
    default:
      distance = -n * imageSize;
      dotCnt = n;
      break;
  }

  carousel.style.transform = `translate(${distance}px)`;
  dots[before].style.backgroundColor = "white";
  dots[dotCnt].style.backgroundColor = "black";
};

// 기본 렌더링 될 때 첫번째 자리
dots[dotCnt].style.backgroundColor = "black";

const dotCarouselEl = document.querySelector(".dot-carousel");

dotCarousel.addEventListener("click", (e) => {
  // dot이 아닌 다른 곳을 클릭하면 undefined 발생 방지
  if (e.target.className.split(" ")[1])
    moveIamge("D", +e.target.className.split(" ")[1]);
});
