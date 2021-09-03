import React from 'react';
import Image from 'next/image'
import styles from './about.module.scss'

const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.about__title}>
				Обо мне
			</div>
			<div className={styles.about__content}>
				<div className="min-w-full text-center">
					<div>
						<Image priority={true} src='/img1.jpg' width='300' height='400'/>
					</div>
					<div className={styles.about__descr}>
						<p>Привествую! Меня зовут Никита. Я frontend(react) / backend(express) разработчик.</p>
						<h3>Мой стек</h3>
							<p>HTML5, CSS3/SCSS, JavaScript, React, Redux/Redux-toolkit, Node.js(express), TypeScript</p>
						<h3>Достижения</h3>
						<p>В 2018 году 1 место в национальном чемпионате Абилимпикс по компетенции "Веб-дизайн" (разработка фронтэнда).</p>
						<h3>Контакты</h3>
						<p>8-(917)-353-4998</p>
						<h3>Ссылки</h3>
						<a className='text-blue-500' href="https://github.com/NickBash">GitHub</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
