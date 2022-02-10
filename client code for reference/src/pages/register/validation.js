function validation(values){
const errors = {};
const regexPass = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(!values.username)
errors.username = "Username is required";

if(!values.email)
errors.email = "Email is required"
else if(!regexPass.test(values.email))
errors.email = "Email is invalid"

if(!values.password)
errors.password = "Password is required"
else if(values.password.length <3)
errors.password = "Password should have minimum 3 characters"

return errors;
}



export default validation;