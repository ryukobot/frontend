import Image from "next/image";
import Styles from "../styles/components/InviteButton.module.scss";
import DiscordLogo from "../img/Discord-Logo-White.svg";

// Bootstrap Imports
import Button from "react-bootstrap/Button";

export default function InviteButton() {
	return (
		<Button
			variant="blurple"
			className={
				Styles.invitebutton +
				" d-inline-flex justify-content-center align-items-center"
			}
			href="/invite"
		>
			<Image
				src={DiscordLogo}
				alt="Discord Logo"
				width={30}
				height={20}
				layout="intrinsic"
			/>
			Invite Ryuko
		</Button>
	);
}
