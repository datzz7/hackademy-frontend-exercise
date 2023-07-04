// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// alert("Hello World")

const expenses = [
  {
    "id": 1,
    "title": "Rent",
    "amount": 1000
  },
  {
    "id": 2,
    "title": "Groceries",
    "amount": 200
  },
  {
    "id": 3,
    "title": "Utilities",
    "amount": 150
  },
  {
    "id": 4,
    "title": "Transportation",
    "amount": 100
  },
  {
    "id": 5,
    "title": "Entertainment",
    "amount": 50
  }
 ];

const expenses_list = document.getElementById("expenses-list");

expenses_list.innerHTML = "";

expenses.forEach((expense) => {
  const expenses_items = document.createElement("h3");
  expenses_items.textContent = `${expense.title}: $${expense.amount}`;
  expenses_list.append(expenses_items);
});

// function total_expense()
// const total_expense = document.getElementById("expenses-total")

let expense_total = 0

expenses.forEach((expense) => {
  expense_total+=expense.amount
});

const expense_total_amount = document.getElementById("expense-total")
expense_total_amount.append(`$${expense_total}`)
