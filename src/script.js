const expenseBtn = document.getElementById("expenseBtn")
const expenseList = document.getElementById("expenseList")

const incomeBtn = document.getElementById("incomeBtn")
const incomeList = document.getElementById("incomeList")

const descInput = document.getElementById("desc")
const amountInput = document.getElementById("amount")

let balanceTotal = document.getElementById("balance")

const inputListExpenses = []
const inputlistIncomes = []

function clearInput() {
    descInput.value = ""
    amountInput.value = ""
}

function addToExpenseList() {
    inputListExpenses.push({Description:descInput.value, Amount:amountInput.value, Type:"Expense"});
    console.log(inputListExpenses)
}

function addToIncomeList() {
    inputlistIncomes.push({Description:descInput.value, Amount:amountInput.value, Type:"Income"});
    console.log(inputlistIncomes)
}

// Expense Added
expenseBtn.addEventListener("click", () => {
    if ((descInput.value == "") || (amountInput.value == "")) {                         // if either type or amount fields are empty,
    }                                                                                   // do not add empty value to list
    else {
    const listItem = document.createElement("li")                                       // create an li item of listItem
    listItem.innerHTML = descInput.value + " - " + amountInput.value + " kr (Utgift)"   // display the type and amount of expense
    expenseList.appendChild(listItem)                                                   // make listItem a childe of incomeList
    balanceTotal.innerHTML = +balanceTotal.innerHTML + +-amountInput.value              // add the expense value (negative) to total balance
    addToExpenseList()                                                                  // run function to add input to expense array
    clearInput()                                                                        // run function to clear input fields
    }
})

// Income Added
incomeBtn.addEventListener("click", () => {
    if ((descInput.value == "") || (amountInput.value == "")) {                         // if either type or amount fields are empty,
    }                                                                                   // do not add empty value to list
    else {
    const listItem = document.createElement("li")                                       // create an li item of listItem
    listItem.innerHTML = descInput.value + " - " + amountInput.value + " kr (Inkomst)"  // display the type and amount of income
    incomeList.appendChild(listItem)                                                    // make listItem a childe of incomeList
    balanceTotal.innerHTML = +balanceTotal.innerHTML + +amountInput.value               // add the amount value to total balance
    addToIncomeList()                                                                   // run function to add input to income array
    clearInput()                                                                        // run function to clear input fields
    }
})
