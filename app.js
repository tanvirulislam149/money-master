// taking value from single input field 
function incomeAndSaveInput(field, errorField) {
    let fieldValue = parseFloat(document.getElementById(field).value);
    let error = document.getElementById(errorField);
    if (fieldValue < 0) {
        error.style.display = "block";
        error.innerText = "Wrong information on input Field";
    }
    else {
        error.style.display = "none";
        return fieldValue;
    }
}
// Calculating Expenses
function calculatingExpenses(food, rent, clothes) {
    let foodField = parseFloat(document.getElementById(food).value);
    let rentField = parseFloat(document.getElementById(rent).value);
    let clothesField = parseFloat(document.getElementById(clothes).value);
    let expensesText = document.getElementById("total-expenses");
    let calculateError = document.getElementById("calculate-error");
    if (foodField < 0) {
        calculateError.style.display = "block";
        calculateError.innerText = "Wrong information on Food Field"
        if (rentField < 0) {
            calculateError.style.display = "block";
            calculateError.innerText = "Wrong information on Food and Rent Field";
            if (clothesField < 0) {
                calculateError.style.display = "block";
                calculateError.innerText = "Wrong information on Food, Rent and Clothes Field";
            }
        }
        else if (clothesField < 0) {
            calculateError.style.display = "block";
            calculateError.innerText = "Wrong information on Food and Clothes Field";
        }
    }
    else if (rentField < 0) {
        calculateError.style.display = "block";
        calculateError.innerText = "Wrong information on Rent Field";
        if (clothesField < 0) {
            calculateError.style.display = "block";
            calculateError.innerText = "Wrong information on Rent and Clothes Field"
        }
    }
    else if (clothesField < 0) {
        calculateError.style.display = "block";
        calculateError.innerText = "Wrong information on Clothes Field";
    }
    else {
        let addExpenses = foodField + rentField + clothesField;
        expensesText.innerText = addExpenses;
        expensesNumber = parseFloat(expensesText.innerText);
        calculateError.style.display = "none";
    }
    return expensesNumber;
}
// Calculating Balance 
function calculatingBalance() {
    let incomeNumber = incomeAndSaveInput("income-field", "income-error");
    let totalExpenses = calculatingExpenses("food-field", "rent-field", "clothes-field");
    let balanceText = document.getElementById("balance");
    let balance = incomeNumber - totalExpenses;
    balanceText.innerText = balance;
    return balance;
}
document.getElementById("calc-btn").addEventListener("click", function () {
    calculatingBalance();
})
// Calculating Savings 
function calculateSavings() {
    let incomeNumber = incomeAndSaveInput("income-field", "income-error");
    let saveNumber = incomeAndSaveInput("save-field", "save-error");
    let savingsAmount = document.getElementById("savings-amount");
    let error = document.getElementById("save-error");
    let compareBalance = calculatingBalance();
    let savings = (incomeNumber * (saveNumber / 100));
    if (savings > compareBalance) {
        error.style.display = "block";
        error.innerText = "Wrong information on input Field";
    }
    else {
        error.style.display = "none";
        savingsAmount.innerText = savings;
    }

}
document.getElementById("save-btn").addEventListener("click", function () {
    calculateSavings();
})