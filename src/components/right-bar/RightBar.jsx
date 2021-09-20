import React from 'react';
import './RightBar.css';
import breakDots from '../../images/3-horizontal-dots.png';
import Header from './components/Header';
import Health from './components/Health';
import CTA from './components/CTA';
import Trainings from './components/Trainings';
import Trainers from './components/Trainers';

function RightBar() {
	return (
		<div className='right-bar'>
			<Header />
			<Health />
			<CTA />
			<Trainings />
			<div className='break'>
				<img src={breakDots} alt='' />
			</div>
			<Trainers />
		</div>
	);
}

export default RightBar;
