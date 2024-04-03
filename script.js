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

// Get checkbox and button elements 
const checkbox = document.getElementById('limitTopup');
const button = document.getElementById('saveButton');

// Hide button by default
button.style.display = 'none';

// Add click event listener to checkbox
checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

// SAVE BUTTON //

// Get button and content elements
const addButton = document.getElementById('addLimit');
const limit = document.getElementById('limitTrigger');

// Hide limit content by default
limit.style.display = 'none';

// Add click event to button 
addButton.addEventListener('click', () => {
  if (limit.style.display === 'none') {
    limit.style.display = 'block';
  } else {
    limit.style.display = 'none';
  }
});