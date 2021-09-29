import Image from "next/image";
import Styles from "../styles/components/LoginButton.module.scss";
import DiscordLogo from "../img/Discord-Logo-White.svg";

// Bootstrap Imports
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function LoginButton({
	loggedIn = false,
	avatar = "",
	username = "",
}) {
	if (!loggedIn) {
		return (
			<Button
				variant="blurple"
				className={
					Styles.loginbutton +
					" d-inline-flex justify-content-center align-items-center"
				}
			>
				Login with Discord
				<Image
					src={DiscordLogo}
					alt="Discord Logo"
					width={30}
					height={20}
					layout="intrinsic"
				/>
			</Button>
		);
	}

	return (
		<div className="d-flex">
			<Image
				alt="User Avatar"
				src={avatar}
				width={50}
				height={50}
				layout="intrinsic"
				className="rounded-circle mx-auto"
			/>
			<NavDropdown className="w-100 h-100" title={username}>
				<NavDropdown.Item>Dashboard</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item className="danger">Logout</NavDropdown.Item>
			</NavDropdown>
		</div>
	);
}
