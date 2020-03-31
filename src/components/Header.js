import Box from "@material-ui/core/Box";
import Link from "./Link";

const Header = () => (
  <Box py={2} display="flex">
    <Box mr={2}>
      <Link href="/">Home</Link>
    </Box>
  </Box>
);

export default Header;
