import React from 'react'
import Link from 'next/link'
import './index.scss'
const Nav: React.FC = () => {
	return (
		<header className='header'>
			<div className='nav'>
				<div className='logo'>
					<img src="/static/vercel.svg" alt="logo"/>
				</div>
				<nav className='nav'>
					<Link href='/'><a >首页</a></Link>
					<Link href='/product'><a >产品介绍</a></Link>
					<Link href='/aboutus'><a >关于我们</a></Link>
					<Link href='/news'><a >新闻</a></Link>
				</nav>
				<div className='action'>
					预约体验
				</div>
			</div>
		
		</header>
	)
}

export default Nav