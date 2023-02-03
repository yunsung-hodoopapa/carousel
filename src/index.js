const wrap = document.querySelector('.wrap');
const section = document.querySelector('#section');

const preBtn = document.createElement('div');
preBtn.innerHTML = '<i class="fa-solid fa-circle-chevron-left"></i>';
section.appendChild(preBtn);

const carousel = document.createElement('div');
carousel.classList.add('carousel-wrap');
section.appendChild(carousel);
const image = document.createElement('img');
carousel.appendChild(image);
image.src = '/src/1.png';
image.width = '400';
image.height = '400';

const nextBtn = document.createElement('div');
nextBtn.innerHTML = '<i class="fa-solid fa-circle-chevron-right"></i>';
section.appendChild(nextBtn);

const buttons = document.createElement('div');
wrap.appendChild(buttons);
buttons.classList.add('dotBtns');

for (let i = 1; i <= 5; i++) {
  const listBtn = document.createElement('li');
  listBtn.id = 'list' + i.toString();
  listBtn.classList.add('dotBtnList');
  buttons.appendChild(listBtn);
  listBtn.innerHTML = '●';
  listBtn.style.cursor = 'default';
}

const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');
const list3 = document.querySelector('#list3');
const list4 = document.querySelector('#list4');
const list5 = document.querySelector('#list5');

const carouselWrap = document.querySelector('.carousel-wrap');

list1.style.color = 'tomato';

list1.addEventListener('click', () => {changeImg(1)});
list2.addEventListener('click', () => {changeImg(2)});
list3.addEventListener('click', () => {changeImg(3)});
list4.addEventListener('click', () => {changeImg(4)});
list5.addEventListener('click', () => {changeImg(5)});

function changeImg(picNum) {
  image.src = `/src/${picNum}.png`;
  if (picNum === 4) image.height = '300';
  else if (picNum === 5) image.height = '220';
  else image.height = '400';
  const allLi = document.querySelectorAll('li');
  for (let i = 0; i < allLi.length; i++) {
    allLi[i].style.color = 'black';
  }
  const li = document.querySelector(`#list${picNum}`);
  li.style.cssText = 'list-style: none; color: tomato; cursor: default';
}

let presentNum = 1;

nextBtn.addEventListener('click', () => {goNext(presentNum + 1)});
preBtn.addEventListener('click', () => {goPre(presentNum - 1)})

function goNext(picNum) {
  if (picNum <= 0) picNum += 5;
  else if (picNum > 5) picNum %= 5;
  console.log(picNum);
  changeImg(picNum);
  presentNum += 1;
  if (presentNum <= 0) presentNum += 5;
  else if (presentNum > 5) presentNum %= 5;
  console.log(presentNum);
}

function goPre(picNum) {
  if (picNum <= 0) picNum += 5;
  else if (picNum > 5) picNum %= 5;
  console.log(picNum);
  changeImg(picNum);
  presentNum -= 1;
  if (presentNum <= 0) presentNum += 5;
  else if (presentNum > 5) presentNum %= 5;
  console.log(presentNum);
}