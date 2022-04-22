import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layout/ShopLayout";
import NextLink from "next/link";
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from "@mui/icons-material";

const OrderPage = () => {
  return (
    <ShopLayout title="Resume order n° ABC123" pageDescription="Resume order">
      <Typography variant="h1" component="h1">
        Order: ABC123
      </Typography>
      {/* <Chip
        sx={{ my: 2 }}
        label="Payment pending"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      /> */}
      <Chip
        sx={{ my: 2 }}
        label="Payment OK"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resume (3 products)</Typography>
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Address to send</Typography>
                <NextLink href="/checkout/address" passHref>
                  <Link underline="always">Edit</Link>
                </NextLink>
              </Box>
              <Typography>Camilo Matteo</Typography>
              <Typography>21 de mayo 3445</Typography>
              <Typography>Peñaflor</Typography>
              <Typography>Chile</Typography>
              <Typography>+569 62501869</Typography>
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" passHref>
                  <Link underline="always">Edit</Link>
                </NextLink>
              </Box>
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <h1>Pagar</h1>
                <Chip
                  sx={{ my: 2 }}
                  label="Payment OK"
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
