import NextLink from "next/link";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Button,
  Box,
  Link,
} from "@mui/material";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layout";

const SummaryPage = () => {
  return (
    <ShopLayout title="Order Summary" pageDescription="Order Summary">
      <Typography variant="h1" component="h1">
        Summary
      </Typography>
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
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirm
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
