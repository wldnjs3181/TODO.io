const inputName = document.querySelector(".js-inputName"),
    nInput = inputName.querySelector("input"),
    gretting = document.querySelector(".js-gretting");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = nInput.value;
    paintGreetings(currentValue);
    saveName(currentValue);
}

function askForName() {
    inputName.classList.add(SHOWING_CN);
    inputName.addEventListener("submit",handleSubmit);

}


function paintGreetings(text) {
    inputName.classList.remove(SHOWING_CN);
    gretting.classList.add(SHOWING_CN);
    gretting.innerText = `안녕하세요 ${text}님 좋은날입니다`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreetings(currentUser);
    }
}



function init() {
    loadName();
}

init();