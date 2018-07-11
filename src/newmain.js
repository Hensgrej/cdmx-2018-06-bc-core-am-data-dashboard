const laboratoria = 'https://api.myjson.com/bins/13lpdy';
const login = document.getElementById('login');
const btnLogin = document.getElementById('btnLogin');
const btnsCampus = document.getElementById('btnsCampus');
// Lima HTML elements
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
// Mexico HTML elements
const btnMexico = document.getElementById('btnMexico');
const btnMexicoThird = document.getElementById('btnMexicoThird');
const btnMexicoFourth = document.getElementById('btnMexicoFourth');
const btnMexicoFifth = document.getElementById('btnMexicoFifth');
const mexicoThirdInfo = document.getElementById('mexicoThirdInfo');
const mexicoFourthInfo = document.getElementById('mexicoFourthInfo');
const mexicoFifthInfo = document.getElementById('mexicoFifthInfo');
const articleMexico = document.getElementById('mexico');
const mexicoThirdNames = document.getElementById('mexicoNamesThird');
const mexicoFourthNames = document.getElementById('mexicoNamesFourth');
const mexicoFifthNames = document.getElementById('mexicoNamesFifth');
const fourthMexicoCompletedPercentage = document.getElementById('mexicoCompletedPercentageFourth');
const mexicoDurationPercentageFourth = document.getElementById('mexicoDurationPercentageFourth');
const thirdMexicoCompletedPercentage = document.getElementById('mexicoCompletedPercentageThird');
const mexicoDurationPercentageThird = document.getElementById('mexicoDurationPercentageThird');
const fifthMexicoCompletedPercentage = document.getElementById('mexicoCompletedPercentageFifth');
const mexicoDurationPercentageFifth = document.getElementById('mexicoDurationPercentageFifth');

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
lima.style.display = 'none';
mexico.style.display = 'none';
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
    btnMexico.addEventListener('click', () => {
        btnLima.style.display = 'none';
        btnStgo.style.display = 'none';
        btnMexico.style.display = 'block';
        mexico.style.display = 'block';
        let thirdMexico = dataValues[0].generacion.tercera.estudiantes;
        let thirdMexicoStudents = '';
        let thirdMexicoPercentages = '';
        let thirdMexicoDuration = '';
        for (let i = 0; i < thirdMexico.length; i++) {
            let thirdMexicoNames = thirdMexico[i].nombre;
            let thirdMexicoCompletedPercent = thirdMexico[i].progreso.porcentajeCompletado;
            let thirdMexicoProgramDuration = thirdMexico[i].progreso.duracionPrograma;
            btnMexicoThird.addEventListener('click', () => {
                mexicoThirdInfo.style.display = 'block';
                btnMexicoFourth.style.display = 'none';
                btnMexicoFifth.style.display = 'none';
                thirdMexicoStudents += `<p>${thirdMexicoNames}</p>`;
                thirdMexicoPercentages += `<p>${thirdMexicoCompletedPercent}%</p>`;
                thirdMexicoDuration += `<p>${thirdMexicoProgramDuration}</p>`;
                mexicoThirdNames.innerHTML = thirdMexicoStudents;
                thirdMexicoCompletedPercentage.innerHTML = thirdMexicoPercentages;
                mexicoDurationPercentageThird.innerHTML = thirdMexicoDuration;
            })
        }
        let fourthMexico = dataValues[0].generacion.cuarta.estudiantes;
        let fourthMexicoStudents = '';
        let fourthMexicoPercentages = '';
        let fourthMexicoDuration = '';
        for (let i = 0; i < fourthMexico.length; i++) {
            let fourthMexicoNames = fourthMexico[i].nombre;
            let fourthMexicoCompletedPercent = fourthMexico[i].progreso.porcentajeCompletado;
            let fourthMexicoProgramDuration = fourthMexico[i].progreso.duracionPrograma;
            btnMexicoFourth.addEventListener('click', () => {
                mexicoFourthInfo.style.display = 'block';
                btnMexicoThird.style.display = 'none';
                btnMexicoFifth.style.display = 'none';
                fourthMexicoStudents += `<p>${fourthMexicoNames}</p>`;
                fourthMexicoPercentages += `<p>${fourthMexicoCompletedPercent}%</p>`;
                fourthMexicoDuration += `<p>${fourthMexicoProgramDuration}</p>`;
                mexicoFourthNames.innerHTML = fourthMexicoStudents;
                fourthMexicoCompletedPercentage.innerHTML = fourthMexicoPercentages;
                mexicoDurationPercentageFourth.innerHTML = fourthMexicoDuration;
            })
        }
        let fifthMexico = dataValues[0].generacion.quinta.estudiantes;
        let fifthMexicoStudents = '';
        let fifthMexicoPercentages = '';
        let fifthMexicoDuration = '';
        for (let i = 0; i < fifthMexico.length; i++) {
            let fifthMexicoNames = fifthMexico[i].nombre;
            let fifthMexicoCompletedPercent = fifthMexico[i].progreso.porcentajeCompletado;
            let fifthMexicoProgramDuration = fifthMexico[i].progreso.duracionPrograma;
            btnMexicoFifth.addEventListener('click', () => {
                mexicoFifthInfo.style.display = 'block';
                btnMexicoFourth.style.display = 'none';
                btnMexicoThird.style.display = 'none';
                fifthMexicoStudents += `<p>${fifthMexicoNames}</p>`;
                fifthMexicoPercentages += `<p>${fifthMexicoCompletedPercent}%</p>`;
                fifthMexicoDuration += `<p>${fifthMexicoProgramDuration}</p>`;
                mexicoFifthNames.innerHTML = fifthMexicoStudents;
                fifthMexicoCompletedPercentage.innerHTML = fifthMexicoPercentages;
                mexicoDurationPercentageFifth.innerHTML = fifthMexicoDuration;
            })
        }
    })
}