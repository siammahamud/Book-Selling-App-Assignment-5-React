/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import { auth } from "../firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

const PrivateRoutes = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <Loading />;
  if (!user) return <Navigate to={"/sign-up"} />;
   return children;
};

export default PrivateRoutes;