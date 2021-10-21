import Error from "../components/Error";

export default function FiveHundred() {
	return (
		<div>
			<title>500 - Bizkit</title>
			<Error code={500} description="Internal Server Error" />
		</div>
	);
}
