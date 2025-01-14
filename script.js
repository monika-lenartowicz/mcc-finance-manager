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
const transactionAmount = document.querySelector(".js-transactionAmount ");
const lightColorButton = document.querySelector(".js-colorLight");
const darkColorButton = document.querySelector(".js-colorDark");

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArrey = [0];

const showPanel = () => {
	addTransactionPanel.style.display = "flex";
};

const closePanel = () => {
	addTransactionPanel.style.display = "none";
	clearInputs();
};

const checkForm = () => {
	if (
		panelNameTransaction.value !== "" &&
		panelAmountTransaction.value !== "" &&
		selectTransactonCategory.value !== "none"
	) {
		createNewTransaction();
	} else {
		console.log("nie jest ok");
	}
};

const clearInputs = () => {
	panelNameTransaction.value = "";
	panelAmountTransaction.value = "";
	selectTransactonCategory.selectedIndex = 0;
};

const createNewTransaction = () => {
	const newTransaction = document.createElement("div");
	newTransaction.classList.add("transaction");
	newTransaction.setAttribute("id", ID);

	checkCategory(selectedCategory);

	newTransaction.innerHTML = `
        <p class="transactionName js-transactionName">${categoryIcon}
          ${panelNameTransaction.value}
        </p>
        <p class="transactionAmount js-transactionAmount">
            ${panelAmountTransaction.value}zł
            <button class="delete js-delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button>
        </p>
	`;

	panelAmountTransaction.value > 0
		? incomeArea.appendChild(newTransaction) && newTransaction.classList.add("income")
		: expensesArea.appendChild(newTransaction) && newTransaction.classList.add("expense");

	moneyArrey.push(parseFloat(panelAmountTransaction.value));
	countMoney(moneyArrey);

	closePanel();
	ID++;
	clearInputs();
};

const selectCategory = () => {
	selectedCategory = selectTransactonCategory.options[selectTransactonCategory.selectedIndex].text;
};

const checkCategory = transaction => {
	switch (transaction) {
		case "[ + ] Przychód":
			categoryIcon = '<i class="fas fa-money-bill-wave"></i>';
			break;
		case "[ - ] Zakupy":
			categoryIcon = '<i class="fas fa-cart-arrow-down"></i>';
			break;
		case "[ - ] Jedzenie":
			categoryIcon = '<i class="fas fa-hamburger"></i>';
			break;
		case "[ - ] Kino":
			categoryIcon = '<i class="fas fa-film"></i>';
			break;
	}
};

const countMoney = money => {
	const newMoney = money.reduce((a, b) => a + b);
	availableMoney.textContent = `${newMoney}zł`;
};

const deleteTransaction = id => {
	const transactionToDelete = document.getElementById(id);
	const transactionAmount = parseFloat(transactionToDelete.childNodes[3].innerText);
	const indexOfTransaction = moneyArrey.indexOf(transactionAmount);

	moneyArrey.splice(indexOfTransaction, 1);

	if (transactionToDelete.classList.contains("income")) {
		incomeArea.removeChild(transactionToDelete);
	} else {
		expensesArea.removeChild(transactionToDelete);
	}

	countMoney(moneyArrey);
};

const deleteAllTransaction = () => {
	incomeArea.innerHTML = '<h3 class="incomeArea__header">Wpływy:</h3>';
	expensesArea.innerHTML = '<h3 class="expensesArea__header">Wydatki:</h3>';
	availableMoney.textContent = "0zł";
	moneyArrey = [0];
};

const changedThemeToDark = () => {
	root.style.setProperty("--first-color", "#14161f");
	root.style.setProperty("--second-color", "#f9f9f9");
	root.style.setProperty("--border-color", "rgba(255, 255, 255, 0.2)");
};
const changedThemeToLight = () => {
	root.style.setProperty("--first-color", "#f9f9f9");
	root.style.setProperty("--second-color", "#14161f");
	root.style.setProperty("--border-color", "rgba(0, 0,0, 0.2)");
};

addTransactionButton.addEventListener("click", showPanel);
cancelButton.addEventListener("click", closePanel);
saveButton.addEventListener("click", checkForm);
removeAllTransactionButton.addEventListener("click", deleteAllTransaction);
darkColorButton.addEventListener("click", changedThemeToDark);
lightColorButton.addEventListener("click", changedThemeToLight);
