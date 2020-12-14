import React from 'react'
import dashboardIcon from '../../assets/icon-dashboard-24.png'
import productsIcon from '../../assets/icon-unselected-products-24.png'
import usersIcon from '../../assets/icon-unselected-users-24.png'
import statisticsIcon from '../../assets/icon-unselected-chart-24.png'

const Navbar = () => {
  return (
    <div className="nav__list">
      <a href="#" className="nav__link active">
        <img className='nav__logo-icon' src={ dashboardIcon } alt='Dashboard'/>
        <span className="nav__name">Dashboard</span>
      </a>
      <a href="#" className="nav__link">
          <img src={ usersIcon } alt='users'/>
          <span className="nav__name">Messages</span>
      </a>
      <a href="#" className="nav__link">
          <img src={ productsIcon } alt='Products'/>
          <span className="nav__name">Users</span>
      </a>
      <a href="#" className="nav__link">
          <img src={ statisticsIcon } alt='statistics'/>
          <span className="nav__name">Users</span>
      </a>
    </div>
  )
}

export { Navbar }