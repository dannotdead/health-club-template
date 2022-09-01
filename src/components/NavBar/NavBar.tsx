import React from 'react'
import './NavBar.scss'
import SideBarOpen from '../../assets/images/open-side-bar-menu.svg'
import Logo from '../../assets/images/logo.svg'
import Key from '../../assets/images/key.svg'
import Stars from '../../assets/images/stars.svg'

export const NavBar = () => {
	return (
		<div className='nav-bar'>
			<button className='nav-bar__side-button'>
				<img src={SideBarOpen} alt='' />
			</button>
			<div className='nav-bar__menu'>
				<div className='nav-bar__menu__pages'>
					<span>О комплексе</span>
					<span>Блок</span>
					<span>FAQ</span>
					<span>Контакты</span>
				</div>

				<div className='nav-bar__menu__logo'>
					<img src={Logo} alt='' />
					<img className='nav-bar__menu__logo__stars' src={Stars} alt='' />
				</div>

				<div className='nav-bar__menu__location'>
					<span>ru</span>
					<span>eng</span>
				</div>

				<div className='nav-bar__menu__auth'>
					<img src={Key} alt='' />
					<span>Вход</span>
				</div>

				<span className='nav-bar__menu__phone'>8 800 500 6847</span>
			</div>
		</div>
	)
}
