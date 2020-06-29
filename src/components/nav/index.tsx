import React from 'react'
import Link from 'next/link'

const Nav: React.FC = () => {
	return (
		<nav>
			<div>
				<img src="/static/vercel.svg" alt="logo"/>
			</div>
			<div>
				<Link href='/'><a >首页</a></Link>
				<Link href='/product'><a >产品介绍</a></Link>
				<Link href='/aboutus'><a >关于我们</a></Link>
				<Link href='/news'><a >新闻</a></Link>
			</div>
		</nav>
	)
}

export default Nav