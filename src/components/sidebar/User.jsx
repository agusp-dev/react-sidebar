import React from 'react'
import fullstackUser from '../../assets/fullstack-user.jpg'

const User = () => {
  return (
		<div className='nav__user'>
			<img src={ fullstackUser } alt='user-logo'/>
		</div>
	)
}

export { User }