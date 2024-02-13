import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../redux/productSlice";
import Cart from "../components/Cart";
import { useEffect, useState } from "react";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const req = await fetch("https://dummyjson.com/products/");
    const res = await req.json();
    const { products } = res;
    setProducts(products);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "0 1.5rem",
        gap: "20px",
        justifyContent: "space-evenly",
      }}
    >
      {products &&
        products.map((product) => <Cart props={product} key={product.id} />)}
    </div>
  );
};

export default Main;
