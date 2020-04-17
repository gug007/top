import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import Header from "./Header";
import useLoading from "../hooks/useLoading";

const Layout = props => {
  const isLoading = useLoading(false);

  return (
    <>
      <Header />
      <Divider />
      {isLoading && <LinearProgress />}
      <Box display="flex" flexDirection="column" flexGrow={1} mb={2} clone>
        <Container maxWidth="lg">{props.children}</Container>
      </Box>
    </>
  );
};

export default Layout;
