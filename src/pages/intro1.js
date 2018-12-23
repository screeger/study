import React from 'react';
import NextPage from '../components/nextPage';

export default (props) => {
	return (
		<main>
			<h1>This is Intro Page One</h1>
			<p>Lots of cool stuff to talk about.</p>
			<NextPage gotoPage={() => {
				props.goNextPage('intro2');
			}}>Continue</NextPage>
			</main>
	);
}
