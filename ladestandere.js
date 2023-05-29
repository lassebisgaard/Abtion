
// Få fat i checkboksene og billedet
var normalLaderCheckbox = document.querySelector('input[name="normallader"]');
var hurtigLaderCheckbox = document.querySelector('input[name="hurtiglader"]');
var superLaderCheckbox = document.querySelector('input[name="superlader"]');
var billede = document.querySelector('.kort');

// Lyt efter ændringer i checkboksene
normalLaderCheckbox.addEventListener('change', function() {
if (this.checked) {
    billede.src = 'billeder/KortLS_normal.png';
} else {
    billede.src = 'billeder/KortLS.png';
}
  });

hurtigLaderCheckbox.addEventListener('change', function() {
    if (this.checked) {
    billede.src = 'billeder/carl.png';
}   else {
    billede.src = 'billeder/KortLS.png';
}
});

superLaderCheckbox.addEventListener('change', function() {
if (this.checked) {
    billede.src = 'billeder/download.png';
} else {
    billede.src = 'billeder/download.png';
}
});
