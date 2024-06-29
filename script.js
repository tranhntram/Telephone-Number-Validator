const phoneNumberInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const checkPhoneNumber = () => {

  const phoneNumber = phoneNumberInput.value;
  if (phoneNumber===""){
    alert("Please provide a phone number")
    return;
  }
  
  const regex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})([-\s]?[0-9]{3})([-\s]?[0-9]{4})$/;
  const match = phoneNumber.match(regex);
  
  if (match) {
    result.textContent = `Valid US number: ${phoneNumber}`;
    return;
  } else {
    result.textContent = `Invalid US number: ${phoneNumber}`;
    return;
  }
};

const clearPhoneNumber = () => {
  phoneNumberInput.value = "";
  result.textContent ="";

}; 

checkBtn.addEventListener('click', checkPhoneNumber);
clearBtn.addEventListener('click', clearPhoneNumber);
