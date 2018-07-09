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
      },
      '02-Variables-y-tipo-de-datos': {
        completedPercentage: [],
        percentageDuration: [],
      },
      '03-UX': {
        completedPercentage: [],
        percentageDuration: [],
      }
    }],
    subtopics: {
      subPrograms: {
        completedPercentage: [],
        type: [],
        duration: [],
      }
    }
  }
};

window.dashboardCompute = {
  computeStudentStats: (data) => {

  },
  studentStatsLima: (dataValues) => {    
    let bleh = Object.values(dataValues);
    let campuses = [];
    let generations = [];
    let allStudents = [];

    for (let i = 0; i < bleh.length; i++) {
      campuses.push(bleh[i]);
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
        stats.push(studentsInfo[j].stats);
      }
    }
    console.log(students.);
  }
  /* let dataStudents = dataLima.cuarta.estudiantes;
    let dataStudentsFifthLima = dataLima.quinta.estudiantes;
    let dataStudentsThirdLima = dataLima.tercera.estudiantes;
    for (let i = 0; i < dataStudentsFourthLima.length; i++) {
      students.name.push(dataStudentsFourthLima[i].nombre);
      students.email.push(dataStudentsFourthLima[i].correo);
      students.campus.push(dataValues[0]);
      students.generation.push(dataLima.generacion);
      students.stats.completedPercentage.push(dataStudentsFourthLima[i].progreso.porcentajeCompletado);
      if (students.stats.completedPercentage <= 60) {
        students.stats.status += 'Por debajo del 60%';
      } else if (students.stats.completedPercentage >= 90) {
        students.stats.status += 'Por encima del 90%';
      } else {
        students.stats.status += 'Entre el 60% y el 90%';
      }
      students.stats.topics[0]['01-Introduccion-a-programacion'].completedPercentage = dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].porcentajeCompletado;
      students.stats.topics[0]['02-Variables-y-tipo-de-datos'].completedPercentage = dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].porcentajeCompletado;
      students.stats.topics[0]['03-UX'].completedPercentage = dataStudentsFourthLima[i].progreso.temas['03-UX'].porcentajeCompletado; 
    }
    console.log(students);
    for (let i = 0; i < dataStudentsFifthLima.length; i++) {
      students.name += dataStudentsFifthLima[i].nombre;
      students.email += dataStudentsFifthLima[i].correo;
      students.campus += 'Lima';
      students.generation += 'Quinta';
    }
    for (let i = 0; i < dataStudentsThirdLima.length; i++) {
      students.name += dataStudentsThirdLima[i].nombre;
      students.email += dataStudentsThirdLima[i].correo;
      students.campus += 'Lima';
      students.generation += 'Tercera';
    }
  },
  studentsStatsMexico: (dataValues) => {
    let dataMex = dataValues[1].generacion;
    let dataStudentsFourthMex = dataMex.cuarta.estudiantes;
    let dataStudentsFifthMex = dataMex.quinta.estudiantes;
    let dataStudentsThirdMex = dataMex.tercera.estudiantes;
    for (let i = 0; i < dataStudentsFourthMex.length; i++) {
      students.name += dataStudentsFourthMex[i].nombre;
      students.email += dataStudentsFourthMex[i].correo;
      students.campus += 'México';
      students.generation += 'Cuarta';
    }
    for (let i = 0; i < dataStudentsFifthMex.length; i++) {
      students.name += dataStudentsFifthMex[i].nombre;
      students.email += dataStudentsFifthMex[i].correo;
      students.campus += 'México';
      students.generation += 'Quinta';
    }
    for (let i = 0; i < dataStudentsThirdMex.length; i++) {
      students.name += dataStudentsThirdMex[i].nombre;
      students.email += dataStudentsThirdMex[i].correo;
      students.campus += 'México';
      students.generation += 'Tercera';
    }
  },
  studentsStatsStgo: (dataValues) => {
    let dataStgo = dataValues[2].generacion;
    let dataStudentsFourthStgo = dataStgo.cuarta.estudiantes;
    let dataStudentsFifthStgo = dataStgo.quinta.estudiantes;
    let dataStudentsThirdStgo = dataStgo.tercera.estudiantes;
    for (let i = 0; i < dataStudentsFourthStgo.length; i++) {
      students.name += dataStudentsFourthStgo[i].nombre;
      students.email += dataStudentsFourthStgo[i].correo;
      students.campus += 'Santiago';
      students.generation += 'Cuarta';
    }
    for (let i = 0; i < dataStudentsFifthStgo.length; i++) {
      students.name += dataStudentsFifthStgo[i].nombre;
      students.email += dataStudentsFifthStgo[i].correo;
      students.campus += 'Santiago';
      students.generation += 'Quinta';
    }
    for (let i = 0; i < dataStudentsThirdStgo.length; i++) {
      students.name += dataStudentsThirdStgo[i].nombre;
      students.email += dataStudentsThirdStgo[i].correo;
      students.campus += 'Santiago';
      students.generation += 'Tercera';
    }
  */};