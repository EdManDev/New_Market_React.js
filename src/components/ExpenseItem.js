import React from "react";
// import { MdEdit, MdDelete } from "react-icons/md";
import { Table } from "react-bootstrap";

const ExpenseItem = ({
	expense: { id, charge, amount, quatites },
	handleDelete,
	handleEdit
}) => {
	return (
		<div className="item">
			<div>
				<Table striped bordered hover>
					<tbody>
						{/* next */}
						<tr>
							<td>
								{charge}
							</td>
							<td>
								${amount}
							</td>
							{/* <td>
								${amount}
							</td> */}
							<td>
								<button
									className="btn btn-info btn-block"
									aria-label="edit button"
									onClick={() => handleEdit(id)}
								>
									<i class="fa fa-edit fa-lg" />
								</button>
							</td>
							<td>
								<button
									className="btn btn-danger btn-block"
									aria-label="delete button"
									onClick={() => handleDelete(id)}
								>
									<i class="fa fa-trash-o fa-lg" />
								</button>
							</td>
						</tr>
						{/* next */}
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default ExpenseItem;
