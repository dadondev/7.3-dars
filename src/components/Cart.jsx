import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from "react";
import { useDispatch } from "react-redux";
import productSlice from "../redux/productSlice";

const Cart = ({ props }) => {
  const { title, price, description, images } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(productSlice.actions.addProduct(props));
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={images[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cart;
