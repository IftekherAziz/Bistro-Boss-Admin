import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaBook,
  FaUsers,
  FaUtensils,
  FaListAlt,
  FaShoppingBag,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import { FaGripHorizontal } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import logo from "../assets/logo.png";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [cart, , isLoading] = useCart();

  // TODO: Load data from MongoDB to have dynamic isAdmin based on data
  const isAdmin = true;

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

  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content py-10 bg-slate-50  flex flex-col items-center justify-center border">
        <label
          htmlFor="my-drawer-2"
          className="mt-12 border rounded-full p-4 cursor-pointer  bg-white drawer-button lg:hidden"
        >
          <FaGripHorizontal></FaGripHorizontal>
        </label>
        <Outlet className="mt-10"></Outlet>
      </div>
      <div className="drawer-side bg-slate-900 text-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu px-4 w-80">
          {isAdmin ? (
            <>
              <li>
                <img src={logo} alt="" />
              </li>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  {" "}
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaCalendarAlt></FaCalendarAlt> Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                  {isLoading || (
                    <span className="badge inl ">+{cart?.length || 0}</span>
                  )}
                </NavLink>
              </li>
            </>
          )}

          {/* <hr className="my-5"></hr> */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/menu">
              <FaListAlt> </FaListAlt>Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShoppingBag></FaShoppingBag>Order Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
