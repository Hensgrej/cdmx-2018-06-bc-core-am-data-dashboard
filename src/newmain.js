const laboratoria = 'https://api.myjson.com/bins/13lpdy';
const login = document.getElementById('login');
const btnLogin = document.getElementById('btnLogin');
const btnsCampus = document.getElementById('btnsCampus');
const btnLima = document.getElementById('btnLima');
const btnLimaThird = document.getElementById('btnLimaThird');
const btnLimaFourth = document.getElementById('btnLimaFourth');
const btnLimaFifth = document.getElementById('btnLimaFifth');
const limaThirdInfo = document.getElementById('limaThirdInfo');
const limaFourthInfo = document.getElementById('limaFourthInfo');
const limaFifthInfo = document.getElementById('limaFifthInfo');
const articleLima = document.getElementById('lima');
const limaThirdNames = document.getElementById('limaNamesThird');
const limaFourthNames = document.getElementById('limaNamesFourth');
const limaFifthNames = document.getElementById('limaNamesFifth');

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
                    login.style.display = 'none';
                    btnsCampus.style.display = 'block'
                });
            }).catch((err) => {
                console.log('Error en laboratoriaData');
            });
    }
};

dashboardData.dataLaboratoria(laboratoria);
btnsCampus.style.display = 'none';
lima.style.display = 'none'
const printStudents = (dataValues) => {
    btnLima.addEventListener('click', () => {
        btnMexico.style.display = 'none';
        btnStgo.style.display = 'none';
        lima.style.display = 'block';
        let fourthLima = dataValues[0].generacion.cuarta.estudiantes;
        let fourthLimaStudents = "";
        for (let i = 0; i < fourthLima.length; i++) {
            let fourthLimaNames = fourthLima[i].nombre;
            btnLimaFourth.addEventListener('click', () => {
                limaFourthInfo.style.display = 'block';
                btnLimaThird.style.display = 'none';
                btnLimaFifth.style.display = 'none';
                fourthLimaStudents += `<p>${fourthLimaNames}</p>`;
                limaFourthNames.innerHTML = fourthLimaStudents;
            })
        }
    })
}