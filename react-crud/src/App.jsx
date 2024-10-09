import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ShowProducts from './components/ShowProducts.jsx';

function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowProducts/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;