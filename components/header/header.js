import React from 'react';
import styles from './header.module.scss'
import Image from 'next/image'

const Header = () => {
	return (
		<div className={`${styles.block} min-h-screen`}>
			<h1 className={`${styles.portfolio}`}>
				Welcome to <span className='text-blue-600 underline'>Portfolio</span>
			</h1>
			<p className={styles.subtitle}>Никита Башканков <span className={styles.block__symbol}>I</span> Nikita Bashkankov</p>
			<div className='text-center text-3xl mt-6'>
					<a href="https://github.com/NickBash">
							<Image priority={true} src="/github.png" alt="" width="64" height="64"/>
					</a>
			</div>
		</div>
	);
};

export default Header;
