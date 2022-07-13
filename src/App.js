import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Partners from "./components/Partners";
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div className="container">
        <HomePage/>
        <AboutUs/> 
        <Partners/>
      </div>

      <div class="information">
        <p class="contact">contact</p>
        <p class="location">location</p>
      </div>

      <Footer/>
    </>
  );
}

export default App;
