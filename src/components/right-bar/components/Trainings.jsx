import React from 'react';
import menu from '../../../images/menu.png';

function Trainings() {
	return (
		<div className='trainings'>
			<div className='trainings__header'>
				<p>Today trainings</p>
			</div>
			<div className='trainings__box color-blue'>
				<div className='trainings__box__name'>
					<p>Box</p>
					<p className='type'>Sports Club</p>
					<p className='time'>10:00</p>
				</div>
				<div className='trainings__box__duration'>
					<p>40</p>
					<p className='unit'>mins</p>
					<p className='workout'>Warm-up</p>
				</div>
				<div className='trainings__box__duration'>
					<p>20</p>
					<p className='unit'>mins</p>
					<p className='workout'>Stretch</p>
				</div>
				<div className='trainings__box__button'>
					<img src={menu} alt='' />
				</div>
			</div>
			<div className='trainings__box color-red'>
				<div className='trainings__box__name'>
					<p>Crossfit</p>
					<p className='type'>Sports Club</p>
					<p className='time'>12:00</p>
				</div>
				<div className='trainings__box__duration'>
					<p>20</p>
					<p className='unit'>mins</p>
					<p className='workout'>Warm-up</p>
				</div>
				<div className='trainings__box__duration'>
					<p>20</p>
					<p className='unit'>mins</p>
					<p className='workout'>Pull-ups</p>
				</div>
				<div className='trainings__box__button'>
					<img src={menu} alt='' />
				</div>
			</div>
		</div>
	);
}

export default Trainings;
