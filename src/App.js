
import { BrowserRouter,Route,Routes } from 'react-router-dom';


import LoadingPage from './components/LoadingPage';
import PostView from './components/PostView';



function App() {
  return <>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<LoadingPage />}/>
     <Route path="/post" element={<PostView />}/>
    </Routes>
    </BrowserRouter>
  </>
}

export default App;
