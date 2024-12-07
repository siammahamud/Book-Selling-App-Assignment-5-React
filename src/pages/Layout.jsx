import { Outlet, useNavigation } from "react-router-dom";

import Loading from "../../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <div>{navigation.state === "loading" ? <Loading /> : <Outlet />}</div>
      <Footer />
    </>
  );
};

export default Layout;
