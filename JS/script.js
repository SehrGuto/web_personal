let menuVisible =false;

//funcion que oculta y muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible =false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible =true;
    }
}

function seleccionar(){
    //ocultar el menu despues de seleccionar una opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//funcion para animar las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("java");
        habilidades[2].classList.add("html");
        habilidades[3].classList.add("css");
        habilidades[4].classList.add("poo");
        habilidades[5].classList.add("mysql");
        habilidades[6].classList.add("springboot");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("equipo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("logica");
        habilidades[12].classList.add("futuro");
        habilidades[13].classList.add("persistencia");
    }
}

//detecto la posicion de la pagina para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}
