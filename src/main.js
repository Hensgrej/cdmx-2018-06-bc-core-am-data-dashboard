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
});