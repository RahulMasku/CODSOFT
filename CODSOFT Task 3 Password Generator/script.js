function generatePassword() {
    var passwordLength = document.getElementById("passwordLength").value;
    var generatedPassword = generateRandomPassword(passwordLength);
    document.getElementById("generatedPassword").textContent = "Generated Password: " + generatedPassword;
}

function generateRandomPassword(length) {
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    var password = "";
    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
