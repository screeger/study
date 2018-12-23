import React from 'react';
import NextPage from '../components/nextPage';

export default (props) => {
	return (
		<main>
			<h1>This is Intro Page Two</h1>
			<p>Lots of cool stuff to talk about.</p>
			<NextPage gotoPage={() => {
				props.goNextPage('problemScenario');
			}}>Continue</NextPage>
		</main>
	);
}
