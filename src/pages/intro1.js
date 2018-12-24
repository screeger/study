import React from 'react';
import NextPage from '../components/nextPage';
import { clear } from '../helpers/storage';

export default (props) => {
	clear(); // TODO: Move this to the results page.
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
