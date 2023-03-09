function fun() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  if (firstname == "" || lastname == "") {
    alert("please fill all the fields");
  }
}
