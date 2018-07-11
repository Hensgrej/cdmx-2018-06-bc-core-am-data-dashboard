window.dashboardCompute = {
  computeStudentsStats: (dataValues) => {
    let students = {
      name: [],
      email: [],
      campus: [],
      generation: [],
      stats: {
        status: [],
        completedPercentage: [],
        topics: [{
          '01-Introduccion-a-programacion': {
            completedPercentage: [],
            percentageDuration: [],
            subtopics: {
              '00-bienvenida-orientacion': {
                completedPercentage: [],
                type: [],
                duration: []
              },
              '01-desarrollo-profesional': {
                completedPercentage: [],
                type: [],
                duration: []
              },
              '02-por-que-aprender-a-programar': {
                completedPercentage: [],
                type: [],
                duration: []
              },
              '03-tu-primer-sitio': {
                completedPercentage: [],
                type: [],
                duration: []
              },
              '04-quiz': {
                completedPercentage: [],
                type: [],
                duration: []
              }
            }
          },
          '02-Variables-y-tipo-de-datos': {
            completedPercentage: [],
            percentageDuration: [],
            subtopics: {
              '00-Tipos-de-datos-y-operadores': {
                completedPercentage: [],
                type: [],
                duration: []
              },
              '01-variables': {
                completedPercentage: [],
                type: [],
                duration: []
              },
              '02-auto-aprendizaje-MDN': {
                completedPercentage: [],
                type: [],
                duration: []
              },
              '03-comments': {
                completedPercentage: [],
                type: [],
                duration: []
              },
              '04-ejercicios-guiados': {
                completedPercentage: [],
                type: [],
                duration: []
              },
              '05-quiz': {
                completedPercentage: [],
                type: [],
                duration: []
              },
              '06-ejercicios': {
                completedPercentage: [],
                type: [],
                duration: []
              }
            }
          },
          '03-UX': {
            completedPercentage: [],
            percentageDuration: [],
            subtopics: {
              '00-equipos-de-desarrollo': {
                completedPercentage: [],
                type: [],
                duration: []
              },
              '01-ux-diseno': {
                completedPercentage: [],
                type: [],
                duration: []
              },
              '02-ux-vs-ui': {
                completedPercentage: [],
                type: [],
                duration: []
              },
              '03-quiz': {
                completedPercentage: [],
                type: [],
                duration: []
              },
            }
          }
        }],
      }
    };

    let info = Object.values(dataValues);
    let campuses = [];
    let generations = [];
    let allStudents = [];

    for (let i = 0; i < info.length; i++) {
      campuses.push(info[i]);
      students.campus.push(campuses);
    }
    for (let j = 0; j < campuses.length; j++) {
      generations.push(campuses[j].generacion);
      students.generation.push(generations);
    }
    for (let k = 0; k < generations.length; k++) {
      allStudents.push(generations[k].cuarta.estudiantes);
      allStudents.push(generations[k].quinta.estudiantes);
      allStudents.push(generations[k].tercera.estudiantes);
    }
    let studentsArray = [];
    let stats = [];
    for (let l = 0; l < allStudents.length; l++) {
      studentsArray.push(allStudents[l]);
      let studentsInfo = studentsArray[l];
      for (let j = 0; j < studentsInfo.length; j++) {
        students.name.push(studentsInfo[j].nombre);
        students.email.push(studentsInfo[j].correo);
        stats.push(studentsInfo[j].progreso);
      }
    }
    for (let i = 0; i < stats.length; i++) {
      students.stats.completedPercentage.push(stats[i].porcentajeCompletado);
      if (stats[i].porcentajeCompletado <= 60) {
        students.stats.status.push('Por debajo del 60%');
      } else if (stats[i].porcentajeCompletado >= 90) {
        students.stats.status.push('Por encima del 90%');
      } else {
        students.stats.status.push('Entre el 60% y 90%');
      }
      students.stats.topics[0]['01-Introduccion-a-programacion'].completedPercentage.push((stats[i].temas['01-Introduccion-a-programacion'].porcentajeCompletado));
      let topicDuration01 = stats[i].temas['01-Introduccion-a-programacion'].duracionTema;
      let completedDuration01 = stats[i].temas['01-Introduccion-a-programacion'].duracionTemaCompletado;
      let durationPercentage01 = (completedDuration01 * 100) / topicDuration01;
      students.stats.topics[0]['01-Introduccion-a-programacion'].percentageDuration.push(Math.round(durationPercentage01));

      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].completedPercentage.push((stats[i].temas['02-Variables-y-tipo-de-datos'].porcentajeCompletado));
      let topicDuration02 = stats[i].temas['02-Variables-y-tipo-de-datos'].duracionTema;
      let completedDuration02 = stats[i].temas['02-Variables-y-tipo-de-datos'].duracionTemaCompletado;
      let durationPercentage02 = (completedDuration02 * 100) / topicDuration02;
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].percentageDuration.push(Math.round(durationPercentage02));

      students.stats.topics[0]['03-UX'].completedPercentage.push((stats[i].temas['03-UX'].porcentajeCompletado));
      let topicDuration03 = stats[i].temas['03-UX'].duracionTema;
      let completedDuration03 = stats[i].temas['03-UX'].duracionTemaCompletado;
      let durationPercentage03 = (completedDuration03 * 100) / topicDuration03;
      students.stats.topics[0]['03-UX'].percentageDuration.push(Math.round(durationPercentage03));

      // 01-Introduccion-a-programacion Subtopics
      // Subtopics Duration
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].duration.push(stats[i].temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema);
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].duration.push(stats[i].temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema);
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].duration.push(stats[i].temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema);
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].duration.push(stats[i].temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema);
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].duration.push(stats[i].temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema);
      // Subtopics Type
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].type.push(stats[i].temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo);
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].type.push(stats[i].temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo);
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].type.push(stats[i].temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo);
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].type.push(stats[i].temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo);
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].type.push(stats[i].temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo);
      // Subtopics Duration Percentage
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].completedPercentage.push(Math.round(stats[i].temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema * 100) / topicDuration01);
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].completedPercentage.push(Math.round(stats[i].temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema * 100) / topicDuration01);
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].completedPercentage.push(Math.round(stats[i].temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema * 100) / topicDuration01);
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].completedPercentage.push(Math.round(stats[i].temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema * 100) / topicDuration01);
      students.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].completedPercentage.push(Math.round(stats[i].temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema * 100) / topicDuration01);
      // 02-Variables-y-tipo-de-datos Subtopics
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].duration.push(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].duration.push(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].duration.push(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].duration.push(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].duration.push(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].duration.push(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].duration.push(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema);
      // Subtopics Type
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].type.push(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].type.push(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].type.push(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].type.push(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].type.push(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].type.push(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].type.push(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo);
      // Subtopics Duration Percentage
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].completedPercentage.push(Math.round(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema * 100) / topicDuration02);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].completedPercentage.push(Math.round(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema * 100) / topicDuration02);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].completedPercentage.push(Math.round(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema * 100) / topicDuration02);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].completedPercentage.push(Math.round(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema * 100) / topicDuration02);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].completedPercentage.push(Math.round(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema * 100) / topicDuration02);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].completedPercentage.push(Math.round(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema * 100) / topicDuration02);
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].completedPercentage.push(Math.round(stats[i].temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema * 100) / topicDuration02);
      // 03-UX Subtopics
      // Subtopics Duration
      students.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].duration.push(stats[i].temas['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema);
      students.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].duration.push(stats[i].temas['03-UX'].subtemas['01-ux-diseno'].duracionSubtema);
      students.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].duration.push(stats[i].temas['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema);
      students.stats.topics[0]['03-UX'].subtopics['03-quiz'].duration.push(stats[i].temas['03-UX'].subtemas['03-quiz'].duracionSubtema);
      // Subtopics Type
      students.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].type.push(stats[i].temas['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo);
      students.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].type.push(stats[i].temas['03-UX'].subtemas['01-ux-diseno'].tipo);
      students.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].type.push(stats[i].temas['03-UX'].subtemas['02-ux-vs-ui'].tipo);
      students.stats.topics[0]['03-UX'].subtopics['03-quiz'].type.push(stats[i].temas['03-UX'].subtemas['03-quiz'].tipo);
      // Subtopics Duration Percentage
      students.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].completedPercentage.push(Math.round(stats[i].temas['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema * 100) / topicDuration03);
      students.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].completedPercentage.push(Math.round(stats[i].temas['03-UX'].subtemas['01-ux-diseno'].duracionSubtema * 100) / topicDuration03);
      students.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].completedPercentage.push(Math.round(stats[i].temas['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema * 100) / topicDuration03);
      students.stats.topics[0]['03-UX'].subtopics['03-quiz'].completedPercentage.push(Math.round(stats[i].temas['03-UX'].subtemas['03-quiz'].duracionSubtema * 100) / topicDuration03);
    }
    return students;
  }
};


window.dashboardPrint = {
  computeGenerationStats: (dataValues) => {
    let generations = {
      campus: [],
      generation: [],
      average: [],
      count: [],
    };
    let camp = [];
    generations.campus.push(dataValues);
    for (let i = 0; i < dataValues.length; i++) {
      generations.generation.push(dataValues[i].generacion);
      camp.push(dataValues[i].generacion);
    }
    let fourthLima = camp[0].cuarta.estudiantes;
    let percentageFourthLima = [];
    for (let j = 0; j < fourthLima.length; j++) {
      percentageFourthLima.push(fourthLima[j].progreso.porcentajeCompletado);
    }
    let fifthLima = camp[0].cuarta.estudiantes;
    let percentageFifthLima = [];
    for (let j = 0; j < fifthLima.length; j++) {
      percentageFifthLima.push(fifthLima[j].progreso.porcentajeCompletado);
    }
    let thirdLima = camp[0].cuarta.estudiantes;
    let percentageThirdLima = [];
    for (let j = 0; j < thirdLima.length; j++) {
      percentageThirdLima.push(thirdLima[j].progreso.porcentajeCompletado);
    }
    let fourthMexico = camp[0].cuarta.estudiantes;
    let percentageFourthMexico = [];
    for (let j = 0; j < fourthMexico.length; j++) {
      percentageFourthMexico.push(fourthMexico[j].progreso.porcentajeCompletado);
    }
    let fifthMexico = camp[0].cuarta.estudiantes;
    let percentageFifthMexico = [];
    for (let j = 0; j < fifthMexico.length; j++) {
      percentageFifthMexico.push(fifthMexico[j].progreso.porcentajeCompletado);
    }
    let thirdMexico = camp[0].cuarta.estudiantes;
    let percentageThirdMexico = [];
    for (let j = 0; j < thirdMexico.length; j++) {
      percentageThirdMexico.push(thirdMexico[j].progreso.porcentajeCompletado);
    }
    let fourthStgo = camp[0].cuarta.estudiantes;
    let percentageFourthStgo = [];
    for (let j = 0; j < fourthStgo.length; j++) {
      percentageFourthStgo.push(fourthStgo[j].progreso.porcentajeCompletado);
    }
    let fifthStgo = camp[0].cuarta.estudiantes;
    let percentageFifthStgo = [];
    for (let j = 0; j < fifthStgo.length; j++) {
      percentageFifthStgo.push(fifthStgo[j].progreso.porcentajeCompletado);
    }
    let thirdStgo = camp[0].cuarta.estudiantes;
    let percentageThirdStgo = [];
    for (let j = 0; j < thirdStgo.length; j++) {
      percentageThirdStgo.push(thirdStgo[j].progreso.porcentajeCompletado);
    }
    const sum = (total, num) => {
      return total + num;
    };
    // let sumLimaFourth = percentageFourthLima.reduce(sum);
    // generations.average.push(Math.round(sumLimaFourth / percentageFourthLima.length));
    let sumLimaFifth = percentageFifthLima.reduce(sum);
    // console.log(Math.round(sumLimaFifth / percentageFifthLima.length));
    let sumLimaThird = percentageThirdLima.reduce(sum);
    generations.average.push(Math.round(sumLimaThird / percentageThirdLima.length));

    let sumMexicoFourth = percentageFourthMexico.reduce(sum);
    generations.average.push(Math.round(sumMexicoFourth / percentageFourthMexico.length));
    let sumMexicoFifth = percentageFifthMexico.reduce(sum);
    generations.average.push(Math.round(sumMexicoFifth / percentageFifthMexico.length));
    let sumMexicoThird = percentageThirdMexico.reduce(sum);
    generations.average.push(Math.round(sumMexicoThird / percentageThirdMexico.length));

    let sumStgoFourth = percentageFourthStgo.reduce(sum);
    generations.average.push(Math.round(sumStgoFourth / percentageFourthStgo.length));
    let sumStgoFifth = percentageFifthStgo.reduce(sum);
    generations.average.push(Math.round(sumStgoFifth / percentageFifthStgo.length));
    // let sumStgoThird = percentageThirdStgo.reduce(sum);
    // generations.average.push(Math.round(sumStgoThird / percentageThirdStgo.length));

    // console.log(generations);
  }
};