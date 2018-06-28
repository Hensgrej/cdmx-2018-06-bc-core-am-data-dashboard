const getLima = () => {
    fetch('https://api.myjson.com/bins/13lpdy').then(response => {
        return response.json();
      }).then(data => {
        let dataLima = data.lima;
        let generationLima = data.lima.generacion;
        let thirdGenerationLima = data.lima.generacion.tercera;
        let fourthGenerationLima = data.lima.generacion.cuarta;
        let fifthGenerationLima = data.lima.generacion.quinta;
    
        let studentsThirdGenerationLima = data.lima.generacion.tercera.estudiantes;
        let studentsFourthGenerationLima = data.lima.generacion.cuarta.estudiantes;
        let studentsFifthGenerationLima = data.lima.generacion.quinta.estudiantes;
        
        if (dataLima) {
            let btnLim = document.createElement("BUTTON");
            let txt = document.createTextNode("Lima");
            btnLim.appendChild(txt);
            document.body.appendChild(btnLim);
            btnLim.addEventListener("click", () => {
                let tdResult = document.createElement("li");
                let showData = data.lima.generacion;
                let objToString = JSON.stringify(showData);
                let aTxt = document.createTextNode(objToString);
                tdResult.appendChild(aTxt);
                document.body.appendChild(tdResult)
            })
        }
      }).catch(err => {
        console.log('Error');
      });
    }
    getLima();
    
    const getMexico = () => {
        fetch('https://api.myjson.com/bins/13lpdy').then(response => {
        return response.json();
      }).then(data => {
        let dataMexico = data.mexico;
        let generationsMexico = data.mexico.generacion;
        let thirdGenerationMexico = data.mexico.generacion.tercera;
        let fourthGenerationMexico = data.mexico.generacion.cuarta;
        let fifthGenerationMexico = data.mexico.generacion.quinta;
        let studentsThirdGenerationMexico = data.mexico.generacion.tercera.estudiantes;
        let studentsFourthGenerationMexico = data.mexico.generacion.cuarta.estudiantes;
        let studentsFifthGenerationMexico = data.mexico.generacion.quinta.estudiantes;
        if (dataMexico) {
            let btnMxn = document.createElement("BUTTON");
            let txt = document.createTextNode("México");
            btnMxn.appendChild(txt);
            document.body.appendChild(btnMxn);
            btnMxn.addEventListener("click", () => {
                let tdResult = document.createElement("li");
                let aTxt = document.createTextNode(data.mexico.generacion);
                tdResult.appendChild(aTxt);
                document.body.appendChild(tdResult);
            })
        }
      }).catch(err => {
        console.log('Error');
      });
    }
    getMexico();
    
    const getStgo = () => {
        fetch('https://api.myjson.com/bins/13lpdy').then(response => {
        return response.json();
      }).then(data => {
        let dataSantiago = data.santiago;
        let generationSantiago = data.santiago.generacion;
        let thirdGeneratioSantiago = data.santiago.generacion.tercera;
        let fourthGeneratioSantiago = data.santiago.generacion.cuarta;
        let fifthGeneratioSantiago = data.santiago.generacion.quinta;
        let studentsThirdGeneratioSantiago = data.santiago.generacion.tercera.estudiantes;
        let studentsFourthGeneratioSantiago = data.santiago.generacion.cuarta.estudiantes;
        let studentsFifthGeneratioSantiago = data.santiago.generacion.quinta.estudiantes;
        if (dataSantiago) {
            let btnStgo = document.createElement("BUTTON");
            let txt = document.createTextNode("Santiago");
            btnStgo.appendChild(txt);
            document.body.appendChild(btnStgo);
            btnStgo.addEventListener("click", () => {
                let tdResult = document.createElement("li");
                let aTxt = document.createTextNode(data.santiago.generacion);
                tdResult.appendChild(aTxt);
                document.body.appendChild(tdResult);
            })
        }
      }).catch(err => {
        console.log('Error');
      });
    }
    
    getStgo();
    
    const computeStudentStats = () => {
        fetch('https://api.myjson.com/bins/13lpdy').then(response => {
        return response.json();
      }).then(data => {
        if (getMexico) {
        let progreso = "";     
        let statsFourthGenerationMexico = data.mexico.generacion.cuarta.estudiantes.progreso;   
        statsFourthGenerationMexico.forEach(function (data) {
            progreso = data.mexico.generacion.cuarta.estudiantes[i].progreso;
        console.log(progreso);       
        })
    }
    })
    }
    
    
    computeStudentStats();