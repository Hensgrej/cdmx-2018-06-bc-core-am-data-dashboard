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