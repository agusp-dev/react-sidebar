import React from 'react'
import menu from '../assets/icon-menu-24.png'
import close from '../assets/icon-close-24.png'

const Header = ({ toggle, handleToggle }) => {
  
  const onHandleToggleClick = () => {
    handleToggle(!toggle)
  }

  const getHeaderPadding = () => {
    return toggle 
      ? '256px'
      : '100px'
  }

  const getMenuIcon = () => {
    return toggle 
      ? close 
      : menu
  }
  
  return (
    <header className="header" style={{ paddingLeft: `${getHeaderPadding()}` }}>
      <div className="header__toggle">
        <img 
          src={ getMenuIcon() } 
          alt='menu'
          onClick={ onHandleToggleClick }/>
      </div>
    </header>
  )
}

export { Header }