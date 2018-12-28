import React from "react";
import NextPage from "../components/nextPage";

export default (props) => {
	return (
		<main>
			<h1>Problem Solution Co-Evolution</h1>
			<p>Within the problem generation space, there are multiple alternative views to reframe a problem statement.
				This exercise is to help view your problem in different ways that you may not have considered.
				The 12 strategies will help you uncover new ways to develop your problem and implement with the solution.</p>
			<p>For this study, you will receive 3 random strategies using a particular scenario. The paper and pen you received
				is to help you think through ideas.</p>

			<h1 style={{marginTop:'4em'}}>Why Use This Tool?</h1>
			<p>In the front end of the design process, there may be many paths of potential problems you can take.
				While it canbe a bit overwhelming, we are here to help you navigate your route by providing strategies
				that can ultimately steer your problem in the right direction.</p>
			<p>Follow the instructions on each page as you discover each new strategy.</p>
			<p>If you have any questions during this time, please ask Sammy.</p>
			<NextPage gotoPage={() => {
				props.goNextPage('problemScenario');
			}}>Continue</NextPage>
		</main>
	);
}
