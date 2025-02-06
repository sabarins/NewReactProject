import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import {BrowserRouter,Router,Routes,Route} from 'react-router-dom'
import Formdetail from './Components/Formdetail';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/formdetail' element={<Formdetail />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
