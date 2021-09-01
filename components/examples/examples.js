import React from 'react';
import styles from "./examples.module.scss";

const Examples = ({content}) => {
	return (
		<div className='grid max-w-full justify-content-center mt-6 mb-6'>
			{content
				? content.map(link =>
					<div className='col-12 md:col-6 lg:col-3' key={link.name}>
						<div className={styles.card}>
							<a href={link.link}>
								<h3>{link.name}</h3>
								<p>{link.description}</p>
							</a>
						</div>
					</div>
				)
				: null}
		</div>
	);
};

export default Examples;
