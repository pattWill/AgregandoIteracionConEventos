window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.onmouseover = function(){
        titulo.style.color = 'red';
    }

    titulo.onmouseout = function(){
        titulo.style.color = 'black';
    }

    let estadoSecreto = 0;
    let tituloInput = document.querySelector('#titulo');
        tituloInput.onkeypress = function(event){
            console.log(event.key)
        }

}