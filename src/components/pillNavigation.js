import React from 'react';
import PropTypes from 'prop-types';
import PillBtn from './pillBtn';

import './pillNavigation.css';

class PillNavigation extends React.Component {
	render () {
		const { active, navRequested } = this.props;
		return (
			<div className='pillNavigation'>
				<PillBtn position={1} active={active === 1} navRequested={navRequested} />
				<PillBtn position={2} active={active === 2} navRequested={navRequested} />
				<PillBtn position={3} active={active === 3} navRequested={navRequested} />
			</div>
		)
	}


}

PillNavigation.propTypes = {
	active: PropTypes.number.isRequired,
	navRequested: PropTypes.func.isRequired
}

export default PillNavigation;
