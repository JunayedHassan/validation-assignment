

//Functions
function validateEmail(){
    const name = prompt("Please enter your email.");
    validator(name, "email");
}
  
function validateMob(){
  const name = prompt("Please enter your Mobile number (only the last 11 digits).");
  validator(name, "phone");
}

function validatePostal(){
  const name = prompt("Please enter your four digit Postal Code.");
  validator(name, "postal");
}

function validator(string, method){
let showResult = document.getElementById('showOtpt');

    switch (method) {
        case "email":
        ifNotEmpty(string);
        if(ifNotEmpty(string)){
          const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          const result = regex.test(string) ? `Valid` : `Not Valid`;
          showResult.innerText = result;
        }
          break;
        case "phone":
          if(ifNotEmpty(string)){
            const regex = /^0\d{10}$/;
            const result = regex.test(string) ? `Valid` : `Not Valid`;
            showResult.innerText = result;
          }
          break;
        case "postal":
          if(ifNotEmpty(string)){
            const regex = /^\d{4}$/;
            const result = regex.test(string) ? `Valid` : `Not Valid`;
            showResult.innerText = result;
          }
          break;
        default:
            showResult.innerText= "";
      }


  // To show that the user hasnt typed anything
  function ifNotEmpty(string){

    if(string !=""){
      return string;
    } else {
      showResult.innerText= `You didn't typed anything in the prompt`;
    }
  }

}
