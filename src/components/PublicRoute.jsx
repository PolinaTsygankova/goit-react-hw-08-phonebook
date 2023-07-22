import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute({ restricted = false, redirectTo = '/' }) {
  const { token } = useSelector(state => state.auth);
  const shouldRedirect = token && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}
