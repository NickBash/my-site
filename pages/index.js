import Header from "../components/header/header";
import Content from "../components/content/content";
import Footer from "../components/footer/footer";
import About from "../components/about/about";

export default function Home() {
  return (
    <div className="container">
      <main>
        <Header />
        <Content />
        <About />
      </main>
      <Footer />
    </div>
  )
}
