"use strict";
var addTodo = function () {
    var input = document.querySelector(".todo-input");
    var inputValue = document.querySelector(".todo-input")
        .value;
    if (inputValue.trim() === "") {
        console.error("입력값이 비어있습니다.");
        return;
    }
    var list = [];
    list.push(inputValue);
    input.innerHTML = "";
    console.log({ list: list });
    todoList(list);
};
var todoList = function (list) {
    var todos = document.querySelector(".todos");
    todos.innerHTML = list.map(function (item) { return "<li>".concat(item, "</li>"); }).join("");
};
