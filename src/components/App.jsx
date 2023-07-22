import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { fetchContacts } from './../redux/operations';
// import { Contacts } from '../pages/Contacts/Contacts';
// import { Layout } from './Layout/Layout';
// import { Home } from './../pages/Home/Home';
import { Login } from './../pages/Login/Login';
import { Register } from '../pages/Register/Register';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
        </Route> */}
      </Routes>
    </>
  );
}
