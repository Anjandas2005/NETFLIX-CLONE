document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    // Input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Error message elements
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    let valid = true;
    
    // Validate email
    if (!validateEmail(email)) {
        emailError.style.display = 'block';
        emailError.textContent = 'Please enter a valid email address';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }
    
    // Validate password
    if (password.length < 6) {
        passwordError.style.display = 'block';
        passwordError.textContent = 'Password must be at least 6 characters long';
        valid = false;
    } else {
        passwordError.style.display = 'none';
    }
    
    // If form is valid, submit the form (simulated action)
    if (valid) {
        alert('Form submitted successfully');
        // You can send form data to a server or handle it here
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}
