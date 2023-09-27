
let totalRestMoney = 0; // Declare the variable outside the event listeners

document.getElementById('calculate-btn').addEventListener('click', function() {
    const foodfield = parseInt(document.getElementById('food').value);
    const rentfield = parseInt(document.getElementById('rent').value);
    const clothesfield = parseInt(document.getElementById('clothes').value);
    if (
        foodfield == "" ||
        rentfield == "" ||
        clothesfield == "" ||
        foodfield <= 0 ||
        rentfield <= 0 ||
        clothesfield <= 0
      ) {
        return alert("please enter any valid number");
      }
    const totalExpenses = foodfield + rentfield + clothesfield;

    const totalExpensesElement = document.getElementById("total-expence");
    totalExpensesElement.innerText = totalExpenses;

    const mysalary = parseInt(document.getElementById('monthly-salary').value);
    totalRestMoney = mysalary - totalExpenses; // Update the variable here

    const totalRestMoneyElement = document.getElementById("total-rest-money");
    totalRestMoneyElement.innerText = totalRestMoney;
});

document.getElementById('save-btn').addEventListener('click', function() {
    const savingParse = parseInt(document.getElementById('save-money').value);
    const savingAmount = (savingParse / 100) * totalRestMoney;

    const savingAmountElement = document.getElementById("after-save");
    savingAmountElement.innerText = savingAmount;

    const remainingMoney =document.getElementById('ramaining-balance');
    const  remaining = totalRestMoney -  savingAmount;
    remainingMoney.innerText = remaining;


});






