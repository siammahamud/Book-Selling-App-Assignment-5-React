
import { Outlet, useNavigation } from "react-router";
import Loading from "../components/Loading";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <>
      <div>{navigation.state === "loading" ? <Loading /> : <Outlet />}</div>
    </>
  );
};

export default Layout;
