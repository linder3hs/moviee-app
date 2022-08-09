import { useState, useContext } from "react";
import { ShoppingCartContext } from "../../context";
import {
  Box,
  IconButton,
  Badge,
  Drawer,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const DrawerCart = () => {
  const { items } = useContext(ShoppingCartContext);

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
        <Badge badgeContent={String(items.length)} color="secondary">
          <ShoppingCartRoundedIcon />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleOpen}>
        <Box p={5} mt={6}>
          <Typography variant="h6">Resume cart</Typography>
          <Typography variant="body1">
            Resume of my movie and tv shows
          </Typography>
          {items.length > 0 &&
            items.map((item, index) => (
              <Box mt={3}>
                <Card>
                  <CardContent>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      gap={3}
                    >
                      <img
                        width={100}
                        height={100}
                        style={{
                          objectFit: "cover",
                          borderRadius: 4,
                        }}
                        src={item.movie.Poster}
                        alt={item.movie.Title}
                      />
                      <Stack
                        sx={{
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        <Typography variant="h6">{item.movie.Title}</Typography>
                        <Typography variant="subtitle1">
                          $ {item.movie.Price}
                        </Typography>
                        <Typography variant="subtitle1">
                          {item.quantity}
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            ))}
        </Box>
      </Drawer>
    </Box>
  );
};

export default DrawerCart;
