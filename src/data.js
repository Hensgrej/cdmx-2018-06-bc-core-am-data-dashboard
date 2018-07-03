window.data = {
    computeStudentsStats: (laboratoria) => {
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
                let trName = document.createElement('TR');
                let txtName = document.createTextNode(limaThirdEachStudentName);
                trName.appendChild(txtName);
                document.getElementById('limaThirdName').appendChild(trName);
                let trProgram = document.createElement('TR');
                let txtProgram = document.createTextNode(limaThirdProgramPercentage);
                trProgram.appendChild(txtProgram);
                document.getElementById('limaThirdProgress').appendChild(trProgram);
                let trDuration = document.createElement('TR');
                let txtDuration = document.createTextNode(limaThirdProgramLength);
                trDuration.appendChild(txtDuration);
                document.getElementById('limaThirdDuration').appendChild(trDuration);
            }
            let limaFourthStats = data.lima.generacion.cuarta.estudiantes;
            for (let j = 0; j < limaFourthStats.length; j++) {
                limaFourthEachStudentName = data.lima.generacion.cuarta.estudiantes[j].nombre;
                limaFourthEachStudentMail = data.lima.generacion.cuarta.estudiantes[j].correo;
                limaFourthStudentProgress = data.lima.generacion.cuarta.estudiantes[j].progreso;
                limaFourthProgramLength = data.lima.generacion.cuarta.estudiantes[j].progreso.duracionPrograma;
                limaFourthProgramPercentage = data.lima.generacion.cuarta.estudiantes[j].progreso.porcentajeCompletado;
                let trName2 = document.createElement('TR');
                let txtName2 = document.createTextNode(limaFourthEachStudentName);
                trName2.appendChild(txtName2);
                document.getElementById('limaFourthName').appendChild(trName2);
                let trProgram2 = document.createElement('TR');
                let txtProgram2 = document.createTextNode(limaFourthProgramPercentage);
                trProgram2.appendChild(txtProgram2);
                document.getElementById('limaFourthProgress').appendChild(trProgram2);
                let trDuration2 = document.createElement('TR');
                let txtDuration2 = document.createTextNode(limaFourthProgramLength);
                trDuration2.appendChild(txtDuration2);
                document.getElementById('limaFourthDuration').appendChild(trDuration2);
            }
            let limaFifthStats = data.lima.generacion.quinta.estudiantes;
            for (let k = 0; k < limaFifthStats.length; k++) {
                limaFifthEachStudentName = data.lima.generacion.quinta.estudiantes[k].nombre;
                limaFifthEachStudentMail = data.lima.generacion.quinta.estudiantes[k].correo;
                limaFifthEachStudentProgress = data.lima.generacion.quinta.estudiantes[k].progreso;
                limaFifthStudentLength = data.lima.generacion.quinta.estudiantes[k].progreso.duracionPrograma;
                limaFifthProgramPercentage = data.lima.generacion.quinta.estudiantes[k].progreso.porcentajeCompletado;
                let trName3 = document.createElement('TR');
                let txtName3 = document.createTextNode(limaFifthEachStudentName);
                trName3.appendChild(txtName3);
                document.getElementById('limaFifthName').appendChild(trName3);
                let trProgram3 = document.createElement('TR');
                let txtProgram3 = document.createTextNode(limaFifthProgramPercentage);
                trProgram3.appendChild(txtProgram3);
                document.getElementById('limaFifthProgress').appendChild(trProgram3);
                let trDuration3 = document.createElement('TR');
                let txtDuration3 = document.createTextNode(limaFifthStudentLength);
                trDuration3.appendChild(txtDuration3);
                document.getElementById('limaFifthDuration').appendChild(trDuration3);
            }
            // Start of Mexico Student Stats
            let mexicoThirdStats = data.mexico.generacion.tercera.estudiantes;
            for (let i = 0; i < mexicoThirdStats.length; i++) {
                mexicoThirdEachStudentName = data.mexico.generacion.tercera.estudiantes[i].nombre;
                mexicoThirdEachStudentMail = data.mexico.generacion.tercera.estudiantes[i].correo;
                mexicoThirdStudentProgress = data.mexico.generacion.tercera.estudiantes[i].progreso;
                mexicoThirdProgramLength = data.mexico.generacion.tercera.estudiantes[i].progreso.duracionPrograma;
                mexicoThirdProgramPercentage = data.mexico.generacion.tercera.estudiantes[i].progreso.porcentajeCompletado;
                let trName4 = document.createElement('TR');
                let txtName4 = document.createTextNode(mexicoThirdEachStudentName);
                trName4.appendChild(txtName4);
                document.getElementById('mexicoThirdName').appendChild(trName4);
                let trProgram4 = document.createElement('TR');
                let txtProgram4 = document.createTextNode(mexicoThirdProgramPercentage);
                trProgram4.appendChild(txtProgram4);
                document.getElementById('mexicoThirdProgress').appendChild(trProgram4);
                let trDuration4 = document.createElement('TR');
                let txtDuration4 = document.createTextNode(mexicoThirdProgramLength);
                trDuration4.appendChild(txtDuration4);
                document.getElementById('mexicoThirdDuration').appendChild(trDuration4);
            }
            let mexicoFourthStats = data.mexico.generacion.cuarta.estudiantes;
            for (let j = 0; j < mexicoFourthStats.length; j++) {
                mexicoFourthEachStudentName = data.mexico.generacion.cuarta.estudiantes[j].nombre;
                mexicoFourthEachStudentMail = data.mexico.generacion.cuarta.estudiantes[j].correo;
                mexicoFourthStudentProgress = data.mexico.generacion.cuarta.estudiantes[j].progreso;
                mexicoFourthProgramLength = data.mexico.generacion.cuarta.estudiantes[j].progreso.duracionPrograma;
                mexicoFourthProgramPercentage = data.mexico.generacion.cuarta.estudiantes[j].progreso.porcentajeCompletado;
                let trName5 = document.createElement('TR');
                let txtName5 = document.createTextNode(mexicoFourthEachStudentName);
                trName5.appendChild(txtName5);
                document.getElementById('mexicoFourthName').appendChild(trName5);
                let trProgram5 = document.createElement('TR');
                let txtProgram5 = document.createTextNode(mexicoFourthProgramPercentage);
                trProgram5.appendChild(txtProgram5);
                document.getElementById('mexicoFourthProgress').appendChild(trProgram5);
                let trDuration5 = document.createElement('TR');
                let txtDuration5 = document.createTextNode(mexicoFourthProgramLength);
                trDuration5.appendChild(txtDuration5);
                document.getElementById('mexicoFourthDuration').appendChild(trDuration5);
            }
            let mexicoFifthStats = data.mexico.generacion.quinta.estudiantes;
            for (let k = 0; k < mexicoFifthStats.length; k++) {
                mexicoFifthEachStudentName = data.mexico.generacion.quinta.estudiantes[k].nombre;
                mexicoFifthEachStudentMail = data.mexico.generacion.quinta.estudiantes[k].correo;
                mexicoFifthEachStudentProgress = data.mexico.generacion.quinta.estudiantes[k].progreso;
                mexicoFifthStudentLength = data.mexico.generacion.quinta.estudiantes[k].progreso.duracionPrograma;
                mexicoFifthProgramPercentage = data.mexico.generacion.quinta.estudiantes[k].progreso.porcentajeCompletado;
                let trName6 = document.createElement('TR');
                let txtName6 = document.createTextNode(mexicoFifthEachStudentName);
                trName6.appendChild(txtName6);
                document.getElementById('mexicoFifthName').appendChild(trName6);
                let trProgram6 = document.createElement('TR');
                let txtProgram6 = document.createTextNode(mexicoFifthProgramPercentage);
                trProgram6.appendChild(txtProgram6);
                document.getElementById('mexicoFifthProgress').appendChild(trProgram6);
                let trDuration6 = document.createElement('TR');
                let txtDuration6 = document.createTextNode(mexicoFifthStudentLength);
                trDuration6.appendChild(txtDuration6);
                document.getElementById('mexicoFifthDuration').appendChild(trDuration6);
            }
            // Start of Chile Student Stats
            let chileThirdStats = data.santiago.generacion.tercera.estudiantes;
            for (let i = 0; i < chileThirdStats.length; i++) {
                chileThirdEachStudentName = data.santiago.generacion.tercera.estudiantes[i].nombre;
                chileThirdEachStudentMail = data.santiago.generacion.tercera.estudiantes[i].correo;
                chileThirdStudentProgress = data.santiago.generacion.tercera.estudiantes[i].progreso;
                chileThirdProgramLength = data.santiago.generacion.tercera.estudiantes[i].progreso.duracionPrograma;
                chileThirdProgramPercentage = data.santiago.generacion.tercera.estudiantes[i].progreso.porcentajeCompletado;
                let trName7 = document.createElement('TR');
                let txtName7 = document.createTextNode(chileThirdEachStudentName);
                trName7.appendChild(txtName7);
                document.getElementById('chileThirdName').appendChild(trName7);
                let trProgram7 = document.createElement('TR');
                let txtProgram7 = document.createTextNode(chileThirdProgramPercentage);
                trProgram7.appendChild(txtProgram7);
                document.getElementById('chileThirdProgress').appendChild(trProgram7);
                let trDuration7 = document.createElement('TR');
                let txtDuration7 = document.createTextNode(chileThirdProgramLength);
                trDuration7.appendChild(txtDuration7);
                document.getElementById('chileThirdDuration').appendChild(trDuration7);
            }
            let chileFourthStats = data.santiago.generacion.cuarta.estudiantes;
            for (let j = 0; j < chileFourthStats.length; j++) {
                chileFourthEachStudentName = data.santiago.generacion.cuarta.estudiantes[j].nombre;
                chileFourthEachStudentMail = data.santiago.generacion.cuarta.estudiantes[j].correo;
                chileFourthStudentProgress = data.santiago.generacion.cuarta.estudiantes[j].progreso;
                chileFourthProgramLength = data.santiago.generacion.cuarta.estudiantes[j].progreso.duracionPrograma;
                chileFourthProgramPercentage = data.santiago.generacion.cuarta.estudiantes[j].progreso.porcentajeCompletado;
                let trName8 = document.createElement('TR');
                let txtName8 = document.createTextNode(chileFourthEachStudentName);
                trName8.appendChild(txtName8);
                document.getElementById('chileFourthName').appendChild(trName8);
                let trProgram8 = document.createElement('TR');
                let txtProgram8 = document.createTextNode(chileFourthProgramPercentage);
                trProgram8.appendChild(txtProgram8);
                document.getElementById('chileFourthProgress').appendChild(trProgram8);
                let trDuration8 = document.createElement('TR');
                let txtDuration8 = document.createTextNode(chileFourthProgramLength);
                trDuration8.appendChild(txtDuration8);
                document.getElementById('chileFourthDuration').appendChild(trDuration8);
            }
            let chileFifthStats = data.santiago.generacion.quinta.estudiantes;
            for (let k = 0; k < chileFifthStats.length; k++) {
                chileFifthEachStudentName = data.santiago.generacion.quinta.estudiantes[k].nombre;
                chileFifthEachStudentMail = data.santiago.generacion.quinta.estudiantes[k].correo;
                chileFifthEachStudentProgress = data.santiago.generacion.quinta.estudiantes[k].progreso;
                chileFifthStudentLength = data.santiago.generacion.quinta.estudiantes[k].progreso.duracionPrograma;
                chileFifthProgramPercentage = data.santiago.generacion.quinta.estudiantes[k].progreso.porcentajeCompletado;
                let trName9 = document.createElement('TR');
                let txtName9 = document.createTextNode(chileFifthEachStudentName);
                trName9.appendChild(txtName9);
                document.getElementById('chileFifthName').appendChild(trName9);
                let trProgram9 = document.createElement('TR');
                let txtProgram9 = document.createTextNode(chileFifthProgramPercentage);
                trProgram9.appendChild(txtProgram9);
                document.getElementById('chileFifthProgress').appendChild(trProgram9);
                let trDuration9 = document.createElement('TR');
                let txtDuration9 = document.createTextNode(chileFifthStudentLength);
                trDuration9.appendChild(txtDuration9);
                document.getElementById('chileFifthDuration').appendChild(trDuration9);
            }
            testReturn = {
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
            returnStats = {
                students: []
            }
            return testReturn;

        })
    },
    printStudentsLima: () => {
        limaThirdLength.innerHTML = testReturn.students[0].length;
        limaFourthLength.innerHTML = testReturn.students[1].length;
        limaFifthLength.innerHTML = testReturn.students[2].length
    },
    printStudentsMexico: () => {
        mexicoThirdLength.innerHTML = testReturn.students[3].length;
        mexicoFourthLength.innerHTML = testReturn.students[4].length;
        mexicoFifthLength.innerHTML = testReturn.students[5].length;
    },
    printStudentsChile: () => {
        chileThirdLength.innerHTML = testReturn.students[6].length;
        chileFourthLength.innerHTML = testReturn.students[7].length;
        chileFifthLength.innerHTML = testReturn.students[8].length;
    },
    generationStats: () => {
        let
    }
}