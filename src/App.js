import './App.css';
import Form from './Components/Form';
import {BrowserRouter,Router,Routes,Route} from 'react-router-dom'
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Register />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
