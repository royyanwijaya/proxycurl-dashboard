document.addEventListener('DOMContentLoaded', function () {
  // Get the checkbox element
  var checkbox = document.getElementById('flexCheckChecked');
  // Get the alert element
  var alertBox = document.getElementById('checkboxAlert');
  
  // Get the toggle switch element
  var toggleSwitch = document.getElementById('toggleSwitch');
  // Get the workEmailAlert div element
  var workEmailAlert = document.getElementById('workEmailAlert');

  // Add an event listener to the checkbox
  checkbox.addEventListener('change', function () {
    // If checkbox is unchecked, display the alert
    if (!this.checked) {
      alertBox.style.display = 'block';
    } else {
      // If checkbox is checked, hide the alert
      alertBox.style.display = 'none';
    }

    // Call the function to toggle the visibility of the workEmailAlert div
    toggleWorkEmailAlert();
  });

  // Add an event listener to the toggle switch
  toggleSwitch.addEventListener('change', toggleWorkEmailAlert);

  // Function to toggle the visibility of the workEmailAlert div
  function toggleWorkEmailAlert() {
    // Check the state of the toggle switch
    if (toggleSwitch.checked) {
      // If switch is ON, hide the workEmailAlert div
      workEmailAlert.style.display = 'none';
    } else {
      // If switch is OFF, show the workEmailAlert div
      workEmailAlert.style.display = 'block';
    }
  }

  // Call the function to set the initial state on page load
  toggleWorkEmailAlert();
});