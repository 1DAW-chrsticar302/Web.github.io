document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementsByClassName("menu");
    const body = document.getElementsByTagName("body");

    menu.addEventListener("click", () => {
        body.classList.toggle("claro");
    });

});