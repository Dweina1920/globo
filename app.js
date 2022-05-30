
//<img src='https://cdn.dribbble.com/users/234969/screenshots/5404808/medallion_burst_animation.gif'/>

//var globo = document.getElementsByClassName ("balloon")



//contador de clicks
let contador = 0;

function addCounter(){
   
    contador = contador + 1;
    document.querySelector("#counter").innerHTML = contador;

}

var contar = 0

btnElm.onclick = function() {
contar++;
}
//cierra contador de clicks

function cambiaLogo (){
    
    switch (contador){
    
    case 1:
    document.querySelector(".balloon").style.width = "220px";
    document.querySelector(".balloon").style.height = "200px";
    
    break;

    case 2:
    document.querySelector(".balloon").style.width = "240px";
    document.querySelector(".balloon").style.height = "220px";
    break;
    
    case 3:
    document.querySelector(".balloon").style.width = "260px";
    document.querySelector(".balloon").style.height = "240px";
    break;
    
    case 4:

    document.querySelector(".balloon").style.width = "280px";
    document.querySelector(".balloon").style.height = "260px";
    break;

    case 5:
      
        document.querySelector("#main").style.display= "none";
        document.querySelector(".imagen").style.display= "flex";
    

    }
}

function main() {
    addCounter();
    cambiaLogo();
}


