document.addEventListener('DOMContentLoaded', function () {
  // Existing code
  var checkbox = document.getElementById('flexCheckChecked');
  var alertBox = document.getElementById('checkboxAlert');

  checkbox.addEventListener('change', function () {
    if (!this.checked) {
      alertBox.style.display = 'block';
    } else {
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

// Another block of code
document.addEventListener('DOMContentLoaded', function () {
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
});

$(document).ready(function(){
  // Show dropdown menu on hover
  $('#hover-dropdown').hover(function(){
    $(this).find('.dropdown-menu').addClass('show');
    $(this).find('.dropdown-toggle').attr('aria-expanded', 'true');
  }, function(){
    $(this).find('.dropdown-menu').removeClass('show');
    $(this).find('.dropdown-toggle').attr('aria-expanded', 'false');
  });
});

$(document).ready(function(){
  // Show dropdown menu on hover
  $('#hover-dropdown-credits-only').hover(function(){
    $(this).find('.dropdown-menu').addClass('show');
    $(this).find('.dropdown-toggle').attr('aria-expanded', 'true');
  }, function(){
    $(this).find('.dropdown-menu').removeClass('show');
    $(this).find('.dropdown-toggle').attr('aria-expanded', 'false');
  });
});
