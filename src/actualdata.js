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
            let testReturn = {
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
    }
}