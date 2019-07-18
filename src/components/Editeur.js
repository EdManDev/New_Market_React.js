import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
	return (
		<div>
			<div>
				{expenses.map(expense => {
					return (
						<ExpenseItem
							key={expense.id}
							expense={expense}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
						/>
					);
				})}
			</div>
			{expenses.length > 0 &&
				<button className="btn" onClick={clearItems}>
					clear expenses
					<MdDelete className="btn-icon" />
				</button>}
		</div>
	);
};

export default ExpenseList;
