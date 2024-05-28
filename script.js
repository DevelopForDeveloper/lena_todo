"use strict";
var list = [];
function addTodo() {
    var input = document.querySelector(".todo-input")
        .value;
    console.log(input);
    list.push(input);
    var todos = document.querySelector(".todos");
    list.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item;
        todos.append(li);
    });
}
console.log("addtodo", list);
var newList = list.map(function (item) { return "<li>".concat(item, "</li>"); });
