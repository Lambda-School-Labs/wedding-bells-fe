import React from "react";

import "../../styles/mappedOver.scss";

import { Link } from "react-router-dom";

export const Headers = props => {
	return (
		<thead>
			<tr>
				<th>
					<h5>#</h5>
				</th>

				<th>
					<h5>Name</h5>
				</th>
				<th>
					<h5>Email</h5>
				</th>
				<th>
					<h5>Going?</h5>
				</th>
				<th>
					<h5>Responded to Invitation?</h5>
				</th>
				<th>
					<h5>Plus One?</h5>
				</th>
				<th>
					<h5>Update</h5>
				</th>
				<th>
					<h5>Delete</h5>
				</th>
			</tr>
		</thead>
	);
};

export const GuestData = ({
	name,
	email,
	going,
	response,
	plusOne,
	id,
	onUpdate,
	onDelete,
}) => {
	return (
		<React.Fragment>
			<tr>
				<th>{id}</th>
				<td>{name}</td>
				<td>{email}</td>
				<td>{going}</td>
				<td>{response}</td>
				<td>{plusOne}</td>
				<td className="editing">
					<Link onClick={onUpdate} target="_blank" rel="noopener noreferrer">
						<img
							className="editMe"
							alt="edit"
							src={require("../../assets/pencil.svg")}
						/>
					</Link>
				</td>
				<td className="deleting">
					<Link onClick={onDelete} target="_blank" rel="noopener noreferrer">
						<img
							alt="delete"
							className="deleteMe"
							src={require("../../assets/delete.svg")}
						/>
					</Link>
				</td>
			</tr>
		</React.Fragment>
	);
};