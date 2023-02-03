interface State {
  currentIndex: number;
}

let state: State = {
  currentIndex: 0,
};

const setState = <T extends number>(key: keyof State, value: T) => {
  state = { ...state, [key]: value };
};

const initSection = ($section: Element | null) => {
  if (!$section) return;

  $section.innerHTML = /* html */ `
        <button class="left_button">
            <
        </button>

        <div class="carousel__main">${state.currentIndex}</div>

        <button class="right_button">
            >
        </button>
    `;

  const leftButton = setLeftButton($section);
  const rightButton = setRightButton($section);
};

const setLeftButton = ($section: Element) => {
  const leftButton = $section.querySelector(
    ".left_button"
  ) as HTMLButtonElement;

  return leftButton;
};

const setRightButton = ($section: Element) => {
  const rightButton = $section.querySelector(
    ".left_button"
  ) as HTMLButtonElement;

  rightButton.addEventListener("click", () => {
    setState("currentIndex", state.currentIndex + 1);
  });

  return rightButton;
};

console.log(state);

const App = ($root: HTMLElement) => {
  const $section = $root.querySelector("#section");

  initSection($section);
};

export default App;
