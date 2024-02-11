

export const checkValidData = (email, password, name) => {


const isEmailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const isPasswordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
// const isNameValidate = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);


if(!isEmailValidate) return "Email is not valid";
if(!isPasswordValidate) return "Password is not valid";
// if(!isNameValidate) return "Name is not Valid";
// 
return null;

};