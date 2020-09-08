export class Todo {
  todo: HTMLElement = document.createElement('li');
  check = document.createElement('input');
  span = document.createElement('span');
  constructor(private text: string) {
    this.check.addEventListener('change', this.isChecked);
  }

  render() {
    this.check.type = 'checkbox';
    this.todo.appendChild(this.check);
    this.span.innerText = this.text;
    this.todo.appendChild(this.span);
    document.querySelector('ul')!.appendChild(this.todo);
  }

  isChecked = () => {
    if (this.check.checked) {
      return (this.span.style.textDecoration = 'line-through');
    }
    this.span.style.textDecoration = 'none';
  };
}
