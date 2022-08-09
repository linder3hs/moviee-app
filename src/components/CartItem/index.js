import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

const CartItem = ({ item }) => {
  return (
    <Box mt={3}>
      <Card>
        <CardContent>
          <Stack direction="row" justifyContent="space-between" gap={3}>
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
              <Typography variant="subtitle1">$ {item.movie.Price}</Typography>
              <Typography variant="subtitle1">{item.quantity}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CartItem;
