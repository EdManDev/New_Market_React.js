import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
	return (
		<div>
			<div className="card">

				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Charge</th>
							<th scope="col">Price</th>
							<th scope="col">Edit</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>
					<tbody>
						<>
							{expenses.map(expense => {
								return (
									<tr>
										<ExpenseItem
											key={expense.id}
											expense={expense}
											handleDelete={handleDelete}
											handleEdit={handleEdit}
										/>
									</tr>
								);
							})}
						</>
					</tbody>
				</table>
				{
					expenses.length > 0 &&
					<td>
						<button
							className="btn btn-danger btn-block"
							onClick={clearItems}
							placeholder="e.g. 100"
						>
							Clear All⠀
						<i class="fa fa-trash-o fa-lg" />
						</button>
					</td>
				}
			</div>
		</div>
	);
};

export default ExpenseList;
