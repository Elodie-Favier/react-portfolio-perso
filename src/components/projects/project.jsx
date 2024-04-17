import React from "react";
import { Link } from "react-router-dom";

import "./styles/project.css";

const Project = (props) => {
	const { logo1, logo2, title, description, image, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo1} alt="logo" />
							<img src={logo2} alt="logo" />
						</div>
						
						<div className="project-title">{title}</div>
						
						<div className="project-description">{description}</div>
						<div className="project-img-container">
							<img className="project-img" src={image} alt='illustration du site'/>
						</div>
						
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
