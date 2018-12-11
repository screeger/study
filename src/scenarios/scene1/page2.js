import React from 'react';
import PillNavigation from '../../components/pillNavigation';

export default () => {
	return (
		<React.Fragment>
			<h1>This is Scene 1 - Page Two</h1>
			<PillNavigation active={2} />
		</React.Fragment>
	);
}
