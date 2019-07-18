import React, { Component } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";

export default class Editeur extends Component {
	render() {
		return (
			<div>
				<ListGroup>
					<ListGroup.Item variant="primary">
						<Row>
							<Col variant="primary">
								<input
									type="text"
									className="form-control"
									v-model="input.article"
									ref="modif"
									placeholder="Article"
									addTodo={this.addTodo}
								/>
							</Col>
							<Col>
								<input
									type="text"
									className="form-control"
									v-model="input.prix"
									placeholder="Prix"
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
		);
	}
}
