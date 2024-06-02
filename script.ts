"use strict";

const addTodo = () => {
  const input = document.querySelector(".todo-input") as HTMLInputElement;
  const inputValue = (document.querySelector(".todo-input") as HTMLInputElement)
    .value;

  if (inputValue.trim() === "") {
    console.error("입력값이 비어있습니다.");
    return;
  }

  const list: string[] = [];
  list.push(inputValue);

  input.innerHTML = "";

  console.log({ list });
  todoList(list);
};

const todoList = (list: string[]) => {
  const todos = document.querySelector(".todos") as HTMLUListElement;

  todos.innerHTML = list.map((item) => `<li>${item}</li>`).join("");
};
