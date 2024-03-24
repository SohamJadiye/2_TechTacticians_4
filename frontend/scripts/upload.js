// Selecting the form element
const form = document.querySelector('form');

// Adding an event listener for form submission
form.addEventListener('submit', function(event) {
    // Preventing the default form submission behavior
    event.preventDefault();

    // Getting the input values
    const name = document.querySelector('input[type="text"]').value;
    const subject = document.querySelector('input[type="file"]').value;
    const description = document.querySelector('textarea').value;

    // Check if the form fields are filled
    if (name && subject && description) {
        // Creating a success message
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Form filled successfully!';
        successMessage.classList.add('text-green-500', 'font-semibold', 'mt-4');

        // Appending the success message to the message container
        const messageContainer = document.getElementById('messageContainer');
        messageContainer.innerHTML = '';
        messageContainer.appendChild(successMessage);

        // Clearing the form fields
        form.reset();
    } else {
        // If any field is empty, display an error message
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Please fill out all fields.';
        errorMessage.classList.add('text-red-500', 'font-semibold', 'mt-4');

        // Appending the error message to the message container
        const messageContainer = document.getElementById('messageContainer');
        messageContainer.innerHTML = '';
        messageContainer.appendChild(errorMessage);
    }
});
