// Sidenav Trigger (Code Snippet from Materialize Docs)
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// Dropdown Event (Code Snippet from Materialize Docs)
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems);
});

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCP6TyCnajMP3O1kKMrnbA89Bs9kdZZoGc',
  authDomain: 'data-dashboard-dec96.firebaseapp.com',
  databaseURL: 'https://data-dashboard-dec96.firebaseio.com',
  projectId: 'data-dashboard-dec96',
  storageBucket: 'data-dashboard-dec96.appspot.com',
  messagingSenderId: '342531694367'
};
firebase.initializeApp(config);

// Create User
btnLogin.addEventListener('click', (ev) => {
  event.preventDefault(ev);
  let email = getEmail.value;
  let password = getPassword.value;
  firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    for (let i = 0; i < password.length; i++) {
      if (email !== '@laboratoria.la') {
        alert('Sólo Staff de Laboratoria puede crear cuentas');
      }
    }
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
  });
  firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);
});
