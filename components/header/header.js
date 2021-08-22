import React from 'react';
import classes from "./header.module.scss";

const Header = () => {
	return (
		<>
			<h1 className={classes.title}>
				Welcome to <a href="/">Portfolio</a>
			</h1>

			<p className={classes.description}>
				Мой профиль на GitHub <a href="https://github.com/NickBash">Nikita Bashkankov</a>
			</p>
		</>
	);
};

export default Header;
