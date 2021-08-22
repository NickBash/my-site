import React from 'react';
import classes from "./examples.module.scss";

const Examples = ({content}) => {
	return (
		<div className={classes.grid}>
			{content
				? content.map(link =>
				<a key={link.name} href={link.link} className={classes.card}>
					<h3>{link.name} &rarr;</h3>
					<p>{link.description}</p>
				</a>
			)
				: null}
		</div>
	);
};

export default Examples;
