import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "./Link";
import Logo from "./Logo";

const Header = () => (
  <Box bgcolor="white">
    <Container maxWidth="lg">
      <Box py={2} display="flex">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        <Typography variant="h2" component="span" color="textSecondary">
          &nbsp;— truly the best
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Header;
