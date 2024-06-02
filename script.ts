"use strict";

let list: string[] = [];

const addTodo = () => {
  const input = document.querySelector(".todo-input") as HTMLInputElement;
  const inputValue = (document.querySelector(".todo-input") as HTMLInputElement)
    .value;

  input.value = "";
  if (inputValue.trim() === "") {
    console.error("입력값이 비어있습니다.");
    return;
  }

  list.push(inputValue);
  todoList(list);
};

const todoList = (list: string[]) => {
  const todos = document.querySelector(".todos") as HTMLUListElement;

  todos.innerHTML = list
    .map(
      (item) => `<li>${item}<button onclick=${editTodo()}>edit</button></li>`
    )
    .join("");
};

const editTodo = () => {};
