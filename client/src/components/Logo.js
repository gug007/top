import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Logo = () => (
  <Box display="flex" alignItems="center">
    {/*
    <Box
      mr={0.5}
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="1px solid #ccc"
      borderRadius={50}
      height={50}
      width={50}
    >
      <Typography align="center" variant="body1" color="textSecondary">
        top
      </Typography>
    </Box>
    */}
    <Typography variant="h2" component="span" color="textPrimary">
      topmek
    </Typography>
  </Box>
);

export default Logo;
