import { Routes, Route } from 'react-router-dom';
import { Contacts } from '../pages/Contacts/Contacts';
import { Layout } from './Layout/Layout';
import { Home } from './../pages/Home/Home';
import { Login } from './../pages/Login/Login';
import { Register } from '../pages/Register/Register';

export function App() {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [isLoggedIn, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}
