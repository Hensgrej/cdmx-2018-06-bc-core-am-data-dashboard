const getCampuses = () => {
    let request = new XMLHttpRequest();
    //Live API de Laboratoria
    request.open('GET', "https://api.laboratoria.la/campuses", true);
    request.onload = () => {
        //Pasamos los datos a un objeto Javascript
        let data = JSON.parse(request.response);
        if (request.status >= 200 && request.status < 400) {
            //Loop de objeto
            data.forEach(campuses => {
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