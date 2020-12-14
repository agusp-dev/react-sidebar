import React from 'react'
import menu from '../assets/icon-menu-24.png'

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header__toggle">
        <img src={ menu } alt='menu'/>
      </div>
    </header>
  )
}

export { Header }