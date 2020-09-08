export class Todo {
  constructor(text) {
    this.text = text;
    this.todo = document.createElement('li');
    this.check = document.createElement('input');
    this.span = document.createElement('span');
    this.isChecked = () => {
      if (this.check.checked) {
        return (this.span.style.textDecoration = 'line-through');
      }
      this.span.style.textDecoration = 'none';
    };
    this.check.addEventListener('change', this.isChecked);
  }
  render() {
    this.check.type = 'checkbox';
    this.todo.appendChild(this.check);
    this.span.innerText = this.text;
    this.todo.appendChild(this.span);
    document.querySelector('ul').appendChild(this.todo);
  }
}
