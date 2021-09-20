import React from 'react';
import user from '../../../images/alien.png';

function Header() {
	return (
		<div className='header'>
			<div className='header__user'>
				<div className='header__user__image'>
					<img src={user} alt='' />
				</div>
				<div className='header__user__text'>
					<div className='header__user__text__name'>
						<p>Panav Sethi</p>
					</div>
					<div className='header__user__text__account'>
						<p>Free account</p>
					</div>
				</div>
			</div>
			<div className='header__options'>
				<div className='header__options__notification'>
					<div className='header__options__notification__number'>
						<p>3</p>
					</div>
					<img
						src='https://img.icons8.com/ios/50/000000/bell.png'
						alt=''
					/>
				</div>
				<div className='header__options__settings'>
					<img
						src='https://img.icons8.com/ios/50/000000/settings--v2.png'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
