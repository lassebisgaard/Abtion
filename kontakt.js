var emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var errorText = document.getElementById("errorText");
  var messageText = document.getElementById("messageText");

  // Regex for e-mail validering
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    // E-mail er gyldig
    errorText.innerHTML = '';

    // Send e-mail og vis besked
    for (var i = 0; i < 3; i++) {
      sendEmail(email, i);
    }
    messageText.innerHTML = 'E-mailen er blevet sendt.'; // Vis beskedtekst
  } else {
    // E-mail er ugyldig
    errorText.innerHTML = 'Ugyldig e-mailadresse.';
    messageText.innerHTML = ''; // Nulstil beskedtekst
  }
});

function sendEmail(email, index) {
  // Simulerer afsendelse af e-mail
  console.log('E-mail ' + (index + 1) + ' sendt til: ' + email);
}