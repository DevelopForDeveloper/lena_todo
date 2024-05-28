"use strict";

let list: string[] = [];

function addTodo() {
  const input = (document.querySelector(".todo-input") as HTMLInputElement)
    .value;
  console.log(input);
  list.push(input);

  const todos = document.querySelector(".todos") as HTMLUListElement;

  list.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    todos.append(li);
  });
}
