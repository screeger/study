import React from 'react';
import { getForPage } from '../helpers/storage';

export default props => {
	const userEntries = getForPage(props.storageId);
	const previousResponses = [];
	userEntries.forEach((entry) => {
		if (entry.value) {
			previousResponses.push(<p key={entry.key}>{entry.value}</p>)
		}
	});
	if (previousResponses.length === 0) return null;
	return (
		<div
			style={{
				padding: '1em',
				margin: '1em',
				backgroundColor: 'whitesmoke'
			}}>
			{previousResponses}
		</div>
	);
};
