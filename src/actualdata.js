window.data = {
    computeStudentStats: (laboratoria) => {
        laboratoria = 'https://api.myjson.com/bins/13lpdy';
        let students = [];
        // Calling API with JSON data
        fetch(laboratoria).then((response) => {
            return response.json();
        }).then((data) => {
            //Start of Lima Students
            let limaStudentsThirdGeneration = data.lima.generacion.tercera.estudiantes;
            let limaStudentsFourthGeneration = data.lima.generacion.cuarta.estudiantes;
            let limaStudentsFifthGeneration = data.lima.generacion.quinta.estudiantes;
            let lenghtLima1 = limaStudentsThirdGeneration.length;
            let lenghtLima2 = limaStudentsFourthGeneration.length;
            let lenghtLima3 = limaStudentsFifthGeneration.length;
            //return { lenghtLima1, lengthLima2, lengthLima3 };
            // End of Lima Students
            // Start of Mexico Students
            let mexicoStudentsThirdGeneration = data.mexico.generacion.tercera.estudiantes;
            let mexicoStudentsFourthGeneration = data.mexico.generacion.cuarta.estudiantes;
            let mexicoStudentsFifthGeneration = data.mexico.generacion.quinta.estudiantes;
            let lenghtMexico1 = mexicoStudentsThirdGeneration.length;
            let lenghtMexico2 = mexicoStudentsFourthGeneration.length;
            let lenghtMexico3 = mexicoStudentsFifthGeneration.length;
            //return { lenghtMexico1, lengthMexico2, lengthMexico3 };
            //End of Mexico Students
            //Start of Chile Students
            let chileStudentsThirdGeneration = data.santiago.generacion.tercera.estudiantes;
            let chileStudentsFourthGeneration = data.santiago.generacion.cuarta.estudiantes;
            let chileStudentsFifthGeneration = data.santiago.generacion.quinta.estudiantes;
            let lenghtChile1 = chileStudentsThirdGeneration.length;
            let lenghtChile2 = chileStudentsFourthGeneration.length;
            let lenghtChile3 = chileStudentsFifthGeneration.length;
            //return { lenghtChile1, lengthChile2, lengthChile3 };
            // End of Chile Students
            return {
                lenghtLima1,
                lenghtLima2,
                lenghtLima3,
                lenghtMexico1,
                lenghtMexico2,
                lenghtMexico3,
                lenghtChile1,
                lenghtChile2,
                lenghtChile3
            }
        })
    }



}