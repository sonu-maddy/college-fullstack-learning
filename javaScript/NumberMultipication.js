const GenerateTable = () => {
  let number = document.getElementById("inputNumber").value;
  let span = document.getElementById("validateMSg");
  let TableDiv = document.getElementById("tablediv");

  if (number === "" || isNaN(number)) {
    span.innerHTML = "Please enter a valid number";
    return;
  }

  let userNumber = parseInt(number);

  let TableContent = `<h1> Multiplication Table of  ${userNumber} </h1>`;
  TableContent += "<ul>";
  for (let i = 1; i <= 10; i++) {
    TableContent += `<li>${userNumber} x ${i} = ${userNumber * i}</li>`;
  }
  TableContent += "</ul>";

  TableDiv.innerHTML = TableContent;
};
