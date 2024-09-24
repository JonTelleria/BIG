function cambiarfoto() {
    var radioJauna = document.getElementById("jauna");
    var radioAnderea = document.getElementById("anderea");
    var imagenGenero = document.getElementById("imagenGenero");

    if (radioJauna.checked) {
        imagenGenero.src = "img/caraHombre.jpg";
    }
    if (radioAnderea.checked) {
        imagenGenero.src = "img/caraMujer.jpg";
    }
}

function mostrarDatos() {
    var genero = document.querySelector('input[name="gender"]:checked').value;
    var izena = document.getElementById("izena").value;
    var abizena = document.getElementById("abizena").value;
    var helbidea = document.getElementById("helbidea").value;
    var hiria = document.getElementById("hiria").value;
    var gustokoena = document.querySelector('input[name="Gustokoena"]:checked').value;

   
    var mezua = "<b> Zuzentzeko era: </b>" + genero + "<br>";
    mezua += "<b> Izena: </b>" + izena + "<br>";
    mezua += "<b> Abizena: </b>" + abizena + "<br>";
    mezua += "<b> Helbidea: </b>" + helbidea + "<br>";
    mezua += "<b> Hiria: </b>" + hiria + "<br>";
    mezua += "<b> Gustokoena: </b>" + gustokoena + "<br>";
    document.getElementById("datosformulario").innerHTML =  mezua;
}

function borrar() {
    // Borra los campos del formulario
    document.getElementById("izena").value = "";
    document.getElementById("abizena").value = "";
    document.getElementById("helbidea").value = "";
    document.getElementById("hiria").selectedIndex = 0; 

    // Desmarcar los botones de radio
    document.getElementById("jauna").checked = false;
    document.getElementById("anderea").checked = false;
    document.getElementById("liburuak").checked = false;
    document.getElementById("pelikulak").checked = false;

    
    document.getElementById("datosformulario").innerHTML = "";
    
    
    document.getElementById("imagenGenero").src = "img/caraHombre.jpg"; 
}