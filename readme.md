# Vanilla-mvvm

## 직접 구현해 보는 Vanilla-mvvm 프레임워크

### 사용방법

#### TodoList.js

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


#### main.js

``` javascript
import { App, EventEmitter } from './core';

import '/js/TodoList';

const app = new App(document.querySelector('#app'));

const state = {};
const emitter = new EventEmitter();

app.addComponent(document.createElement('todo-list'), { state, emitter });
```

#### 화면

![screenshot-1.PNG](screenshot-1.PNG)

### Document

#### 선언
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

#### 양방향 바인딩
``` javascript
<input type="text" m-input-data="hello"/>
```

#### 속성 
```javascript
<img m-attr-src="img" alt=""/> 
```

### TODO

- for,if bind 사용
- template html 파일명으로 호출 가능하도록 분리
- store 생성