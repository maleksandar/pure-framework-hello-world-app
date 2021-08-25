import { Store } from "pure-framework/core";
import { AppModel } from "./model";

export const store = new Store<AppModel>({
    name: 'Arthur',
    answer: 42
})