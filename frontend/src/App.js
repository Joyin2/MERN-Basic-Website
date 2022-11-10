import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={ <h1>Product listing component</h1> }/>
        <Route path='/add' element={ <h1>Add Product component</h1> }/>
        <Route path='/update' element={ <h1>Update Product component</h1> }/>
        <Route path='/logout' element={ <h1>Logout component</h1> }/>
        <Route path='/profile' element={ <h1>Profile component</h1> }/>
        <Route path='/signup' element={ <SignUp/> }/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
