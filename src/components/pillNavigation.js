import React from 'react';
import PropTypes from 'prop-types';

import './pillNavigation.css';

class PillNavigation extends React.Component {
	render () {
		return (
			<div className='pillNavigation'>
				<button className={`pillFirst ${this.props.active === 1 && 'active'}`}>1</button>
				<button className={this.props.active === 2 ? 'active' : null}>2</button>
				<button className={`pillLast ${this.props.active === 3 && 'active'}`}>3</button>
			</div>
		)
	}

}

PillNavigation.propTypes = {
	active: PropTypes.number.isRequired
}

export default PillNavigation;
