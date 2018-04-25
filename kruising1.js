var rijden;
var auto = document.getElementById('autoob');
auto.style.position = 'absolute';
auto.style.left = '650px';
auto.style.top = '800px';
var snelheid = 5;


var slir_ob = false;
function starten() {
    auto.style.top = parseInt(auto.style.top) - snelheid + 'px';
    rijden= setTimeout(starten, 10);
    if(auto.style.top === '-80px'){
        auto.style.top = '800px';
    }
    if (auto.style.top === '550px' && slir_ob === true){
        snelheid = 0;
    }else {
        snelheid = 5;
    }
}

function stop() {
    clearTimeout(rijden)
}
function opnieuw1() {
    auto.style.top = '800px'
}
