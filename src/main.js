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
let limaThirdStatsTable = document.getElementById('limaThirdStudentStatsTable');
let limaFourthStatsTable = document.getElementById('limaFourthStudentStatsTable');
let limaFifthStatsTable = document.getElementById('limaFifthStudentStatsTable');
let mexicoThirdStatsTable = document.getElementById('mexicoThirdStudentStatsTable');
let mexicoFourthStatsTable = document.getElementById('mexicoFourthStudentStatsTable');
let mexicoFifthStatsTable = document.getElementById('mexicoFifthStudentStatsTable');
let chileThirdStatsTable = document.getElementById('chileThirdStudentStatsTable');
let chileFourthStatsTable = document.getElementById('chileFourthStudentStatsTable');
let chileFifthStatsTable = document.getElementById('chileFifthStudentStatsTable');
let limaArticle = document.getElementById('limaTables');
let mexicoArticle = document.getElementById('mexicoTables');
let chileArticle = document.getElementById('chileTables');
let studentsArticle = document.getElementById('studentStatsTable');
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

// Storing Lima's generational stats
let limaThirdEachStudentName = "";
let limaThirdEachStudentMail = "";
let limaThirdStudentProgress = "";
let limaThirdProgramLength = "";
let limaThirdProgramPercentage = "";
let limaFourthEachStudentName = "";
let limaFourthEachStudentMail = "";
let limaFourthStudentProgress = "";
let limaFourthProgramLength = "";
let limaFourthProgramPercentage = "";
let limaFifthEachStudentName = "";
let limaFifthEachStudentMail = "";
let limaFifthStudentProgress = "";
let limaFifthProgramLength = "";
let limaFifthProgramPercentage = "";
// Storing Mexico's generational stats
let mexicoThirdEachStudentName = "";
let mexicoThirdEachStudentMail = "";
let mexicoThirdStudentProgress = "";
let mexicoThirdProgramLength = "";
let mexicoThirdProgramPercentage = "";
let mexicoFourthEachStudentName = "";
let mexicoFourthEachStudentMail = "";
let mexicoFourthStudentProgress = "";
let mexicoFourthProgramLength = "";
let mexicoFourthProgramPercentage = "";
let mexicoFifthEachStudentName = "";
let mexicoFifthEachStudentMail = "";
let mexicoFifthStudentProgress = "";
let mexicoFifthProgramLength = "";
let mexicoFifthProgramPercentage = "";
// Storing Chile's generational stats
let chileThirdEachStudentName = "";
let chileThirdEachStudentMail = "";
let chileThirdStudentProgress = "";
let chileThirdProgramLength = "";
let chileThirdProgramPercentage = "";
let chileFourthEachStudentName = "";
let chileFourthEachStudentMail = "";
let chileFourthStudentProgress = "";
let chileFourthProgramLength = "";
let chileFourthProgramPercentage = "";
let chileFifthEachStudentName = "";
let chileFifthEachStudentMail = "";
let chileFifthStudentProgress = "";
let chileFifthProgramLength = "";
let chileFifthProgramPercentage = "";
// Hiding non necessary HTML elements for Initial Home Page
generationTable.style.display = "none";
btnsSection.style.display = "none";
studentsArticle.style.display = "none";

