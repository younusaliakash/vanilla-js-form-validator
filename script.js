const form  = document.getElementById("form");
const username  = document.getElementById("username");
const email  = document.getElementById("email");
const password  = document.getElementById("password");
const password2  = document.getElementById("password2");

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector('small');
  small.innerText = message 

}

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";

}

//email validation
const isValidEmail = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // return re.test(String(email).toLowerCase())
      if(re.test(email.value.trim())){
        showSuccess(email)
      }else{
        showError(email, `Email isn't valid`)
      }
}

const checkRequired = (inputArray) => {
    inputArray.forEach( input => {
      if(input.value.trim() === ''){
        showError(input, `${getFieldName(input)} is required!`);
      }else{
        showSuccess(input);
      }
    })
}

const checkLength = (input, min, max) => {
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} is must be at least ${min} character.`)
  }else if(input.value.length > max){
    showError(input, `${getFieldName(input)} is must be less than ${max} character.`)
  } else{
    showSuccess(input)
  }
}

const checkPasswordsMatch = (input1, input2) => {
  if(input1.value !== input2.value){
    showError(password2, "Password do not match!")
  }
}

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


//Event listener
form.addEventListener("submit", function(e){
  e.preventDefault()

  checkRequired([username, email, password, password2])
  checkLength(username, 3 , 15);
  checkLength(password, 6 , 16);
  isValidEmail(email)
  checkPasswordsMatch(password, password2)

  // if(username.value === ''){
  //     showError(username, "Username is required!")
  // }else{
  //   showSuccess(username)
  // }

  // if(email.value === ''){
  //     showError(email, "email is required!")
  // }else if(!isValidEmail(email.value)){
  //   showError(email, "Email isn't valid")
  // }
  // else{
  //   showSuccess(email)
  // }

  // if(password.value === ''){
  //     showError(password, "password is required!")
  // }else{
  //   showSuccess(password)
  // }

  // if(password2.value === ''){
  //     showError(password2, "password2 is required!")
  // }else{
  //   showSuccess(password2)
  // }
})
