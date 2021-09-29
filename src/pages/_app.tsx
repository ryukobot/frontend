import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { SSRProvider } from "@react-aria/ssr";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SSRProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SSRProvider>
	);
}
export default MyApp;
