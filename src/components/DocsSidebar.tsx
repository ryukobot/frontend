import { useRouter } from "next/router";
import Styles from "../styles/components/DocsSidebar.module.scss";

// Bootstrap Imports
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

export default function DocsSidebar() {
	const router = useRouter();
	const location = router.asPath.split("#")[0];

	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse>
					<Nav
						activeKey={location}
						className={`flex-column ${Styles.sidebar}`}
					>
						<h3>Overview</h3>
						<Nav.Link className={Styles.item} href="/docs">
							Home
						</Nav.Link>
						{/*<Nav.Link className={Styles.item} href="/docs/Setup">
					Setup
				</Nav.Link>
				<h3>Features</h3>
				<Nav.Link className={Styles.item} href="/docs/Features/Music">
					Music
				</Nav.Link>
				<Nav.Link className={Styles.item} href="/docs/Features/Logging">
					Logging
				</Nav.Link>*/}
						<h3>Legal</h3>
						<Nav.Link
							className={Styles.item}
							href="/docs/Legal/Terms-of-Service"
						>
							Terms of Service
						</Nav.Link>
						<Nav.Link
							className={Styles.item}
							href="/docs/Legal/Privacy-Policy"
						>
							Privacy Policy
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
