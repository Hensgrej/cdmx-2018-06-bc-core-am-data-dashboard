window.dashboardData = {
  dataLaboratoria: (laboratoria) => {
    laboratoria = 'https://api.myjson.com/bins/13lpdy';
    fetch(laboratoria).then((data) => {
      return data.json();
    })
      .then((data) => {
        dashboardCompute.computeStudentStats(data);
        dashboardCompute.computeGenerationStats(data);
      }).catch((err) => {
        console.log('Error en laboratoriaData');
      });
  }
};
window.dashboardCompute = {
  computeStudentStats: (data) => {
    let students = {
      name: '',
      email: '',
      campus: '',
      generation: '',
      stats: {
        status: 0,
        completedPercentage: 0,
        topics: [{
          '01-Introduccion-a-programacion': {
            completedPercentage: 0,
            percentageDuration: 0,
          },
          '02-Variables-y-tipo-de-datos': {
            completedPercentage: 0,
            percentageDuration: 0,
          },
          '03-UX': {
            completedPercentage: 0,
            percentageDuration: 0,
          }
        }],
        subtopics: {
          subPrograms: {
            completedPercentage: 0,
            type: '',
            duration: 0,
          }
        }
      }
    };
    let dataValues = (Object.values(data));
    let dataLima = dataValues[0].generacion;
    let dataMex = dataValues[1].generacion;
    let dataStgo = dataValues[2].generacion;
    let dataStudentsFourthLima = dataLima.cuarta.estudiantes;
    let dataStudentsFifthLima = dataLima.quinta.estudiantes;
    let dataStudentsThirdLima = dataLima.tercera.estudiantes;
    for (let i = 0; i < dataStudentsFourthLima.length; i++) {
      students.name += dataStudentsFourthLima[i].nombre;
      students.email += dataStudentsFourthLima[i].correo;
      students.campus += 'Lima';
      students.generation += 'Cuarta';
      students.stats.completedPercentage += dataStudentsFourthLima[i].progreso.porcentajeCompletado;
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

      // let topicDurationLimaFourth01 = dataStudentsFourtLima[i].progreso.temas['01-Introduccion-a-programacion'].duracionTema;
      // console.log(topicDurationLimaFourth01);
      // let topicCompletedDurationLimaFourth01 = dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].duracionTemaCompletado;
      // let durationPercentageLimaFourth01 = (parseInt(topicCompletedDurationLimaFourth01) * 100) / parseInt(topicDurationLimaFourth01);
      // console.log(durationPercentageLimaFourth01);
    }

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
  },
  computeGenerationStats: () => {
    let generation = {
      campus: null,
      generation: null,
      average: null,
      count: null,
    };
  }
};