var rijden;
var autolr = document.getElementById('autolr');
autolr.style.position = 'absolute';
autolr.style.left = '-100px';
autolr.style.top = '390px';
var snelheid = 5;


var slir_lr = false;
function starten3() {
    autolr.style.left = parseInt(autolr.style.left) - snelheid + 'px';
    rijden= setTimeout(starten3, 10);
    if(autolr.style.left === '100px'){
        autolr.style.left = '800px';
    }
    if (autolr.style.left === '-350px' && slir_bb === true){
        snelheid = 0;
    }else {
        snelheid = 5;
    }
}

function stop3() {
    clearTimeout(rijden);
}

function opnieuw3() {
    autolr.style.left = '800px'
}