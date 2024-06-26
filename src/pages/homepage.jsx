import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import INFO from "../data/user";
import SEO from "../data/seo";


import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<HelmetProvider>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			</HelmetProvider>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="couv.webp"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

<div className="homepage-skills">
	<div className="skills-logo">
		<img src="https://www.cdnlogo.com/logos/h/84/html.svg" alt="logo html 5" />
		<img src="https://www.cdnlogo.com/logos/c/18/css.svg" alt="logo css" />
		<img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" alt="logo javascript" />
		<img src="https://www.cdnlogo.com/logos/n/49/node-js.svg" alt="logo node JS" />
		<img src="https://www.cdnlogo.com/logos/r/85/react.svg" alt="logo react" />
		<img src="https://www.cdnlogo.com/logos/v/23/vitejs.svg" alt="logo vite" />
		<img src="https://www.cdnlogo.com/logos/r/69/redux.svg" alt="logo redux" />
		<img src="https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg" alt="logo mongo db" />
								
	</div>
	<div className="skills-logo">
		<img src="https://www.cdnlogo.com/logos/s/90/sass.svg" alt="logo sass" />
		<img src="https://www.cdnlogo.com/logos/g/60/google-lighthouse.svg" alt="logo lighthouse" />
		<img src="https://www.cdnlogo.com/logos/s/15/swaggerhub.svg" alt="logo swagger" />
		<img src="https://www.cdnlogo.com/logos/f/43/figma.svg" alt="logo Figma" />
	</div>

</div>
<div className="homepage-socials">
	<a
		href={INFO.socials.github}
		target="_blank"
		rel="noreferrer"
		aria-label="lien vers Github"
	>
		<FontAwesomeIcon
			icon={faGithub}
			className="homepage-social-icon"
			/>
	</a>	
	<a
		href={INFO.socials.linkedin}
		target="_blank"
		rel="noreferrer"
		aria-label="lien vers linkedin"
	>
		<FontAwesomeIcon
			icon={faLinkedin}
			className="homepage-social-icon"
		/>
	</a>
</div>

<div className="page-footer">
	<Footer />
</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
