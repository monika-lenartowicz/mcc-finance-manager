const incomeArea = document.querySelector(".js-incomeArea");
const expensesArea = document.querySelector(".js-expensesArea");
const availableMoney = document.querySelector(".js-availableMoney");
const addTransactionPanel = document.querySelector(".js-addTransactionPanel");

const panelNameTransaction = document.querySelector(".js-panelNameTransaction");
const panelAmountTransaction = document.querySelector(".js-panelAmountTransaction");
const selectTransactonCategory = document.querySelector(".js-selectTransactonCategory");

const addTransactionButton = document.querySelector(".js-addTransactionButton");
const deleteTransactionButton = document.querySelector(".js-delete");
const saveButton = document.querySelector(".js-saveButton");
const cancelButton = document.querySelector(".js-cancelButton");
const removeAllTransactionButton = document.querySelector(".js-removeAll");

const transactionName = document.querySelector(".js-transactionName");
const lightColorButton = document.querySelector(".js-colorLight");
const darkColorButton = document.querySelector(".js-colorDark");

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArrey = [0];
