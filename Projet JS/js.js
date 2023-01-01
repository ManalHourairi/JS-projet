function myFunction() {
  var x = document.getElementById("form3Example5");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function validation() {
 let mdp = document.getElementById("form3Example4").value;
  let cmdp = document.getElementById("form3Example5").value;
  if (mdp != cmdp) {
    document.getElementById('wrongPassword').style.color = 'red';
      document.getElementById('wrongPassword').innerHTML
      = 'Use same password !!!';
        } 
  else {
      document.getElementById('wrongPassword').style.color = 'green';
      document.getElementById('wrongPassword').innerHTML =
          'Password Matched';
  }
}



















