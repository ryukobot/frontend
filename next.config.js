/** @type {import('next').NextConfig} */
const { invite, support } = require("./config.json");

module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["images-ext-2.discordapp.net", "cdn.discordapp.com"],
	},
	async redirects() {
		return [
			// Commands
			{
				source: "/commands/:category",
				destination: "/commands#:category-category",
				permanent: true,
			},
			{
				source: "/commands/:category/:command",
				destination: "/commands#:command-command",
				permanent: true,
			},
			{
				source: "/invite",
				destination: invite,
				permanent: false,
			},
			{
				source: "/support",
				destination: support,
				permanent: false,
			},
			{
				source: "/status",
				destination: "https://ryuko.statuspage.io/",
				permanent: false,
			},
			{
				source: "/docs",
				destination: "/docs/Getting-Started",
				permanent: false,
			},
		];
	},
};
