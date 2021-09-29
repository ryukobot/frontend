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

interface IStats {
	guilds: number;
	users: number;
	channels: number;
	shards: number;
}

export default function Home({ stats }: { stats: IStats }) {
	return (
		<Container fluid>
			<title>Home - Ryuko</title>
			<div className={Styles.hero}>
				<div className={Styles.heroinfo}>
					<h1
						className={`${Styles.title} ${Styles.infotitle} text-primary`}
					>
						Ryuko
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
				<Row>
					<Col md="auto">
						<Image
							src={MusicScreenshot}
							alt="Playing a Song via Search Query"
							layout="intrinsic"
						/>
					</Col>
					<Col>
						<h1 className={Styles.title}>
							Enjoy High Quality Music
						</h1>
						<ul>
							<li>
								Play music from 5+ Sources! YouTube, Spotify,
								Soundcloud, Twitch, Bancamp, Direct Links, and
								more!
							</li>
							<li>
								Just Type! Ryuko will automatically search for
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
						<h1 className={Styles.title}>
							Enjoy High Quality Music
						</h1>
						<ul>
							<li>
								Play music from 5+ Sources! YouTube, Spotify,
								Soundcloud, Twitch, Bancamp, Direct Links, and
								more!
							</li>
							<li>
								Just Type! Ryuko will automatically search for
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
					<Col md="auto">
						<Image
							src={MusicScreenshot}
							alt="Playing a Song via Search Query"
							layout="intrinsic"
						/>
					</Col>
				</Row>
			</Container>
			<div>
				<Row className={Styles.statsrow}>
					<Col>
						<h1 className={Styles.title}>{stats.guilds}</h1>
						<h1 className={Styles.title}>Servers</h1>
					</Col>
					<Col>
						<h1 className={Styles.title}>{stats.users}</h1>
						<h1 className={Styles.title}>Users</h1>
					</Col>
					<Col>
						<h1 className={Styles.title}>{stats.channels}</h1>
						<h1 className={Styles.title}>Channels</h1>
					</Col>
					<Col>
						<h1 className={Styles.title}>{stats.shards}</h1>
						<h1 className={Styles.title}>Shards</h1>
					</Col>
				</Row>
			</div>
		</Container>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${api}/stats`);

	const stats: IStats = await res.json();

	return {
		props: {
			stats,
		},
		revalidate: 1800,
	};
}
