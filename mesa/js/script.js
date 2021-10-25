
let body = document.querySelector('body');

let button = document.querySelector ('button');

let texto = document.querySelectorAll('li');

function alterarTema(){
    body.classList.toggle('dark');
    for (let item of texto){
        item.classList.toggle('dark');
    }

}

button.onclick = alterarTema;