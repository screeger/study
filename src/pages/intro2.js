import React from 'react';

export default (props) => {
	return (
		<React.Fragment>
			<h1>This is Intro Page Two</h1>
			<button onClick={() => {
				props.goNextPage('compassPage');
			}}>Next Page</button>
		</React.Fragment>
	);
}
