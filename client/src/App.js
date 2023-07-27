import logo from './logo.svg';
import './App.css';

import Welcome from './components/welcome';
import Footer from './components/Footer';
import  Register  from './components/register';
import Navbar from './components/navbar';

function App() {
  return (<>
    <div className="App">
      <Navbar />
     <Welcome /> 
     <Register />
     <Footer />
    </div>
    </>
  );
}

export default App;
