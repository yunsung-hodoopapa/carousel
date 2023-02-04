export interface UnknownObject {
  [key: string]: string | number | boolean;
}

type Options<State> = {
  element?: HTMLElement;
  props?: UnknownObject;
  state?: State;
};

export default class Component<State> {
  protected element?: HTMLElement;
  protected props?: UnknownObject;
  protected state?: State;
  constructor(private target: HTMLElement, options: Options<State>) {
    this.initialState(options.state);
  }

  protected initialState(initialState?: State) {
    if (!initialState) {
      this.render();
      return;
    }
    this.setState(initialState);
  }

  protected componentDidMount() {}

  // state 변경후 리렌더
  protected setState(nextState: State) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  protected template() {
    return ``;
  }

  protected render() {
    this.element = this.target;
    this.element.innerHTML = this.template();

    this.componentDidMount();
  }
}
