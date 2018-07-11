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
const fourthLimaCompletedPercentage = document.getElementById('limaCompletedPercentageFourth');
const limaDurationPercentageFourth = document.getElementById('limaDurationPercentageFourth');
const thirdLimaCompletedPercentage = document.getElementById('limaCompletedPercentageThird');
const limaDurationPercentageThird = document.getElementById('limaDurationPercentageThird');
const fifthLimaCompletedPercentage = document.getElementById('limaCompletedPercentageFifth');
const limaDurationPercentageFifth = document.getElementById('limaDurationPercentageFifth');

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
        let thirdLima = dataValues[0].generacion.tercera.estudiantes;
        let thirdLimaStudents = '';
        let thirdLimaPercentages = '';
        let thirdLimaDuration = '';
        for (let i = 0; i < thirdLima.length; i++) {
            let thirdLimaNames = thirdLima[i].nombre;
            let thirdLimaCompletedPercent = thirdLima[i].progreso.porcentajeCompletado;
            let thirdLimaProgramDuration = thirdLima[i].progreso.duracionPrograma;
            btnLimaThird.addEventListener('click', () => {
                limaThirdInfo.style.display = 'block';
                btnLimaFourth.style.display = 'none';
                btnLimaFifth.style.display = 'none';
                thirdLimaStudents += `<p>${thirdLimaNames}</p>`;
                thirdLimaPercentages += `<p>${thirdLimaCompletedPercent}%</p>`;
                thirdLimaDuration += `<p>${thirdLimaProgramDuration}</p>`;
                limaThirdNames.innerHTML = thirdLimaStudents;
                thirdLimaCompletedPercentage.innerHTML = thirdLimaPercentages;
                limaDurationPercentageThird.innerHTML = thirdLimaDuration;
            })
        }
        let fourthLima = dataValues[0].generacion.cuarta.estudiantes;
        let fourthLimaStudents = '';
        let fourthLimaPercentages = '';
        let fourthLimaDuration = '';
        for (let i = 0; i < fourthLima.length; i++) {
            let fourthLimaNames = fourthLima[i].nombre;
            let fourthLimaCompletedPercent = fourthLima[i].progreso.porcentajeCompletado;
            let fourthLimaProgramDuration = fourthLima[i].progreso.duracionPrograma;
            btnLimaFourth.addEventListener('click', () => {
                limaFourthInfo.style.display = 'block';
                btnLimaThird.style.display = 'none';
                btnLimaFifth.style.display = 'none';
                fourthLimaStudents += `<p>${fourthLimaNames}</p>`;
                fourthLimaPercentages += `<p>${fourthLimaCompletedPercent}%</p>`;
                fourthLimaDuration += `<p>${fourthLimaProgramDuration}</p>`;
                limaFourthNames.innerHTML = fourthLimaStudents;
                fourthLimaCompletedPercentage.innerHTML = fourthLimaPercentages;
                limaDurationPercentageFourth.innerHTML = fourthLimaDuration;
            })
        }
        let fifthLima = dataValues[0].generacion.quinta.estudiantes;
        let fifthLimaStudents = '';
        let fifthLimaPercentages = '';
        let fifthLimaDuration = '';
        for (let i = 0; i < fifthLima.length; i++) {
            let fifthLimaNames = fifthLima[i].nombre;
            let fifthLimaCompletedPercent = fifthLima[i].progreso.porcentajeCompletado;
            let fifthLimaProgramDuration = fifthLima[i].progreso.duracionPrograma;
            btnLimaFifth.addEventListener('click', () => {
                limaFifthInfo.style.display = 'block';
                btnLimaFourth.style.display = 'none';
                btnLimaThird.style.display = 'none';
                fifthLimaStudents += `<p>${fifthLimaNames}</p>`;
                fifthLimaPercentages += `<p>${fifthLimaCompletedPercent}%</p>`;
                fifthLimaDuration += `<p>${fifthLimaProgramDuration}</p>`;
                limaFifthNames.innerHTML = fifthLimaStudents;
                fifthLimaCompletedPercentage.innerHTML = fifthLimaPercentages;
                limaDurationPercentageFifth.innerHTML = fifthLimaDuration;
            })
        }
    })
}