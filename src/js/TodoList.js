import {Component, ProxyData} from "../core";

const template = `
<div class="todo-list">
    <div>Hello World</div>
    
    <input type="text" m-input-data="hello" />
    <button type="button" @click="helloWorld">EVENT</button>
</div>
`;

export class TodoList extends Component {
    setUp() {
        this.setContainer(template);
        this.setData(new ProxyData({hello:String}, this.onDataChanged.bind(this)));
        this.setMethod(this);
    }

    mounted() {
        this.$data.hello = 'world';

        console.log(this.$data);
    }

    helloWorld(e) {
        e.preventDefault();
        alert('helloWorld');
    }
}

window.customElements.define('todo-list', TodoList);
