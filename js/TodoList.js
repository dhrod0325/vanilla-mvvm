import {Component} from "../core";

const template = `
<div class="todo-list">
    hello world
    <input type="text" m-input-data="hello"/>
</div>

`;

class TodoList extends Component {
    setUp() {
        this.initialize({
            template,
            data: {
                hello: ''
            }
        })
    }

    mounted() {
        this.$data.hello = 'world';
    }
}

window.customElements.define('todo-list', TodoList);