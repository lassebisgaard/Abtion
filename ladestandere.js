
// Få fat i checkboksene og billedet
var normalLaderCheckbox = document.querySelector('input[name="normallader"]');
var hurtigLaderCheckbox = document.querySelector('input[name="hurtiglader"]');
var superLaderCheckbox = document.querySelector('input[name="superlader"]');
var billede = document.querySelector('.kort');

// Lyt efter ændringer i checkboksene
normalLaderCheckbox.addEventListener('change', function() {
if (this.checked) {
    billede.src = 'billeder/kort1.png';
} else {
    billede.src = 'billeder/kort.png';
}
  });

hurtigLaderCheckbox.addEventListener('change', function() {
    if (this.checked) {
    billede.src = 'billeder/kort2.png';
}   else {
    billede.src = 'billeder/kort.png';
}
});

superLaderCheckbox.addEventListener('change', function() {
if (this.checked) {
    billede.src = 'billeder/kort3.png';
} else {
    billede.src = 'billeder/kort.png';
}
});

var checkboxes = document.querySelectorAll('.lade-checkbox');

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    checkboxes.forEach(function(cb) {
      cb.checked = false;
    });
    this.checked = true;
  });
});