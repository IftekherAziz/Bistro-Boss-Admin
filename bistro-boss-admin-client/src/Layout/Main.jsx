import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Main = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  // console.log(location.pathname);
  const noHeaderFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup");
  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <div className="min-h-[calc(100vh-230px)]">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
