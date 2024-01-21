import "./App.css";
import HomePage from "./components/HomePage";
import AppRoutes from "./components/Routes";
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';


export default function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="main-content">
        <AppRoutes />
      </div>
      <Footer/>
      
    </div>
  );
}