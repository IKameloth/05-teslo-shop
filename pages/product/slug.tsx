import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layout";
import { initialData } from "../../database/products";
import { ProductSlideShow } from "../../components/products";

const product = initialData.products[0];

const ProductPage = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          {/* SLIDESHOW */}
          <ProductSlideShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            {/* TITLES */}
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              {`$${product.price}`}
            </Typography>
            {/* QUANTITY */}
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              {/* ITEM COUNTER */}
            </Box>
            {/* ADD CART */}
            <Button className="circular-btn" color="secondary">
              Add to cart
            </Button>
            <Chip label="Not available" color="error" variant="outlined" />
            {/* DESCRIPTION */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Description</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default ProductPage;
