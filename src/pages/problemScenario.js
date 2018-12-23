import React from 'react';
import NextPage from '../components/nextPage';
import bkgdImg from '../images/park-design-small.jpg';

export default (props) => {
	return (
		<main>
			<h1>Problem Scenario</h1>
			<section style={{
				backgroundImage: `url(${bkgdImg})`,
				backgroundPositionX: 'right',
				backgroundSize: '70%',
				backgroundRepeat: 'no-repeat',
				minHeight: '427px'
			}}>
				<p style={{
					width: '60%',
					backgroundColor: 'rgba(255, 255, 255, 0.6)',
					padding: '0.5em 1em 1em 0'
				}}>
				Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. Bacon is tasty and nutricious. </p>
			</section>
			<NextPage gotoPage={() => {
				props.goNextPage('compass');
			}}>Continue</NextPage>
		</main>
	);
}
