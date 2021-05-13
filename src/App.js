import React, { useState, useEffect } from "react";
// import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import Editeur from "./components/Editeur";
import Alert from "./components/Alert";
import uuid from "uuid/v4";


const initialExpenses = localStorage.getItem("expenses")
	? JSON.parse(localStorage.getItem("expenses"))
	: [];
function App() {
	// all expenses, add expense
	const [expenses, setExpenses] = useState(initialExpenses);
	// single expense
	const [charge, setCharge] = useState("");
	// single amount
	const [amount, setAmount] = useState("");
	// alert
	const [alert, setAlert] = useState({ show: false });
	// edit
	const [edit, setEdit] = useState(false);
	// id
	const [id, setId] = useState(0);
	useEffect(
		() => {
			console.log("called");

			localStorage.setItem("expenses", JSON.stringify(expenses));
		},
		[expenses]
	);
	// *********** functionality **************
	//add charge
	const handleCharge = e => {
		setCharge(e.target.value);
	};
	// add amount
	const handleAmount = e => {
		let amount = e.target.value;
		if (amount === "") {
			setAmount(amount);
		} else {
			setAmount(parseInt(amount));
		}
	};

	// handle alert
	const handleAlert = ({ type, text }) => {
		setAlert({ show: true, type, text });
		setTimeout(() => {
			setAlert({ show: false });
		}, 7000);
	};
	// handle submit
	const handleSubmit = e => {
		e.preventDefault();
		if (charge !== "" && amount > 0) {
			if (edit) {
				let tempExpenses = expenses.map(item => {
					return item.id === id ? { ...item, charge, amount } : item;
				});
				setExpenses(tempExpenses);
				setEdit(false);
			} else {
				const singleExpense = { id: uuid(), charge, amount };
				setExpenses([...expenses, singleExpense]);
				handleAlert({ type: "success", text: "item added" });
			}
			// set charge back to empty string
			setCharge("");
			// set amount back to zero
			setAmount("");
		} else {
			handleAlert({
				type: "danger",
				text: `charge can't be empty value and amount value has to be bigger than zero`
			});
		}
	};

	// handle delete
	const handleDelete = id => {
		let tempExpenses = expenses.filter(item => item.id !== id);
		setExpenses(tempExpenses);
		handleAlert({ type: "danger", text: "item deleted" });
	};

	//clear all items
	const clearItems = () => {
		setExpenses([]);
	};

	// handle edit
	const handleEdit = id => {
		let expense = expenses.find(item => item.id === id);
		let { charge, amount } = expense;
		setCharge(charge);
		setAmount(amount);
		setEdit(true);
		setId(id);
	};

	return (
		<section>
			<div className="container">
				{alert.show && <Alert type={alert.type} text={alert.text} />}

				<div className="text-center"></div>
				<h1>Hello from New Market</h1>
				<main className="App">
					<Editeur
						expenses={expenses}
						handleDelete={handleDelete}
						clearItems={clearItems}
						handleEdit={handleEdit}
					/>
					<div>
						<table class="table table-bordered">
							<tbody>
								<tr>
									<td colspan="2">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</td>
									<td>
										<strong>
											Total Spending : 			$
										<span className="text-danger">
												{expenses.reduce((acc, curr) => {
													return (acc += curr.amount);
												}, 0)}
											</span>
										</strong>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<ExpenseForm
						handleSubmit={handleSubmit}
						charge={charge}
						handleCharge={handleCharge}
						amount={amount}
						handleAmount={handleAmount}
						edit={edit}
					/>
				</main>
			</div>
		</section>
	);
}

export default App;
