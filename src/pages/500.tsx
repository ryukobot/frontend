import Error from "../components/Error";

export default function FiveHundred() {
	return (
		<div>
			<title>500 - Ryuko</title>
			<Error code={500} description="Internal Server Error" />
		</div>
	);
}
