// Sidenav Trigger (Code Snippet from Materialize Docs)
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems);
});

// Dropdown Event (Code Snippet from Materialize Docs)
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.dropdown-trigger');
  let instances = M.Dropdown.init(elems);
});

const laboratoria = 'https://api.myjson.com/bins/13lpdy';
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
        printStudents(dataValues);
      }).catch((err) => {
        console.log(err.message);
      });
  }
};
// Calling API
dashboardData.dataLaboratoria(laboratoria);
