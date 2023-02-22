import './App.css';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/AddedElementContainer';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeContainer/>} />
             <Route path="/addedelement" element={<HeaderContainer/>} />
             </Routes>


</BrowserRouter>
  );
}

export default App;
