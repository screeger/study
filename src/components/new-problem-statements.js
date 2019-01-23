import React from 'react';
import { getForPage } from "../helpers/storage";

export default (props) => {
	const userEntries = getForPage(props.storageId);

	return (
		<div style={{
			padding: '1em',
			margin: '1em',
			backgroundColor: 'whitesmoke'
		}}>
			{userEntries.map((entry, idx) => <p key={idx}>{entry.value}</p>)}
		</div>
	)
}