import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Student from './Student';
import CreateStudent from './CreateStudent';
import Runsqlquery from './Runsqlquery';
import UpdateStudent from './UpdateStudent';


// run command "npm start in the frontend folder to access Student.js"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student />}></Route>
          <Route path='/create' element={<CreateStudent />}></Route>
          <Route path='/runsqlquery' element={<Runsqlquery />}></Route>{/* calls runsqlquery.js  */}
          <Route path='/update/:id' element={<UpdateStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;