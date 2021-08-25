import { bootstrap } from "pure-framework/core";
import { app } from "./src/App";
import { store } from "./src/store";

bootstrap(document.getElementById('app'), app, store);