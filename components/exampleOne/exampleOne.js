import React from 'react';
import styles from "./exampleOne.module.scss";

const ExampleOne = ({content, title}) => {
	return (
		<div className={styles.block}>
			<p className={styles.block__title}>
				Мои работы на <b>{title}</b>:
			</p>
			<div className='grid justify-content-center mt-6 mb-6'>
				{content
					? content.map(link =>
						<div className='col-12 sm:col-8 md:col-6 lg:col-4 xl:col-3' key={link.name}>
							<div className={styles.card}>
								<div className={styles.card__content}>
									<a href={link.link}>
										<h3 className='text-center'>{link.name}</h3>
										<p className={styles.card__descr}>{link.description}</p>
										{link.client
											? (<div>
												<p className={styles.card__text}>Стек клиента:</p>
												<ul>
													{
														link.client.map(v => <li key={v}>{v}</li>)
													}
												</ul>
											</div>)
											: null}
										{link.server
											? (<div>
												<p className={styles.card__text}>Стек сервера:</p>
												<ul>
													{
														link.server.map(v => <li key={v}>{v}</li>)
													}
												</ul>
											</div>)
											: null}
									</a>
									<div className={styles.card__buttonBlock}>
										<a href={link.link} className={styles.card__button}>Посмотреть</a>
									</div>
								</div>
							</div>
						</div>
					)
					: null}
			</div>
		</div>
	);
};

export default ExampleOne;
