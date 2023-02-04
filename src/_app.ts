import Component from './core/Components';

type State = {
  currentIndex: number;
  maxIndex: number;
};

export default class BaseApp extends Component<State> {
  constructor(target: HTMLElement) {
    const state = { currentIndex: 0, maxIndex: 5 };
    super(target, { element: target, state });
  }

  componentDidMount() {
    if (!this.element) return;
    const leftButton = this.element.querySelector('.left_button') as HTMLButtonElement;
    const rightButton = this.element.querySelector('.right_button') as HTMLButtonElement;

    const dots = this.element?.querySelectorAll('.dot');

    const currentIndex = this.state?.currentIndex as number;
    const maxIndex = this.state?.maxIndex as number;

    const isZeroIndex = currentIndex === 0;
    const isFinalIndex = currentIndex === maxIndex - 1;

    leftButton.addEventListener('click', () => this.onClickPrevButton(currentIndex, maxIndex, isZeroIndex));
    rightButton.addEventListener('click', () => this.onClickNextButton(currentIndex, maxIndex, isFinalIndex));

    dots.forEach((dot) => {
      const index = dot.getAttribute('data');
      if (!index) return;
      dot.addEventListener('click', () => this.onClickDot(parseInt(index)));
    });
  }

  onClickPrevButton(currentIndex: number, maxIndex: number, isZero: boolean) {
    isZero ? this.setState({ currentIndex: maxIndex, maxIndex }) : this.setState({ currentIndex: currentIndex - 1, maxIndex });
  }

  onClickNextButton(currentIndex: number, maxIndex: number, isFinalIndex: boolean) {
    isFinalIndex ? this.setState({ currentIndex: 0, maxIndex }) : this.setState({ currentIndex: currentIndex + 1, maxIndex });
  }

  onClickDot = (index: number) => this.setState({ currentIndex: index, maxIndex: this.state?.maxIndex as number });

  renderDots(currentIndex: number) {
    return `${Array.from({ length: this.state?.maxIndex as number }, (_, i) => i)
      .map((_, index) => /* html*/ `<li class="dot ${index === currentIndex && 'active'}" data=${index}></li>`)
      .join('')}`;
  }

  template() {
    const currentIndex = this.state?.currentIndex as number;
    const imgUrl = new URL(`./assets/images/react_${currentIndex + 1}.png`, import.meta.url).href;

    return /*html*/ `
      <div class="wrap">
        <h1 class="title">Carousel</h1>
        <section class="section">
          <button class="left_button"><</button>
          <img src=${imgUrl} alt="images" class="carousel__image"/>
          <button class="right_button">></button>
        </section>
        
        <ul class='dots'>
          ${this.renderDots(currentIndex)}
        </ul>
      </div>
    `;
  }
}
