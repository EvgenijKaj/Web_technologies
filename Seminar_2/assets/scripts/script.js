let flag = true;

function changedColor() {
    //получаем элемент по id
    let elem = document.getElementById("elem1");
    // if (flag) {
    //     //добавить класс к элементу
    //     elem.classList.add("fire");
    //     flag = false;
    // }
    // else {
    //     //удаляем класс
    //     elem.classList.remove("fire");
    //     flag = true;
    // }
    
    // //вывод в консоль
    // console.log(elem);
    elem.classList.toggle("fire"); // classList.contains("fire")
    //elem.textContent = "Second project";
    // if (elem.textContent == "Second project") elem.textContent = "First project";
    // else elem.textContent = "Second project";
    elem.textContent = elem.textContent == "Second project" ? "First project" : "Second project"
}

//получаем элемент по id
let btn = document.getElementById("btn");
console.log(btn);
// слушаем событие нажатия, работает функция changedColor
btn.addEventListener('click', changedColor)