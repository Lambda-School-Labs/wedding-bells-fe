import React from "react";

const ServiceItem = ({ title, subText, image, id }) => (
	<div className="service-item">
		<div className="textBlock">
			<h3 className="title">{title}</h3>
			<p className="subText">{subText}</p>
		</div>
		<div className="svgImage">
			<img alt={title} src={image}></img>
		</div>
	</div>
);

export default ServiceItem;
