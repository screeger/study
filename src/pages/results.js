import React from 'react';
import { getAll } from '../helpers/storage';

export default () => {
	let results = getAll().map(answer => {
		return (
			<p>{answer}</p>
		)
	});

	return (
		<React.Fragment>
			<h1>This is Results Page</h1>;
			<p>Below are the answers you entered.</p>
			{results}
		</React.Fragment>
	);
}
