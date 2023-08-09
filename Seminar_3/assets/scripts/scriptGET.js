async function start() {
    let url = 'https://jsonplaceholder.typicode.com/users/';
    let response = await fetch(url);

    let users = await response.json();
    console.log(users);

    let section = document.getElementById("users");
    let html = '';
    users.forEach(element => {
        let htmlSegment = `<h2>${element.name}</h2>`; //буква ё - `
        html += htmlSegment;
    });
    section.innerHTML = html;
}

start();