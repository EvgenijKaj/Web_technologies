// let name = prompt("Введите имя "); 
// alert('Привет, ' + name);

// let age = parseInt(prompt("Введите возраст "));

// switch(age) {
//     case 18:
//         alert("Уже совершеннолетний.");
//         break;
//     case 30:
//         alert('Завтра на работу');
//         break;
//     case 5:
//         alert('Слишком молод');
//         break;
//     default:
//         alert('Такого в списке нет')
// }


function changedColor() {
    //получаем элемент по id
    let elem = document.getElementById("elem1");
    elem.classList.toggle("fire"); // classList.contains("fire")

}

//получаем элемент по id
let btn = document.getElementById("btn");
console.log(btn);
// слушаем событие нажатия, работает функция changedColor
btn.addEventListener('click', changedColor)