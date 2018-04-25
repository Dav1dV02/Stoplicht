var rijden;
var autobb = document.getElementById('autobb');
autobb.style.position = 'absolute';
autobb.style.left = '555px';
autobb.style.bottom = '680px';
var snelheid = 5;


var slir_bb = false;
function starten2() {
    autobb.style.bottom = parseInt(autobb.style.bottom) - snelheid + 'px';
    rijden= setTimeout(starten2, 10);
    if(autobb.style.bottom === '-100px'){
        autobb.style.bottom = '800px';
    }
    if (autobb.style.bottom === '-350px' && slir_bb === true){
        snelheid = 0;
    }else {
        snelheid = 5;
    }
}

function stop2() {
    clearTimeout(rijden);
}

function opnieuw2() {
    autobb.style.bottom = '800px'
}