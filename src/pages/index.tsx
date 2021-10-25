import Image from "next/image";
import Styles from "../styles/Home.module.scss";
import InviteButton from "../components/InviteButton";

const { api } = require("../../config.json");

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Feature Images
import MusicScreenshot from "../img/music.png";
import JoinLeaveScreenshot from "../img/joinleave.png";
import LoggingScreenshot from "../img/logging.png";
import ModerationScreenshot from "../img/moderation.png";
import LobbyScreenshot from "../img/lobbies.png";

interface IStats {
	guilds: number;
	users: number;
	channels: number;
	shards: number;
}

export default function Home({ stats }: { stats: IStats }) {
	return (
		<Container fluid>
			<title>Home - Bizkit</title>
			<div className={Styles.hero}>
				<div className={Styles.heroinfo}>
					<h1
						className={`${Styles.title} ${Styles.infotitle} text-primary`}
					>
						Bizkit
					</h1>
					<h3 className={Styles.infodesc}>
						A Utility bot with Verification, Music, Tickets, a
						Starboard, and more.
					</h3>
					<InviteButton />
					<Button href="/support">Get Support</Button>
				</div>
			</div>
			<Container style={{ paddingTop: "25vh" }}>
				<Row className={Styles.feature}>
					<Col md="auto">
						<Image
							src={MusicScreenshot}
							alt="Playing a Song via Search Query"
							layout="intrinsic"
						/>
					</Col>
					<Col>
						<h1 className={Styles.title}>
							🎵 Enjoy High Quality Music
						</h1>
						<ul>
							<li>
								Play music from 5+ Sources! YouTube, Spotify,
								Soundcloud, Twitch, Bandcamp, Direct Links, and
								more!
							</li>
							<li>
								Just Type! Bizkit will automatically search for
								you!
							</li>
							<li>
								High Quality! Can support thousands of guilds at
								once easily.
							</li>
							<li>
								Queued a Massive Playlist? Skip straight to the
								track you want to listen to!
							</li>
							<li>
								Fast Forward, Rewind, and Seek. Get to that one
								part easily.
							</li>
						</ul>
					</Col>
				</Row>
				<Row className={Styles.feature}>
					<Col>
						<h1 className={Styles.title}>❓ Rich Logging</h1>
						<ul>
							<li>
								Be the all-seer!
								<br />
								Messages Edits, Message Deletions, Member Joins,
								Member Leaves, Bans, Kicks, Voice Channel
								Updates, and more to come!
							</li>
							<li>
								A weird person was invited to your server? See
								who invited them with Invite Tracking.
							</li>
							<li>
								The abililty to seperate logs into different
								channels keep them organized, and readable.
							</li>
							<li>
								Logs are Readable and Informative. Get all the
								needed information with just a glance.
							</li>
						</ul>
					</Col>
					<Col md="auto">
						<Image
							src={LoggingScreenshot}
							alt="Logging in action"
							layout="intrinsic"
						/>
					</Col>
				</Row>
				<Row className={Styles.feature}>
					<Col md="auto">
						<Image
							src={ModerationScreenshot}
							alt="Moderation"
							layout="intrinsic"
						/>
					</Col>
					<Col>
						<h1 className={Styles.title}>🧑‍⚖️ Moderate Better</h1>
						<ul>
							<li>
								Zero-Trust Permissions. Bizkit primarily uses
								roles for Moderation Commands, so you don{"'"}t
								need to give any Discord Permissions to your
								staff. Just set the role and everything works.
							</li>
							<li>
								Moderate your Members with Muting, Warns,
								Banning, and Kicking
							</li>
							<li>
								Control your Text Channels with Locking, and
								Message Purges.
							</li>
							<li>
								Somebody causing issues in VC? Disconnect and
								them Mute them, the perfect tag team.
								Additionally you can <i>drag</i> and move a
								Member between channels.
							</li>
						</ul>
					</Col>
				</Row>
				{/*<Row className={Styles.feature}>
					<Col>
						<h1 className={Styles.title}>
							🤬 Keep your Channels Clean
						</h1>
						<ul>
							<li>
								Automatically Delete Messages that contain
								Phrases that you control.
							</li>
							<li>Extremely fast, nobody will notice.</li>
							<li>
								Effective, matches your phrases to{" "}
								<b>anywhere</b> in the sentence
							</li>
						</ul>
					</Col>
					<Col md="auto">
						<Image
							src={MusicScreenshot}
							alt="Word Filter"
							layout="intrinsic"
						/>
					</Col>
				</Row>
				<Row className={Styles.feature}>
					<Col md="auto">
						<Image
							src={MusicScreenshot}
							alt="Verification Process"
							layout="intrinsic"
						/>
					</Col>
					<Col>
						<h1 className={Styles.title}>
							✅ Keep Bots {"&"} Alts Out
						</h1>
						<ul>
							<li>
								Keep out Bots and Alts, Bizkit has an advanced
								Verification System to ensure that new Members
								are legimate.
							</li>
							<li>
								Highly Configurable! Use Verification as a
								simple Captcha to keep Bots out, or go all in
								and automatically Ban all VPN/Proxy Users, and
								Alts.
							</li>
							<li>
								VPN/Proxy Detection, Cookies, and IP Addresses
								are used for Verifying Members.
							</li>
						</ul>
					</Col>
				</Row>
	*/}
				<Row className={Styles.feature}>
					<Col>
						<h1 className={Styles.title}>👋 Greet New Members</h1>
						<ul>
							<li>
								Send Custom Join and Leave Messages into a{" "}
								<i>special</i> channel with ease!
							</li>
							<li>
								Placeholders like <code>(mention</code>,{" "}
								<code>(username</code>, and <code>(tag</code>{" "}
								allow you to customize join and leave messages
								to your heart{"'"}s content!
							</li>
						</ul>
					</Col>
					<Col md="auto">
						<Image
							src={JoinLeaveScreenshot}
							alt="Join and Leave messages"
							layout="intrinsic"
						/>
					</Col>
				</Row>
				<Row className={Styles.feature}>
					<Col md="auto">
						<Image
							src={LobbyScreenshot}
							alt="Voice Lobbies"
							layout="intrinsic"
						/>
					</Col>
					<Col>
						<h1 className={Styles.title}>
							🗣️ Create Private, Configurable Voice Channels
						</h1>
						<ul>
							<li>
								Want to have a private conversation, and don
								{"'"}t want to create a clunky group chat? Then
								voice lobbies are for you!
							</li>
							<li>
								Create temporary channels that you have full
								control over. Change the name, quality, user
								limit, and permissions!
							</li>
							<li>
								They automatically delete too! Once you leave
								the channel, it disappears.
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
			<div style={{ marginTop: "10vh", marginBottom: "6vh" }}>
				<Row className={Styles.statsrow}>
					<Col>
						<h1 className={Styles.title}>{stats.guilds.toLocaleString()}</h1>
						<h1 className={Styles.title}>Servers</h1>
					</Col>
					<Col>
						<h1 className={Styles.title}>{stats.users.toLocaleString()}</h1>
						<h1 className={Styles.title}>Users</h1>
					</Col>
					<Col>
						<h1 className={Styles.title}>{stats.channels.toLocaleString()}</h1>
						<h1 className={Styles.title}>Channels</h1>
					</Col>
					<Col>
						<h1 className={Styles.title}>{stats.shards.toLocaleString()}</h1>
						<h1 className={Styles.title}>Shards</h1>
					</Col>
				</Row>
			</div>
		</Container>
	);
}

export async function getStaticProps() {
	let stats: IStats;

	try {
		const req = await fetch(`${api}/stats`);

		stats = await req.json();
	} catch (error) {
		console.error(error);
		stats = {
			shards: 0,
			guilds: 0,
			users: 0,
			channels: 0,
		};
	}

	return {
		props: {
			stats,
		},
		revalidate: 1800,
	};
}
