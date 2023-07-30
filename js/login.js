function showPassword() {
    var password = document.getElementById("passwd");
    var icono = document.getElementById("icon");

    /**mostrar el campo */
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

    /**cambiar el icono del boton */
    if (icono.className === "glyphicon glyphicon-eye-close") {
        icono.className = "glyphicon glyphicon-eye-open";
    } else {
        icono.className = "glyphicon glyphicon-eye-close";
    }
}

function animacionIconos() {
    var form = document.getElementById('form');
    var pyro = document.getElementById('pyro');
    var hydro = document.getElementById('hydro');
    var anemo = document.getElementById('anemo');
    var electro = document.getElementById('electro');
    var dendro = document.getElementById('dendro');
    var cryo = document.getElementById('cryo');
    var geo = document.getElementById('geo');

    form.style.boxShadow = "white 0 0 50px 2px";
    pyro.style.boxShadow = "#343434 0 0px 15px 10px, rgb(255, 89, 0) 0px 0px 100px 50px";
    hydro.style.boxShadow = "#343434 0 0px 15px 10px, rgb(51, 153, 166) 0px 0px 100px 50px";
    anemo.style.boxShadow = "#343434 0 0px 15px 10px, rgb(123, 212, 157) 0px 0px 100px 50px";
    electro.style.boxShadow = "#343434 0 0px 15px 10px, rgb(147, 123, 212) 0px 0px 100px 50px";
    dendro.style.boxShadow = "#343434 0 0px 15px 10px, rgb(51, 166, 67) 0px 0px 100px 50px";
    cryo.style.boxShadow = "#343434 0 0px 15px 10px, rgb(132, 209, 209) 0px 0px 100px 50px";
    geo.style.boxShadow = "#343434 0 0px 15px 10px, rgb(182, 184, 62) 0px 0px 100px 50px";
}

function fueraAnimacion() {
    var form = document.getElementById('form');
    var pyro = document.getElementById('pyro');
    var hydro = document.getElementById('hydro');
    var anemo = document.getElementById('anemo');
    var electro = document.getElementById('electro');
    var dendro = document.getElementById('dendro');
    var cryo = document.getElementById('cryo');
    var geo = document.getElementById('geo');

    form.style.boxShadow = "none";
    pyro.style.boxShadow = "none";
    hydro.style.boxShadow = "none";
    anemo.style.boxShadow = "none";
    electro.style.boxShadow = "none";
    dendro.style.boxShadow = "none";
    cryo.style.boxShadow = "none";
    geo.style.boxShadow = "none";
}