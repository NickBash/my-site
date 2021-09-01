import Header from "../components/header/header";
import Content from "../components/content/content";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <div className="container">
      <main>
        <Header />
        <Content />
      </main>
      <Footer />
    </div>
  )
}
