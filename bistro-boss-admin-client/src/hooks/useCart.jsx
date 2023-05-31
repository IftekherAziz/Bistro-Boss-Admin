import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();

  const {
    refetch,
    isLoading,
    data: cart = [],
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      console.log(res);
      return res.data;
    },
    /* queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`,{
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    }, */
  });

  return [cart, refetch, isLoading];
};
export default useCart;
