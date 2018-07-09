const btnLima = document.getElementById('btnLima');
const btnMex = document.getElementById('btnMexico');
const btnStgo = document.getElementById('btnStgo');
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', () => {
  dashboardData.dataLaboratoria();
  btnLogin.style.display = 'none';
});
btnLima.addEventListener('click', () => {
  dashboardCompute.computeStudentStats();
  console.log(students.campus[0].lima.generation);
});