import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BaseScreen from './screens/BaseScreen';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseScreen />}>
          <Route index element={
            <Suspense fallback={<LoadingScreen>
              <HomeScreen />
            </LoadingScreen>} />
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
