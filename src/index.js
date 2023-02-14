const wrap = document.querySelector('.wrap');
const section = document.querySelector('#section');
const previousButton = document.createElement('div');
const nextButton = document.createElement('div');
const carouselWrap = document.createElement('div');
const image = document.createElement('img');
const dotButtons = document.createElement('div');

// left 버튼 추가
previousButton.innerHTML = '<i class="fa-solid fa-circle-chevron-left"></i>';
section.appendChild(previousButton);

// 이미지 추가
carouselWrap.classList.add('carousel-wrap');
section.appendChild(carouselWrap);
carouselWrap.appendChild(image);
image.src = '/src/1.png';
image.width = '400';
image.height = '400';

// right 버튼 추가
nextButton.innerHTML = '<i class="fa-solid fa-circle-chevron-right"></i>';
section.appendChild(nextButton);

// 도트 버튼 5개 추가
wrap.appendChild(dotButtons);
dotButtons.classList.add('dotButtons');
for (let i = 1; i <= 5; i++) {
  const listButton = document.createElement('li');
  listButton.id = 'list' + i.toString();
  dotButtons.appendChild(listButton);
  listButton.innerHTML = '●';
  listButton.style.cursor = 'default';
}

// 도트 5개 변수 설정
const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');
const list3 = document.querySelector('#list3');
const list4 = document.querySelector('#list4');
const list5 = document.querySelector('#list5');

// 초기화면
list1.style.color = 'tomato';
let presentNumber = 1;

// 이미지 및 도트 컬러 변경 함수
function changeImgAndDotColor(pictureNumber) {
  image.src = `/src/${pictureNumber}.png`;
  if (pictureNumber === 4) image.height = '300';
  else if (pictureNumber === 5) image.height = '220';
  else image.height = '400';
  const dots = document.querySelectorAll('li');
  for (let i = 0; i <= 4; i++) {
    dots[i].style.color = 'black';
    if (i === pictureNumber - 1) {
      dots[i].style.color = 'tomato';
    }
  }
  presentNumber = pictureNumber;
}

// 도트버튼 클릭 이벤트 추가
list1.addEventListener('click', () => changeImgAndDotColor(1));
list2.addEventListener('click', () => changeImgAndDotColor(2));
list3.addEventListener('click', () => changeImgAndDotColor(3));
list4.addEventListener('click', () => changeImgAndDotColor(4));
list5.addEventListener('click', () => changeImgAndDotColor(5));

// 다음 사진 요청 함수
function goNextPicture(pictureNumber) {
  if (pictureNumber <= 0) pictureNumber += 5;
  else if (pictureNumber > 5) pictureNumber %= 5;
  changeImgAndDotColor(pictureNumber);
}

// 이전 사진 요청 함수
function goPreviousPicture(pictureNumber) {
  if (pictureNumber <= 0) pictureNumber += 5;
  else if (pictureNumber > 5) pictureNumber %= 5;
  changeImgAndDotColor(pictureNumber);
}

// 다음, 이전 버튼 이벤트 추가
nextButton.addEventListener('click', () => goNextPicture(presentNumber + 1));
previousButton.addEventListener('click', () => goPreviousPicture(presentNumber - 1));