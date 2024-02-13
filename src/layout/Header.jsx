import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector } from "react-redux";
const Header = () => {
  const length = useSelector(
    (chooseProducts) => chooseProducts.chooseProducts.length
  );
  console.log(length);
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          mb: "30px",
          position: "sticky",
          top: "0",
          zIndex: "1000",
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <IconButton
              aria-label="cart"
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Badge badgeContent={length} color="secondary">
                <ShoppingBagIcon style={{ color: "white" }} />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
