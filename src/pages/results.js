import React from 'react';
import { getAll } from '../helpers/storage';

export default () => {
	let results = getAll().map((answer, idx) => {
		return (
			<p key={idx} className="resultItem">{answer}</p>
		)
	});

	return (
		<main>
			<h1>This is Results Page</h1>
			<p>Below are the answers you entered.</p>
			{results}
		</main>
	);
}
