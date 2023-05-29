import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import { FaGripHorizontal } from "react-icons/fa";

const Dashboard = () => {
  const [cart] = useCart();
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
      <div className="drawer-side bg-slate-950 text-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
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
              <span className="badge inl ">
                +{cart?.length || 0}
              </span>
            </NavLink>
          </li>
          <div className="divider "></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/menu"> Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
