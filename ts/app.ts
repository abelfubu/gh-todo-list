import { Todo } from './classes/Todo.js';

const btn: HTMLButtonElement = document.querySelector('button')!;

const feedTodoList = () => {
  const list = ['Buy Chocolate', 'Feed Cat', 'Finish Homework'];
  for (const todo of list) {
    const newtodo = new Todo(todo);
    newtodo.render();
  }
};

feedTodoList();

const addTodo = (event: Event) => {
  event.preventDefault();
  const text: string = document.querySelector('input')!.value;
  const todo = new Todo(text);
  todo.render();
  document.querySelector('input')!.value = '';
  document.querySelector('input')!.focus();
};

btn.addEventListener('click', addTodo);
