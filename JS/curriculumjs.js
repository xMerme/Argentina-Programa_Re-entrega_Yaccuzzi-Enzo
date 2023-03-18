console.log("Actualmente el curriculum está oculto. Para mostrarlo haga click en el botón 'Mostrar Curriculum'")


document.getElementById("boton_color").onclick = function () {
    console.log("Fondo Gris");
    document.body.style.backgroundColor='#d2dde1';
}

document.getElementById("boton_color2").onclick = function () {
    console.log("Fondo Rojo");
    document.body.style.backgroundColor='lightblue';
}

document.getElementById("boton_color3").onclick = function () {
    console.log("Fondo Amarillo");
    document.body.style.backgroundColor='#91bfd3';
}

document.getElementById("mostrarcv").onclick = function () {
    console.log("texto mostrado");
    document.getElementById('cv').style.display="grid";
}

document.getElementById("ocultarcv").onclick = function () {
    console.log("texto oculto");
    document.getElementById('cv').style.display="none";
}

