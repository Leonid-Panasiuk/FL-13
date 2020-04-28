let login = prompt('Enter login');
let minLength = 4;
let hours = 20;

if (login === '' || login === null) {
    alert('Canceled');
} else if (login.length < minLength) {

    alert('I don’t know any users having name length less than 4 symbols');

} else if (login === 'User' || login === 'Admin') {
    let password = prompt('Please enter your password:');

    if (password === '' || password === null) {
        alert('Canceled');

    } else if (password === 'UserPass' && login === 'User') {
        if (new Date().getHours() < hours) {
            alert('Good day, dear User!');
        } else {
            alert('Good evening, dear User!');
        }
    } else if (password === 'RootPass' && login === 'Admin') {
        if (new Date().getHours() < hours) {
            alert('Good day, dear Admin!');
        } else {
            alert('Good evening, dear Admin!');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}