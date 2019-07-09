let email = prompt('Enter your e-mail',''); // Ask user for an email 
let password = '';
let emptyEmail = email === null || email.length === 0;
const emailLength = 6;
let shortEmail = !emptyEmail && email.length < emailLength;
let emptyPassword = password === null || password.length === 0;
const passwordLength = 5;
let shortPassword = !emptyPassword && password.length < passwordLength;
let newPassword = '';
let emptyNewPassword = newPassword === null || newPassword.length === 0;
let shortNewPassword = !emptyNewPassword && newPassword.length < passwordLength;
let oldPassword = '';
let emptyOldPassword = oldPassword === null || oldPassword.length === 0;
if (email === 'user@gmail.com' || email === 'admin@gmail.com') { //If the visitor enters correct email then prompt for a password
    password = prompt('Enter your password');// checking password for current email
    if (email === 'user@gmail.com' && password === 'UserPass' || 
    email === 'admin@gmail.com' && password === 'AdminPass') {
        let changePassword = confirm('Do you want to change your password?'); // suggesting user/admin to change his password 
        if (changePassword) { 
            oldPassword = prompt('Enter your old password');
            if (oldPassword === password) {
                newPassword = prompt('Enter your new password');
                if (newPassword === emptyNewPassword) { //	For an empty string or cancelled input, show “Canceled.”
                    alert('Canceled.');
                } else if (newPassword === shortNewPassword) { // If the input length less than 5 – show  “It’s too short password. Sorry.”
                    alert('It’s too short password. Sorry.');
                } else if (!newPassword) {
                    alert('Wrong password');
                } else { // If user write the same new – show “You have successfully changed your password.” 
                    let repeatNewPassword = prompt('Repeat your new password'); // If the new password is valid ask to enter it again
                    repeatNewPassword === newPassword ? alert('You have successfully changed your password.') :
                    alert('You wrote the wrong password.');
                }
            } else if (oldPassword === emptyOldPassword) {
                alert('Canceled.');
            } else { 
                alert('Wrong password');
            }
        } else { //	In case the user clicks the 'Cancel' button, the message “You have failed the change.”
            alert('You have failed the change.');
        }
    } else if (password === null || password.length === 0) { 
        alert('Canceled.');
    } else {
        alert('Wrong password');
    }
} else if (emptyEmail) { // If the input is an empty line or Esc – show “Canceled.” 
    alert('Canceled.');
} else if (shortEmail) { // If the input length less than 6 symbols - show “I don't know any emails having name length less than 6 symbols
    alert('I don’t know any emails having name length less than 6 symbols');
} else { // If it’s another string – then show “I don’t know you”.
    alert('I don’t know you');
}