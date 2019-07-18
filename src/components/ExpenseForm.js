import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
// import ExpenseForm from "./components/ExpenseForm";

const ExpenseForm = ({
	charge,
	amount,
	handleCharge,
	handleAmount,
	handleSubmit,
	edit
}) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<ListGroup.Item variant="primary">
						<Row>
							<Col variant="primary">
								<input
									type="text"
									className="form-control"
									id="charge"
									name="charge"
									placeholder="e.g. products"
									value={charge}
									onChange={handleCharge}
								/>
							</Col>
							<Col>
								<input
									type="number"
									className="form-control"
									id="amount"
									name="amount"
									placeholder="e.g. 100"
									value={amount}
									onChange={handleAmount}
								/>
							</Col>
							<Col>
								<button type="submit" className="btn btn-primary btn-block">
									{edit ? "edit" : "Add Here  "}
									<i class="fa fa-edit fa-lg" />
								</button>
							</Col>
							<Col />
							<Col />
						</Row>
					</ListGroup.Item>
				</div>
			</form>
		</div>
	);
};

export default ExpenseForm;
