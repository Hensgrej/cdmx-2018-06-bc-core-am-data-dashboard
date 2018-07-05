<<<<<<< HEAD
// Accesing HTML elements
const btnLima = document.getElementById('btnLima');
const btnMexico = document.getElementById('btnMexico');
const btnStgo = document.getElementById('btnStgo');
const resultDiv = document.getElementById('result');
const third = document.getElementById('tercera');
const fourth = document.getElementById('cuarta');
const fifth = document.getElementById('quinta');
const thirdSubject = document.getElementById('terceraSubtemas')

laboratoriaData = (data) => {
    // Each button prints all three generations from all campuses with each students name, mail and progress.
    btnLima.addEventListener("click", () => {
        let thirdGeneration = "";
        let fourthGeneration = "";
        let fifthGeneration = "";
        const infoLima = Object.values(data)[0];
        // Lima's Third Generation
        const limaThirdStudents = Object.values(infoLima.generacion.tercera.estudiantes);
        // Looping Array
        for (let i = 0; i < limaThirdStudents.length; i++) {
            thirdGeneration += `<div class="students">
                    <div class="info">
                      <p>Nombre: ${limaThirdStudents[i].nombre}</p>
                    <p>Correo: ${limaThirdStudents[i].correo}</p>
                  <p>Duracion Temas: ${limaThirdStudents[i].progreso.duracionPrograma}</p>
               <p>Porcentaje de Completado: ${limaThirdStudents[i].progreso.porcentajeCompletado}%</p>
                </div>
               </div>
            </div>`
        }
        // Lima's Fourth Generation
        const limaFourthStudents = Object.values(infoLima.generacion.cuarta.estudiantes);
        // Looping Array
        for (let i = 0; i < limaFourthStudents.length; i++) {
            fourthGeneration += `<div class="students">
                    <div class="info">
                      <p>Nombre: ${limaFourthStudents[i].nombre}</p>
                    <p>Correo: ${limaFourthStudents[i].correo}</p>
                  <p>Duracion Temas: ${limaFourthStudents[i].progreso.duracionPrograma}</p>
               <p>Porcentaje de Completado: ${limaFourthStudents[i].progreso.porcentajeCompletado}%</p>
             </div>
            </div>`
        }
        // Lima's Fifth generation
        const limaFifthStudents = Object.values(infoLima.generacion.quinta.estudiantes);
        // Looping Array
        for (let i = 0; i < limaFifthStudents.length; i++) {
            fifthGeneration += `<div class="students">
                    <div class="info">
                      <p>Nombre: ${limaFifthStudents[i].nombre}</p>
                    <p>Correo: ${limaFifthStudents[i].correo}</p>
                  <p>Duracion Temas: ${limaFifthStudents[i].progreso.duracionPrograma}</p>
               <p>Porcentaje de Completado: ${limaFifthStudents[i].progreso.porcentajeCompletado}%</p>
             </div>
            </div>`
        }
        third.innerHTML = thirdGeneration;
        fourth.innerHTML = fourthGeneration;
        fifth.innerHTML = fifthGeneration;
    })
    btnMexico.addEventListener("click", () => {
        let thirdGeneration = "";
        let fourthGeneration = "";
        let fifthGeneration = "";
        const infoMexico = Object.values(data)[1];
        // Mexico's Third Generation
        const mexicoThirdStudents = Object.values(infoMexico.generacion.tercera.estudiantes);
        // Looping Array
        for (let i = 0; i < mexicoThirdStudents.length; i++) {
            thirdGeneration += `<div class="students">
                    <div class="info">
                      <p>Nombre: ${mexicoThirdStudents[i].nombre}</p>
                    <p>Correo: ${mexicoThirdStudents[i].correo}</p>
                  <p>Duracion Temas: ${mexicoThirdStudents[i].progreso.duracionPrograma}</p>
               <p>Porcentaje de Completado: ${mexicoThirdStudents[i].progreso.porcentajeCompletado}%</p>
             </div>
            </div>`
        }
        // Mexico's Fourth generation
        const mexicoFourthStudents = Object.values(infoMexico.generacion.cuarta.estudiantes);
        // Looping Array
        for (let i = 0; i < mexicoFourthStudents.length; i++) {
            fourthGeneration += `<div class="students">
                    <div class="info">
                      <p>Nombre: ${mexicoFourthStudents[i].nombre}</p>
                    <p>Correo: ${mexicoFourthStudents[i].correo}</p>
                  <p>Duracion Temas: ${mexicoFourthStudents[i].progreso.duracionPrograma}</p>
               <p>Porcentaje de Completado: ${mexicoFourthStudents[i].progreso.porcentajeCompletado}%</p>
             </div>
            </div>`
        }
        // Mexico's Fifth generation
        const mexicoFifthStudents = Object.values(infoMexico.generacion.quinta.estudiantes);
        // Looping Array
        for (let i = 0; i < mexicoFifthStudents.length; i++) {
            fifthGeneration += `<div class="students">
                    <div class="info">
                      <p>Nombre: ${mexicoFifthStudents[i].nombre}</p>
                    <p>Correo: ${mexicoFifthStudents[i].correo}</p>
                  <p>Duracion Temas: ${mexicoFifthStudents[i].progreso.duracionPrograma}</p>
               <p>Porcentaje de Completado: ${mexicoFifthStudents[i].progreso.porcentajeCompletado}%</p>
             </div>
            </div>`
        }
        third.innerHTML = thirdGeneration;
        fourth.innerHTML = fourthGeneration;
        fifth.innerHTML = fifthGeneration;
    })
    btnStgo.addEventListener("click", () => {
        let thirdGeneration = "";
        let fourthGeneration = "";
        let fifthGeneration = "";
        const infoStgo = Object.values(data)[2];
        // Santiago's Third Generation
        const stgoThirdStudents = Object.values(infoStgo.generacion.tercera.estudiantes);
        // Looping Array
        for (let i = 0; i < stgoThirdStudents.length; i++) {
            thirdGeneration += `<div class="students">
                    <div class="info">
                      <p>Nombre: ${stgoThirdStudents[i].nombre}</p>
                    <p>Correo: ${stgoThirdStudents[i].correo}</p>
                  <p>Duracion Temas: ${stgoThirdStudents[i].progreso.duracionPrograma}</p>
               <p>Porcentaje de Completado: ${stgoThirdStudents[i].progreso.porcentajeCompletado}%</p>
             </div>
            </div>`
        }
        // Santiago's Fourth Generation
        const stgoFourthStudents = Object.values(infoStgo.generacion.cuarta.estudiantes);
        // Looping Array
        for (let i = 0; i < stgoFourthStudents.length; i++) {
            fourthGeneration += `<div class="students">
                    <div class="info">
                      <p>Nombre: ${stgoFourthStudents[i].nombre}</p>
                    <p>Correo: ${stgoFourthStudents[i].correo}</p>
                  <p>Duracion Temas: ${stgoFourthStudents[i].progreso.duracionPrograma}</p>
               <p>Porcentaje de Completado: ${stgoFourthStudents[i].progreso.porcentajeCompletado}%</p>
             </div>
            </div>`
        }
        // Santiago's Fifth Generation
        const stgoFifthStudents = Object.values(infoStgo.generacion.quinta.estudiantes);
        // Looping Array
        for (let i = 0; i < stgoFifthStudents.length; i++) {
            fifthGeneration += `<div class="students">
                    <div class="info">
                      <p>Nombre: ${stgoFifthStudents[i].nombre}</p>
                    <p>Correo: ${stgoFifthStudents[i].correo}</p>
                  <p>Duracion Temas: ${stgoFifthStudents[i].progreso.duracionPrograma}</p>
               <p>Porcentaje de Completado: ${stgoFifthStudents[i].progreso.porcentajeCompletado}%</p>
             </div>
            </div>`
        }
        third.innerHTML = thirdGeneration;
        fourth.innerHTML = fourthGeneration;
        fifth.innerHTML = fifthGeneration;

        thirdGenerationSubjects = "";
        let subjects = [];
        let subtopics = [];
        // Showing Subject Duration for each subject for each student
        for (let i = 0; i < stgoThirdStudents.length; i++) {
            let stgoSubjects = stgoThirdStudents[i].progreso.temas;
            subjects = stgoSubjects;
            for (let blah in subjects) {
                subtopics = subjects[blah];
                console.log(subtopics.duracionTema);
                thirdGenerationSubjects += ` <div class = "subjects">
                                        <p>Duracion del Tema: ${subtopics.duracionTema}</p>
                                        </div>`
            }
            thirdSubject.innerHTML = thirdGenerationSubjects;
        }

    })
}

// Calling fetch in data.js
dashboard.computeStudentsStats();
=======
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
    data.computeStudentsStats()
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
>>>>>>> e9b47f1a392d82af754182d295cc58fbf24a581a
