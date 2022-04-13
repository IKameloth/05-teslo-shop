import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Link,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import { Box, display } from "@mui/system";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Tesla</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href="/category/men" passHref>
            <Link>
              <Button>Mens</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/woman" passHref>
            <Link>
              <Button>Womans</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kids" passHref>
            <Link>
              <Button>Kids</Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <NextLink href="/cart" passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
        <Button>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
