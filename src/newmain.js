const btnLima = document.getElementById('btnLima');
const btnMexico = document.getElementById('btnMexico');
const btnStgo = document.getElementById('btnStgo');
const resultDiv = document.getElementById('result');

laboratoriaData = (data) => {
    let generation = [];
    btnLima.addEventListener("click", () => {
        const infoLima = Object.values(data)[0];
        generation += infoLima;
})
console.log(generation);
}
dashboard.computeStudentsStats();

