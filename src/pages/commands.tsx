import { useRouter } from "next/router";
import { useRef } from "react";
import Styles from "../styles/Commands.module.scss";
import { useScrollspy } from "@makotot/ghostui";

const { api } = require("../../config.json");

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

type Command = {
	aliases: string[];
	id: string;
	description: string;
	usage: string;
	formattedCooldown: string;
	cooldown: number;
	ownerOnly: boolean;
	modOnly: boolean;
	adminOnly: boolean;
	categoryID: string;
	userPermissions: string[];
	clientPermissions: string[];
};

export default function Commands({ categories }: { categories: any }) {
	const router = useRouter();

	// lmaooo
	let sectionRefs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	];

	const { currentElementIndexInViewport } = useScrollspy({
		sectionRefs,
		offset: -80,
	});

	const loopArray = [0, 1, 2, 3];

	if (router.isFallback) {
		return (
			<Container>
				<title>Commands - Bizkit</title>
				<h1 className={Styles.title}>Commands</h1>
				<div className={Styles.categoryContainer}>
					<Navbar
						bg="dark"
						variant="dark"
						className={Styles.categories}
						expand="lg"
					>
						<Container>
							<Nav>
								<Placeholder
									as={Nav.Item}
									animation="wave"
									className={Styles.navbutton}
								>
									<Placeholder xs={10} bg="light" />{" "}
								</Placeholder>
							</Nav>
						</Container>
					</Navbar>
				</div>
				<div>
					{loopArray.map((value, i) => {
						return (
							<div className={Styles.table} key={i}>
								<h3 className={Styles.title}>
									<Placeholder animation="wave">
										<Placeholder xs={2} bg="light" />
									</Placeholder>
								</h3>
								<Table bordered hover variant="dark" size="sm">
									<thead>
										<tr>
											<th>Command</th>
											<th>Aliases</th>
											<th>User Permissions</th>
											<th>Bot Permissions</th>
											<th>Description</th>
											<th>Usage</th>
										</tr>
									</thead>
									<tbody>
										{loopArray.map((value, index) => {
											return (
												<tr key={index}>
													<td>
														<Placeholder animation="wave">
															<Placeholder
																xs={8}
																bg="light"
															/>
														</Placeholder>
													</td>
													<td>
														<Placeholder animation="wave">
															<Placeholder
																xs={5}
																bg="light"
															/>
															,{" "}
															<Placeholder
																xs={3}
																bg="light"
															/>
														</Placeholder>
													</td>
													<td>
														<Placeholder animation="wave">
															<Placeholder
																xs={4}
																bg="light"
															/>
															,{" "}
															<Placeholder
																xs={5}
																bg="light"
															/>
														</Placeholder>
													</td>
													<td>
														<Placeholder animation="wave">
															<Placeholder
																xs={4}
																bg="light"
															/>
															,{" "}
															<Placeholder
																xs={5}
																bg="light"
															/>
														</Placeholder>
													</td>
													<td>
														<Placeholder animation="wave">
															<Placeholder
																xs={9}
																bg="light"
															/>
														</Placeholder>
													</td>
													<td>
														<Placeholder animation="wave">
															<Placeholder
																xs={10}
																bg="light"
															/>
														</Placeholder>
													</td>
												</tr>
											);
										})}
									</tbody>
								</Table>
							</div>
						);
					})}
				</div>
			</Container>
		);
	}

	return (
		<Container>
			<title>Commands - Bizkit</title>
			<h1 className={Styles.title}>Commands</h1>
			<div className={Styles.categoryContainer}>
				<Navbar
					bg="dark"
					variant="dark"
					className={Styles.categories}
					expand="lg"
				>
					<Container>
						<Nav>
							{Object.entries(categories).map(
								([id, category], i: number) => {
									return (
										<Nav.Link
											key={i}
											href={`#${id}-category`}
											active={false}
											className={
												currentElementIndexInViewport ==
												i
													? Styles.navbutton +
													  " active"
													: Styles.navbutton
											}
										>
											{id}
										</Nav.Link>
									);
								}
							)}
						</Nav>
					</Container>
				</Navbar>
			</div>
			<div>
				{Object.entries(categories).map(([id, category], i: number) => {
					return (
						<div
							id={`${id}-category`}
							key={i}
							className={Styles.table}
							ref={sectionRefs[i]}
						>
							<h3 className={Styles.title}>{id}</h3>
							<Table bordered hover variant="dark" size="sm">
								<thead>
									<tr>
										<th>Command</th>
										<th>Aliases</th>
										<th>User Permissions</th>
										<th>Bot Permissions</th>
										<th>Description</th>
										<th>Usage</th>
									</tr>
								</thead>
								<tbody>
									{(category as Command[]).map(
										(command: Command, index: number) => {
											return (
												<tr
													key={index}
													id={`${command.id}-command`}
												>
													<td>
														{command.aliases[0]}
													</td>
													<td>
														{command.aliases[1]
															? command.aliases
																	.slice()
																	.join(", ")
															: ""}
													</td>
													<td>
														{command.modOnly
															? "Mod or "
															: ""}
														{command.adminOnly
															? "Admin or "
															: ""}
														{command.ownerOnly
															? "Owner"
															: ""}
														{command.userPermissions
															? command.userPermissions
																	.slice()
																	.join(", ")
															: ""}
													</td>
													<td>
														{command.clientPermissions
															? command.clientPermissions
																	.slice()
																	.join(", ")
															: ""}
													</td>
													<td>
														{command.description}
													</td>
													<td>
														<code>
															{command.usage}
														</code>
													</td>
												</tr>
											);
										}
									)}
								</tbody>
							</Table>
						</div>
					);
				})}
			</div>
		</Container>
	);
}

function CommandSubtitles({ command }: { command: Command }) {
	if (command.aliases.length > 1) {
		return (
			<Card.Subtitle className="mb-2 text-muted">
				{command.aliases.slice(1, command.aliases.length).join(", ")}
			</Card.Subtitle>
		);
	}

	return null;
}

export async function getStaticProps() {
	const res = await fetch(`${api}/commands`);

	const categories: Command[] = await res.json();

	return {
		props: {
			categories,
		},
		revalidate: 3600,
	};
}
