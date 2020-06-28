import { NextPage } from 'next';

interface FooterProps {
	userName: string;
	data: number[]
}

const Footer: NextPage<FooterProps> = (props) => {
	return (
		<footer>
			<div>this is footer . copyright @ {new Date().getFullYear()}</div>
			<p>{props.userName}</p>
		</footer>
	)
}

export default Footer