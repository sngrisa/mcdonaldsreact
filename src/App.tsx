
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import AppRoutingModule from './config/approutingmodule';

function App() {

  return (
    <>
      <Navbar />
      <AppRoutingModule />
      <Footer />
    </>
  )
}

export default App
