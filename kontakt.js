var loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Her kan du tilføje din login-logik og validere brugernavn og adgangskode
  // Her er et eksempel på en simpel validering, hvor brugernavn og adgangskode skal være udfyldt
  if (username !== '' && password !== '') {
    alert("Login succesfuldt!");
  } else {
    alert("Udfyld venligst både brugernavn og adgangskode.");
  }
});