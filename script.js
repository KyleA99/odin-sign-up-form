/**
 * Validates password confirmation and returns a message based on the validation result.
 * @returns {string} The validation result message.
 */
function passwordConfirmation() {
    const password = document.getElementById("password").value;
    const confirmedPassword = document.getElementById("confirmed-password").value;
   
    if (password == "" || confirmedPassword == "") {
        return ("Error: One or more of the password fields are empty.");
    } else if (password == confirmedPassword) {
        return ("Your account has been successfully created. Please verify your email to confirm the account creation.");
    } else {
        return ("Please make sure your passwords match.")
    }
}

/**
 * Updates the password confirmation display based on the validation result.
 */
function updatePasswordConfirmation() {
    const passwordMatchDisplay = document.querySelector("#password-match-display");
    const passwordMatchContent = document.createElement("div");
    passwordMatchContent.classList.add("passwordMatchContent");
    passwordMatchContent.textContent = passwordConfirmation();
    passwordMatchDisplay.innerHTML = "";
    passwordMatchDisplay.appendChild(passwordMatchContent);
}