// Hide non necessary HTML elements
mexicoGenerations.style.display = 'none';
limaGenerations.style.display = 'none';
santiagoGenerations.style.display = 'none';

tableThirdLima.style.display = 'none';
tableFourthLima.style.display = 'none';
// Function with navigation path that prints students names, completed percentages and duration of program
const printStudents = (dataValues) => {
  btnLimaOnscreen.addEventListener('click', () => {
    // Third Generation Lima
    limaGenerations.style.display = 'block';
    mexicoGenerations.style.display = 'none';
    santiagoGenerations.style.display = 'none';
    let thirdLima = dataValues[0].generacion.tercera.estudiantes;
    let content = '';
    for (let i = 0; i < thirdLima.length; i++) {
      let thirdLimaNames = thirdLima[i].nombre;
      let thirdLimaCompletedPercent = thirdLima[i].progreso.porcentajeCompletado;
      let thirdLimaProgramDuration = thirdLima[i].progreso.duracionPrograma;
      btnThirdLima.addEventListener('click', () => {
        tableThirdLima.style.display = 'block';
        content += `
          <tr>
            <td>${thirdLimaNames}</td>
            <td>${thirdLimaCompletedPercent}%</td>
            <td>${thirdLimaProgramDuration}</td>
          </tr>
    `;
        infoThirdLima.innerHTML = content;
      });
    }
    // Fourth Generation Lima
    let fourthLima = dataValues[0].generacion.cuarta.estudiantes;
    let contentTwo = '';
    for (let i = 0; i < fourthLima.length; i++) {
      let fourthLimaNames = fourthLima[i].nombre;
      let fourthLimaCompletedPercent = fourthLima[i].progreso.porcentajeCompletado;
      let fourthLimaProgramDuration = fourthLima[i].progreso.duracionPrograma;
      btnFourthLima.addEventListener('click', () => {
        tableThirdLima.style.display = 'none';
        tableFourthLima.style.display = 'block';
        contentTwo += `
          <tr>
            <td>${fourthLimaNames}</td>
            <td>${fourthLimaCompletedPercent}%</td>
            <td>${fourthLimaProgramDuration}</td>
          </tr>
    `;
        infoFourthLima.innerHTML = contentTwo;
      });
    }
    // Fifth Generation Lima
    let fifthLima = dataValues[0].generacion.quinta.estudiantes;
    let contentThree = '';
    for (let i = 0; i < fifthLima.length; i++) {
      let fifthLimaNames = fifthLima[i].nombre;
      let fifthLimaCompletedPercent = fifthLima[i].progreso.porcentajeCompletado;
      let fifthLimaProgramDuration = fifthLima[i].progreso.duracionPrograma;
      btnFifthLima.addEventListener('click', () => {
        tableThirdLima.style.display = 'none';
        tableFourthLima.style.display = 'none';
        tableFifthLima.style.display = 'block';
        contentThree += `
        <tr>
          <td>${fifthLimaNames}</td>
          <td>${fifthLimaCompletedPercent}%</td>
          <td>${fifthLimaProgramDuration}</td>
        </tr>
  `;
        infoFifthLima.innerHTML = contentThree;
      });
    }
  });

  btnMexicoOnscreen.addEventListener('click', () => {
    // Third Generation Mexico
    mexicoGenerations.style.display = 'block';
    limaGenerations.style.display = 'none';
    santiagoGenerations.style.display = 'none';
    let thirdMexico = dataValues[1].generacion.tercera.estudiantes;
    let content = '';
    for (let i = 0; i < thirdMexico.length; i++) {
      let thirdMexicoNames = thirdMexico[i].nombre;
      let thirdMexicoCompletedPercent = thirdMexico[i].progreso.porcentajeCompletado;
      let thirdMexicoProgramDuration = thirdMexico[i].progreso.duracionPrograma;
      btnThirdMexico.addEventListener('click', () => {
        tableThirdMexico.style.display = 'block';
        content += `
          <tr>
            <td>${thirdMexicoNames}</td>
            <td>${thirdMexicoCompletedPercent}%</td>
            <td>${thirdMexicoProgramDuration}</td>
          </tr>
    `;
        infoThirdMexico.innerHTML = content;
      });
    }
    // Fourth Generation Mexico
    let fourthMexico = dataValues[1].generacion.cuarta.estudiantes;
    let contentTwo = '';
    for (let i = 0; i < fourthMexico.length; i++) {
      let fourthMexicoNames = fourthMexico[i].nombre;
      let fourthMexicoCompletedPercent = fourthMexico[i].progreso.porcentajeCompletado;
      let fourthMexicoProgramDuration = fourthMexico[i].progreso.duracionPrograma;
      btnFourthMexico.addEventListener('click', () => {
        tableThirdMexico.style.display = 'none';
        tableFourthMexico.style.display = 'block';
        contentTwo += `
          <tr>
            <td>${fourthMexicoNames}</td>
            <td>${fourthMexicoCompletedPercent}%</td>
            <td>${fourthMexicoProgramDuration}</td>
          </tr>
    `;
        infoFourthMexico.innerHTML = contentTwo;
      });
    }
    // Fifth Generation Mexico
    let fifthMexico = dataValues[1].generacion.quinta.estudiantes;
    let contentThree = '';
    for (let i = 0; i < fifthMexico.length; i++) {
      let fifthMexicoNames = fifthMexico[i].nombre;
      let fifthMexicoCompletedPercent = fifthMexico[i].progreso.porcentajeCompletado;
      let fifthMexicoProgramDuration = fifthMexico[i].progreso.duracionPrograma;
      btnFifthMexico.addEventListener('click', () => {
        tableThirdMexico.style.display = 'none';
        tableFourthMexico.style.display = 'none';
        tableFifthMexico.style.display = 'block';
        contentThree += `
        <tr>
          <td>${fifthMexicoNames}</td>
          <td>${fifthMexicoCompletedPercent}%</td>
          <td>${fifthMexicoProgramDuration}</td>
        </tr>
  `;
        infoFifthMexico.innerHTML = contentThree;
      });
    }
  });

    btnSantiagoOnscreen.addEventListener('click', () => {
      // Third Generation Santiago
      santiagoGenerations.style.display = 'block';
      mexicoGenerations.style.display = 'none';
      limaGenerations.style.display = 'none';
      let thirdSantiago = dataValues[2].generacion.tercera.estudiantes;
      let content = '';
      for (let i = 0; i < thirdSantiago.length; i++) {
        let thirdSantiagoNames = thirdSantiago[i].nombre;
        let thirdSantiagoCompletedPercent = thirdSantiago[i].progreso.porcentajeCompletado;
        let thirdSantiagoProgramDuration = thirdSantiago[i].progreso.duracionPrograma;
        btnThirdSantiago.addEventListener('click', () => {
          tableThirdSantiago.style.display = 'block';
          content += `
            <tr>
              <td>${thirdSantiagoNames}</td>
              <td>${thirdSantiagoCompletedPercent}%</td>
              <td>${thirdSantiagoProgramDuration}</td>
            </tr>
      `;
          infoThirdSantiago.innerHTML = content;
        });
      }
      // Fourth Generation Santiago
      let fourthSantiago = dataValues[2].generacion.cuarta.estudiantes;
      let contentTwo = '';
      for (let i = 0; i < fourthSantiago.length; i++) {
        let fourthSantiagoNames = fourthSantiago[i].nombre;
        let fourthSantiagoCompletedPercent = fourthSantiago[i].progreso.porcentajeCompletado;
        let fourthSantiagoProgramDuration = fourthSantiago[i].progreso.duracionPrograma;
        btnFourthSantiago.addEventListener('click', () => {
          tableThirdSantiago.style.display = 'none';
          tableFourthSantiago.style.display = 'block';
          contentTwo += `
            <tr>
              <td>${fourthSantiagoNames}</td>
              <td>${fourthSantiagoCompletedPercent}%</td>
              <td>${fourthSantiagoProgramDuration}</td>
            </tr>
      `;
          infoFourthSantiago.innerHTML = contentTwo;
        });
      }
      // Fifth Generation Santiago
      let fifthSantiago = dataValues[2].generacion.quinta.estudiantes;
      let contentThree = '';
      for (let i = 0; i < fifthSantiago.length; i++) {
        let fifthSantiagoNames = fifthSantiago[i].nombre;
        let fifthSantiagoCompletedPercent = fifthSantiago[i].progreso.porcentajeCompletado;
        let fifthSantiagoProgramDuration = fifthSantiago[i].progreso.duracionPrograma;
        btnFifthSantiago.addEventListener('click', () => {
          tableThirdSantiago.style.display = 'none';
          tableFourthSantiago.style.display = 'none';
          tableFifthSantiago.style.display = 'block';
          contentThree += `
          <tr>
            <td>${fifthSantiagoNames}</td>
            <td>${fifthSantiagoCompletedPercent}%</td>
            <td>${fifthSantiagoProgramDuration}</td>
          </tr>
    `;
          infoFifthSantiago.innerHTML = contentThree;
        });
      }
  });
};
  /*

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
      });
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
      });
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
      });
    }
  });
};

// Navbar Dropdowns
btnDropdownMexico.addEventListener('click', () => {
    mexicoGenerations.style.display = 'block';
    santiagoGenerations.style.display = 'none';
    limaGenerations.style.display = 'none';
})
btnDropdownLima.addEventListener('click', () => {
    mexicoGenerations.style.display = 'none';
    santiagoGenerations.style.display = 'none';
    limaGenerations.style.display = 'block';
})
btnDropdownSantiago.addEventListener('click', () => {
    santiagoGenerations.style.display = 'block';
    mexicoGenerations.style.display = 'none';
    limaGenerations.style.display = 'none';
})

// Onscreen Campuses
btnLimaOnscreen.addEventListener('click', (ev) => {
  event.preventDefault(ev);
  limaGenerations.style.display = 'block';
});
*/
