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

  let date = document.getElementById("date").value;
  const now = new Date();
  const diff = Math.abs(now - date);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  document.getElementById("age").value = age;
  document.getElementById("age").disabled = true;
}

function calculateAge(date) {
  const now = new Date();
  const diff = Math.abs(now - date);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  return age;
}

function validation() {
  let email = document.getElementById("email").value;
  let email2 = document.getElementById("email2").value;

  if (email !== email2) {
    document.getElementById("errorEmail").value = "Not match";
  }
}
