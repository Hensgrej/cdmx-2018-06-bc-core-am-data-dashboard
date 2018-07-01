// Accesing all button and table IDs
let btnSubmit = document.getElementById('btnSizing');
let loginSection = document.getElementById('login');
let btnsSection = document.getElementById('btnsSedes');
let generationTable = document.getElementById('campusesGenerationTables')
let btnLima = document.getElementById('lima');
let btnMexico = document.getElementById('mexico');
let btnChile = document.getElementById('chile');
let limaTable = document.getElementById('limaGenerationsTable');
let mexicoTable = document.getElementById('mexicoGenerationsTable');
let chileTable = document.getElementById('chileGenerationsTable');

// Table position of Lima's generations and their Array Length (Total students of each generation)
let limaFifthLength = document.getElementById('limaFifth');
let limaFourthLength = document.getElementById('limaFourth');
let limaThirdLength = document.getElementById('limaThird');
//let { lengthLima1, lengthLima2, lengthLima3 } = data.computeStudentStats;

// Table position of Mexico's generations and their Array Length (Total students of each generation)
let mexicoFifthLength = document.getElementById('mexicoFifth');
let mexicoFourthLength = document.getElementById('mexicoFourth');
let mexicoThirdLength = document.getElementById('mexicoThird');
//let { lengthMexico1, lengthMexico2, lengthMexico3 } = data.computeStudentStats;
mexicoFifthLength = lengthMexico1;
mexicoFourthLength = lengthMexico2;
mexicoThirdLength = lengthMexico3;

// Table position of Chile's generations and their Array Length (Total students of each generation)
let chileFifthLength = document.getElementById('chileFifth');
let chileFourthLength = document.getElementById('chileFourth');
let chileThirdLength = document.getElementById('chileThird');
//let { lengthChile1, lengthChile2, lengthChile3 } = data.computeStudentStats;
chileFifthLength = lengthChile1;
chileFourthLength = lengthChile2;
chileThirdLength = lengthChile3;

// Hiding non necessary HTML elements for Initial Home Page
generationTable.style.display = "none";
btnsSection.style.display = "none";

// Calling event function to kickstart the rest of the website
btnSubmit.addEventListener("click", () => {
    loginSection.style.display = "none";
    btnsSection.style.display = "block";
    data.computeStudentStats();
    btnLima.addEventListener("click", () => {
        generationTable.style.display = "block"
        chileTable.style.display = "none";
        mexicoTable.style.display = "none"
        btnChile.style.display = "none";
        btnMexico.style.display = "none";
        btnLima.style.display = "none";
        limaTable.style.display = "block";
    })
    btnMexico.addEventListener("click", () => {
        btnChile.style.display = "none";
        btnMexico.style.display = "none";
        btnLima.style.display = "none";
        mexicoTable.style.display = "block";
    })
    btnChile.addEventListener("click", () => {
        btnChile.style.display = "none";
        btnMexico.style.display = "none";
        btnLima.style.display = "none";
        chileTable.style.display = "block";
    })
});