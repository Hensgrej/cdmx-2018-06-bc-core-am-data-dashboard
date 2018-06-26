<<<<<<< HEAD
btnSedes = document.getElementById("getSedes");
tdCdmx = document.getElementById("tableCdmx");
tdGdl = document.getElementById("tableGdl");
tdPeru = document.getElementById("tablePeru");
tdChile = document.getElementById("tableChile");
tdBrasil = document.getElementById("tableBrasil");
tabCiudad = document.getElementById("tableCiudad");

tabCiudad.style.display = "none";
btnSedes.addEventListener("click", () => {
    tabCiudad.style.display = "block";
    getCampuses();
=======
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
>>>>>>> bc59304d78f7bb080da0b221a5298ffac3016815
});