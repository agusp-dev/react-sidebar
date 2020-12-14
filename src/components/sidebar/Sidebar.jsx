import React from 'react'
import { User } from './User'
import { Navbar } from './Navbar'

const Sidebar = () => {
	return (
		<div className="l-navbar" id="nav-bar">
			<nav className="nav">
				<div>
					<User />
					<Navbar />
				</div>
			</nav>
		</div>
	)
}

export { Sidebar }