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
            return testReturn;
        })
    },
    printStudents: () => {
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
    }
}