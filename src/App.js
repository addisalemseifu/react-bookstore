import { Routes, Route } from 'react-router-dom';
import Booklist from './components/Booklist';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/categories" />
      </Routes>
      <Navigation />
      <Booklist />

    </>

  );
}

export default App;
