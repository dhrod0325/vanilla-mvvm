import {Component} from "../core";

const template = `
<div class="todo-list">
    <div>Hello World</div>
    
    <input type="text" m-input-data="hello" />
    <button type="button" @click="helloWorld">EVENT</button>
</div>
`;

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

    mounted() {
        this.$data.hello = 'world';

        this.$emitter.on('waitEvent', () => alert(1));

        this.$emitter.emit('waitEvent');
    }
}

window.customElements.define('todo-list', TodoList);
