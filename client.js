console.log('Hello!');

function submitInfo(event) {
    console.log('submitting information');
    event.preventDefault();
    let firstName = document.querySelector('#firstname-input').value;
    let lastName = document.querySelector('#lastname-input').value;
    let id = document.querySelector('#id-input').value;
    let title = document.querySelector('#title-input').value;
    let salary = document.querySelector('#salary-input').value;
    let calculatorDiv = document.querySelector('#employeesData');
    calculatorDiv.innerHTML += `
      <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${Number(id)}</td>
            <td>${title}</td>
            <td>${salary}</td>
            <td><button onClick="removeRow(event)">Delete</button></td>
        </tr>

    `;
}

function removeRow(event) {
    event.target.closest('tr').remove();
}

function totalMonthlySalary(event) {
    let sum = 0;
    let totalSalary = sum;
    return totalSalary;
}

console.log(totalMonthlySalary);