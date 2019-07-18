import React from "react";
import { MdSend } from "react-icons/md";
import { ListGroup, Row, Col } from "react-bootstrap";

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
				{/* 
				<div className="form-center">
					<div className="form-group">
						<label htmlFor="expense">charge</label>
						<input
							type="text"
							className="form-control"
							id="charge"
							name="charge"
							placeholder="e.g. rent"
							value={charge}
							onChange={handleCharge}
						/>
					</div>
					{/* <div className="#">
					<label htmlFor="#">Quantites</label>
					<input
					// type="text"
					// className="form-control"
					// id="charge"
					// name="charge"
					// placeholder="e.g. rent"
					// value={charge}
					// onChange={handleCharge}
					/>
				</div> 
					<div className="form-group">
						<label htmlFor="amount">amount</label>
						<input
							type="number"
							className="form-control"
							id="amount"
							name="amount"
							placeholder="e.g. 100"
							value={amount}
							onChange={handleAmount}
						/>
					</div>
				</div>
					*/}

				<button type="submit" className="btn">
					{edit ? "edit" : "submit"}
					{/* submit  */}
					<MdSend className="btn-icon" />
				</button>
			</form>
			<div>
				<ListGroup>
					<ListGroup.Item variant="primary">
						<Row>
							<Col variant="primary">
								<input
									type="text"
									className="form-control"
									placeholder="Charge"
									type="text"
									className="form-control"
									id="charge"
									name="charge"
									placeholder="e.g. rent"
									value={charge}
									onChange={handleCharge}
								/>
							</Col>
							<Col>
								<input
									type="text"
									className="form-control"
									placeholder="Amount"
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
								<button className="btn btn-primary btn-block">Ajouter </button>
							</Col>
							<Col />
							<Col />
						</Row>
					</ListGroup.Item>
				</ListGroup>
			</div>
		</div>
	);
};

export default ExpenseForm;
