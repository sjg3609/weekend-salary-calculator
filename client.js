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
    // let totalMonthlyCost = Number(salary);
    totalMonthlyCost+= salary / 12;

    calculatorDiv.innerHTML += `
      <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>${salary}</td>
            <td><button onClick="removeRow(event)">Delete</button></td>
        </tr>

    `;
    
    monthlySalaryDiv.innerHTML = `
    
    <h2>Total Monthly Salary: <span id="monthly-salary">${Number(totalMonthlyCost)}</span></h2>
    
    
    `;

     if (totalMonthlyCost >= 20000) {
        monthlySalaryDiv.style.backgroundColor = 'red';

     } 
}

function removeRow(event) {
    event.target.closest('tr').remove();
}


