import React from 'react';
import ExampleOne from "../exampleOne/exampleOne";

const Examples = () => {
	const content2 = [
		{ name: 'Keyboard', link: 'https://keyboard.nikitabashdev.ru/', description: 'Экранная клавиатура' },
		{ name: 'Tic-tac-toe', link: 'https://tic-tac-toe.nikitabashdev.ru/', description: 'Классические крестики-нолики' },
		{ name: 'Sapper', link: 'https://sapper.nikitabashdev.ru/', description: 'Классический сапер' },
	]

	const content1 = [
		{
			name: 'CloudStore',
			link: 'https://cloud.nikitabashdev.ru/',
			description: 'Облачное хранилище' ,
			client: ['React', 'Redux', 'Axios'],
			server: ['Express', 'Mongoose', 'Jsonwebtoken']
		},
		{
			name: 'Paint',
			link: 'https://paint.nikitabashdev.ru/',
			description: 'Рисовалка',
			client: ['React', 'MobX', 'PrimeReact UI']
		},
		{
			name: 'Weather',
			link: 'https://weather.nikitabashdev.ru/',
			description: 'Погода',
			client: ['React', 'Redux(Redux-toolkit)', 'Material-UI']
		},
	]

	return (
		<div>
			<ExampleOne content={content1} title={'React'}/>
			<ExampleOne content={content2} title={'JavaScript'}/>
		</div>
	)
}

export default Examples;
