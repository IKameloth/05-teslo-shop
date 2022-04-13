import type { NextPage } from "next";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import { ShopLayout } from "../components/layout";
import { initialData } from "../database/products";
import { ProductList } from "../components/products";

const HomePage: NextPage = () => {
  return (
    <ShopLayout
      title={"Teslo-Shop"}
      pageDescription={"Best store ever ziono raza"}
    >
      <Typography variant="h1" component="h1">
        Store
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        All products
      </Typography>

      <ProductList products={initialData.products as any} />
    </ShopLayout>
  );
};

export default HomePage;
