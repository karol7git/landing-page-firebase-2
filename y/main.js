//menu

let containermenu = document.querySelectorAll('.container-menu')[0];
let semaforo = true;

document
    .querySelectorAll('.hamburguer')[0]
    .addEventListener('click', function() {
        if (semaforo) {
            document.querySelectorAll('.hamburguer')[0].style.color = '#fff';
            semaforo = false;
        } else {
            document.querySelectorAll('.hamburguer')[0].style.color = '#000';
            semaforo = true;
        }

        containermenu.classList.toggle('menudos');
    });
