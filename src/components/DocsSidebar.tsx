import Styles from "../styles/components/DocsSidebar.module.scss";

// Bootstrap Imports
import Nav from "react-bootstrap/Nav";

export default function DocsSidebar() {
	return (
		<>
			<Nav
				defaultActiveKey="/docs/Getting-Started"
				className={`flex-column ${Styles.sidebar}`}
			>
				<Nav.Link className={Styles.item} href="/docs/Getting-Started">
					Getting Started
				</Nav.Link>
			</Nav>
		</>
	);
}
