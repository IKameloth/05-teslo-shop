import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Typography, Link } from "@mui/material";
import { ShopLayout } from "../../components/layout/ShopLayout";
import NextLink from "next/link";

const EmptyPage = () => {
  return (
    <ShopLayout title="Empty cart" pageDescription="No items in the car">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography>Your cart is empty</Typography>
          <NextLink href="/" passHref>
            <Link typography="h4" color="secondary">
              Go Back
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
