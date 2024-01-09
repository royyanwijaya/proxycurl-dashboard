// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Get the checkbox element
    var checkbox = document.getElementById('flexCheckChecked');
    // Get the alert element
    var alertBox = document.getElementById('checkboxAlert');
  
    // Add an event listener to the checkbox
    checkbox.addEventListener('change', function () {
      // If checkbox is unchecked, display the alert
      if (!this.checked) {
        alertBox.style.display = 'block';
      } else {
        // If checkbox is checked, hide the alert
        alertBox.style.display = 'none';
      }
    });
  });  