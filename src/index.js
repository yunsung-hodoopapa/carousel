// 예시 코드입니다.
// 이런 식으로 createElement -> appendChild 하는 방식으로 작업해보세요.

const section = document.querySelector('#section');

const carousel = document.createElement('div');
carousel.classList.add('carousel-wrap');
section.appendChild(carousel); 
