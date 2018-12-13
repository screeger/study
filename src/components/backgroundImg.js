import React from 'react';
import PropTypes from 'prop-types';

import hiker from '../images/introBkgd.svg';

function BackgroundImg (props) {
	const url = 'url(' + hiker + ')';
	return (
		<div style={{ backgroundImage: url,
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		minHeight: '600px' }}>
			<p>this is the backgroundImage</p>
			{props.children}
		</div>
	)
}

BackgroundImg.propTypes = {
	pageName: PropTypes.string.isRequired,
	children: PropTypes.node
}

export default BackgroundImg;
