import React from 'react'
import logout from '../assets/icon-unselected-logout-24.png'

const Logout = () => {
	return (
		<a href="#" className="nav__link">
			<img className='nav__logo-icon' src={ logout } alt='Logout'/>
			<span className="nav__name">Logout</span>
		</a>
	)
}

export { Logout }