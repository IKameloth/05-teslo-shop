import { FC } from "react";
import { Grid } from "@mui/material";
import { IProduct } from "../../interfaces";
import { ProductCard } from "./ProductCard";

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map((ele) => (
        <ProductCard key={ele.slug} product={ele} />
      ))}
    </Grid>
  );
};
