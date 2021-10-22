export default function PrivacyPolicy() {
	return (
		<>
			<div className="flex">
				<h1>Privacy Policy</h1>
				<p>
					Privacy Policy for the Bizkit Bot, and the{" "}
					<code>bizkitbot.com</code> Website.
				</p>
				<h5>Last Updated: 10/21/21</h5>
				<hr />
				<h3>Data we Collect {"&"} Store</h3>
				<ul>
					<li>User IDs - Tracking Moderation Actions.</li>
					<li>
						Server IDs - Tracking Moderation Actions, Filtered
						Phrases, Tickets, and general configuration.
					</li>
					<li>Channel IDs - Used for Logging, Starboard, etc.</li>
					<li>Role IDs for permissions.</li>
				</ul>
				<br />
				<h3>How we Handle Data Storage</h3>
				<p>
					We currently use <a href="https://mariadb.org">MariaDB</a>{" "}
					as a Persistent Database. Only Bot Developer(s) can access,
					and modify it at any time.
				</p>
				<br />
				<h3>Data we Temporarily Store</h3>
				<p>
					Automatically, We store objects such as Servers, Users,
					Members, and Channels in a local cache. This speeds up
					Bizkit, and is deleted when Bizkit is restarted on our end.
				</p>
				<br />
				<h3>Deleting your Data</h3>
				<div>
					<p>
						If you want your Data to be removed from our systems,
						you can open a ticket in our{" "}
						<a href="/support">Support Server</a>.
					</p>
					Please note that some data{" "}
					<b>cannot be deleted per your request</b>:
					<ul>
						<li>
							Moderation Actions - We require the request of the
							Server{"'"}s Owner to delete this information.
						</li>
						<li>
							Non-Appealable Blacklist - Under applicable
							conditions (like breaking our TOS), we will{" "}
							<b>not</b> remove your user from our systems.
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
