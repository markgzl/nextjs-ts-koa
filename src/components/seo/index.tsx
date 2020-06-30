import React from 'react'
import Head from 'next/head'

interface ITitle {
	title: string
}

const SEO: React.FC<ITitle> = ({title}) => {
	return (
		<Head>
			<title>找油网-{title}</title>
		</Head>
	)
}

export default SEO