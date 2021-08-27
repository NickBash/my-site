import Head from 'next/head'
import Header from "../components/header/header";
import classes from '../styles/global.module.scss'
import Examples from "../components/examples/examples";

export default function Home() {
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
    <div className="container">
      <main>
        <Header />

        <p className="description">
          Мои работы на чистом <b>JavaScript</b>:
        </p>

        <Examples content={linksJS} />

        <p className="description">
          Мои работы на <b>React</b>:
        </p>

        <Examples content={linksReact} />

      </main>

      <footer>
        <p>{new Date().getFullYear()}</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        
        .description a {
          color: #0070f3;
          text-decoration: none;
        }
        
        .title,
        .description {
          text-align: center;
        }

        .description {
          margin-top: 3rem;
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
