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
let btnLimaThird = document.getElementById('btnThirdLima');
let btnLimaFourth = document.getElementById('btnFourthLima');
let btnLimaFifth = document.getElementById('btnFifthLima');
let btnMexicoThird = document.getElementById('btnThirdMexico');
let btnMexicoFourth = document.getElementById('btnFourthMexico');
let btnMexicoFifth = document.getElementById('btnFifthMexico');
let btnChileThird = document.getElementById('btnThirdChile');
let btnChileFourth = document.getElementById('btnFourthChile');
let btnChileFifth = document.getElementById('btnFifthChile');

// Table position of Lima's generations and their Array Length (Total students of each generation)
let limaFifthLength = document.getElementById('limaFifth');
let limaFourthLength = document.getElementById('limaFourth');
let limaThirdLength = document.getElementById('limaThird');

// Table position of Mexico's generations and their Array Length (Total students of each generation)
let mexicoFifthLength = document.getElementById('mexicoFifth');
let mexicoFourthLength = document.getElementById('mexicoFourth');
let mexicoThirdLength = document.getElementById('mexicoThird');

// Table position of Chile's generations and their Array Length (Total students of each generation)
let chileFifthLength = document.getElementById('chileFifth');
let chileFourthLength = document.getElementById('chileFourth');
let chileThirdLength = document.getElementById('chileThird');

// Storing Data from data.js
let testReturn = {};

// Hiding non necessary HTML elements for Initial Home Page
generationTable.style.display = "none";
btnsSection.style.display = "none";

// Calling event function to kickstart the rest of the website
btnSubmit.addEventListener("click", () => {
    loginSection.style.display = "none";
    btnsSection.style.display = "block";
    data.computeStudentStats();
    // If the user chooses Lima
    btnLima.addEventListener("click", () => {
            generationTable.style.display = "block"
            chileTable.style.display = "none";
            mexicoTable.style.display = "none"
            btnChile.style.display = "none";
            btnMexico.style.display = "none";
            btnLima.style.display = "none";
            limaTable.style.display = "block";
            data.printStudents();
        })
        // User chooses Mexico
    btnMexico.addEventListener("click", () => {
            generationTable.style.display = "block"
            btnChile.style.display = "none";
            btnMexico.style.display = "none";
            btnLima.style.display = "none";
            mexicoTable.style.display = "block";
            mexicoThirdLength = testReturn.students[3];
            mexicoFourthLength = testReturn.students[4];
            mexicoFifthLength = testReturn.students[5];
            data.printStudents();
        })
        // User chooses Chile
    btnChile.addEventListener("click", () => {
        generationTable.style.display = "block"
        btnChile.style.display = "none";
        btnMexico.style.display = "none";
        btnLima.style.display = "none";
        chileTable.style.display = "block";
        chileThirdLength = testReturn.students[6];
        chileFourthLength = testReturn.students[7];
        chileFifthLength = testReturn.students[8];
        data.printStudents();
    })
});