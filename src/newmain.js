const laboratoria = 'https://api.myjson.com/bins/13lpdy';

window.dashboardData = {
  dataLaboratoria: (laboratoria) => {
    fetch(laboratoria).then((data) => {
      return data.json();
    })
      .then((data) => {
        let dataValues = (Object.values(data));
        dashboardCompute.computeStudentStats(dataValues);
        dashboardCompute.studentStatsLima(dataValues);
      }).catch((err) => {
        console.log('Error en laboratoriaData');
      });
  }
};
dashboardData.dataLaboratoria(laboratoria);

