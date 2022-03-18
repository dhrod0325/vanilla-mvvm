import { App, EventEmitter } from './core';

import '/js/TodoList';

const app = new App(document.querySelector('#app'));

const state = {};
const emitter = new EventEmitter();

app.addComponent(document.createElement('todo-list'), { state, emitter });

