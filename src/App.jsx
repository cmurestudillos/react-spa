import './assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes/Router';
import Footer from "./components/shared/footer/Footer";

function App() {
  return (
    <div>
      <div className="container main-container"> 
        <h1 className="text-white">Heroes <small>Marvel y DC</small></h1>
        <hr className="bg-white"></hr>
        <Router />  
      </div>
    <Footer />
  </div>
  )
}

export default App
