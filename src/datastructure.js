window.dashboardData = {
  dataLaboratoria: (laboratoria) => {
    laboratoria = 'https://api.myjson.com/bins/13lpdy';
    fetch(laboratoria).then((data) => {
      return data.json();
    })
      .then((data) => {
        dashboardCompute.computeStudentStats(data);
      }).catch((err) => {
        console.log('Error en laboratoriaData');
      });
  }
};
window.dashboardCompute = {
  computeStudentStats: (data) => {
    let students = {
      campus: [{
        lima: {
          generation: {
            fourth: {
              name: [],
              email: [],
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
                        duration: [],
                        type: [],
                      },
                      '01-desarrollo-profesional': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-por-que-aprender-a-programar': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-tu-primer-sitio': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '02-Variables-y-tipo-de-datos': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-Tipos-de-datos-y-operadores': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-variables': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-auto-aprendizaje-MDN': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-comments': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-ejercicios-guiados': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '05-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '06-ejercicios': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '03-UX': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-equipos-de-desarrollo': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-ux-diseno': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-ux-vs-ui': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                }],
              }
            },
            fifth: {
              name: [],
              email: [],
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
                        duration: [],
                        type: [],
                      },
                      '01-desarrollo-profesional': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-por-que-aprender-a-programar': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-tu-primer-sitio': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '02-Variables-y-tipo-de-datos': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-Tipos-de-datos-y-operadores': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-variables': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-auto-aprendizaje-MDN': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-comments': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-ejercicios-guiados': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '05-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '06-ejercicios': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '03-UX': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-equipos-de-desarrollo': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-ux-diseno': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-ux-vs-ui': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                }],
              }
            },
            third: {
              name: [],
              email: [],
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
                        duration: [],
                        type: [],
                      },
                      '01-desarrollo-profesional': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-por-que-aprender-a-programar': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-tu-primer-sitio': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '02-Variables-y-tipo-de-datos': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-Tipos-de-datos-y-operadores': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-variables': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-auto-aprendizaje-MDN': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-comments': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-ejercicios-guiados': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '05-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '06-ejercicios': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '03-UX': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-equipos-de-desarrollo': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-ux-diseno': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-ux-vs-ui': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                }],
              }
            },
          }
        },
        mexico: {
          generation: {
            fourth: {
              name: [],
              email: [],
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
                        duration: [],
                        type: [],
                      },
                      '01-desarrollo-profesional': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-por-que-aprender-a-programar': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-tu-primer-sitio': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '02-Variables-y-tipo-de-datos': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-Tipos-de-datos-y-operadores': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-variables': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-auto-aprendizaje-MDN': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-comments': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-ejercicios-guiados': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '05-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '06-ejercicios': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '03-UX': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-equipos-de-desarrollo': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-ux-diseno': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-ux-vs-ui': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                }],
              }
            },
            fifth: {
              name: [],
              email: [],
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
                        duration: [],
                        type: [],
                      },
                      '01-desarrollo-profesional': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-por-que-aprender-a-programar': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-tu-primer-sitio': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '02-Variables-y-tipo-de-datos': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-Tipos-de-datos-y-operadores': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-variables': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-auto-aprendizaje-MDN': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-comments': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-ejercicios-guiados': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '05-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '06-ejercicios': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '03-UX': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-equipos-de-desarrollo': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-ux-diseno': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-ux-vs-ui': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                }],
              }
            },
            third: {
              name: [],
              email: [],
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
                        duration: [],
                        type: [],
                      },
                      '01-desarrollo-profesional': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-por-que-aprender-a-programar': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-tu-primer-sitio': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '02-Variables-y-tipo-de-datos': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-Tipos-de-datos-y-operadores': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-variables': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-auto-aprendizaje-MDN': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-comments': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-ejercicios-guiados': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '05-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '06-ejercicios': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '03-UX': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-equipos-de-desarrollo': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-ux-diseno': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-ux-vs-ui': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                }],
              }
            },
          }
        },
        santiago: {
          generation: {
            fourth: {
              name: [],
              email: [],
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
                        duration: [],
                        type: [],
                      },
                      '01-desarrollo-profesional': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-por-que-aprender-a-programar': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-tu-primer-sitio': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '02-Variables-y-tipo-de-datos': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-Tipos-de-datos-y-operadores': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-variables': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-auto-aprendizaje-MDN': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-comments': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-ejercicios-guiados': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '05-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '06-ejercicios': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '03-UX': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-equipos-de-desarrollo': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-ux-diseno': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-ux-vs-ui': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                }],
              }
            },
            fifth: {
              name: [],
              email: [],
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
                        duration: [],
                        type: [],
                      },
                      '01-desarrollo-profesional': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-por-que-aprender-a-programar': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-tu-primer-sitio': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '02-Variables-y-tipo-de-datos': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-Tipos-de-datos-y-operadores': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-variables': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-auto-aprendizaje-MDN': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-comments': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-ejercicios-guiados': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '05-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '06-ejercicios': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '03-UX': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-equipos-de-desarrollo': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-ux-diseno': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-ux-vs-ui': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                }],
              }
            },
            third: {
              name: [],
              email: [],
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
                        duration: [],
                        type: [],
                      },
                      '01-desarrollo-profesional': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-por-que-aprender-a-programar': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-tu-primer-sitio': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '02-Variables-y-tipo-de-datos': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-Tipos-de-datos-y-operadores': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-variables': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-auto-aprendizaje-MDN': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-comments': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '04-ejercicios-guiados': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '05-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '06-ejercicios': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                  '03-UX': {
                    completedPercentage: [],
                    percentageDuration: [],
                    subtopics: {
                      '00-equipos-de-desarrollo': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '01-ux-diseno': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '02-ux-vs-ui': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      },
                      '03-quiz': {
                        completedPercentage: [],
                        duration: [],
                        type: [],
                      }
                    },
                  },
                }],
              }
            },
          }
        }
      }]
    };
    let dataValues = (Object.values(data));
    let dataLima = dataValues[0].generacion;
    let dataMex = dataValues[1].generacion;
    let dataStgo = dataValues[2].generacion;
    let dataStudentsFourthLima = dataLima.cuarta.estudiantes;
    let dataStudentsFifthLima = dataLima.quinta.estudiantes;
    let dataStudentsThirdLima = dataLima.tercera.estudiantes;
    for (let i = 0; i < dataStudentsFourthLima.length; i++) {
      // console.log(dataStudentsFourthLima[i].nombre);
      students.campus[0].lima.generation.fourth.name.push(dataStudentsFourthLima[i].nombre);
      // console.log(students.campus[0].lima.generation.fourth.name);
      students.campus[0].lima.generation.fourth.email.push(dataStudentsFourthLima[i].correo);
      // console.log(students.campus[0].lima.generation.fourth.email);
      students.campus[0].lima.generation.fourth.stats.completedPercentage.push(dataStudentsFourthLima[i].progreso.porcentajeCompletado);
      if (dataStudentsFourthLima[i].progreso.porcentajeCompletado <= 60) {
        students.campus[0].lima.generation.fourth.stats.status.push('Por debajo del 60%');
      } else if (dataStudentsFourthLima[i].progreso.porcentajeCompletado >= 90) {
        students.campus[0].lima.generation.fourth.stats.status.push('Por encima del 90%');
      } else if (dataStudentsFourthLima[i].progreso.porcentajeCompletado > 60 && dataStudentsFourthLima[i].progreso.porcentajeCompletado < 90) {
        students.campus[0].lima.generation.fourth.stats.status.push('Entre el 60% y el 90%');
      }
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].porcentajeCompletado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].porcentajeCompletado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['03-UX'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['03-UX'].porcentajeCompletado);
      // 01-Introduccion-a-la-programacion percentageDuration
      let topicDurationLimaFourth01 = dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].duracionTema;
      let topicCompletedDurationLimaFourth01 = dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].duracionTemaCompletado;
      let durationPercentageLimaFourth01 = (parseInt(topicCompletedDurationLimaFourth01) * 100) / parseInt(topicDurationLimaFourth01);
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].percentageDuration.push(Math.round(durationPercentageLimaFourth01));
      // 02-Variables-y-tipo-de-datos percentageDuration
      let topicDurationLimaFourth02 = dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].duracionTema;
      let topicCompletedDurationLimaFourth02 = dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].duracionTemaCompletado;
      let durationPercentageLimaFourth02 = (parseInt(topicCompletedDurationLimaFourth02) * 100) / parseInt(topicDurationLimaFourth02);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].percentageDuration.push(Math.round(durationPercentageLimaFourth02));
      // 03-UX percentageDuration
      let topicDurationLimaFourth03 = dataStudentsFourthLima[i].progreso.temas['03-UX'].duracionTema;
      let topicCompletedDurationLimaFourth03 = dataStudentsFourthLima[i].progreso.temas['03-UX'].duracionTemaCompletado;
      let durationPercentageLimaFourth03 = (parseInt(topicCompletedDurationLimaFourth03) * 100) / parseInt(topicDurationLimaFourth03);
      students.campus[0].lima.generation.fourth.stats.topics[0]['03-UX'].percentageDuration.push(Math.round(durationPercentageLimaFourth03));
      // Subtopics Introduccion a la Programación
      // Subtopic 00-Bienvenida-orientacion
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].duration.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].type.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo);
      // Subtopic 01-desarrollo-profesional
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].duration.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].type.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo);
      // Subtopic 02-por-que-aprender-a-programar
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].duration.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].type.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo);
      // Subtopic 03-tu-primer-sitio
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].duration.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].type.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo);
      // Subtopic 04-quiz
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].duration.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].type.push(dataStudentsFourthLima[i].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo);
      // Subtopics Variables y tipos de Datos
      // Subtopic 00-Tipos-de-datos-y-operadores
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].duration.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].type.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo);
      // Subtopic 01-desarrollo-profesional
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].duration.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].type.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo);
      // Subtopic 02-por-que-aprender-a-programar
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].duration.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].type.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo);
      // Subtopic 03-tu-primer-sitio
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].duration.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].type.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo);
      // Subtopic 04-ejercicios-guiados
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].duration.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].type.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo);
      // Subtopic 05-quiz
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].duration.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].type.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo);
      // Subtopic 06-ejercios
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].duration.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].type.push(dataStudentsFourthLima[i].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo);
      // Subtopics UX
      students.campus[0].lima.generation.fourth.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].duration.push(dataStudentsFourthLima[i].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].type.push(dataStudentsFourthLima[i].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo);
      // Subtopic 01-ux-diseno
      students.campus[0].lima.generation.fourth.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['03-UX'].subtemas['01-ux-diseno'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].duration.push(dataStudentsFourthLima[i].progreso.temas['03-UX'].subtemas['01-ux-diseno'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].type.push(dataStudentsFourthLima[i].progreso.temas['03-UX'].subtemas['01-ux-diseno'].tipo);
      // Subtopic 02-ux-vs-ui
      students.campus[0].lima.generation.fourth.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].duration.push(dataStudentsFourthLima[i].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].type.push(dataStudentsFourthLima[i].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].tipo);
      // Subtopic 03-quiz
      students.campus[0].lima.generation.fourth.stats.topics[0]['03-UX'].subtopics['03-quiz'].completedPercentage.push(dataStudentsFourthLima[i].progreso.temas['03-UX'].subtemas['03-quiz'].completado);
      students.campus[0].lima.generation.fourth.stats.topics[0]['03-UX'].subtopics['03-quiz'].duration.push(dataStudentsFourthLima[i].progreso.temas['03-UX'].subtemas['03-quiz'].duracionSubtema);
      students.campus[0].lima.generation.fourth.stats.topics[0]['03-UX'].subtopics['03-quiz'].type.push(dataStudentsFourthLima[i].progreso.temas['03-UX'].subtemas['03-quiz'].tipo);
    }
    for (let j = 0; j < dataStudentsFifthLima.length; j++) {
      students.campus[0].lima.generation.fifth.name.push(dataStudentsFifthLima[j].nombre);
      students.campus[0].lima.generation.fifth.email.push(dataStudentsFifthLima[j].correo);
      students.campus[0].lima.generation.fifth.stats.completedPercentage.push(dataStudentsFifthLima[j].progreso.porcentajeCompletado);
      if (dataStudentsFifthLima[j].progreso.porcentajeCompletado <= 60) {
        students.campus[0].lima.generation.fifth.stats.status.push('Por debajo del 60%');
      } else if (dataStudentsFifthLima[j].progreso.porcentajeCompletado >= 90) {
        students.campus[0].lima.generation.fifth.stats.status.push('Por encima del 90%');
      } else if (dataStudentsFifthLima[j].progreso.porcentajeCompletado > 60 && dataStudentsFifthLima[j].progreso.porcentajeCompletado < 90) {
        students.campus[0].lima.generation.fifth.stats.status.push('Entre el 60% y el 90%');
      }
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].porcentajeCompletado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].porcentajeCompletado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['03-UX'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['03-UX'].porcentajeCompletado);
      // 01-Introduccion-a-la-programacion percentageDuration
      let topicDurationLimaFifth01 = dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].duracionTema;
      let topicCompletedDurationLimaFifth01 = dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].duracionTemaCompletado;
      let durationPercentageLimaFifth01 = (parseInt(topicCompletedDurationLimaFifth01) * 100) / parseInt(topicDurationLimaFifth01);
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].percentageDuration.push(Math.round(durationPercentageLimaFifth01));
      // 02-Variables-y-tipo-de-datos percentageDuration
      let topicDurationLimaFifth02 = dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].duracionTema;
      let topicCompletedDurationLimaFifth02 = dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].duracionTemaCompletado;
      let durationPercentageLimaFifth02 = (parseInt(topicCompletedDurationLimaFifth02) * 100) / parseInt(topicDurationLimaFifth02);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].percentageDuration.push(Math.round(durationPercentageLimaFifth02));
      // 03-UX percentageDuration
      let topicDurationLimaFifth03 = dataStudentsFifthLima[j].progreso.temas['03-UX'].duracionTema;
      let topicCompletedDurationLimaFifth03 = dataStudentsFifthLima[j].progreso.temas['03-UX'].duracionTemaCompletado;
      let durationPercentageLimaFifth03 = (parseInt(topicCompletedDurationLimaFifth03) * 100) / parseInt(topicDurationLimaFifth03);
      students.campus[0].lima.generation.fifth.stats.topics[0]['03-UX'].percentageDuration.push(Math.round(durationPercentageLimaFifth03));
      // Subtopics Introduccion a la Programación
      // Subtopic 00-Bienvenida-orientacion
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].duration.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].type.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo);
      // Subtopic 01-desarrollo-profesional
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].duration.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].type.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo);
      // Subtopic 02-por-que-aprender-a-programar
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].duration.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].type.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo);
      // Subtopic 03-tu-primer-sitio
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].duration.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].type.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo);
      // Subtopic 04-quiz
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].duration.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].type.push(dataStudentsFifthLima[j].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo);
      // Subtopics Variables y tipos de Datos
      // Subtopic 00-Tipos-de-datos-y-operadores
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].duration.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].type.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo);
      // Subtopic 01-desarrollo-profesional
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].duration.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].type.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo);
      // Subtopic 02-por-que-aprender-a-programar
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].duration.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].type.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo);
      // Subtopic 03-tu-primer-sitio
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].duration.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].type.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo);
      // Subtopic 04-ejercicios-guiados
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].duration.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].type.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo);
      // Subtopic 05-quiz
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].duration.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].type.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo);
      // Subtopic 06-ejercios
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].duration.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].type.push(dataStudentsFifthLima[j].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo);
      // Subtopics UX
      students.campus[0].lima.generation.fifth.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].duration.push(dataStudentsFifthLima[j].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].type.push(dataStudentsFifthLima[j].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo);
      // Subtopic 01-ux-diseno
      students.campus[0].lima.generation.fifth.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['03-UX'].subtemas['01-ux-diseno'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].duration.push(dataStudentsFifthLima[j].progreso.temas['03-UX'].subtemas['01-ux-diseno'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].type.push(dataStudentsFifthLima[j].progreso.temas['03-UX'].subtemas['01-ux-diseno'].tipo);
      // Subtopic 02-ux-vs-ui
      students.campus[0].lima.generation.fifth.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].duration.push(dataStudentsFifthLima[j].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].type.push(dataStudentsFifthLima[j].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].tipo);
      // Subtopic 03-quiz
      students.campus[0].lima.generation.fifth.stats.topics[0]['03-UX'].subtopics['03-quiz'].completedPercentage.push(dataStudentsFifthLima[j].progreso.temas['03-UX'].subtemas['03-quiz'].completado);
      students.campus[0].lima.generation.fifth.stats.topics[0]['03-UX'].subtopics['03-quiz'].duration.push(dataStudentsFifthLima[j].progreso.temas['03-UX'].subtemas['03-quiz'].duracionSubtema);
      students.campus[0].lima.generation.fifth.stats.topics[0]['03-UX'].subtopics['03-quiz'].type.push(dataStudentsFifthLima[j].progreso.temas['03-UX'].subtemas['03-quiz'].tipo);
    }
    for (let k = 0; k < dataStudentsThirdLima.length; MediaKeyStatusMap++) {
      students.campus[0].lima.generation.third.name.push(dataStudentsThirdLima[k].nombre);
      students.campus[0].lima.generation.third.email.push(dataStudentsThirdLima[k].correo);
      students.campus[0].lima.generation.third.stats.completedPercentage.push(dataStudentsThirdLima[k].progreso.porcentajeCompletado);
      if (dataStudentsThirdLima[k].progreso.porcentajeCompletado <= 60) {
        students.campus[0].lima.generation.third.stats.status.push('Por debajo del 60%');
      } else if (dataStudentsThirdLima[k].progreso.porcentajeCompletado >= 90) {
        students.campus[0].lima.generation.third.stats.status.push('Por encima del 90%');
      } else if (dataStudentsThirdLima[k].progreso.porcentajeCompletado > 60 && dataStudentsThirdLima[k].progreso.porcentajeCompletado < 90) {
        students.campus[0].lima.generation.third.stats.status.push('Entre el 60% y el 90%');
      }
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].porcentajeCompletado);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].porcentajeCompletado);
      students.campus[0].lima.generation.third.stats.topics[0]['03-UX'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['03-UX'].porcentajeCompletado);
      // 01-Introduccion-a-la-programacion percentageDuration
      let topicDurationLimaThird01 = dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].duracionTema;
      let topicCompletedDurationLimaThird01 = dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].duracionTemaCompletado;
      let durationPercentageLimaThird01 = (parseInt(topicCompletedDurationLimaThird01) * 100) / parseInt(topicDurationLimaThird01);
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].percentageDuration.push(Math.round(durationPercentageLimaThird01));
      // 02-Variables-y-tipo-de-datos percentageDuration
      let topicDurationLimaThird02 = dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].duracionTema;
      let topicCompletedDurationLimaThird02 = dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].duracionTemaCompletado;
      let durationPercentageLimaThird02 = (parseInt(topicCompletedDurationLimaThird02) * 100) / parseInt(topicDurationLimaThird02);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].percentageDuration.push(Math.round(durationPercentageLimaThird02));
      // 03-UX percentageDuration
      let topicDurationLimaThird03 = dataStudentsThirdLima[k].progreso.temas['03-UX'].duracionTema;
      let topicCompletedDurationLimaThird03 = dataStudentsThirdLima[k].progreso.temas['03-UX'].duracionTemaCompletado;
      let durationPercentageLimaThird03 = (parseInt(topicCompletedDurationLimaThird03) * 100) / parseInt(topicDurationLimaThird03);
      students.campus[0].lima.generation.third.stats.topics[0]['03-UX'].percentageDuration.push(Math.round(durationPercentageLimaThird03));
      // Subtopics Introduccion a la Programación
      // Subtopic 00-Bienvenida-orientacion
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].duration.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].type.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo);
      // Subtopic 01-desarrollo-profesional
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].duration.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].type.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo);
      // Subtopic 02-por-que-aprender-a-programar
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].duration.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].type.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo);
      // Subtopic 03-tu-primer-sitio
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].duration.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].type.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo);
      // Subtopic 04-quiz
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].duration.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].type.push(dataStudentsThirdLima[k].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo);
      // Subtopics Variables y tipos de Datos
      // Subtopic 00-Tipos-de-datos-y-operadores
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].duration.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].type.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo);
      // Subtopic 01-desarrollo-profesional
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].duration.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].type.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo);
      // Subtopic 02-por-que-aprender-a-programar
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].duration.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].type.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo);
      // Subtopic 03-tu-primer-sitio
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].duration.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].type.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo);
      // Subtopic 04-ejercicios-guiados
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].duration.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].type.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo);
      // Subtopic 05-quiz
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].duration.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].type.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo);
      // Subtopic 06-ejercios
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].duration.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].type.push(dataStudentsThirdLima[k].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo);
      // Subtopics UX
      students.campus[0].lima.generation.third.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].duration.push(dataStudentsThirdLima[k].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].type.push(dataStudentsThirdLima[k].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo);
      // Subtopic 01-ux-diseno
      students.campus[0].lima.generation.third.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['03-UX'].subtemas['01-ux-diseno'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].duration.push(dataStudentsThirdLima[k].progreso.temas['03-UX'].subtemas['01-ux-diseno'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].type.push(dataStudentsThirdLima[k].progreso.temas['03-UX'].subtemas['01-ux-diseno'].tipo);
      // Subtopic 02-ux-vs-ui
      students.campus[0].lima.generation.third.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].duration.push(dataStudentsThirdLima[k].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].type.push(dataStudentsThirdLima[k].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].tipo);
      // Subtopic 03-quiz
      students.campus[0].lima.generation.third.stats.topics[0]['03-UX'].subtopics['03-quiz'].completedPercentage.push(dataStudentsThirdLima[k].progreso.temas['03-UX'].subtemas['03-quiz'].completado);
      students.campus[0].lima.generation.third.stats.topics[0]['03-UX'].subtopics['03-quiz'].duration.push(dataStudentsThirdLima[k].progreso.temas['03-UX'].subtemas['03-quiz'].duracionSubtema);
      students.campus[0].lima.generation.third.stats.topics[0]['03-UX'].subtopics['03-quiz'].type.push(dataStudentsThirdLima[k].progreso.temas['03-UX'].subtemas['03-quiz'].tipo);
    }

    let dataStudentsFourthMex = dataMex.cuarta.estudiantes;
    let dataStudentsFifthMex = dataMex.quinta.estudiantes;
    let dataStudentsThirdMex = dataMex.tercera.estudiantes;
    const studentsStatsMex = () => {
      for (let l = 0; l < dataStudentsFourthMex.length; l++) {
        students.campus[0].mexico.generation.fourth.name.push(dataStudentsFourthMex[l].nombre);
        students.campus[0].mexico.generation.fourth.email.push(dataStudentsFourthMex[l].correo);
        students.campus[0].mexico.generation.fourth.stats.completedPercentage.push(dataStudentsFourthMex[l].progreso.porcentajeCompletado);
        if (dataStudentsFourthMex[l].progreso.porcentajeCompletado <= 60) {
          students.campus[0].mexico.generation.fourth.stats.status.push('Por debajo del 60%');
        } else if (dataStudentsFourthMex[l].progreso.porcentajeCompletado >= 90) {
          students.campus[0].mexico.generation.fourth.stats.status.push('Por encima del 90%');
        } else if (dataStudentsFourthMex[l].progreso.porcentajeCompletado > 60 && dataStudentsFourthMex[l].progreso.porcentajeCompletado < 90) {
          students.campus[0].mexico.generation.fourth.stats.status.push('Entre el 60% y el 90%');
        }
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].porcentajeCompletado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].porcentajeCompletado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['03-UX'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['03-UX'].porcentajeCompletado);
        // 01-Introduccion-a-la-programacion percentageDuration
        let topicDurationFourthMex01 = dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].duracionTema;
        let topicCompletedDurationFourthMex01 = dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].duracionTemaCompletado;
        let durationPercentageFourthMex01 = (parseInt(topicCompletedDurationFourthMex01) * 100) / parseInt(topicDurationFourthMex01);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].percentageDuration.push(Math.round(durationPercentageFourthMex01));
        // 02-Variables-y-tipo-de-datos percentageDuration
        let topicDurationFourthMex02 = dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].duracionTema;
        let topicCompletedDurationFourthMex02 = dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].duracionTemaCompletado;
        let durationPercentageFourthMex02 = (parseInt(topicCompletedDurationFourthMex02) * 100) / parseInt(topicDurationFourthMex02);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].percentageDuration.push(Math.round(durationPercentageFourthMex02));
        // 03-UX percentageDuration
        let topicDurationFourthMex03 = dataStudentsFourthMex[l].progreso.temas['03-UX'].duracionTema;
        let topicCompletedDurationFourthMex03 = dataStudentsFourthMex[l].progreso.temas['03-UX'].duracionTemaCompletado;
        let durationPercentageFourthMex03 = (parseInt(topicCompletedDurationFourthMex03) * 100) / parseInt(topicFourthDurationMex03);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['03-UX'].percentageDuration.push(Math.round(durationPercentageFourthMex03));
        // Subtopics Introduccion a la Programación
        // Subtopic 00-Bienvenida-orientacion
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].duration.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].type.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo);
        // Subtopic 01-desarrollo-profesional
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].duration.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].type.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo);
        // Subtopic 02-por-que-aprender-a-programar
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].duration.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].type.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo);
        // Subtopic 03-tu-primer-sitio
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].duration.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].type.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo);
        // Subtopic 04-quiz
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].duration.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].type.push(dataStudentsFourthMex[l].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo);
        // Subtopics Variables y tipos de Datos
        // Subtopic 00-Tipos-de-datos-y-operadores
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].duration.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].type.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo);
        // Subtopic 01-desarrollo-profesional
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].duration.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].type.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo);
        // Subtopic 02-por-que-aprender-a-programar
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].duration.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].type.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo);
        // Subtopic 03-tu-primer-sitio
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].duration.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].type.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo);
        // Subtopic 04-ejercicios-guiados
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].duration.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].type.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo);
        // Subtopic 05-quiz
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].duration.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].type.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo);
        // Subtopic 06-ejercios
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].duration.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].type.push(dataStudentsFourthMex[l].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo);
        // Subtopics UX
        students.campus[0].mexico.generation.fourth.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].duration.push(dataStudentsFourthMex[l].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].type.push(dataStudentsFourthMex[l].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo);
        // Subtopic 01-ux-diseno
        students.campus[0].mexico.generation.fourth.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['03-UX'].subtemas['01-ux-diseno'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].duration.push(dataStudentsFourthMex[l].progreso.temas['03-UX'].subtemas['01-ux-diseno'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].type.push(dataStudentsFourthMex[l].progreso.temas['03-UX'].subtemas['01-ux-diseno'].tipo);
        // Subtopic 02-ux-vs-ui
        students.campus[0].mexico.generation.fourth.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].duration.push(dataStudentsFourthMex[l].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].type.push(dataStudentsFourthMex[l].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].tipo);
        // Subtopic 03-quiz
        students.campus[0].mexico.generation.fourth.stats.topics[0]['03-UX'].subtopics['03-quiz'].completedPercentage.push(dataStudentsFourthMex[l].progreso.temas['03-UX'].subtemas['03-quiz'].completado);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['03-UX'].subtopics['03-quiz'].duration.push(dataStudentsFourthMex[l].progreso.temas['03-UX'].subtemas['03-quiz'].duracionSubtema);
        students.campus[0].mexico.generation.fourth.stats.topics[0]['03-UX'].subtopics['03-quiz'].type.push(dataStudentsFourthMex[l].progreso.temas['03-UX'].subtemas['03-quiz'].tipo);
      }
      for (let m = 0; m < dataStudentsFifthMex.length; m++) {
        students.campus[0].mexico.generation.fifth.name.push(dataStudentsFifthMex[m].nombre);
        students.campus[0].mexico.generation.fifth.email.push(dataStudentsFifthMex[m].correo);
        students.campus[0].mexico.generation.fifth.stats.completedPercentage.push(dataStudentsFifthMex[m].progreso.porcentajeCompletado);
        if (dataStudentsFifthMex[m].progreso.porcentajeCompletado <= 60) {
          students.campus[0].mexico.generation.fifth.stats.status.push('Por debajo del 60%');
        } else if (dataStudentsFifthMex[m].progreso.porcentajeCompletado >= 90) {
          students.campus[0].mexico.generation.fifth.stats.status.push('Por encima del 90%');
        } else if (dataStudentsFifthMex[m].progreso.porcentajeCompletado > 60 && dataStudentsFifthMex[m].progreso.porcentajeCompletado < 90) {
          students.campus[0].mexico.generation.fifth.stats.status.push('Entre el 60% y el 90%');
        }
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].porcentajeCompletado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].porcentajeCompletado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['03-UX'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['03-UX'].porcentajeCompletado);
        // 01-Introduccion-a-la-programacion percentageDuration
        let topicDurationThirdMex01 = dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].duracionTema;
        let topicCompletedDurationFifthMex01 = dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].duracionTemaCompletado;
        let durationPercentageFifthMex01 = (parseInt(topicCompletedDurationFifthMex01) * 100) / parseInt(topicDurationFifthMex01);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].percentageDuration.push(Math.round(durationPercentageFifthMex01));
        // 02-Variables-y-tipo-de-datos percentageDuration
        let topicDurationFifthMex02 = dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].duracionTema;
        let topicCompletedDurationMex02 = dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].duracionTemaCompletado;
        let durationPercentageMex02 = (parseInt(topicCompletedDurationMex02) * 100) / parseInt(topicDurationFifthMex02);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].percentageDuration.push(Math.round(durationPercentageMex02));
        // 03-UX percentageDuration
        let topicDurationFifthMex03 = dataStudentsFifthMex[m].progreso.temas['03-UX'].duracionTema;
        let topicCompletedDurationMex03 = dataStudentsFifthMex[m].progreso.temas['03-UX'].duracionTemaCompletado;
        let durationPercentageMex03 = (parseInt(topicCompletedDurationMex03) * 100) / parseInt(topicDurationFifthMex03);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['03-UX'].percentageDuration.push(Math.round(durationPercentageMex03));
        // Subtopics Introduccion a la Programación
        // Subtopic 00-Bienvenida-orientacion
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].duration.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].type.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo);
        // Subtopic 01-desarrollo-profesional
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].duration.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].type.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo);
        // Subtopic 02-por-que-aprender-a-programar
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].duration.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].type.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo);
        // Subtopic 03-tu-primer-sitio
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].duration.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].type.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo);
        // Subtopic 04-quiz
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].duration.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].type.push(dataStudentsFifthMex[m].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo);
        // Subtopics Variables y tipos de Datos
        // Subtopic 00-Tipos-de-datos-y-operadores
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].duration.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].type.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo);
        // Subtopic 01-desarrollo-profesional
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].duration.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].type.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo);
        // Subtopic 02-por-que-aprender-a-programar
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].duration.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].type.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo);
        // Subtopic 03-tu-primer-sitio
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].duration.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].type.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo);
        // Subtopic 04-ejercicios-guiados
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].duration.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].type.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo);
        // Subtopic 05-quiz
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].duration.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].type.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo);
        // Subtopic 06-ejercios
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].duration.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].type.push(dataStudentsFifthMex[m].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo);
        // Subtopics UX
        students.campus[0].mexico.generation.fifth.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].duration.push(dataStudentsFifthMex[m].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].type.push(dataStudentsFifthMex[m].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo);
        // Subtopic 01-ux-diseno
        students.campus[0].mexico.generation.fifth.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['03-UX'].subtemas['01-ux-diseno'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].duration.push(dataStudentsFifthMex[m].progreso.temas['03-UX'].subtemas['01-ux-diseno'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].type.push(dataStudentsFifthMex[m].progreso.temas['03-UX'].subtemas['01-ux-diseno'].tipo);
        // Subtopic 02-ux-vs-ui
        students.campus[0].mexico.generation.fifth.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].duration.push(dataStudentsFifthMex[m].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].type.push(dataStudentsFifthMex[m].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].tipo);
        // Subtopic 03-quiz
        students.campus[0].mexico.generation.fifth.stats.topics[0]['03-UX'].subtopics['03-quiz'].completedPercentage.push(dataStudentsFifthMex[m].progreso.temas['03-UX'].subtemas['03-quiz'].completado);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['03-UX'].subtopics['03-quiz'].duration.push(dataStudentsFifthMex[m].progreso.temas['03-UX'].subtemas['03-quiz'].duracionSubtema);
        students.campus[0].mexico.generation.fifth.stats.topics[0]['03-UX'].subtopics['03-quiz'].type.push(dataStudentsFifthMex[m].progreso.temas['03-UX'].subtemas['03-quiz'].tipo);
      }
      for (let n = 0; n < dataStudentsThirdMex.length; n++) {
        students.campus[0].mexico.generation.third.name.push(dataStudentsThirdMex[n].nombre);
        students.campus[0].mexico.generation.third.email.push(dataStudentsThirdMex[n].correo);
        students.campus[0].mexico.generation.third.stats.completedPercentage.push(dataStudentsThirdMex[n].progreso.porcentajeCompletado);
        if (dataStudentsThirdMex[n].progreso.porcentajeCompletado <= 60) {
          students.campus[0].mexico.generation.third.stats.status.push('Por debajo del 60%');
        } else if (dataStudentsThirdMex[n].progreso.porcentajeCompletado >= 90) {
          students.campus[0].mexico.generation.third.stats.status.push('Por encima del 90%');
        } else if (dataStudentsThirdMex[n].progreso.porcentajeCompletado > 60 && dataStudentsThirdMex[n].progreso.porcentajeCompletado < 90) {
          students.campus[0].mexico.generation.third.stats.status.push('Entre el 60% y el 90%');
        }
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].porcentajeCompletado);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].porcentajeCompletado);
        students.campus[0].mexico.generation.third.stats.topics[0]['03-UX'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['03-UX'].porcentajeCompletado);
        // 01-Introduccion-a-la-programacion percentageDuration
        let topicDurationThirdMex01 = dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].duracionTema;
        let topicCompletedDurationThirdMex01 = dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].duracionTemaCompletado;
        let durationPercentageThirdMex01 = (parseInt(topicCompletedDurationThirdMex01) * 100) / parseInt(topicDurationThirdMex01);
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].percentageDuration.push(Math.round(durationPercentageThirdMex01));
        // 02-Variables-y-tipo-de-datos percentageDuration
        let topicDurationThirdMex02 = dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].duracionTema;
        let topicCompletedDurationThirdMex02 = dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].duracionTemaCompletado;
        let durationPercentageThirdMex02 = (parseInt(topicCompletedDurationThirdMex02) * 100) / parseInt(topicDurationThirdMex02);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].percentageDuration.push(Math.round(durationPercentageThirdMex02));
        // 03-UX percentageDuration
        let topicDurationThirdMex03 = dataStudentsThirdMex[n].progreso.temas['03-UX'].duracionTema;
        let topicCompletedDurationThirdMex03 = dataStudentsThirdMex[n].progreso.temas['03-UX'].duracionTemaCompletado;
        let durationPercentageThirdMex03 = (parseInt(topicCompletedDurationThirdMex03) * 100) / parseInt(topicDurationThirdMex03);
        students.campus[0].mexico.generation.third.stats.topics[0]['03-UX'].percentageDuration.push(Math.round(durationPercentageThirdMex03));
        // Subtopics Introduccion a la Programación
        // Subtopic 00-Bienvenida-orientacion
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].duration.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['00-bienvenida-orientacion'].type.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['00-bienvenida-orientacion'].tipo);
        // Subtopic 01-desarrollo-profesional
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].duration.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['01-desarrollo-profesional'].type.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['01-desarrollo-profesional'].tipo);
        // Subtopic 02-por-que-aprender-a-programar
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].duration.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['02-por-que-aprender-a-programar'].type.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['02-por-que-aprender-a-programar'].tipo);
        // Subtopic 03-tu-primer-sitio
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].duration.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['03-tu-primer-sitio'].type.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['03-tu-primer-sitio'].tipo);
        // Subtopic 04-quiz
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].duration.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['01-Introduccion-a-programacion'].subtopics['04-quiz'].type.push(dataStudentsThirdMex[n].progreso.temas['01-Introduccion-a-programacion'].subtemas['04-quiz'].tipo);
        // Subtopics Variables y tipos de Datos
        // Subtopic 00-Tipos-de-datos-y-operadores
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].duration.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['00-Tipos-de-datos-y-operadores'].type.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['00-Tipos-de-datos-y-operadores'].tipo);
        // Subtopic 01-desarrollo-profesional
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].duration.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['01-variables'].type.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['01-variables'].tipo);
        // Subtopic 02-por-que-aprender-a-programar
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].duration.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['02-auto-aprendizaje-MDN'].type.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['02-auto-aprendizaje-MDN'].tipo);
        // Subtopic 03-tu-primer-sitio
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].duration.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['03-comments'].type.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['03-comments'].tipo);
        // Subtopic 04-ejercicios-guiados
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].duration.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['04-ejercicios-guiados'].type.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['04-ejercicios-guiados'].tipo);
        // Subtopic 05-quiz
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].duration.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['05-quiz'].type.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['05-quiz'].tipo);
        // Subtopic 06-ejercios
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].duration.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['02-Variables-y-tipo-de-datos'].subtopics['06-ejercicios'].type.push(dataStudentsThirdMex[n].progreso.temas['02-Variables-y-tipo-de-datos'].subtemas['06-ejercicios'].tipo);
        // Subtopics UX
        students.campus[0].mexico.generation.third.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].duration.push(dataStudentsThirdMex[n].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['03-UX'].subtopics['00-equipos-de-desarrollo'].type.push(dataStudentsThirdMex[n].progreso.temas['03-UX'].subtemas['00-equipos-de-desarrollo'].tipo);
        // Subtopic 01-ux-diseno
        students.campus[0].mexico.generation.third.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['03-UX'].subtemas['01-ux-diseno'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].duration.push(dataStudentsThirdMex[n].progreso.temas['03-UX'].subtemas['01-ux-diseno'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['03-UX'].subtopics['01-ux-diseno'].type.push(dataStudentsThirdMex[n].progreso.temas['03-UX'].subtemas['01-ux-diseno'].tipo);
        // Subtopic 02-ux-vs-ui
        students.campus[0].mexico.generation.third.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].duration.push(dataStudentsThirdMex[n].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['03-UX'].subtopics['02-ux-vs-ui'].type.push(dataStudentsThirdMex[n].progreso.temas['03-UX'].subtemas['02-ux-vs-ui'].tipo);
        // Subtopic 03-quiz
        students.campus[0].mexico.generation.third.stats.topics[0]['03-UX'].subtopics['03-quiz'].completedPercentage.push(dataStudentsThirdMex[n].progreso.temas['03-UX'].subtemas['03-quiz'].completado);
        students.campus[0].mexico.generation.third.stats.topics[0]['03-UX'].subtopics['03-quiz'].duration.push(dataStudentsThirdMex[n].progreso.temas['03-UX'].subtemas['03-quiz'].duracionSubtema);
        students.campus[0].mexico.generation.third.stats.topics[0]['03-UX'].subtopics['03-quiz'].type.push(dataStudentsThirdMex[n].progreso.temas['03-UX'].subtemas['03-quiz'].tipo);
      }
    };
    let dataStudentsFourthStgo = dataStgo.cuarta.estudiantes;
    let dataStudentsFifthStgo = dataStgo.quinta.estudiantes;
    let dataStudentsThirdStgo = dataStgo.tercera.estudiantes;
    const studentsStatsStgo = () => {
      for (let i = 0; i < dataStudentsFourthStgo.length; i++) {
        students.name += dataStudentsFourthStgo[i].nombre;
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
    };
  }
};