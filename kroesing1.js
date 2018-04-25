var werken;
var buitenwerking;
var stoplicht = document.getElementById('stoplicht');
stoplicht.style.position='absolute';
stoplicht.style.left='713px';
stoplicht.style.right='505px';
stoplicht.style.top='505px';


function aanzetten() {
    clearTimeout(buitenwerking);
    maakRood();
    werken = setTimeout(maakRood, 4000);
    werken = setTimeout(maakGroen, 5000);
    werken = setTimeout(maakGeel, 9000);
    werken = setTimeout(maakRood, 11500);
    werken = setTimeout(aanzetten, 14000);

}
function knipperen() {
    clearTimeout(werken);
    maakGeel();
    buitenwerking = setTimeout(ZetUit, 500);
    buitenwerking = setTimeout(knipperen, 1000);
}
function uitzetten() {
    ZetUit();
    clearTimeout(buitenwerking);
    clearTimeout(werken);
}
function maakRood() {
    stoplicht.src="verkeer/stoplichtrood.png";
    slir_ob = true;
    slir_bb = false;
}
function maakGeel() {
    stoplicht.src="verkeer/stoplichtgeel.png";
}
function maakGroen() {
    stoplicht.src="verkeer/stoplichtgroen.png";
    slir_ob = false;
    slir_bb = false;
}
function ZetUit() {
    stoplicht.src="verkeer/stoplichtuit.png";
}
