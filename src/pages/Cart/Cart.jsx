import { useContext } from "react";
import { AppContext } from "../../context/Appcontext.jsx";

export default function Cart() {
  const { productsInCart } = useContext(AppContext);
  console.log(productsInCart);
  return <></>;
}
