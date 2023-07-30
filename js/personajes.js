    function normal() {
    var elements = document.getElementsByTagName("*");

    for (i = 0; i<elements.length; i++) {
        elements[i].style.display = "";
    }
}

function filtroPyro() {
    normal()

    var elements = document.getElementsByTagName("*");

    for (i = 0; i < elements.length; i++) {

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo anemo dendro electro geo espada") {
            elements[i].style.display = 'none';
        }
    }

    sessionStorage.setItem("pagina", "")
}

function filtroHydro() {
    normal()

    var elements = document.getElementsByTagName("*");

    for (i = 0; i < elements.length; i++) {

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo anemo dendro electro geo espada") {
            elements[i].style.display = 'none';
        }
    }
}

function filtroAnemo() {
    normal()

    var elements = document.getElementsByTagName("*");

    for (i = 0; i < elements.length; i++) {

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " espada") {

            elements[i].style.display = 'none';

        }
    }
}

function filtroElectro() {
    normal()

    var elements = document.getElementsByTagName("*");

    for (i = 0; i < elements.length; i++) {

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " espada") {

            elements[i].style.display = 'none';

        }
    }
}

function filtroDendro() {
    normal()

    var elements = document.getElementsByTagName("*");

    for (i = 0; i < elements.length; i++) {

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " espada") {

            elements[i].style.display = 'none';

        }
    }
}

function filtroCryo() {
    normal()

    var elements = document.getElementsByTagName("*");

    for (i = 0; i < elements.length; i++) {

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo anemo dendro electro geo espada") {
            elements[i].style.display = 'none';
        }
    }
}

function filtroGeo() {
    normal()

    var elements = document.getElementsByTagName("*");

    for (i = 0; i < elements.length; i++) {

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " espada") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " espada") {

            elements[i].style.display = 'none';

        }
    }
}

function filtroEspada() {
    normal()

    var elements = document.getElementsByTagName("*");

    for (i = 0; i < elements.length; i++) {

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " arco") {

            elements[i].style.display = 'none';
        }


        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " catalizador") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " lanza") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " mandoble") {

            elements[i].style.display = 'none';

        }
    }
}

function filtroMandoble() {
    normal()

    var elements = document.getElementsByTagName("*");

    for (i = 0; i < elements.length; i++) {

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " arco") {

            elements[i].style.display = 'none';
        }


        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " catalizador") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " lanza") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " espada  ") {

            elements[i].style.display = 'none';

        }
        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo anemo dendro electro geo espada") {
            elements[i].style.display = 'none';
        }
    }
}

function filtroLanza() {
    normal()
    
    var elements = document.getElementsByTagName("*");

    for (i = 0; i < elements.length; i++) {

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " arco") {

            elements[i].style.display = 'none';
        }


        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " catalizador") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " mandoble") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " espada  ") {

            elements[i].style.display = 'none';

        }
        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo anemo dendro electro geo espada") {
            elements[i].style.display = 'none';
        }
    }

}

function filtroCatalizador() {
    normal()
    
    var elements = document.getElementsByTagName("*");

    for (i = 0; i < elements.length; i++) {

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " arco" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " arco") {

            elements[i].style.display = 'none';
        }


        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " mandoble") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " lanza") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " espada  ") {

            elements[i].style.display = 'none';

        }
        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo anemo dendro electro geo espada") {
            elements[i].style.display = 'none';
        }
    }

}

function filtroArco() {
    normal()

    var elements = document.getElementsByTagName("*");

    for (i = 0; i < elements.length; i++) {

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " mandoble" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " armandobleco") {

            elements[i].style.display = 'none';
        }


        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " catalizador" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " catalizador") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " lanza" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " lanza") {

            elements[i].style.display = 'none';

        }

        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje hydro" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje pyro" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje cryo" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje geo" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje electro" + " espada" ||
            elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje dendro" + " espada  ") {

            elements[i].style.display = 'none';

        }
        if (elements[i].getAttribute("class") == "col-lg-2 col-xs-3 icono-personaje anemo anemo dendro electro geo espada") {
            elements[i].style.display = 'none';
        }
    }

}