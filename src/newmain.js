const laboratoria = 'https://api.myjson.com/bins/13lpdy';
let btnLogin = document.getElementById('btnLogin');

window.dashboardData = {
    dataLaboratoria: (laboratoria) => {
        fetch(laboratoria).then((data) => {
                return data.json();
            })
            .then((data) => {
                let dataValues = (Object.values(data));
                dashboardCompute.computeStudentsStats(dataValues);
                dashboardPrint.computeGenerationStats(dataValues);
                return dataValues;
            })
            .then((dataValues) => {
                btnLogin.addEventListener('click', () => {
                    printStudents(dataValues);
                });
            }).catch((err) => {
                console.log('Error en laboratoriaData');
            });
    }
};

dashboardData.dataLaboratoria(laboratoria);

const printStudents = (dataValues) => {
    let fourthLima = dataValues[0].generacion.cuarta.estudiantes;
    let fourthLimaStudents = "";
    for (let i = 0; i < fourthLima.length; i++) {
        let fourthLimaNames = fourthLima[i].nombre;
        fourthLimaStudents += `<p>${fourthLimaNames}</p>`;
        document.getElementById('btnsCampus').innerHTML = fourthLimaStudents;
    }
}