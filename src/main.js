let btnPrueba = document.getElementById("prueba");
let btnCdmx = document.getElementById("cdmx");
let btnAqp = document.getElementById("aqp");
let btnLim = document.getElementById("lim");
let btnScl = document.getElementById("scl");
let btnSpl = document.getElementById("spl");

btnPrueba.addEventListener("click", () => {
    getCampuses();
});

btnCdmx.addEventListener("click", () => {
    getGenerations();
});
btnAqp.addEventListener("click", () => {
    getGenerations();
});
btnLim.addEventListener("click", () => {
    getGenerations();
});
btnScl.addEventListener("click", () => {
    getGenerations();
});
btnSpl.addEventListener("click", () => {
    getGenerations();
});