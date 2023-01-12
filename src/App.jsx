import { Route, Routes } from 'react-router-dom';
import New from './routes/New';
import Root from './routes/Root';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/new' element={<New />} />
    </Routes>
  );
}

export default App;
