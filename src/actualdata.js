window.data = {
    computeStudentStats: (laboratoria) => {
        laboratoria = 'https://api.myjson.com/bins/13lpdy';
        // Calling API with JSON data
        fetch(laboratoria).then((response) => {
            return response.json();
        }).then((data) => {
            //Start of Lima Students
            let limaStudentsThirdGeneration = data.lima.generacion.tercera.estudiantes;
            let limaStudentsFourthGeneration = data.lima.generacion.cuarta.estudiantes;
            let limaStudentsFifthGeneration = data.lima.generacion.quinta.estudiantes;
            // End of Lima Students
            // Start of Mexico Students
            let mexicoStudentsThirdGeneration = data.mexico.generacion.tercera.estudiantes;
            let mexicoStudentsFourthGeneration = data.mexico.generacion.cuarta.estudiantes;
            let mexicoStudentsFifthGeneration = data.mexico.generacion.quinta.estudiantes;
            //End of Mexico Students
            //Start of Chile Students
            let chileStudentsThirdGeneration = data.santiago.generacion.tercera.estudiantes;
            let chileStudentsFourthGeneration = data.santiago.generacion.cuarta.estudiantes;
            let chileStudentsFifthGeneration = data.santiago.generacion.quinta.estudiantes;
            // End of Chile Students
            // Start of Lima Student Stats
            let limaThirdStats = data.lima.generacion.tercera.estudiantes;
            for (let i = 0; i < limaThirdStats.length; i++) {
                limaThirdEachStudentName = data.lima.generacion.tercera.estudiantes[i].nombre;
                limaThirdEachStudentMail = data.lima.generacion.tercera.estudiantes[i].correo;
                limaThirdStudentProgress = data.lima.generacion.tercera.estudiantes[i].progreso;
                limaThirdProgramLength = data.lima.generacion.tercera.estudiantes[i].progreso.duracionPrograma;
                limaThirdProgramPercentage = data.lima.generacion.tercera.estudiantes[i].progreso.porcentajeCompletado;
            }   
            let limaFourthStats = data.lima.generacion.cuarta.estudiantes;
            for (let j = 0; j < limaFourthStats.length; j++) {
                limaFourthEachStudentName = data.lima.generacion.cuarta.estudiantes[j].nombre;
                limaFourthEachStudentMail = data.lima.generacion.cuarta.estudiantes[j].correo;
                limaFourthStudentProgress = data.lima.generacion.cuarta.estudiantes[j].progreso;
                limaFourthProgramLength = data.lima.generacion.cuarta.estudiantes[j].progreso.duracionPrograma;
                limaFourthProgramPercentage = data.lima.generacion.cuarta.estudiantes[j].progreso.porcentajeCompletado;
            }
            let limaFifthStats = data.lima.generacion.quinta.estudiantes;
            for(let k = 0; k < limaFifthStats.length; k++) {
                limaFifthEachStudentName = data.lima.generacion.quinta.estudiantes[k].nombre;
                limaFifthEachStudentMail = data.lima.generacion.quinta.estudiantes[k].correo;
                limaFifthEachStudentProgress = data.lima.generacion.quinta.estudiantes[k].progreso;
                limaFifthStudentLength = data.lima.generacion.quinta.estudiantes[k].progreso.duracionPrograma;
                limaFifthProgramPercentage = data.lima.generacion.quinta.estudiantes[k].progreso.porcentajeCompletado;
            }
            // Start of Mexico Student Stats
            let mexicoThirdStats = data.mexico.generacion.tercera.estudiantes;
            for (let i = 0; i < mexicoThirdStats.length; i++) {
                mexicoThirdEachStudentName = data.mexico.generacion.tercera.estudiantes[i].nombre;
                mexicoThirdEachStudentMail = data.mexico.generacion.tercera.estudiantes[i].correo;
                mexicoThirdStudentProgress = data.mexico.generacion.tercera.estudiantes[i].progreso;
                mexicoThirdProgramLength = data.mexico.generacion.tercera.estudiantes[i].progreso.duracionPrograma;
                mexicoThirdProgramPercentage = data.mexico.generacion.tercera.estudiantes[i].progreso.porcentajeCompletado;
            }
            let mexicoFourthStats = data.mexico.generacion.cuarta.estudiantes;
            for (let j = 0; j < mexicoFourthStats.length; j++) {
                mexicoFourthEachStudentName = data.mexico.generacion.cuarta.estudiantes[j].nombre;
                mexicoFourthEachStudentMail = data.mexico.generacion.cuarta.estudiantes[j].correo;
                mexicoFourthStudentProgress = data.mexico.generacion.cuarta.estudiantes[j].progreso;
                mexicoFourthProgramLength = data.mexico.generacion.cuarta.estudiantes[j].progreso.duracionPrograma;
                mexicoFourthProgramPercentage = data.mexico.generacion.cuarta.estudiantes[j].progreso.porcentajeCompletado;
            }
            let mexicoFifthStats = data.mexico.generacion.quinta.estudiantes;
            for(let k = 0; k < mexicoFifthStats.length; k++) {
                mexicoFifthEachStudentName = data.mexico.generacion.quinta.estudiantes[k].nombre;
                mexicoFifthEachStudentMail = data.mexico.generacion.quinta.estudiantes[k].correo;
                mexicoFifthEachStudentProgress = data.mexico.generacion.quinta.estudiantes[k].progreso;
                mexicoFifthStudentLength = data.mexico.generacion.quinta.estudiantes[k].progreso.duracionPrograma;
                mexicoFifthProgramPercentage = data.mexico.generacion.quinta.estudiantes[k].progreso.porcentajeCompletado;
            }
             // Start of Chile Student Stats
             let chileThirdStats = data.santiago.generacion.tercera.estudiantes;
             for (let i = 0; i < chileThirdStats.length; i++) {
                chileThirdEachStudentName = data.santiago.generacion.tercera.estudiantes[i].nombre;
                chileThirdEachStudentMail = data.santiago.generacion.tercera.estudiantes[i].correo;
                chileThirdStudentProgress = data.santiago.generacion.tercera.estudiantes[i].progreso;
                chileThirdProgramLength = data.santiago.generacion.tercera.estudiantes[i].progreso.duracionPrograma;
                chileThirdProgramPercentage = data.santiago.generacion.tercera.estudiantes[i].progreso.porcentajeCompletado;
             }
             let chileFourthStats = data.santiago.generacion.cuarta.estudiantes;
             for (let j = 0; j < chileFourthStats.length; j++) {
                chileFourthEachStudentName = data.santiago.generacion.cuarta.estudiantes[j].nombre;
                chileFourthEachStudentMail = data.santiago.generacion.cuarta.estudiantes[j].correo;
                chileFourthStudentProgress = data.santiago.generacion.cuarta.estudiantes[j].progreso;
                chileFourthProgramLength = data.santiago.generacion.cuarta.estudiantes[j].progreso.duracionPrograma;
                chileFourthProgramPercentage = data.santiago.generacion.cuarta.estudiantes[j].progreso.porcentajeCompletado;
             }
             let chileFifthStats = data.santiago.generacion.quinta.estudiantes;
             for(let k = 0; k < chileFifthStats.length; k++) {
                chileFifthEachStudentName = data.santiago.generacion.quinta.estudiantes[k].nombre;
                chileFifthEachStudentMail = data.santiago.generacion.quinta.estudiantes[k].correo;
                chileFifthEachStudentProgress = data.santiago.generacion.quinta.estudiantes[k].progreso;
                chileFifthStudentLength = data.santiago.generacion.quinta.estudiantes[k].progreso.duracionPrograma;
                chileFifthProgramPercentage = data.santiago.generacion.quinta.estudiantes[k].progreso.porcentajeCompletado;
             }
            testReturn += {
                'campus': ['Lima', 'México', 'Santiago'],
                'students': [
                    limaStudentsThirdGeneration,
                    limaStudentsFourthGeneration,
                    limaStudentsFifthGeneration,
                    mexicoStudentsThirdGeneration,
                    mexicoStudentsFourthGeneration,
                    mexicoStudentsFifthGeneration,
                    chileStudentsThirdGeneration,
                    chileStudentsFourthGeneration,
                    chileStudentsFifthGeneration,
                ]

            }
            //console.log(typeof(testReturn));
            return testReturn;

        })
    },
    printStudents: () => {
        console.log(testReturn);
        if (btnLima) {
            limaThirdLength.innerHTML = testReturn.students[0].length;
            limaFourthLength.innerHTML = testReturn.students[1].length;
            limaFifthLength.innerHTML = testReturn.students[2].length;
        } else if (btnMexico) {
            mexicoThirdLength.innerHTML = testReturn.students[3].length;
            mexicoFourthLength.innerHTML = testReturn.students[4].length;
            mexicoFifthLength.innerHTML = testReturn.students[5].length;
        } else if (btnChile) {
            chileThirdLength.innerHTML = testReturn.students[6].length;
            chileFourthLength.innerHTML = testReturn.students[7].length;
            chileFifthLength.innerHTML = testReturn.students[8].length;
        }
    },
    generationStats : () => {
        let 
    }
}