function autofill() {
  let strName = document.getElementById("Name").value;
  if (strName) {
    const array = strName.split(",");
    document.getElementById("firstName").value = array[0];
    document.getElementById("firstName").disabled = true;
    document.getElementById("middleName").value = array[1];
    document.getElementById("middleName").disabled = true;
    document.getElementById("lastName").value = array[2];
    document.getElementById("lastName").disabled = true;
  }
  
}

function validation() {
  let email = document.getElementById("email").value;
  let email2 = document.getElementById("email2").value;

  if (email !== email2) {
    document.getElementById("errorEmail").value = "Not match";
  }

  
}
