import React from 'react';
import NextPage from '../components/nextPage';

export default (props) => {
	return (
		<main>
			<h1>Problem Solution Co-Evolution</h1>
			<p>Within the problem generation space, there are multiple alternative views to reframe a problem statement.
				This exercise is to help view your problem in different ways that you may not have considered.
				The 12 strategies will help you uncover new ways to develop your problem and implement with the solution.</p>
			<p>For this study, you will receive 3 random strategies using a particular scenario. The paper and pen you received
				is to help you think through ideas.

			</p>
			<p>If you have any questions during this time, please ask Sammy.</p>
			<NextPage gotoPage={() => {
				props.goNextPage('intro2');
			}}>Continue</NextPage>
			</main>
	);
}
