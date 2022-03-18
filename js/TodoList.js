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
