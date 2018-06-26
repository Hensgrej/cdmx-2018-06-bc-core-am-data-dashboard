const getCampuses = () => {
    let request = new XMLHttpRequest();
    //Live API de Laboratoria
    request.open('GET', "https://api.laboratoria.la/campuses", true);
<<<<<<< HEAD
    request.onload = () => {
=======
    request.onload =() => {
>>>>>>> bc59304d78f7bb080da0b221a5298ffac3016815
        //Pasamos los datos a un objeto Javascript
        let data = JSON.parse(request.response);
        if (request.status >= 200 && request.status < 400) {
            //Loop de objeto
            let contador = 1;
            data.forEach(campuses => {
<<<<<<< HEAD
                if (campuses.id === "cdmx") {
                    tdCdmx.innerHTML = campuses.name;
                } else if (campuses.id === "gdl") {
                    tdGdl.innerHTML = campuses.name;
                } else if (campuses.id === "lim") {
                    tdPeru.innerHTML = campuses.name;
                } else if (campuses.id === "scl") {
                    tdChile.innerHTML = campuses.name;
                } else if (campuses.id === "spl") {
                    tdBrasil.innerHTML = campuses.name;
                }
            })
        }
    }
    request.send();
}
=======
                if (campuses.id === "aqp") {
                    btnAqp.innerHTML = campuses.name;
                } else if (campuses.id=== "cdmx") {
                    btnCdmx.innerHTML = campuses.name;
                } else if (campuses.id === "lim") {
                    btnLim.innerHTML = campuses.name;
                } else if (campuses.id === "scl") {
                    btnScl.innerHTML = campuses.name;
                } else if (campuses.id === "spl") {
                    btnSpl.innerHTML = campuses.name;
                }
                //console.log(campuses.name);
            });
        } else {
            console.log('error');
        }
    }
    request.send();
}
// template string.
// if id y start tienen cdmx y 2017, que sea generacion cuarta.
// que se cree un textNode al lado del boton Ciudad de México con esta info.

const getGenerations = () => {
    let secRequest = new XMLHttpRequest();
    secRequest.open('GET', 'https://api.laboratoria.la/cohorts', true);
    secRequest.onload = () => {
        let secData = JSON.parse(secRequest.response);
        if (secRequest.status >= 200 && secRequest.status < 400) {
            secData.forEach(end => {
                if(end === "2016" && id === "aqp" || end === "2017" && id === "aqp" || end === "2018" && id === "aqp") {
                    let secBtn = document.createElement("BUTTON");
                    let secTxt = document.createTextNode(end);
                    secBtn.appendChild(secTxt);
                    document.body.appendChild(secBtn);   
                    }
                })
        } else {
            console.log('error');
        }
    }
    secRequest.send();
}

//if()
>>>>>>> bc59304d78f7bb080da0b221a5298ffac3016815
