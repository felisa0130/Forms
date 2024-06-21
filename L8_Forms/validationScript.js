    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value
      const form = document.getElementById('myForm');
      const inputField = document.getElementById('inputField');

      // Regular expression pattern for alphanumeric input
      const alphanumericPattern = /^[a-z0-9]+$/i;
      
      // Add event listener to the form submit event
      form.addEventListener('submit', function(event) {
      
      // Prevent form submission
      event.preventDefault();
      
      // Validate the input value
      const inputValue = inputField.value.trim();
      if (alphanumericPattern.test(inputValue)) {
        // Valid input: display confirmation and submit the form
        alert('Form submitted successfully!');
        } else {
        // Invalid input: display error message
        alert('Please enter a valid alphanumeric value.');
      }
      });