function passwordConfirmation() {
    const password = document.getElementById("password").value;
    const confirmedPassword = document.getElementById("confirmed-password").value;
   
    if (password == "" || confirmedPassword == "") {
        return ("Error: The password field is empty.");
    } else if (password == confirmedPassword) {
        return ("Your account has been successfully created. Please verify your email to confirm the account creation.");
    } else {
        return ("Please make sure your passwords match.")
    }
}

function updatePasswordConfirmation() {
    const passwordMatchDisplay = document.querySelector("#password-match-display");
    const passwordMatchContent = document.createElement("div");
    passwordMatchContent.classList.add("passwordMatchContent");
    passwordMatchContent.textContent = passwordConfirmation();
    passwordMatchDisplay.innerHTML = ''; // Clear previous content
    passwordMatchDisplay.appendChild(passwordMatchContent);
}