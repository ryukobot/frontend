import { useRouter } from "next/router";
import Styles from "../styles/components/Layout.module.scss";

// Layout Imports
import Header from "./Header";
import Footer from "./Footer";
import DocsSidebar from "./DocsSidebar";

// Bootstrap Imports
import Container from "react-bootstrap/Container";

export default function Layout({ children }: any) {
	const router = useRouter();

	if (!router.pathname.startsWith("/docs"))
		return (
			<>
				<Header />
				<main>{children}</main>
				<Footer />
			</>
		);

	return (
		<>
			<Header />
			<main>
				<Container>
					<div style={{ display: "flex" }}>
						<div className={Styles.sidebar}>
							<DocsSidebar />
						</div>
						{children}
					</div>
				</Container>
			</main>
			<Footer />
		</>
	);
}
