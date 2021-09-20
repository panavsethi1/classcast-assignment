import React from 'react';
import trainer from '../../../images/weightlifter.png';

function CTA() {
	return (
		<div className='cta'>
			<div className='cta__image'>
				<img src={trainer} alt='' />
			</div>
			<div className='cta__text'>
				<p>
					Signup for a personal trainer today to improve your results
				</p>
				<button href='/'>Sign Up</button>
			</div>
		</div>
	);
}

export default CTA;
