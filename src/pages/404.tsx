import Error from "../components/Error";

export default function FourOFour() {
	return (
		<div>
			<title>404 - Ryuko</title>
			<Error code={404} description="Page not Found" />
		</div>
	);
}
