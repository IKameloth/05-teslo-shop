import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layout";

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
    </ShopLayout>
  );
};

export default HomePage;
