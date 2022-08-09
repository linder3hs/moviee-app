import { useState } from "react";
import { Box, IconButton, Badge, Drawer, Typography } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const DrawerCart = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Box>
      <IconButton
        onClick={handleOpen}
        sx={{
          color: "#fff",
        }}
      >
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartRoundedIcon />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleOpen}>
        <Box p={5} mt={6}>
          <Typography variant="h6">Resume cart</Typography>
          <Typography variant="body1">
            Resume of my movie and tv shows
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default DrawerCart;
