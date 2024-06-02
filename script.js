"use strict";
var list = [];
var addTodo = function () {
    var input = document.querySelector(".todo-input");
    var inputValue = document.querySelector(".todo-input")
        .value;
    input.value = "";
    if (inputValue.trim() === "") {
        console.error("입력값이 비어있습니다.");
        return;
    }
    list.push(inputValue);
    todoList(list);
};
var todoList = function (list) {
    var todos = document.querySelector(".todos");
    todos.innerHTML = list
        .map(function (item) { return "<li>".concat(item, "<button onclick=").concat(editTodo(), ">edit</button></li>"); })
        .join("");
};
var editTodo = function () { };
