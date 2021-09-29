import { useRouter } from "next/router";
import Image from "next/image";
import Styles from "../styles/Header.module.scss";
import InviteButton from "./InviteButton";

import Logo from "../img/logo.webp";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header() {
	const router = useRouter();

	const location = router.pathname.split("/");

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="/">
					<Image
						alt="Avatar"
						src={Logo}
						width={80}
						height={80}
						layout="intrinsic"
						className="rounded-circle mx-auto"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse>
					<Nav
						activeKey={"/" + location[1]}
						className={Styles.navbar}
					>
						<Nav.Link href="/" className={Styles.navbutton}>
							Home
						</Nav.Link>
						<Nav.Link href="/commands" className={Styles.navbutton}>
							Commands
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
