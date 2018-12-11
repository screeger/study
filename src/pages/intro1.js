import React from 'react';

export default (props) => {
	return (
		<React.Fragment>
			<h1>This is Intro Page One</h1>
			<button onClick={() => {
				props.goNextPage('intro2');
			}}>Next Page</button>
		</React.Fragment>
	);
}
