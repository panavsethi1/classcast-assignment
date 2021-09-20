import React from 'react';
import box from '../../../images/sportsman.png';
import mma from '../../../images/ninja.png';
import message from '../../../images/speech-bubble.png';

function Trainers() {
	return (
		<div className='trainers'>
			<div className='trainers__heading'>
				<p>Your trainers</p>
			</div>
			<div className='trainers__box'>
				<div className='trainers__box__image'>
					<img src={box} alt='' />
					<div className='online'></div>
				</div>
				<div className='trainers__box__name'>
					<p className='name'>John Kavonagh</p>
					<p className='type'>Boxing coach</p>
				</div>
				<div className='trainers__box__message'>
					<img src={message} alt='' />
				</div>
			</div>
			<div className='trainers__box'>
				<div className='trainers__box__image'>
					<img src={mma} alt='' />
					<div className='online'></div>
				</div>
				<div className='trainers__box__name'>
					<p className='name'>Jacob Jones</p>
					<p className='type'>MMA coach</p>
				</div>
				<div className='trainers__box__message'>
					<img src={message} alt='' />
				</div>
			</div>
		</div>
	);
}

export default Trainers;
