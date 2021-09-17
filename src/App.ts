import { Component, componentFactory, Store } from "pure-framework/core";
import { div, span } from "pure-framework/html";
import { AppModel } from "./model";
import { store } from "./store";
class AppComponent extends Component<AppModel> {
  template() {
    return div({ class: 'app-root'}, [
      span(`Hello ${this.state.name}! Welcome! `),
      span(`The answer to the ultimate question of life, the universe and everything is: ${this.state.answer}`)
    ]).on('click', () => {
      store.updateState({
        answer: this.state.answer + 1,
        name: 'Ford'
      });
    });
  }
}

export const app = componentFactory(AppComponent);