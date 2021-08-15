document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passField = document.getElementById('user-pass');
    const userPassword = emailField.value;

    if(emailField.value == 'nishat@gmail.com' && passField.value == 'abc123'){
        alert('Give email and password !')
    }
    else if(emailField.value == '' || passField.value == ''){
        alert('Give email and password !')
    }
    else{
        window.location.href='bank-2.html';
    }
})

