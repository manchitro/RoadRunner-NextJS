import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import Link from "next/link";

export default function MyNav() {
	return (
		<>
		<style>
			{`
				.bg-lightgreen{
					background-color: #5cdb95;
				}
				.bg-darkblue{
					background-color: #05386b;
				}
			`}
		</style>
			<Navbar className="bg-lightgreen">
				<Navbar.Brand href="/">RoadRunner Ltd.</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<NavDropdown title="Services" id="basic-nav-dropdown">
							<NavDropdown.Item href="/regular">Regular Delivery</NavDropdown.Item>
							<NavDropdown.Item href="/pickdrop">Pick and Drop-off</NavDropdown.Item>
							<NavDropdown.Item href="/emergency">Emergency Delivery</NavDropdown.Item>
							<NavDropdown.Item href="/gift">Gift Delivery</NavDropdown.Item>
							<NavDropdown.Item href="/food">Food Delivery</NavDropdown.Item>
							<NavDropdown.Item href="/document">Document Delivery</NavDropdown.Item>
							<NavDropdown.Item href="/business">Business Solutions</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="/pricing">Pricing</Nav.Link>
						<Nav.Link href="/coverage">Coverage Area</Nav.Link>
						<Nav.Link href="/contact">Contact Us</Nav.Link>
					</Nav>
					<Link href="/merchant/login" >
						<a>
							<Button className="bg-darkblue mx-2">Merchant Login</Button>
						</a>
					</Link>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