// Calling event function to kickstart the rest of the website
btnSubmit.addEventListener("click", () => {
    loginSection.style.display = "none";
    btnsSection.style.display = "block";
    data.computeStudentStats()
        // If the user chooses Lima
    btnLima.addEventListener("click", () => {
            generationTable.style.display = "block"
            chileTable.style.display = "none";
            mexicoTable.style.display = "none"
            btnChile.style.display = "none";
            btnMexico.style.display = "none";
            btnLima.style.display = "none";
            limaTable.style.display = "block";
            data.printStudentsLima();
            btnLimaThird.addEventListener("click", () => {
                limaTable.style.display = "none";
                studentsArticle.style.display = "block"
                mexicoArticle.style.display = "none";
                chileArticle.style.display = "none";
                limaFourthStatsTable.style.display = "none";
                limaFifthStatsTable.style.display = "none";
                limaArticle.style.display = "block";
            })
            btnLimaFourth.addEventListener("click", () => {
                limaTable.style.display = "none";
                studentsArticle.style.display = "block"
                mexicoArticle.style.display = "none";
                chileArticle.style.display = "none";
                limaFourthStatsTable.style.display = "block";
                limaThirdStatsTable.style.display = "none";
                limaFifthStatsTable.style.display = "none";
                limaArticle.style.display = "block";
            })
            btnLimaFifth.addEventListener("click", () => {
                limaTable.style.display = "none";
                studentsArticle.style.display = "block"
                mexicoArticle.style.display = "none";
                chileArticle.style.display = "none";
                limaThirdStatsTable.style.display = "none";
                limaFourthStatsTable.style.display = "none";
                limaFifthStatsTable.style.display = "block";
                limaArticle.style.display = "block";
            })

        })
        // User chooses Mexico
    btnMexico.addEventListener("click", () => {
            generationTable.style.display = "block"
            btnChile.style.display = "none";
            btnMexico.style.display = "none";
            btnLima.style.display = "none";
            limaTable.style.display = "none";
            chileTable.style.display = "none";
            mexicoTable.style.display = "block";
            data.printStudentsMexico();
            btnMexicoThird.addEventListener("click", () => {
                limaTable.style.display = "none";
                studentsArticle.style.display = "block"
                mexicoArticle.style.display = "block";
                chileArticle.style.display = "none";
                mexicoThirdStatsTable.style.display = "block";
                mexicoFourthStatsTable.style.display = "none";
                mexicoFifthStatsTable.style.display = "none";
                limaArticle.style.display = "none";
            })
            btnMexicoFourth.addEventListener("click", () => {
                limaTable.style.display = "none";
                studentsArticle.style.display = "block"
                mexicoArticle.style.display = "block";
                chileArticle.style.display = "none";
                mexicoThirdStatsTable.style.display = "none";
                mexicoFourthStatsTable.style.display = "block";
                mexicoFifthStatsTable.style.display = "none";
                limaArticle.style.display = "none";
            })
            btnMexicoFifth.addEventListener("click", () => {
                limaTable.style.display = "none";
                studentsArticle.style.display = "block"
                mexicoArticle.style.display = "block";
                chileArticle.style.display = "none";
                mexicoThirdStatsTable.style.display = "none";
                mexicoFourthStatsTable.style.display = "none";
                mexicoFifthStatsTable.style.display = "block";
                limaArticle.style.display = "none";
            })
        })
        // User chooses Chile
    btnChile.addEventListener("click", () => {
        generationTable.style.display = "block"
        btnChile.style.display = "none";
        btnMexico.style.display = "none";
        btnLima.style.display = "none";
        mexicoTable.style.display = "none";
        limaTable.style.display = "none";
        chileTable.style.display = "block";
        data.printStudentsChile();
        btnChileThird.addEventListener("click", () => {
            limaTable.style.display = "none";
            studentsArticle.style.display = "block"
            mexicoArticle.style.display = "none";
            chileArticle.style.display = "block";
            chileThirdStatsTable.style.display = "block";
            chileFourthStatsTable.style.display = "none";
            chileFifthStatsTable.style.display = "none";
            limaArticle.style.display = "none";
        })
        btnChileFourth.addEventListener("click", () => {
            limaTable.style.display = "none";
            studentsArticle.style.display = "block"
            mexicoArticle.style.display = "none";
            chileArticle.style.display = "block";
            chileThirdStatsTable.style.display = "none";
            chileFourthStatsTable.style.display = "block";
            chileFifthStatsTable.style.display = "none";
            limaArticle.style.display = "none";
        })
        btnChileFifth.addEventListener("click", () => {
            limaTable.style.display = "none";
            studentsArticle.style.display = "block"
            mexicoArticle.style.display = "none";
            chileArticle.style.display = "block";
            chileThirdStatsTable.style.display = "none";
            chileFourthStatsTable.style.display = "none";
            chileFifthStatsTable.style.display = "block";
            limaArticle.style.display = "none";
        })

    })
})