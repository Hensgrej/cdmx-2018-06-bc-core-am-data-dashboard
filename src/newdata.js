window.dashboard = {
    dataLaboratoria: (laboratoria) => {
        laboratoria = 'https://api.myjson.com/bins/13lpdy';
        fetch(laboratoria).then((data) => {
                return data.json();
            })
            .then((data) => {
             computeStudentStats(data);
             computeGenerationStats(data);
            }).catch((err) => {
                console.log('Error en laboratoriaData');
            })
        },
    computeStudentStats: () => {
        let students = {
            name: null,
            mail: null,
            campus: null,
            generation: null,
            stats: { 
                status: null,
                completedPercentage: null,
                topics : {
                    completedPercentage: null,
                    percentageDuration: null,
                    subtopics: {
                        completedPercentage: null,
                        type: null,
                        duration: null,
                    }
                }

            }
        }
        console.log(students.name);
        return students.name;
        },
    computeGenerationStats: () => {
        let generation = {
                campus: null,
                generation: null,
                average: null,
                count: null,
        }
            }
        }