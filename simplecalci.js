function addNumbers() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = "Result: " + (a + b);
}