import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");


  const { refetch, isLoading, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`,{
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  return [cart, refetch, isLoading];
};
export default useCart;
