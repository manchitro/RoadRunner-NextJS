import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/font.scss";
import "../styles/global.scss";
import MyNav from "../components/MyNav";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<MyNav />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
