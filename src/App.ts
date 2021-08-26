import { Component, componentFactory, Store } from "pure-framework/core";
import { div, span } from "pure-framework/html";
import { AppModel } from "./model";
class AppComponent extends Component<AppModel> {
  template() {
    return div({ class: 'app-root'}, [
      span(`Hello ${this.state.name}! Welcome! `),
      span(`The answer to the utimate question of life, the universe and everything is: ${this.state.answer}`)
    ])
  }
}

export const app = componentFactory(AppComponent);