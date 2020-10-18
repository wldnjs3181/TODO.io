const watch = document.querySelector(".js-watch"),
    title = watch.querySelector("h1");

function getTime() {
    const time = new Date();
    const hours = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    title.innerText = `${hours < 10 ? `0${hours}`: hours }:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
}


function init() {
    getTime();
    setInterval(getTime, 1000); // setInterval (함수 , 몇초마다실행될지)
}
init();