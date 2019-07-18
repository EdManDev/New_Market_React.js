import React from "react";
import ExpenseItem from "./ExpenseItem";
// import { MdDelete } from "react-icons/md";

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
				<td>
					<button className="btn btn-danger btn-block" onClick={clearItems}>
						Clear All .
						<i class="fa fa-trash-o fa-lg" />
						{/* <MdDelete className="btn-icon" /> */}
					</button>
				</td>}
		</div>
	);
};

export default ExpenseList;
