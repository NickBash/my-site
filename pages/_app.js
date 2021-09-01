import React from 'react'
import Head from 'next/head'
import 'primeflex/primeflex.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Nikita Bash</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
