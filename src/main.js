// Accesing HTML elements
const btnLima = document.getElementById('btnLima');
const btnMexico = document.getElementById('btnMexico');
const btnStgo = document.getElementById('btnStgo');
const btnLimaThird = document.getElementById('btnThirdLima');
const btnLimaFourth = document.getElementById('btnFourthLima');
const btnLimaFifth = document.getElementById('btnFifthLima');
const resultDiv = document.getElementById('result');
const third = document.getElementById('tercera');
const fourth = document.getElementById('cuarta');
const fifth = document.getElementById('quinta');
const thirdSubject = document.getElementById('subtemasTercera');
const thirdSubtopic = document.getElementById('subtopicsTercera');
const fourthSubject = document.getElementById('subtemasCuarta');
const fourthSubtopic = document.getElementById('subtopicsCuarta');
const fifthSubject = document.getElementById('subtemasQuinta');
const fifthSubtopic = document.getElementById('subtopicsQuinta');

// All Students Data
laboratoriaData = (data) => {
    // Each button prints all three generations from all campuses with each students name, mail and progress.
    btnLima.addEventListener("click", () => {  
        let thirdGeneration = "";
        let fourthGeneration = "";
        let fifthGeneration = "";
        const infoLima = Object.values(data)[0];
      btnLimaThird.addEventListener("click", () => {
        // Lima's Third Generation
        const limaThirdStudents = Object.values(infoLima.generacion.tercera.estudiantes);
        // Looping Array
        for (let i = 0; i < limaThirdStudents.length; i++) {
            thirdGeneration += `<div class="students">
                    <div class="info">
                    <table style="width:50%">
                      <tr class="info-tabla">
                      <td>${limaThirdStudents[i].nombre}</td>
                    <td>${limaThirdStudents[i].correo}</td>
                  <td>${limaThirdStudents[i].progreso.duracionPrograma}</td>
               <td>${limaThirdStudents[i].progreso.porcentajeCompletado}%</td>
               </tr>
               </table>
               </div>
               </div>
            </div>`
        } 
        // Third Generation Printed Stats
        let thirdGenerationSubjects = "";
        let subjects = [];
        let thirdGenerationSubtopics = "";

        // Showing Subject Stats for each subject for each student in Lima
        for (let i = 0; i < limaThirdStudents.length; i++) {
            let limaSubjects = limaThirdStudents[i].progreso.temas;
            subjects.push(limaSubjects);     
console.log(subjects);
            thirdGenerationSubjects += ` <div class = "subjects01">
                                        <h2>01 Introducción a Programación</h2>
                                        <p>Duracion del Tema: ${subjects['01-Introduccion-a-programacion'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['01-Introduccion-a-programacion'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['01-Introduccion-a-programacion'].porcentajeCompletado} %</p>
                                        <p>Subtemas Completados : ${subjects['01-Introduccion-a-programacion'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['01-Introduccion-a-programacion'].subtemasTotales} </p>
                                        </div>
                                        <div class = "subjects02">
                                        <h2>02 Variables y tipos de datos</h2>
                                        <p>Duracion del Tema: ${subjects['02-Variables-y-tipo-de-datos'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['02-Variables-y-tipo-de-datos'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['02-Variables-y-tipo-de-datos'].porcentajeCompletado} %</p>
                                        <p>Subtemas Completados : ${subjects['02-Variables-y-tipo-de-datos'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['02-Variables-y-tipo-de-datos'].subtemasTotales} </p>
                                        </div>
                                        <div class = "subjects03">
                                        <h2>03 UX</h2>
                                        <p>Duracion del Tema: ${subjects['03-UX'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['03-UX'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['03-UX'].porcentajeCompletado} %</p>
                                        <p>Subtemas Completados : ${subjects['03-UX'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['03-UX'].subtemasTotales} </p>
                                        </div>`
                thirdGenerationSubtopics += ` <div class = "subtopics-introduccion">
                                        <div class = "subtopics01">
                                        <h3>00 Bienvenida Orientacion</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 - Desarrollo Profesional</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>03 Por qué aprender a programar</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Tu primer sitio</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo}</p>
                                        </div>
                                        <div class = "subtopics05">
                                        <h3>04 Quiz</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo}</p>
                                        </div>
                                        </div>
                                        <div class = "subtopics-variables">
                                        <div class = "subtopics01">
                                        <h3>00 Tipos de datos y operadores</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 Variables</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>02 Auto Aprendizaje MDN</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Comments</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo}</p>
                                        </div>
                                        <div class = "subtopics05">
                                        <h3>04 Ejercicios guiados</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo}</p>
                                        </div>
                                        <div class = "subtopics06">
                                        <h3>05 Quiz</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo}</p>
                                        </div>
                                        <div class = "subtopics07">
                                        <h3>06 Ejercicios</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo}</p>
                                        </div>
                                        </div>
                                        <div class = "subtopics-ux">
                                        <div class = "subtopics01">
                                        <h3>00 Equipos de desarrollo</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 UX diseño</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['01-ux-diseno'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['01-ux-diseno'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['01-ux-diseno'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>02 UX vs UI</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Quiz</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['03-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['03-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['03-quiz'].tipo}</p>
                                        </div>
                                        </div>
                                        `
                                      }
            thirdSubject.innerHTML = thirdGenerationSubjects;
            thirdSubtopic.innerHTML = thirdGenerationSubtopics;
      })
      btnLimaFourth.addEventListener("click", () => {
        // Lima's Fourth Generation
        const limaFourthStudents = Object.values(infoLima.generacion.cuarta.estudiantes);
        // Looping Array
        for (let i = 0; i < limaFourthStudents.length; i++) {
            fourthGeneration += `<div class="students">
                    <div class="info">
                    <table style="width:50%">
                    <tr class="info-tabla">
                    <td>${limaFourthStudents[i].nombre}</td>
                  <td>${limaFourthStudents[i].correo}</td>
                <td>${limaFourthStudents[i].progreso.duracionPrograma}</td>
             <td>${limaFourthStudents[i].progreso.porcentajeCompletado}%</td>
             </tr>
             </table>
             </div>
            </div>`
        }
        // Fourth Generation Printed Stats
        let fourthGenerationSubjects = "";
        let subjects1 = {};
        let fourthGenerationSubtopics = "";

        // Showing Subject Stats for each subject for each student
        for (let i = 0; i < limaFourthStudents.length; i++) {
            let limaSubjects = limaFourthStudents[i].progreso.temas;
            limaSubjects += subjects1;     
            fourthGenerationSubjects += ` <div class = "subjects01">
                                        <h2>01 Introducción a Programación</h2>
                                        <p>Duracion del Tema: ${subjects['01-Introduccion-a-programacion'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['01-Introduccion-a-programacion'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['01-Introduccion-a-programacion'].porcentajeCompletado}</p>
                                        <p>Subtemas Completados : ${subjects['01-Introduccion-a-programacion'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['01-Introduccion-a-programacion'].subtemasTotales} </p>
                                        </div>
                                        <div class = "subjects02">
                                        <h2>02 Variables y tipos de datos</h2>
                                        <p>Duracion del Tema: ${subjects['02-Variables-y-tipo-de-datos'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['02-Variables-y-tipo-de-datos'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['02-Variables-y-tipo-de-datos'].porcentajeCompletado}</p>
                                        <p>Subtemas Completados : ${subjects['02-Variables-y-tipo-de-datos'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['02-Variables-y-tipo-de-datos'].subtemasTotales} </p>
                                        </div>
                                        <div class = "subjects03">
                                        <h2>03 UX</h2>
                                        <p>Duracion del Tema: ${subjects['03-UX'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['03-UX'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['03-UX'].porcentajeCompletado}</p>
                                        <p>Subtemas Completados : ${subjects['03-UX'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['03-UX'].subtemasTotales} </p>
                                        </div>`
                fourthGenerationSubtopics += ` <div class = "subtopics-introduccion">
                                        <div class = "subtopics01">
                                        <h3>00 Bienvenida Orientacion</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 - Desarrollo Profesional</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>03 Por qué aprender a programar</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Tu primer sitio</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo}</p>
                                        </div>
                                        <div class = "subtopics05">
                                        <h3>04 Quiz</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo}</p>
                                        </div>
                                        </div>
                                        <div class = "subtopics-variables">
                                        <div class = "subtopics01">
                                        <h3>00 Tipos de datos y operadores</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 Variables</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>02 Auto Aprendizaje MDN</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Comments</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo}</p>
                                        </div>
                                        <div class = "subtopics05">
                                        <h3>04 Ejercicios guiados</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo}</p>
                                        </div>
                                        <div class = "subtopics06">
                                        <h3>05 Quiz</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo}</p>
                                        </div>
                                        <div class = "subtopics07">
                                        <h3>06 Ejercicios</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo}</p>
                                        </div>
                                        </div>
                                        <div class = "subtopics-ux">
                                        <div class = "subtopics01">
                                        <h3>00 Equipos de desarrollo</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 UX diseño</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['01-ux-diseno'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['01-ux-diseno'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['01-ux-diseno'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>02 UX vs UI</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Quiz</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['03-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['03-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['03-quiz'].tipo}</p>
                                        </div>
                                        </div>
                                        `
                                      }
            fourthSubject.innerHTML = fourthGenerationSubjects;
            fourthSubtopic.innerHTML = fourthGenerationSubtopics;
      })
      btnLimaFifth.addEventListener("click", () => { 
        // Lima's Fifth generation
        const limaFifthStudents = Object.values(infoLima.generacion.quinta.estudiantes);
        // Looping Array
        for (let i = 0; i < limaFifthStudents.length; i++) {
            fifthGeneration += `<div class="students">
                    <div class="info">
                    <table style="width:50%">
                    <tr class="info-tabla">
                    <td>${limaFifthStudents[i].nombre}</td>
                  <td>${limaFifthStudents[i].correo}</td>
                <td>${limaFifthStudents[i].progreso.duracionPrograma}</td>
             <td>${limaFifthStudents[i].progreso.porcentajeCompletado}%</td>
             </tr>
             </table>
             </div>
            </div>`
        }
        // Fifth Generation Printed Stats
        let fifthGenerationSubjects = "";
        let subjects2 = [];
        let fifthGenerationSubtopics = "";

        // Showing Subject Stats for each subject for each student
        for (let i = 0; i < limaFifthStudents.length; i++) {
            let limaSubjects = limaFifthStudents[i].progreso.temas;
            subjects2 = limaSubjects;     
            fifthGenerationSubjects += ` <div class = "subjects01">
                                        <h2>01 Introducción a Programación</h2>
                                        <p>Duracion del Tema: ${subjects['01-Introduccion-a-programacion'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['01-Introduccion-a-programacion'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['01-Introduccion-a-programacion'].porcentajeCompletado}</p>
                                        <p>Subtemas Completados : ${subjects['01-Introduccion-a-programacion'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['01-Introduccion-a-programacion'].subtemasTotales} </p>
                                        </div>
                                        <div class = "subjects02">
                                        <h2>02 Variables y tipos de datos</h2>
                                        <p>Duracion del Tema: ${subjects['02-Variables-y-tipo-de-datos'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['02-Variables-y-tipo-de-datos'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['02-Variables-y-tipo-de-datos'].porcentajeCompletado}</p>
                                        <p>Subtemas Completados : ${subjects['02-Variables-y-tipo-de-datos'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['02-Variables-y-tipo-de-datos'].subtemasTotales} </p>
                                        </div>
                                        <div class = "subjects03">
                                        <h2>03 UX</h2>
                                        <p>Duracion del Tema: ${subjects['03-UX'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['03-UX'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['03-UX'].porcentajeCompletado}</p>
                                        <p>Subtemas Completados : ${subjects['03-UX'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['03-UX'].subtemasTotales} </p>
                                        </div>`
                fifthGenerationSubtopics += ` <div class = "subtopics-introduccion">
                                        <div class = "subtopics01">
                                        <h3>00 Bienvenida Orientacion</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 - Desarrollo Profesional</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>03 Por qué aprender a programar</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Tu primer sitio</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo}</p>
                                        </div>
                                        <div class = "subtopics05">
                                        <h3>04 Quiz</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo}</p>
                                        </div>
                                        </div>
                                        <div class = "subtopics-variables">
                                        <div class = "subtopics01">
                                        <h3>00 Tipos de datos y operadores</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 Variables</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>02 Auto Aprendizaje MDN</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Comments</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo}</p>
                                        </div>
                                        <div class = "subtopics05">
                                        <h3>04 Ejercicios guiados</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo}</p>
                                        </div>
                                        <div class = "subtopics06">
                                        <h3>05 Quiz</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo}</p>
                                        </div>
                                        <div class = "subtopics07">
                                        <h3>06 Ejercicios</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo}</p>
                                        </div>
                                        </div>
                                        <div class = "subtopics-ux">
                                        <div class = "subtopics01">
                                        <h3>00 Equipos de desarrollo</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 UX diseño</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['01-ux-diseno'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['01-ux-diseno'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['01-ux-diseno'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>02 UX vs UI</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Quiz</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['03-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['03-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['03-quiz'].tipo}</p>
                                        </div>
                                        </div>
                                        `
                                      }
            fifthSubject.innerHTML = fourthGenerationSubjects;
            fifthSubtopic.innerHTML = fourthGenerationSubtopics;  
      })
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

        
        // Third Generation Printed Stats
        let thirdGenerationSubjects = "";
        let subjects = [];
        let thirdGenerationSubtopics = "";

        // Showing Subject Stats for each subject for each student in Mexico
        for (let i = 0; i < mexicoThirdStudents.length; i++) {
            let mexicoSubjects = mexicoThirdStudents[i].progreso.temas;
            subjects = mexicoSubjects;     
            thirdGenerationSubjects += ` <div class = "subjects01">
                                        <h2>01 Introducción a Programación</h2>
                                        <p>Duracion del Tema: ${subjects['01-Introduccion-a-programacion'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['01-Introduccion-a-programacion'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['01-Introduccion-a-programacion'].porcentajeCompletado}</p>
                                        <p>Subtemas Completados : ${subjects['01-Introduccion-a-programacion'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['01-Introduccion-a-programacion'].subtemasTotales} </p>
                                        </div>
                                        <div class = "subjects02">
                                        <h2>02 Variables y tipos de datos</h2>
                                        <p>Duracion del Tema: ${subjects['02-Variables-y-tipo-de-datos'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['02-Variables-y-tipo-de-datos'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['02-Variables-y-tipo-de-datos'].porcentajeCompletado}</p>
                                        <p>Subtemas Completados : ${subjects['02-Variables-y-tipo-de-datos'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['02-Variables-y-tipo-de-datos'].subtemasTotales} </p>
                                        </div>
                                        <div class = "subjects03">
                                        <h2>03 UX</h2>
                                        <p>Duracion del Tema: ${subjects['03-UX'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['03-UX'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['03-UX'].porcentajeCompletado}</p>
                                        <p>Subtemas Completados : ${subjects['03-UX'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['03-UX'].subtemasTotales} </p>
                                        </div>`
                thirdGenerationSubtopics += ` <div class = "subtopics-introduccion">
                                        <div class = "subtopics01">
                                        <h3>00 Bienvenida Orientacion</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 - Desarrollo Profesional</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>03 Por qué aprender a programar</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Tu primer sitio</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo}</p>
                                        </div>
                                        <div class = "subtopics05">
                                        <h3>04 Quiz</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo}</p>
                                        </div>
                                        </div>
                                        <div class = "subtopics-variables">
                                        <div class = "subtopics01">
                                        <h3>00 Tipos de datos y operadores</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 Variables</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>02 Auto Aprendizaje MDN</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Comments</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo}</p>
                                        </div>
                                        <div class = "subtopics05">
                                        <h3>04 Ejercicios guiados</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo}</p>
                                        </div>
                                        <div class = "subtopics06">
                                        <h3>05 Quiz</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo}</p>
                                        </div>
                                        <div class = "subtopics07">
                                        <h3>06 Ejercicios</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo}</p>
                                        </div>
                                        </div>
                                        <div class = "subtopics-ux">
                                        <div class = "subtopics01">
                                        <h3>00 Equipos de desarrollo</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 UX diseño</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['01-ux-diseno'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['01-ux-diseno'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['01-ux-diseno'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>02 UX vs UI</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Quiz</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['03-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['03-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['03-quiz'].tipo}</p>
                                        </div>
                                        </div>
                                        `
                                      }
            thirdSubject.innerHTML = thirdGenerationSubjects;
            thirdSubtopic.innerHTML = thirdGenerationSubtopics;

          // Fourth Generation Printed Stats
            let fourthGenerationSubjects = "";
            let subjects1 = {
              name: null,
              campus: null,
              stats: {
                
              }
            };
            let fourthGenerationSubtopics = "";

            // Showing Subject Stats for each subject for each student
            for (let i = 0; i < mexicoFourthStudents.length; i++) {
                let mexicoSubjects = mexicoFourthStudents[i].progreso.temas;
                subjects1 = mexicoSubjects;     
                fourthGenerationSubjects += ` <div class = "subjects01">
                                            <h2>01 Introducción a Programación</h2>
                                            <p>Duracion del Tema: ${subjects['01-Introduccion-a-programacion'].duracionTema}</p>
                                            <p>Duracion tema Completado: ${subjects['01-Introduccion-a-programacion'].duracionTemaCompletado}</p>
                                            <p>Porcentaje Completado: ${subjects['01-Introduccion-a-programacion'].porcentajeCompletado}</p>
                                            <p>Subtemas Completados : ${subjects['01-Introduccion-a-programacion'].subtemasCompletados}</p>
                                            <p>Subtemas Totales : ${subjects['01-Introduccion-a-programacion'].subtemasTotales} </p>
                                            </div>
                                            <div class = "subjects02">
                                            <h2>02 Variables y tipos de datos</h2>
                                            <p>Duracion del Tema: ${subjects['02-Variables-y-tipo-de-datos'].duracionTema}</p>
                                            <p>Duracion tema Completado: ${subjects['02-Variables-y-tipo-de-datos'].duracionTemaCompletado}</p>
                                            <p>Porcentaje Completado: ${subjects['02-Variables-y-tipo-de-datos'].porcentajeCompletado}</p>
                                            <p>Subtemas Completados : ${subjects['02-Variables-y-tipo-de-datos'].subtemasCompletados}</p>
                                            <p>Subtemas Totales : ${subjects['02-Variables-y-tipo-de-datos'].subtemasTotales} </p>
                                            </div>
                                            <div class = "subjects03">
                                            <h2>03 UX</h2>
                                            <p>Duracion del Tema: ${subjects['03-UX'].duracionTema}</p>
                                            <p>Duracion tema Completado: ${subjects['03-UX'].duracionTemaCompletado}</p>
                                            <p>Porcentaje Completado: ${subjects['03-UX'].porcentajeCompletado}</p>
                                            <p>Subtemas Completados : ${subjects['03-UX'].subtemasCompletados}</p>
                                            <p>Subtemas Totales : ${subjects['03-UX'].subtemasTotales} </p>
                                            </div>`
                    fourthGenerationSubtopics += ` <div class = "subtopics-introduccion">
                                            <div class = "subtopics01">
                                            <h3>00 Bienvenida Orientacion</h3>
                                            <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado}</p>
                                            <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo}</p>
                                            </div>
                                            <div class = "subtopics02">
                                            <h3>01 - Desarrollo Profesional</h3>
                                            <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado}</p>
                                            <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo}</p>
                                            </div>
                                            <div class = "subtopics03">
                                            <h3>03 Por qué aprender a programar</h3>
                                            <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado}</p>
                                            <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo}</p>
                                            </div>
                                            <div class = "subtopics04">
                                            <h3>03 Tu primer sitio</h3>
                                            <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado}</p>
                                            <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo}</p>
                                            </div>
                                            <div class = "subtopics05">
                                            <h3>04 Quiz</h3>
                                            <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado}</p>
                                            <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo}</p>
                                            </div>
                                            </div>
                                            <div class = "subtopics-variables">
                                            <div class = "subtopics01">
                                            <h3>00 Tipos de datos y operadores</h3>
                                            <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado}</p>
                                            <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo}</p>
                                            </div>
                                            <div class = "subtopics02">
                                            <h3>01 Variables</h3>
                                            <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado}</p>
                                            <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo}</p>
                                            </div>
                                            <div class = "subtopics03">
                                            <h3>02 Auto Aprendizaje MDN</h3>
                                            <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado}</p>
                                            <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo}</p>
                                            </div>
                                            <div class = "subtopics04">
                                            <h3>03 Comments</h3>
                                            <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado}</p>
                                            <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo}</p>
                                            </div>
                                            <div class = "subtopics05">
                                            <h3>04 Ejercicios guiados</h3>
                                            <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado}</p>
                                            <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo}</p>
                                            </div>
                                            <div class = "subtopics06">
                                            <h3>05 Quiz</h3>
                                            <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado}</p>
                                            <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo}</p>
                                            </div>
                                            <div class = "subtopics07">
                                            <h3>06 Ejercicios</h3>
                                            <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado}</p>
                                            <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo}</p>
                                            </div>
                                            </div>
                                            <div class = "subtopics-ux">
                                            <div class = "subtopics01">
                                            <h3>00 Equipos de desarrollo</h3>
                                            <p>Completado: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].completado}</p>
                                            <p>Duración Subtema: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo}</p>
                                            </div>
                                            <div class = "subtopics02">
                                            <h3>01 UX diseño</h3>
                                            <p>Completado: ${subjects['03-UX'].subtemas['01-ux-diseno'].completado}</p>
                                            <p>Duración Subtema: ${subjects['03-UX'].subtemas['01-ux-diseno'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['03-UX'].subtemas['01-ux-diseno'].tipo}</p>
                                            </div>
                                            <div class = "subtopics03">
                                            <h3>02 UX vs UI</h3>
                                            <p>Completado: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].completado}</p>
                                            <p>Duración Subtema: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].tipo}</p>
                                            </div>
                                            <div class = "subtopics04">
                                            <h3>03 Quiz</h3>
                                            <p>Completado: ${subjects['03-UX'].subtemas['03-quiz'].completado}</p>
                                            <p>Duración Subtema: ${subjects['03-UX'].subtemas['03-quiz'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['03-UX'].subtemas['03-quiz'].tipo}</p>
                                            </div>
                                            </div>
                                            `
                                          }
                fourthSubject.innerHTML = fourthGenerationSubjects;
                fourthSubtopic.innerHTML = fourthGenerationSubtopics;

                // Fifth Generation Printed Stats
                let fifthGenerationSubjects = "";
                let subjects2 = [];
                let fifthGenerationSubtopics = "";
    
                // Showing Subject Stats for each subject for each student in Mexico
                for (let i = 0; i < mexicoFifthStudents.length; i++) {
                    let mexicoSubjects = mexicoFifthStudents[i].progreso.temas;
                    subjects2 = mexicoSubjects;     
                    fifthGenerationSubjects += ` <div class = "subjects01">
                                                <h2>01 Introducción a Programación</h2>
                                                <p>Duracion del Tema: ${subjects['01-Introduccion-a-programacion'].duracionTema}</p>
                                                <p>Duracion tema Completado: ${subjects['01-Introduccion-a-programacion'].duracionTemaCompletado}</p>
                                                <p>Porcentaje Completado: ${subjects['01-Introduccion-a-programacion'].porcentajeCompletado}</p>
                                                <p>Subtemas Completados : ${subjects['01-Introduccion-a-programacion'].subtemasCompletados}</p>
                                                <p>Subtemas Totales : ${subjects['01-Introduccion-a-programacion'].subtemasTotales} </p>
                                                </div>
                                                <div class = "subjects02">
                                                <h2>02 Variables y tipos de datos</h2>
                                                <p>Duracion del Tema: ${subjects['02-Variables-y-tipo-de-datos'].duracionTema}</p>
                                                <p>Duracion tema Completado: ${subjects['02-Variables-y-tipo-de-datos'].duracionTemaCompletado}</p>
                                                <p>Porcentaje Completado: ${subjects['02-Variables-y-tipo-de-datos'].porcentajeCompletado}</p>
                                                <p>Subtemas Completados : ${subjects['02-Variables-y-tipo-de-datos'].subtemasCompletados}</p>
                                                <p>Subtemas Totales : ${subjects['02-Variables-y-tipo-de-datos'].subtemasTotales} </p>
                                                </div>
                                                <div class = "subjects03">
                                                <h2>03 UX</h2>
                                                <p>Duracion del Tema: ${subjects['03-UX'].duracionTema}</p>
                                                <p>Duracion tema Completado: ${subjects['03-UX'].duracionTemaCompletado}</p>
                                                <p>Porcentaje Completado: ${subjects['03-UX'].porcentajeCompletado}</p>
                                                <p>Subtemas Completados : ${subjects['03-UX'].subtemasCompletados}</p>
                                                <p>Subtemas Totales : ${subjects['03-UX'].subtemasTotales} </p>
                                                </div>`
                        fifthGenerationSubtopics += ` <div class = "subtopics-introduccion">
                                                <div class = "subtopics01">
                                                <h3>00 Bienvenida Orientacion</h3>
                                                <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado}</p>
                                                <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo}</p>
                                                </div>
                                                <div class = "subtopics02">
                                                <h3>01 - Desarrollo Profesional</h3>
                                                <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado}</p>
                                                <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo}</p>
                                                </div>
                                                <div class = "subtopics03">
                                                <h3>03 Por qué aprender a programar</h3>
                                                <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado}</p>
                                                <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo}</p>
                                                </div>
                                                <div class = "subtopics04">
                                                <h3>03 Tu primer sitio</h3>
                                                <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado}</p>
                                                <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo}</p>
                                                </div>
                                                <div class = "subtopics05">
                                                <h3>04 Quiz</h3>
                                                <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado}</p>
                                                <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo}</p>
                                                </div>
                                                </div>
                                                <div class = "subtopics-variables">
                                                <div class = "subtopics01">
                                                <h3>00 Tipos de datos y operadores</h3>
                                                <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado}</p>
                                                <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo}</p>
                                                </div>
                                                <div class = "subtopics02">
                                                <h3>01 Variables</h3>
                                                <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado}</p>
                                                <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo}</p>
                                                </div>
                                                <div class = "subtopics03">
                                                <h3>02 Auto Aprendizaje MDN</h3>
                                                <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado}</p>
                                                <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo}</p>
                                                </div>
                                                <div class = "subtopics04">
                                                <h3>03 Comments</h3>
                                                <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado}</p>
                                                <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo}</p>
                                                </div>
                                                <div class = "subtopics05">
                                                <h3>04 Ejercicios guiados</h3>
                                                <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado}</p>
                                                <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo}</p>
                                                </div>
                                                <div class = "subtopics06">
                                                <h3>05 Quiz</h3>
                                                <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado}</p>
                                                <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo}</p>
                                                </div>
                                                <div class = "subtopics07">
                                                <h3>06 Ejercicios</h3>
                                                <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado}</p>
                                                <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo}</p>
                                                </div>
                                                </div>
                                                <div class = "subtopics-ux">
                                                <div class = "subtopics01">
                                                <h3>00 Equipos de desarrollo</h3>
                                                <p>Completado: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].completado}</p>
                                                <p>Duración Subtema: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo}</p>
                                                </div>
                                                <div class = "subtopics02">
                                                <h3>01 UX diseño</h3>
                                                <p>Completado: ${subjects['03-UX'].subtemas['01-ux-diseno'].completado}</p>
                                                <p>Duración Subtema: ${subjects['03-UX'].subtemas['01-ux-diseno'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['03-UX'].subtemas['01-ux-diseno'].tipo}</p>
                                                </div>
                                                <div class = "subtopics03">
                                                <h3>02 UX vs UI</h3>
                                                <p>Completado: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].completado}</p>
                                                <p>Duración Subtema: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].tipo}</p>
                                                </div>
                                                <div class = "subtopics04">
                                                <h3>03 Quiz</h3>
                                                <p>Completado: ${subjects['03-UX'].subtemas['03-quiz'].completado}</p>
                                                <p>Duración Subtema: ${subjects['03-UX'].subtemas['03-quiz'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['03-UX'].subtemas['03-quiz'].tipo}</p>
                                                </div>
                                                </div>
                                                `
                                              }
                    fifthSubject.innerHTML = fourthGenerationSubjects;
                    fifthSubtopic.innerHTML = fourthGenerationSubtopics;
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

        // Third Generation Printed Stats
        let thirdGenerationSubjects = "";
        let subjects = [];
        let thirdGenerationSubtopics = "";

        // Showing Subject Stats for each subject for each student in Santiago
        for (let i = 0; i < stgoThirdStudents.length; i++) {
            let stgoSubjects = stgoThirdStudents[i].progreso.temas;
            subjects = stgoSubjects;     
            thirdGenerationSubjects += ` <div class = "subjects01">
                                        <h2>01 Introducción a Programación</h2>
                                        <p>Duracion del Tema: ${subjects['01-Introduccion-a-programacion'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['01-Introduccion-a-programacion'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['01-Introduccion-a-programacion'].porcentajeCompletado}</p>
                                        <p>Subtemas Completados : ${subjects['01-Introduccion-a-programacion'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['01-Introduccion-a-programacion'].subtemasTotales} </p>
                                        </div>
                                        <div class = "subjects02">
                                        <h2>02 Variables y tipos de datos</h2>
                                        <p>Duracion del Tema: ${subjects['02-Variables-y-tipo-de-datos'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['02-Variables-y-tipo-de-datos'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['02-Variables-y-tipo-de-datos'].porcentajeCompletado}</p>
                                        <p>Subtemas Completados : ${subjects['02-Variables-y-tipo-de-datos'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['02-Variables-y-tipo-de-datos'].subtemasTotales} </p>
                                        </div>
                                        <div class = "subjects03">
                                        <h2>03 UX</h2>
                                        <p>Duracion del Tema: ${subjects['03-UX'].duracionTema}</p>
                                        <p>Duracion tema Completado: ${subjects['03-UX'].duracionTemaCompletado}</p>
                                        <p>Porcentaje Completado: ${subjects['03-UX'].porcentajeCompletado}</p>
                                        <p>Subtemas Completados : ${subjects['03-UX'].subtemasCompletados}</p>
                                        <p>Subtemas Totales : ${subjects['03-UX'].subtemasTotales} </p>
                                        </div>`
                thirdGenerationSubtopics += ` <div class = "subtopics-introduccion">
                                        <div class = "subtopics01">
                                        <h3>00 Bienvenida Orientacion</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 - Desarrollo Profesional</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>03 Por qué aprender a programar</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Tu primer sitio</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo}</p>
                                        </div>
                                        <div class = "subtopics05">
                                        <h3>04 Quiz</h3>
                                        <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo}</p>
                                        </div>
                                        </div>
                                        <div class = "subtopics-variables">
                                        <div class = "subtopics01">
                                        <h3>00 Tipos de datos y operadores</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 Variables</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>02 Auto Aprendizaje MDN</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Comments</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo}</p>
                                        </div>
                                        <div class = "subtopics05">
                                        <h3>04 Ejercicios guiados</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo}</p>
                                        </div>
                                        <div class = "subtopics06">
                                        <h3>05 Quiz</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo}</p>
                                        </div>
                                        <div class = "subtopics07">
                                        <h3>06 Ejercicios</h3>
                                        <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado}</p>
                                        <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo}</p>
                                        </div>
                                        </div>
                                        <div class = "subtopics-ux">
                                        <div class = "subtopics01">
                                        <h3>00 Equipos de desarrollo</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo}</p>
                                        </div>
                                        <div class = "subtopics02">
                                        <h3>01 UX diseño</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['01-ux-diseno'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['01-ux-diseno'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['01-ux-diseno'].tipo}</p>
                                        </div>
                                        <div class = "subtopics03">
                                        <h3>02 UX vs UI</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].tipo}</p>
                                        </div>
                                        <div class = "subtopics04">
                                        <h3>03 Quiz</h3>
                                        <p>Completado: ${subjects['03-UX'].subtemas['03-quiz'].completado}</p>
                                        <p>Duración Subtema: ${subjects['03-UX'].subtemas['03-quiz'].duracionSubtema}</p>
                                        <p>Tipo: ${subjects['03-UX'].subtemas['03-quiz'].tipo}</p>
                                        </div>
                                        </div>
                                        `
                                      }
            thirdSubject.innerHTML = thirdGenerationSubjects;
            thirdSubtopic.innerHTML = thirdGenerationSubtopics;

          // Fourth Generation Printed Stats
            let fourthGenerationSubjects = "";
            let subjects1 = [];
            let fourthGenerationSubtopics = "";

            // Showing Subject Stats for each subject for each student
            for (let i = 0; i < stgoFourthStudents.length; i++) {
                let stgoSubjects = stgoFourthStudents[i].progreso.temas;
                subjects1 = stgoSubjects;     
                fourthGenerationSubjects += ` <div class = "subjects01">
                                            <h2>01 Introducción a Programación</h2>
                                            <p>Duracion del Tema: ${subjects['01-Introduccion-a-programacion'].duracionTema}</p>
                                            <p>Duracion tema Completado: ${subjects['01-Introduccion-a-programacion'].duracionTemaCompletado}</p>
                                            <p>Porcentaje Completado: ${subjects['01-Introduccion-a-programacion'].porcentajeCompletado}</p>
                                            <p>Subtemas Completados : ${subjects['01-Introduccion-a-programacion'].subtemasCompletados}</p>
                                            <p>Subtemas Totales : ${subjects['01-Introduccion-a-programacion'].subtemasTotales} </p>
                                            </div>
                                            <div class = "subjects02">
                                            <h2>02 Variables y tipos de datos</h2>
                                            <p>Duracion del Tema: ${subjects['02-Variables-y-tipo-de-datos'].duracionTema}</p>
                                            <p>Duracion tema Completado: ${subjects['02-Variables-y-tipo-de-datos'].duracionTemaCompletado}</p>
                                            <p>Porcentaje Completado: ${subjects['02-Variables-y-tipo-de-datos'].porcentajeCompletado}</p>
                                            <p>Subtemas Completados : ${subjects['02-Variables-y-tipo-de-datos'].subtemasCompletados}</p>
                                            <p>Subtemas Totales : ${subjects['02-Variables-y-tipo-de-datos'].subtemasTotales} </p>
                                            </div>
                                            <div class = "subjects03">
                                            <h2>03 UX</h2>
                                            <p>Duracion del Tema: ${subjects['03-UX'].duracionTema}</p>
                                            <p>Duracion tema Completado: ${subjects['03-UX'].duracionTemaCompletado}</p>
                                            <p>Porcentaje Completado: ${subjects['03-UX'].porcentajeCompletado}</p>
                                            <p>Subtemas Completados : ${subjects['03-UX'].subtemasCompletados}</p>
                                            <p>Subtemas Totales : ${subjects['03-UX'].subtemasTotales} </p>
                                            </div>`
                    fourthGenerationSubtopics += ` <div class = "subtopics-introduccion">
                                            <div class = "subtopics01">
                                            <h3>00 Bienvenida Orientacion</h3>
                                            <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado}</p>
                                            <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo}</p>
                                            </div>
                                            <div class = "subtopics02">
                                            <h3>01 - Desarrollo Profesional</h3>
                                            <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado}</p>
                                            <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo}</p>
                                            </div>
                                            <div class = "subtopics03">
                                            <h3>03 Por qué aprender a programar</h3>
                                            <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado}</p>
                                            <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo}</p>
                                            </div>
                                            <div class = "subtopics04">
                                            <h3>03 Tu primer sitio</h3>
                                            <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado}</p>
                                            <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo}</p>
                                            </div>
                                            <div class = "subtopics05">
                                            <h3>04 Quiz</h3>
                                            <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado}</p>
                                            <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo}</p>
                                            </div>
                                            </div>
                                            <div class = "subtopics-variables">
                                            <div class = "subtopics01">
                                            <h3>00 Tipos de datos y operadores</h3>
                                            <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado}</p>
                                            <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo}</p>
                                            </div>
                                            <div class = "subtopics02">
                                            <h3>01 Variables</h3>
                                            <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado}</p>
                                            <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo}</p>
                                            </div>
                                            <div class = "subtopics03">
                                            <h3>02 Auto Aprendizaje MDN</h3>
                                            <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado}</p>
                                            <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo}</p>
                                            </div>
                                            <div class = "subtopics04">
                                            <h3>03 Comments</h3>
                                            <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado}</p>
                                            <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo}</p>
                                            </div>
                                            <div class = "subtopics05">
                                            <h3>04 Ejercicios guiados</h3>
                                            <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado}</p>
                                            <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo}</p>
                                            </div>
                                            <div class = "subtopics06">
                                            <h3>05 Quiz</h3>
                                            <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado}</p>
                                            <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo}</p>
                                            </div>
                                            <div class = "subtopics07">
                                            <h3>06 Ejercicios</h3>
                                            <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado}</p>
                                            <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo}</p>
                                            </div>
                                            </div>
                                            <div class = "subtopics-ux">
                                            <div class = "subtopics01">
                                            <h3>00 Equipos de desarrollo</h3>
                                            <p>Completado: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].completado}</p>
                                            <p>Duración Subtema: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo}</p>
                                            </div>
                                            <div class = "subtopics02">
                                            <h3>01 UX diseño</h3>
                                            <p>Completado: ${subjects['03-UX'].subtemas['01-ux-diseno'].completado}</p>
                                            <p>Duración Subtema: ${subjects['03-UX'].subtemas['01-ux-diseno'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['03-UX'].subtemas['01-ux-diseno'].tipo}</p>
                                            </div>
                                            <div class = "subtopics03">
                                            <h3>02 UX vs UI</h3>
                                            <p>Completado: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].completado}</p>
                                            <p>Duración Subtema: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].tipo}</p>
                                            </div>
                                            <div class = "subtopics04">
                                            <h3>03 Quiz</h3>
                                            <p>Completado: ${subjects['03-UX'].subtemas['03-quiz'].completado}</p>
                                            <p>Duración Subtema: ${subjects['03-UX'].subtemas['03-quiz'].duracionSubtema}</p>
                                            <p>Tipo: ${subjects['03-UX'].subtemas['03-quiz'].tipo}</p>
                                            </div>
                                            </div>
                                            `
                                          }
                fourthSubject.innerHTML = fourthGenerationSubjects;
                fourthSubtopic.innerHTML = fourthGenerationSubtopics;

                // Fifth Generation Printed Stats
                let fifthGenerationSubjects = "";
                let subjects2 = [];
                let fifthGenerationSubtopics = "";
    
                // Showing Subject Stats for each subject for each student
                for (let i = 0; i < stgoFifthStudents.length; i++) {
                    let stgoSubjects = stgoFifthStudents[i].progreso.temas;
                    subjects2 = stgoSubjects;     
                    fifthGenerationSubjects += ` <div class = "subjects01">
                                                <h2>01 Introducción a Programación</h2>
                                                <p>Duracion del Tema: ${subjects['01-Introduccion-a-programacion'].duracionTema}</p>
                                                <p>Duracion tema Completado: ${subjects['01-Introduccion-a-programacion'].duracionTemaCompletado}</p>
                                                <p>Porcentaje Completado: ${subjects['01-Introduccion-a-programacion'].porcentajeCompletado}</p>
                                                <p>Subtemas Completados : ${subjects['01-Introduccion-a-programacion'].subtemasCompletados}</p>
                                                <p>Subtemas Totales : ${subjects['01-Introduccion-a-programacion'].subtemasTotales} </p>
                                                </div>
                                                <div class = "subjects02">
                                                <h2>02 Variables y tipos de datos</h2>
                                                <p>Duracion del Tema: ${subjects['02-Variables-y-tipo-de-datos'].duracionTema}</p>
                                                <p>Duracion tema Completado: ${subjects['02-Variables-y-tipo-de-datos'].duracionTemaCompletado}</p>
                                                <p>Porcentaje Completado: ${subjects['02-Variables-y-tipo-de-datos'].porcentajeCompletado}</p>
                                                <p>Subtemas Completados : ${subjects['02-Variables-y-tipo-de-datos'].subtemasCompletados}</p>
                                                <p>Subtemas Totales : ${subjects['02-Variables-y-tipo-de-datos'].subtemasTotales} </p>
                                                </div>
                                                <div class = "subjects03">
                                                <h2>03 UX</h2>
                                                <p>Duracion del Tema: ${subjects['03-UX'].duracionTema}</p>
                                                <p>Duracion tema Completado: ${subjects['03-UX'].duracionTemaCompletado}</p>
                                                <p>Porcentaje Completado: ${subjects['03-UX'].porcentajeCompletado}</p>
                                                <p>Subtemas Completados : ${subjects['03-UX'].subtemasCompletados}</p>
                                                <p>Subtemas Totales : ${subjects['03-UX'].subtemasTotales} </p>
                                                </div>`
                        fifthGenerationSubtopics += ` <div class = "subtopics-introduccion">
                                                <div class = "subtopics01">
                                                <h3>00 Bienvenida Orientacion</h3>
                                                <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado}</p>
                                                <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo}</p>
                                                </div>
                                                <div class = "subtopics02">
                                                <h3>01 - Desarrollo Profesional</h3>
                                                <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado}</p>
                                                <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo}</p>
                                                </div>
                                                <div class = "subtopics03">
                                                <h3>03 Por qué aprender a programar</h3>
                                                <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado}</p>
                                                <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo}</p>
                                                </div>
                                                <div class = "subtopics04">
                                                <h3>03 Tu primer sitio</h3>
                                                <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado}</p>
                                                <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo}</p>
                                                </div>
                                                <div class = "subtopics05">
                                                <h3>04 Quiz</h3>
                                                <p>Completado: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado}</p>
                                                <p>Duración Subtema: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo}</p>
                                                </div>
                                                </div>
                                                <div class = "subtopics-variables">
                                                <div class = "subtopics01">
                                                <h3>00 Tipos de datos y operadores</h3>
                                                <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado}</p>
                                                <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo}</p>
                                                </div>
                                                <div class = "subtopics02">
                                                <h3>01 Variables</h3>
                                                <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado}</p>
                                                <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo}</p>
                                                </div>
                                                <div class = "subtopics03">
                                                <h3>02 Auto Aprendizaje MDN</h3>
                                                <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado}</p>
                                                <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo}</p>
                                                </div>
                                                <div class = "subtopics04">
                                                <h3>03 Comments</h3>
                                                <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado}</p>
                                                <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo}</p>
                                                </div>
                                                <div class = "subtopics05">
                                                <h3>04 Ejercicios guiados</h3>
                                                <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado}</p>
                                                <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo}</p>
                                                </div>
                                                <div class = "subtopics06">
                                                <h3>05 Quiz</h3>
                                                <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado}</p>
                                                <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo}</p>
                                                </div>
                                                <div class = "subtopics07">
                                                <h3>06 Ejercicios</h3>
                                                <p>Completado: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado}</p>
                                                <p>Duración Subtema: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo}</p>
                                                </div>
                                                </div>
                                                <div class = "subtopics-ux">
                                                <div class = "subtopics01">
                                                <h3>00 Equipos de desarrollo</h3>
                                                <p>Completado: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].completado}</p>
                                                <p>Duración Subtema: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo}</p>
                                                </div>
                                                <div class = "subtopics02">
                                                <h3>01 UX diseño</h3>
                                                <p>Completado: ${subjects['03-UX'].subtemas['01-ux-diseno'].completado}</p>
                                                <p>Duración Subtema: ${subjects['03-UX'].subtemas['01-ux-diseno'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['03-UX'].subtemas['01-ux-diseno'].tipo}</p>
                                                </div>
                                                <div class = "subtopics03">
                                                <h3>02 UX vs UI</h3>
                                                <p>Completado: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].completado}</p>
                                                <p>Duración Subtema: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['03-UX'].subtemas['02-ux-vs-ui'].tipo}</p>
                                                </div>
                                                <div class = "subtopics04">
                                                <h3>03 Quiz</h3>
                                                <p>Completado: ${subjects['03-UX'].subtemas['03-quiz'].completado}</p>
                                                <p>Duración Subtema: ${subjects['03-UX'].subtemas['03-quiz'].duracionSubtema}</p>
                                                <p>Tipo: ${subjects['03-UX'].subtemas['03-quiz'].tipo}</p>
                                                </div>
                                                </div>
                                                `
                                              }
                    fifthSubject.innerHTML = fourthGenerationSubjects;
                    fifthSubtopic.innerHTML = fourthGenerationSubtopics;
        })
      }

// Calling fetch in data.js
dashboard.computeStudentsStats();