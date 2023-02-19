console.log('Hello!');

let totalMonthlyCost = 0;

function submitInfo(event) {
    console.log('submitting information');
    event.preventDefault();

    

    let firstName = document.querySelector('#firstname-input').value;
    let lastName = document.querySelector('#lastname-input').value;
    let id = document.querySelector('#id-input').value;
    let title = document.querySelector('#title-input').value;
    let salary = document.querySelector('#salary-input').value;
    let calculatorDiv = document.querySelector('#employeesData');
    let monthlySalaryDiv = document.querySelector('#totalMonthlySalary');
    let totalMonthlyCost = salary;
    let avgMonthlySalary = totalMonthlyCost % 12;

    calculatorDiv.innerHTML += `
      <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>${Number(salary)}</td>
            <td><button onClick="removeRow(event)">Delete</button></td>
        </tr>

    `;
     if (avgMonthlySalary >= 20000) {
        monthlySalaryDiv.style.backgroundColor = 'red';
        document.querySelector('#monthly-salary').innerHTML = avgMonthlySalary;

     } else {
        monthlySalaryDiv.style.backgroundColor = '';
     }
}

function removeRow(event) {
    event.target.closest('tr').remove();
}



