import React from 'react';
import NextPage from '../components/nextPage';

export default (props) => {
	return (
		<main>
			<h1>Why Use This Tool?</h1>
			<p>In the front end of the design process, there may be many paths of potential problems you can take.
				While it canbe a bit overwhelming, we are here to help you navigate your route by providing strategies
				that can ultimately steer your problem in the right direction.</p>
			<p>Follow the instructions on each page as you discover each new strategy.</p>
			<NextPage gotoPage={() => {
				props.goNextPage('problemScenario');
			}}>Continue</NextPage>
		</main>
	);
}
