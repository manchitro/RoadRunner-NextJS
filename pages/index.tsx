import { Container, Row, Button, Col } from "react-bootstrap";
import styles from "../styles/bg.module.scss";
import Link from "next/link";

export default function Home() {
	return (
		<Container className="py-5">
			<Row>
				<h3 className="mx-auto my-2">We start to deliver the parcel right after picking up from you!</h3>
				<h1 className="mx-auto my-2">MONEY BACK GURANTEE OR FREE DELIVERY!</h1>
				<strong className="mx-auto my-2">If we can’t deliver the parcel on time that we have promised</strong>
				<h2 className="mx-auto my-2">We deliver everything legal, wherever you want!</h2>
			</Row>
			<Row className="border-bottom border-dark">
				<h4 className="my-2">Why Us?</h4>
			</Row>
			<Row>
				<p className="mx-auto my-2">Because we are the fastest, trustworthy ever in Bangladesh we will deliver everything you want to deliver no matter what! We are waiting for your request 24/7 . Our professional and trustworthy heroes will be there for you whenever you need. We do care for the commitments you have made. Right now as we are growing are ready to help you to cover the Dhaka City including Dhaka Suburbs and Don’t worry we will be soon going to cover the Country and the World as well. Last but not the least we will be the fastest as like as our delivery in terms clearing you payments. We want to be your logistic partner and want to be a part of your success.</p>
			</Row>
			<Row>
				<Link href="/whatwedeliver">
					<Button variant="none" className={styles.bg_lightgreen + " w-75 mx-auto my-3 py-3"}>
						Click here to see what we deliver
					</Button>
				</Link>
			</Row>
		</Container>
	);
}
