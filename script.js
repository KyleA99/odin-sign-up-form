function passwordConfirmation() {
    const password = document.getElementById("password").value;
    const confirmedPassword = document.getElementById("confirmed-password").value;
   
    if (password == "") {
        alert("Error: The password field is Empty.");
    } else if (password == confirmedPassword) {
        alert("Logged In");
    } else {
        alert("Please make sure your passwords match.")
    }
}