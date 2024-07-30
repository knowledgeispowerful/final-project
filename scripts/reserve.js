document.getElementById('reservationForm').addEventListener('submit', function(event) {
    // Add custom validation logic if needed
    // Example: Check if all required fields are filled out

    const form = event.target;
    if (!form.checkValidity()) {
        event.preventDefault(); // Prevent form submission
        alert('Please fill out all required fields.');
    }
});
