btnSedes = document.getElementById("getSedes");
tableCiudad.style.display = "none";
btnSedes.addEventListener("click", () => {
    tableCiudad.style.display = "block";
    getCampuses();
});