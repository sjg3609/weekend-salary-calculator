console.log('Hello!');

let totalMonthlyCost = 0;
let calculatorDiv = document.querySelector('#employeesData');
let monthlySalaryDiv = document.querySelector('#totalMonthlySalary');

// letting the form field reset to an empty string after refreshing the page
document.querySelector('#firstname-input').value = '';
document.querySelector('#lastname-input').value = '';
document.querySelector('#id-input').value = '';
document.querySelector('#title-input').value = '';
document.querySelector('#salary-input').value = '';

function submitInfo(event) {
    console.log('submitting information');
    event.preventDefault();
    let firstName = document.querySelector('#firstname-input').value;
    let lastName = document.querySelector('#lastname-input').value;
    let id = document.querySelector('#id-input').value;
    let title = document.querySelector('#title-input').value;
    let salary = document.querySelector('#salary-input').value;
    // let totalMonthlyCost = Number(salary);
    // setting the totalMonthlyCost variable equal the salary input from the user inputs and dividing by 12 to get a monthly salary number
    totalMonthlyCost += salary / 12;
    // appending all the user info from the form fields onto the DOM using innerHTML
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
    // appending 
    monthlySalaryDiv.innerHTML = `
    
    <h2>Total Monthly Salary: <span id="monthly-salary">${Number(totalMonthlyCost)}</span></h2>
    
    `;
    // if statement here checks to see if the totalMonthlyCost variable
    // declared earlier in the is greater than $20,000 and then when it is, the div in HTMNL has background color set to red
     if (totalMonthlyCost >= 20000) {
        monthlySalaryDiv.style.backgroundColor = 'red';
        monthlySalaryDiv.style.color = 'white';
     } 
}

function removeRow(event) {
    // event.target.closest will work up the element tree in code and then remove it
    // this is looking for 'tr' in the HTML and then will remove it when clicked
    event.target.closest('tr').remove();
    let subtractSalary = event.target.parentElement.previousElementSibling;
    let changeSalary = Number(subtractSalary);
    totalMonthlyCost -= changeSalary;
};

// function removePerson() {
//     totalMonthlyCost -= salary / 12;

//     monthlySalaryDiv.style.backgroundColor = '';
// }
