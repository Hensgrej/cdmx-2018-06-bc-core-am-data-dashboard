const btnLima = document.getElementById('btnLima');
const btnMex = document.getElementById('btnMexico');
const btnStgo = document.getElementById('btnStgo');
const btnLogin = document.getElementById('btnLogin');
const btnCampuses = document.getElementById('btnCampuses');
const btnsCampus = document.getElementById('btnsCampus');
const laboratoria = 'https://api.myjson.com/bins/13lpdy';
const btnTest = document.getElementById('btnTest');

const dataLaboratoria = (laboratoria) => {
  fetch(laboratoria).then((data) => {
    return data.json();
  })
    .then((data) => {
      computeStudentStats(data);
    }).catch((err) => {
      console.log('Error en laboratoriaData');
    });
};
dataLaboratoria(laboratoria);
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
    return students;
  }
};
console.log(dashboardCompute.students);
btnsCampus.style.display = 'none';
btnCampuses.style.display = 'block';
btnTest.addEventListener('click', () => {
  dashboardCompute.computeStudentStats();
  dashboardData.objectValuesData();
});
/*  btnLogin.addEventListener('click', () => {
    btnLogin.style.display = 'none';
    btnCampuses.style.display = 'block';
  });
  btnCampuses.addEventListener('click', () => {
    dashboardCompute.computeStudentStats(data);
    btnCampuses.style.display = 'none';
    btnsCampus.style.display = 'block';
  });
  btnLima.addEventListener('click', () => {
    dashboardCompute.studentsStatsLima(data);
  });
  btnMex.addEventListener('click', () => {
    dashboardCompute.studentsStatsMex(data);
  });
  btnStgo.addEventListener('click', () => {
    dashboardCompute.studentsStatsStgo(data);
  });*/

// dashboardData.dataLaboratoria();
