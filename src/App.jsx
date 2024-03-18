
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'


function App() {


  return (
    <div className='container'>
      <Navbar />
      <Header />
      <About />
      <Portfolio />

      <Contact />
      <Footer />
    </div>
  )
}

export default App
