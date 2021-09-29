import { useRouter } from "next/router";
import useSWR from "swr";
import Error from "../components/Error";

// Bootstrap Imports
import Container from "react-bootstrap/Container";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Verify() {
	const router = useRouter();
	const state = router.query.state;
	const code = router.query.code;
	const { data, error } = useSWR(
		`http://localhost:1204/verify/${state}`,
		fetcher
	);

	if (error)
		return <Error code={500} description={"Internal Server Error"} />;

	if (!data)
		return (
			<Container>
				<title>Verify - Ryuko</title>
				loading
			</Container>
		);

	switch (data.message) {
		default:
			// Assume Success
			return (
				<Container>
					<title>Verify - Ryuko</title>f
				</Container>
			);
			break;

		case "INVALID_USER":
			return <Error code={403} description="Forbidden" />;

		case "Internal Server Error":
			return <Error code={500} description="Internal Server Error" />;

		case "Bad Request":
			return <Error code={400} description="Bad Request" />;
	}
}
