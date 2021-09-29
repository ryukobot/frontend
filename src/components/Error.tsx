import { MouseEvent } from "react";
import { useRouter } from "next/router";
import Styles from "../styles/components/Error.module.scss";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export interface ErrorOptions {
	code?: number | string;
	description?: string;
}

export default function Error({
	code = "Oops",
	description = "We don't know what happened here.",
}: ErrorOptions) {
	const router = useRouter();

	const backClick = (event: MouseEvent) => {
		event.preventDefault();
		router.back();
	};

	return (
		<Container className={Styles.container}>
			<div>
				<big className={Styles.code}>{code}</big>
				<br />
				<span className={Styles.description}>{description}</span>
				<div className={Styles.buttoncontainer}>
					<Button href="/">Go Home</Button>{" "}
					<Button onClick={backClick} variant="outline-primary">
						Go Back
					</Button>
				</div>
			</div>
		</Container>
	);
}
