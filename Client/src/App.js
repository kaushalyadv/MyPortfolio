import './App.css';
import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About/About';
import Proficiencies from './components/Proficiencies/Proficiencies';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Alert from './components/Alert/Alert';
import { useState } from 'react';
// import { disableReactDevTools } from '@fvilers/disable-react-devtools'


function App() {


  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }


  return (
     <BrowserRouter>
      {/* <Header/> */}
           <Alert alert={alert}/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/About' element={<About />} ></Route>
            <Route path='/Proficiencies' element={<Proficiencies />} ></Route>
            <Route path='/Projects' element={<Projects />} ></Route>
            <Route path='/Contact' element={<Contact showAlert={showAlert} />} ></Route>
          </Routes>
     </BrowserRouter>

  );
}

export default App;
