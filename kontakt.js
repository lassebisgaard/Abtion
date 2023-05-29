var emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var errorText = document.getElementById("errorText");

  // Regex for e-mail validering
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    // E-mail er gyldig
    errorText.innerHTML = '';
    }
   else {
    // E-mail er ugyldig
    errorText.innerHTML = 'Ugyldig e-mailadresse.';
  }
});