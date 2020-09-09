export class Todo {
    constructor(text) {
        this.text = text;
        this.todo = document.createElement('li');
        this.check = document.createElement('input');
        this.span = document.createElement('span');
        this.icon = document.createElement('i');
        this.isChecked = () => {
            if (this.check.checked) {
                return (this.span.style.textDecoration = 'line-through');
            }
            this.span.style.textDecoration = 'none';
        };
        this.deleteTodo = () => {
            this.todo.remove();
        };
        this.check.addEventListener('change', this.isChecked);
        this.todo.style.display = 'flex';
        this.span.style.flex = '1 1 auto';
        this.icon.addEventListener('click', this.deleteTodo);
    }
    render() {
        this.check.type = 'checkbox';
        this.todo.appendChild(this.check);
        this.span.innerText = this.text;
        this.todo.appendChild(this.span);
        this.icon.classList.add('fa');
        this.icon.classList.add('fa-trash');
        this.todo.appendChild(this.icon);
        document.querySelector('ul').appendChild(this.todo);
    }
}
