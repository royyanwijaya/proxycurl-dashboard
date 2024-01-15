document.addEventListener('DOMContentLoaded', function () {
  // Get the checkbox element for the existing code
  var checkbox = document.getElementById('flexCheckChecked');
  // Get the alert element for the existing code
  var alertBox = document.getElementById('checkboxAlert');

  // Add an event listener to the checkbox for the existing code
  checkbox.addEventListener('change', function () {
    // If checkbox is unchecked, display the alert for the existing code
    if (!this.checked) {
      alertBox.style.display = 'block';
    } else {
      // If checkbox is checked, hide the alert for the existing code
      alertBox.style.display = 'none';
    }
  });

  // Get the toggle switch element for the new code
  var toggleSwitch = document.getElementById('toggleSwitch');
  // Get the workEmailAlert element for the new code
  var workEmailAlert = document.getElementById('workEmailAlert');
  // Get the pricingTable element for the new code
  var pricingTable = document.getElementById('pricingTable');

  // Function to handle toggle switch change for the new code
  function handleToggleSwitch() {
    if (toggleSwitch.checked) {
      workEmailAlert.style.display = 'none';  // Hide workEmailAlert
      pricingTable.style.display = 'table';   // Show pricingTable
    } else {
      workEmailAlert.style.display = 'block'; // Show workEmailAlert
      pricingTable.style.display = 'none';    // Hide pricingTable
    }
  }

  // Add event listener for toggle switch change for the new code
  toggleSwitch.addEventListener('change', handleToggleSwitch);

  // Initial setup based on the default state of the toggle switch for the new code
  handleToggleSwitch();
});