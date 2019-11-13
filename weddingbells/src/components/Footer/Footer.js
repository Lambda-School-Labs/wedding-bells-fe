import React, { Component } from "react";

import { Link } from "react-router-dom";

import "../../styles/footer.scss";

import { HashLink } from "react-router-hash-link";

class Footer extends Component {
	render() {
		return (
			<div className="footer-wrapper">
				<div className="footer-logo">
					<h3>Wedding Bells </h3>
				</div>
				<div className="footer-links">
					<HashLink to="#services" className="HashLink">
						Services
					</HashLink>
					<HashLink to="#faq" className="HashLink">
						FAQ
					</HashLink>
					<HashLink to="#about-us" className="HashLink">
						About Us
					</HashLink>
					<Link to="#" className="link" onClick={this.props.toggleAuthModal}>
						Login/Signup
					</Link>
				</div>
				<div>
					Icons made by{" "}
					<a
						href="https://www.flaticon.com/authors/kiranshastry"
						title="Kiranshastry"
					>
						Kiranshastry
					</a>{" "}
					from{" "}
					<a href="https://www.flaticon.com/" title="Flaticon">
						www.flaticon.com
					</a>
				</div>
			</div>
		);
	}
}

export default Footer;
