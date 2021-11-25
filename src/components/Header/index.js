import React from 'react'
import './style.scss'
import logoAcessabr from '../../images/logo-acessaBR.svg'
import logoEbac from '../../images/logo-ebac.svg'

const Header = () => {
  return (
    <header className="header__container">
      <div className="header__logo header__logo--state">
        <img src={logoAcessabr} alt="Logo AcessaBR" />
        <span className="header__city"> / Teresina - PI:</span>
      </div>
      <div className="header__logo header__logo--ebac">
        <span className="header__span">Apoio:</span>
        <img src={logoEbac} alt="Logo Ebac" />
      </div>
    </header>
  )
}

export default Header
