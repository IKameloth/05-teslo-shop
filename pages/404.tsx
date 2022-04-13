import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ShopLayout } from "../components/layout";

const Custom404 = () => {
  return (
    <ShopLayout
      title={"Page not found"}
      pageDescription={"UPS! algo salio mal :("}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>
          404 |
        </Typography>
        <Typography ml={2}>UPS! No encontramos lo que buscabas :(</Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
