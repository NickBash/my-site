import React from 'react';
import Examples from "../examples/examples";

const Content = () => {
	const linksJS = [
		{ name: 'Keyboard', link: 'https://keyboard.nikitabashdev.ru/', description: 'Экранная клавиатура' },
		{ name: 'Tic-tac-toe', link: 'https://tic-tac-toe.nikitabashdev.ru/', description: 'Классические крестики-нолики' },
		{ name: 'Sapper', link: 'https://sapper.nikitabashdev.ru/', description: 'Классический сапер' },
	]

	const linksReact = [
		{ name: 'CloudStore', link: 'https://cloud.nikitabashdev.ru/', description: 'Облачное хранилище' },
		{ name: 'Paint', link: 'https://paint.nikitabashdev.ru/', description: 'Рисовалка' },
	]

	return (
		<div>
			<p className="description text-center text-2xl mt-6">
				Мои работы на чистом <b>JavaScript</b>:
			</p>

			<Examples content={linksJS} />

			<p className="description text-center text-2xl mt-6">
				Мои работы на <b>React</b>:
			</p>

			<Examples content={linksReact} />
		</div>
	);
};

export default Content;
