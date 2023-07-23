import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn, getIsRefreshing } from './../redux/auth/selectors';

export default function PublicRoute({ restricted = false, redirectTo = '/' }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  //   const isRefreshing = useSelector(getIsRefreshing);

  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}
