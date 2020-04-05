import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
// import Divider from "@material-ui/core/Divider";
// import Header from "./Header";

const Layout = (props) => (
  <>
    {/*
     <Container maxWidth="lg">
       <Header />
     </Container>
     <Divider />
    */}
    <Box display="flex" flexDirection="column" flexGrow={1} mb={2} clone>
      <Container maxWidth="lg">{props.children}</Container>
    </Box>
  </>
);

export default Layout;
