import Image from "next/image";
import Styles from "../styles/components/Footer.module.scss";

import Logo from "../img/logo.webp";
import DiscordLogo from "../img/Discord-Logo-Color.svg";
import GithubLogo from "../img/github.svg";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export default function Footer() {
	return (
		<footer className={Styles.footer}>
			<Container>
				<Row>
					<Col className={Styles.brandcontainer}>
						<div>
							<div className={Styles.brand}>
								<Image
									alt="Avatar"
									src={Logo}
									width={60}
									height={60}
									layout="intrinsic"
									className="rounded-circle mx-auto vertical-align-middle"
								/>
								<span
									className={`${Styles.title} vertical-align-middle`}
								>
									Ryuko
								</span>
							</div>
							<div className={Styles.description}>
								A Utility bot with Verification, Music, Tickets,
								a Starboard, and more.
							</div>
							<div className={Styles.socials}>
								<a
									title="Join our Support Server!"
									href="/support"
								>
									<Image
										src={DiscordLogo}
										alt="Discord Logo"
										width={40}
										height={30}
										layout="intrinsic"
									/>
								</a>
								<a
									title="Check out our GitHub!"
									href="https://github.com/ryukobot"
								>
									<Image
										src={GithubLogo}
										alt="GitHub Logo"
										width={40}
										height={30}
										layout="intrinsic"
									/>
								</a>
							</div>
						</div>
						<small>
							Made with ❤️ by{" "}
							<a href="https://jacany.com">jacany#0001</a>
						</small>
					</Col>
					<Col className={Styles.links}>
						<b className={Styles.title + " " + Styles.linktitle}>
							Ryuko
						</b>
						<ListGroup variant="flush">
							<ListGroup.Item
								action
								href="/"
								className={Styles.link + " link"}
							>
								Home
							</ListGroup.Item>
							<ListGroup.Item
								action
								href="/commands"
								className={Styles.link + " link"}
							>
								Commands
							</ListGroup.Item>
							<ListGroup.Item
								action
								href="/status"
								className={Styles.link + " link"}
							>
								Status
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col className={Styles.links}>
						<b className={Styles.title + " " + Styles.linktitle}>
							Legal
						</b>
						<ListGroup variant="flush">
							<ListGroup.Item
								action
								href="#link1"
								className={Styles.link + " link"}
							>
								Terms of Service
							</ListGroup.Item>
							<ListGroup.Item
								action
								href="#link1"
								className={Styles.link + " link"}
							>
								Privacy Policy
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col style={{ alignSelf: "center" }}>
						<a
							className={Styles.chaker}
							title="Chaker Website"
							href="https://chaker.net"
						>
							Chaker
						</a>
					</Col>
					<Col style={{ textAlign: "center", alignSelf: "center" }}>
						<a
							title="Go to the top of the page"
							href="#"
							style={{ textDecoration: "none" }}
						>
							Back to Top ⬆️
						</a>
					</Col>
					<Col style={{ textAlign: "right", alignSelf: "center" }}>
						<small className={Styles.darker}>
							Copyright ©️ 2021 Chaker LLC.
						</small>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
