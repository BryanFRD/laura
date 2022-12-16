import { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-loading';
import './App.scss';
import LoadingScreen from './screens/LoadingScreen';
import BaseScreen from './screens/BaseScreen';
import HomeScreen from './screens/HomeScreen';

const CartScreen = lazy(() => import('./screens/CartScreen'));
const AccountScreen = lazy(() => import('./screens/AccountScreen'));
const AdminScreen = lazy(() => import('./screens/AdminScreen'));
const ConfirmationScreen = lazy(() => import('./screens/ConfirmationScreen'));
const NotFoundScreen = lazy(() => import('./screens/NotFoundScreen'));

function App() {
  return (
    <BrowserRouter>
      <Routes loadingScreen={() => <LoadingScreen />}>
        <Route path='/' element={<BaseScreen />}>
          <Route index element={<HomeScreen />}/>
          <Route path='/cart' element={<CartScreen />} loading/>
          <Route path='/account' element={<AccountScreen />} loading/>
          <Route path='/admin' element={<AdminScreen />} loading/>
          <Route path='/confirmation/:token' element={<ConfirmationScreen />} loading/>
          <Route path='*' element={<NotFoundScreen />} loading/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
