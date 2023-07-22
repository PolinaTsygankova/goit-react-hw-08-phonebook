import { Routes, Route } from 'react-router-dom';
import { Contacts } from '../pages/Contacts/Contacts';
import { Layout } from './Layout/Layout';
import { Home } from './../pages/Home/Home';
import { Login } from './../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { fetchCurrentUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<PrivateRoute redirectTo="/login" />}>
            <Route path="contacts" element={<Contacts />} />
          </Route>

          <Route element={<PublicRoute redirectTo="/contacts" restricted />}>
            <Route exact path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
// <Route path="/" element={<Layout />}></Route>
// <Route index element={<Home />} />
//    <Route exact path="login" element={<Login />} />
// <Route path="register" element={<Register />} />
// <Route path="contacts" element={<Contacts />} />
// </Route>
