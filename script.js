"use strict";

// es6부터는 function대신 arrow함수를 사용하고 있어요 
const addTodo = () => {
    const input = document.querySelector(".todo-input")
        .value;
    // 본방에선 log를 없애는게 맞지만 {input} 이런식으로 적어주면 로그확인할때 input 밸류 이런식으로 나와서 디버깅이 쉬워요
    console.log({ input })

    // 익숙해지면 요런부분도 함수로 빼보세요 
    // 입력 값이 비어있지 않은 경우에만 처리하는 방식이 좋을것같아요 
    if (input.trim() === '') {
        console.error("입력값이 비어있습니다.");
        return;  // 입력 값이 비어있으면 함수를 종료
    }
    // 사용하기 직전에 선언하는게 나중에 버그 찾기 좋아요 
    // var은 권장하지않아요 
    // var의 유효 범위(scope)와 변수 호이스팅(hoisting) 특성에 대해 알아보시면 될것같아요 
    // 기본적으로 전역변수를 사용하는건 권장하지않아요. 
    const list = [];
    list.push(input)

    // 사실 이부분도 함수로 빼는게 좋아요 
    // const는 불변하는 경우 사용합니다. let은 다른데서 수정 가능할때써요 
    const todos = document.querySelector(".todos");
    todos.innerHTML = '';  // 이전에 추가된 목록 항목들을 초기화

    // map을 사용하여 각 요소를 <li> 태그로 변환하고, 그 결과를 todos에 추가
    todos.innerHTML = list.map(item => `<li>${item}</li>`).join('');
}
