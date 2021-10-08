import { useRouter } from "next/router";
import Styles from "../styles/components/DocsSidebar.module.scss";

// Bootstrap Imports
import Nav from "react-bootstrap/Nav";

export default function DocsSidebar() {
	const router = useRouter();
	const location = router.asPath.split("#")[0];

	return (
		<>
			<Nav
				activeKey={location}
				className={`flex-column ${Styles.sidebar}`}
			>
				<h3>Overview</h3>
				<Nav.Link className={Styles.item} href="/docs">
					Home
				</Nav.Link>
				<Nav.Link className={Styles.item} href="/docs/Setup">
					Setup
				</Nav.Link>
				<h3>Features</h3>
				<Nav.Link className={Styles.item} href="/docs/Features/Music">
					Music
				</Nav.Link>
				<Nav.Link className={Styles.item} href="/docs/Features/Logging">
					Logging
				</Nav.Link>
			</Nav>
		</>
	);
}
