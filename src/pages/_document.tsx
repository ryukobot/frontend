import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta property="og:title" content="Home" />
					<meta property="og:site_name" content="Ryuko" />
					<meta property="og:type" content="website" />
					<meta
						property="og:description"
						content="A Utility bot with Verification, Music, Tickets, a
					Starboard, and more."
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
