import React, { useRef } from 'react'
import { User } from './User'
import { Navbar } from './Navbar'
import { Logout } from '../../components'

const Sidebar = ({ toggle }) => {

	const getNavbarWidth = () => {
		return toggle 
			? '224px'
			: '68px'
	}

	return (
		<div className="l-navbar" style={{ width: `${getNavbarWidth()}` }}>
			<nav className="nav">
				<div>
					<User />
					<Navbar />
				</div>
				<Logout />
			</nav>
		</div>
	)
}

export { Sidebar }