import { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-loading';
import './App.scss';
import BaseScreen from './screens/BaseScreen';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import NotFoundScreen from './screens/NotFoundScreen';

const CartScreen = lazy(() => import('./screens/CartScreen'));
const AccountScreen = lazy(() => import('./screens/AccountScreen'));

function App() {
  return (
    <BrowserRouter>
      <Routes loadingScreen={<LoadingScreen />}>
        <Route path='/' element={<BaseScreen />}>
          <Route index element={<HomeScreen />}/>
          <Route path='/cart' element={<CartScreen />} loading/>
          <Route path='/account' element={<AccountScreen />} loading/>
          <Route path='*' element={<NotFoundScreen />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
