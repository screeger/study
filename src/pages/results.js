import React from 'react';
import { getItem, getPonderboxKeys } from '../helpers/storage';
import { SCENARIOS } from '../helpers/constants';
import Ponderbox from '../components/ponderBox';
import Likert from '../components/likert';

export default props => {
	const originalProblem = getItem('problemScenario_0');
	const keyArray = getPonderboxKeys();
	const allSectionResults = compileAllResults(keyArray);

	return (
		<main>
			<h1>Feedback and Results</h1>
			<p>Below are the answers you entered for all 3 scenarios.</p>
			<p>
				Please <strong>print</strong> out this page or “print” to PDF to save
				it. If you have any issues, please ask Sammy.
			</p>
			<hr />

			<p style={{ marginTop: '2em' }}>
				<label>
					Full Name: <br />
					<input size={40} />
				</label>
			</p>

			<p style={{ marginTop: '2em' }}>
				<label>
					Age: <br />
					<input size={10} />
				</label>
			</p>

			<fieldset style={{ marginTop: '2em' }}>
				<legend>What is your current education level (Major and degree)? </legend>
				<label>
					<input type="checkbox" name="occupation" /> Junior Industrial Design B.S.
				</label>
				<br />
				<label>
					<input type="checkbox" name="occupation" /> Senior Industrial Design B.S.
				</label>
				<br />
				<label>
					<input type="checkbox" name="occupation" /> Master's Industrial Design
				</label>
				<br />
				<label>
					<input type="checkbox" name="occupation" /> Master's HCI
				</label>
				<br />
				<label>
					<input type="checkbox" name="occupation" /> Ph.D HCI
				</label>
        <label>
					<input type="checkbox" name="occupation" /> Other
				</label>
			</fieldset>

			<p style={{ marginTop: '2em' }}>
				<Likert
					question="How helpful did you find the 1st strategy?"
					responses={[
						{ value: 1, text: 'Not Helpful' },
						{ value: 2, text: 'Slightly Helpful' },
						{ value: 3, text: 'Moderately Helpful' },
						{ value: 4, text: 'Very Helpful' },
						{ value: 5, text: 'Extremely Helpful' }
					]}
					picked={() => {}}
				/>
			</p>

			<p style={{ marginTop: '2em' }}>
				<Likert
					question="How helpful did you find the 2nd strategy?"
					responses={[
						{ value: 1, text: 'Not Helpful' },
						{ value: 2, text: 'Slightly Helpful' },
						{ value: 3, text: 'Moderately Helpful' },
						{ value: 4, text: 'Very Helpful' },
						{ value: 5, text: 'Extremely Helpful' }
					]}
					picked={() => {}}
				/>
			</p>

			<p style={{ marginTop: '2em' }}>
				<Likert
					question="How helpful did you find the 3rd strategy?"
					responses={[
						{ value: 1, text: 'Not Helpful' },
						{ value: 2, text: 'Slightly Helpful' },
						{ value: 3, text: 'Moderately Helpful' },
						{ value: 4, text: 'Very Helpful' },
						{ value: 5, text: 'Extremely Helpful' }
					]}
					picked={() => {}}
				/>
			</p>

			<p style={{ marginTop: '2em' }}>
				<Likert
					question="Overall, how easy was it to use the strategies?"
					responses={[
						{ value: 1, text: 'Very Difficult' },
						{ value: 2, text: 'Moderately Difficult' },
						{ value: 3, text: 'Neither Easy nor Difficult' },
						{ value: 4, text: 'Moderately Easy' },
						{ value: 5, text: 'Very Easy' }
					]}
					picked={() => {}}
				/>
			</p>

			<p style={{ marginTop: '2em' }}>
				<Likert
					question="How creative do you think your new statements are compared to your original statement?"
					responses={[
						{ value: 1, text: 'Not at all Creative' },
						{ value: 2, text: 'Slightly Creative' },
						{ value: 3, text: 'Moderately Creative' },
						{ value: 4, text: 'Very Creative' },
						{ value: 5, text: 'Extremely Creative' }
					]}
					picked={() => {}}
				/>
			</p>

			<p style={{ marginTop: '2em', fontWeight: 'bold' }}>
				Which strategy was the most applicable? Why?
			</p>
			<Ponderbox
				allowAdditional={false}
				placeholder=""
				storageKey="applicable"
				autoFocus={false}
			/>

			<p style={{ marginTop: '2em', fontWeight: 'bold' }}>
				Did you find any benefit from learning new strategies?{' '}
				<em>Please explain your answer.</em>
			</p>
			<Ponderbox
				allowAdditional={false}
				placeholder=""
				storageKey="benefit"
				autoFocus={false}
			/>

			<h1 style={{ marginTop: '2em' }}>Original Problem Statement</h1>
			<p>
				<em>Note: You can edit any of your answers now by selecting one.</em>
			</p>
			<p contentEditable>{originalProblem}</p>
			{allSectionResults}
		</main>
	);
};

function compileAllResults(keyArray) {
	// Each item in keyArray represents a single Ponderbox entry.
	let headerId = '';
	let prevHeaderId = 'zzNoMatch';
	let scenarioHeader = '';

	let sectionId = '';
	let prevSectionId = 'zzNoMatch';
	let sectionHeader = '';

	return keyArray.map(key => {
		const parsedKey = /(^s\d+)(p\d+)/.exec(key);
		if (parsedKey && parsedKey.length === 3) {
			headerId = parsedKey[1];
			sectionId = parsedKey[2];
		} else {
			prevHeaderId = 'unknown';
			prevSectionId = 'unknown';
		}

		// Print Scenario header if needed.
		if (headerId !== prevHeaderId) {
			scenarioHeader = <h2>{getScenarioHeader(headerId)}</h2>;
		} else {
			scenarioHeader = null;
		}

		// Print section header if needed.
		if (sectionId !== prevSectionId) {
			sectionHeader = <h3>{getSectionHeader(sectionId)}</h3>;
		} else {
			sectionHeader = null;
		}

		prevHeaderId = headerId;
		prevSectionId = sectionId;
		return (
			<React.Fragment key={key}>
				{scenarioHeader}
				<div style={{ paddingLeft: '2em' }}>
					{sectionHeader}
					<p contentEditable>{getItem(key)}</p>
				</div>
			</React.Fragment>
		);
	});
}

function getScenarioHeader(headerId) {
	const headerNumber = parseInt(/\d+/.exec(headerId)[0], 10);
	const headerName = SCENARIOS[headerNumber].name;
	return headerName;
}

function getSectionHeader(sectionId) {
	if (sectionId === 'p4') {
		return 'Problem Statement Part One';
	}
	if (sectionId === 'p6') {
		return 'Problem Statement Part Two';
	}
	return 'Other Section';
}
