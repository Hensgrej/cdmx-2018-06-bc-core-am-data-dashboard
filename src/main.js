// Accesing HTML elements
const btnLima = document.getElementById('btnLima');
const btnMexico = document.getElementById('btnMexico');
const btnStgo = document.getElementById('btnStgo');
const resultDiv = document.getElementById('result');
const third = document.getElementById('tercera');
const fourth = document.getElementById('cuarta');
const fifth = document.getElementById('quinta');
const thirdSubject = document.getElementById('subtemasTercera');
const thirdSubtopic = document.getElementById('subtopicsTercera');

// Main function
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

        let thirdGenerationSubjects = "";
        let subjects = [];
        let subtopics = [];
        let thirdGenerationSubtopics = "";
        // Showing Subject Stats for each subject for each student
        for (let i = 0; i < stgoThirdStudents.length; i++) {
            let stgoSubjects = stgoThirdStudents[i].progreso.temas;
            subjects = stgoSubjects;
            console.log(subjects['01-Introduccion-a-programacion']);
          
            /*for (let blah in subjects) {
                subtopics = subjects[blah];
            let actualSubtopics = subtopics.subtemas;
            let subName = Object.keys(actualSubtopics);
            let subNames = "";
            for(let i = 0; i < subName.length; i++) {
              subNames = subName[i];
            }
            let sub = {};
            for(let bleh in actualSubtopics) {
              sub = actualSubtopics[bleh];
            }*/
           
                thirdGenerationSubjects += ` <div class = "subjects01">
                                        <h2>01 Introducción a Programación</h2>
                                        <p>Duracion del Tema: ${subjects['01-Introduccion-a-programacion'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['01-Introduccion-a-programacion'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['01-Introduccion-a-programacion'].porcentajeCompletado}</p>
                                        </div>
                                        <div class = "subjects02">
                                        <h2>02 Variables y tipos de datos</h2>
                                        <p>Duracion del Tema: ${subjects['02-Variables-y-tipo-de-datos'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['02-Variables-y-tipo-de-datos'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['02-Variables-y-tipo-de-datos'].porcentajeCompletado}</p>
                                        </div>
                                        <div class = "subjects03">
                                        <h2>03 UX</h2>
                                        <p>Duracion del Tema: ${subjects['03-UX'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['03-UX'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['03-UX'].porcentajeCompletado}</p>
                                        </div>`
                /*thirdGenerationSubtopics += ` <div class = "subtopics">
                                        <p>Completado: ${sub.completado}</p>
                                        <p>Duracion Subtema: ${sub.duracionSubtema}</p>
                                        <p>Tipo: ${sub.tipo}</p>
                                        <p>Subtemas Completados: ${subtopics.subtemasCompletados}</p>
                                        <p>Subtemas Totales: ${subtopics.subtemasTotales}</p>
                                        </div>`*/
                                      }
            thirdSubject.innerHTML = thirdGenerationSubjects;
            thirdSubtopic.innerHTML = thirdGenerationSubtopics;
        })
}

// Calling fetch in data.js
dashboard.computeStudentsStats();