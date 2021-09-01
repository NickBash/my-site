import React from 'react';

const Header = () => {
	return (
		<>
			<h1 className='text-center text-7xl'>
				Welcome to <a href="/" className='text-blue-600 underline'>Portfolio</a>
			</h1>

			<p className='text-center text-3xl'>
				Мой профиль на GitHub <a href="https://github.com/NickBash" className='text-blue-600 underline'>Nikita Bashkankov</a>
			</p>
		</>
	);
};

export default Header;
