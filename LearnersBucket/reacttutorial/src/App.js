import './App.css';
import Todo from './components/Todo'
import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import UseCallbackHook from './components/UseCallBackHook';
import UseMemoHook from './components/useMemoHook';
import UseRefHook from './components/UseRefHook';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Todo' element={<Todo/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/useCallback' element={<UseCallbackHook/>}/>
        <Route path='/useMemo' element={<UseMemoHook/>}/>
        <Route path='/useRef' element={<UseRefHook/>}/>
      </Routes>
    </div>
  );
}

export default App;
