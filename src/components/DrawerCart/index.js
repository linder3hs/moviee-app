import { Box, IconButton, Badge } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const DrawerCart = () => {
  return (
    <Box>
      <IconButton
        sx={{
          color: "#fff",
        }}
      >
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartRoundedIcon />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default DrawerCart;
