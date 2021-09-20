import React from 'react';

function Health() {
	return (
		<div className='health'>
			<div className='health__header'>
				<p>Health</p>
			</div>
			<div className='health__items'>
				<div className='health__items__box'>
					<p>6:25</p>
					<div className='health__items__box__text'>
						<p>hours</p>
						<img
							src='https://img.icons8.com/color/96/000000/sleep.png'
							alt=''
						/>
					</div>
				</div>
				<div className='health__items__spacer'></div>
				<div className='health__items__box'>
					<p>120</p>
					<div className='health__items__box__text'>
						<p>BPM</p>
						<img
							src='https://img.icons8.com/color/96/000000/heart-monitor.png'
							alt=''
						/>
					</div>
				</div>
				<div className='health__items__spacer'></div>
				<div className='health__items__box'>
					<p>1.87</p>
					<div className='health__items__box__text'>
						<p>Kcal</p>
						<img
							src='https://img.icons8.com/color/96/000000/healthy-food-calories-calculator.png'
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Health;
