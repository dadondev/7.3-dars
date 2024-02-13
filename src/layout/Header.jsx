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
const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, mb: "30px" }}>
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
              <Badge badgeContent={"0"} color="secondary">
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
