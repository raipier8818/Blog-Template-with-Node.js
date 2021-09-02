var mysql = require('mysql')
var info = require('./info')


function checkUsername(){
  var username = document.getElementById('username')
  var usernameRegExp = /^[A-Za-z0-9]{4,30}$/;

  if(!usernameRegExp.test(username.value)){
    username.style.border = '1px solid red'
    return false
  }

  
  var connection = mysql.createConnection(info.database)
  connection.connect()

  var check = connection.query(`SELECT * FROM users WHERE username = '${username.value}'`, (err, results, fields) => {
    if(results.length == 0){
      return true
    }else{
      username.style.border = '1px solid red'
      return false
    }
  })  

  console.log(check);

  connection.end()
  return check;
}

function checkEmail(){
  var email = document.getElementById('email')
  var emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if(!emailRegExp.test(email.value)){
    email.style.border = '1px solid red'
    return false
  }

  return true
}

function checkPassword(){
  var password = document.getElementById('password')
  var passwordRegExp = /^[a-zA-Z0-9]{8,30}$/;
  
  if(!passwordRegExp.test(password.value)){
    password.style.border = '1px solid red'
    return false
  }

  return true
}

function checkConfirmPassword(){
  var password = document.getElementById('password')
  var confirmPassword = document.getElementById('confirmPassword')

  if(password.value != confirmPassword.value){
    confirmPassword.style.border = '1px solid red'
    return false
  }

  return true
}

function checkForm(){  
  // console.log(checkUsername())
  // console.log(checkEmail())
  // console.log(checkPassword())
  // console.log(checkConfirmPassword())


  return checkUsername() && checkEmail() && checkPassword() && checkConfirmPassword()
}