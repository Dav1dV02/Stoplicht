var rijden;
var autorl = document.getElementById('autorl');
autorl.style.position = 'absolute';
autorl.style.left = '555px';
autorl.style.bottom = '680px';
var snelheid = 5;


var slir_bb = false;
function starten4() {
    autorl.style.bottom = parseInt(autorl.style.bottom) - snelheid + 'px';
    rijden= setTimeout(starten4, 10);
    if(autorl.style.bottom === '-100px'){
        autorl.style.bottom = '800px';
    }
    if (autorl.style.bottom === '-350px' && slir_bb === true){
        snelheid = 0;
    }else {
        snelheid = 5;
    }
}

function stop4() {
    clearTimeout(rijden);
}

function opnieuw4() {
    autorl.style.bottom = '800px'
}