import Home from "./pages/Home";
import backgroundImage from "./assets/images/background.jpg"
import './App.css'

function App() {
  return (
    <div
      className="app-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Home />
    </div>  
  );
}

export default App;