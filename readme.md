# Vanilla-mvvm

## 직접 구현해 보는 Vanilla-mvvm 프레임워크

> [Component](core/dom/Component.js) 클래스 구현은 [Gumball12](https://github.com/Gumball12) 님이 작성하신 [mvvm-in-js](https://github.com/Gumball12/mvvm-in-js)를 많이 참고하였음

## 구현하며 배운것

- Web Component 사용법
- Proxy Api 사용법
- EventTarget Api 활용한 이벤트 위임

## 사용방법

### TodoList.js

``` javascript
import {Component} from "../core";

const template = `
<div class="todo-list">
    <div>Hello World</div>
    
    <input type="text" m-input-data="hello"/>
</div>
`;

export class TodoList extends Component {
    setUp() {
        this.initialize({
            template,
            data: {
                hello: ''
            }
        });
    }

    mounted() {
        this.$data.hello = 'world';
    }
}

window.customElements.define('todo-list', TodoList);
```

### main.js

``` javascript
import { App, EventEmitter } from './core';

import '/js/TodoList';

const app = new App(document.querySelector('#app'));

const state = {};
const emitter = new EventEmitter();

app.addComponent(document.createElement('todo-list'), { state, emitter });
```

## Document

### 선언
``` javascript
setUp() {
    this.initialize({
        template,
        data: {
            hello: ''
        }
    });
}
```

### 이벤트 바인딩
``` html
<button type="button" @click="helloWorld">EVENT</button>
```
```javascript
export class TodoList extends Component {
    setUp() {
        this.initialize({
            template,
            data: {
                hello: ''
            },
            method:{
                helloWorld(e){
                    e.preventDefault();
    
                    alert('helloWorld');
                }
            }
        });
    }
}
```

### 양방향 바인딩
``` javascript
<input type="text" m-input-data="hello"/>
```

### 속성 
```javascript
<img m-attr-src="img" alt=""/> 
```

### 컴포넌트 이벤트 통신
``` javascript
this.$emitter.on('waitEvent', () => alert(1));

this.$emitter.emit('waitEvent');
```

## TODO

- for,if bind 사용
- template html 파일명으로 호출 가능하도록 분리
- store 생성