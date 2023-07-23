import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn, getIsRefreshing } from './../redux/auth/selectors';

export default function PrivateRoute({ redirectTo = '/' }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
//   const isRefreshing = useSelector(getIsRefreshing);

//   const shouldRedirect = !isLoggedIn && !isRefreshing;

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
}
