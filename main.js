let numberTextField = document.getElementById("number");
let saveButton = document.getElementById("btn");
let resetButton = document.getElementById("reset");

saveButton.addEventListener("click", () => {
  let sum = 0,
    avg = 0,
    pro = 1;
  let num = numberTextField.value;
  num = num.replaceAll(" ", "");
  let array = num.split(",");
  let newArr = array.map((ele) => {
    return Number.parseFloat(ele);
  });
  console.log(newArr);
  let validNumber = newArr.filter((ele) => {
    return !isNaN(ele);
  });
  console.log(validNumber);
  validNumber.forEach((element) => {
    sum += element;
    pro *= element;
  });
  avg = (sum / validNumber.length).toFixed(2);
  console.log(sum, pro, avg);

  document.getElementById("sum").value = sum;
  document.getElementById("average").value = avg;
  document.getElementById("product").value = pro;

  resetButton.addEventListener("click", () => {
    document.getElementById("sum").value = "";
    document.getElementById("average").value = "";
    document.getElementById("product").value = "";
    document.getElementById("number").value = "";
  });
});
