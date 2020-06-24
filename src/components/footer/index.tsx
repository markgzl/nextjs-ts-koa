import { NextPage, NextPageContext } from 'next';

interface PContext {
	userName: string;
}

const Footer: NextPage = (props) => {
	console.log(props,'=====')
	return (
		<footer>
			<div>this is footer . copyright @ {new Date().getFullYear()}</div>
			<div>
			Hello {props.userName}

			</div>
		</footer>
	)
}

Footer.getInitialProps =  () => ({
	userName: 'nihao',
	data: [1,3,4,5]
})
export default Footer