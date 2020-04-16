import Layout from "../src/components/Layout";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Logo from "../src/components/Logo";
import Link from "../src/components/Link";
import request from "../api/request";

const Objects = ({ objects }) => (
  <Layout>
    <Box m="auto">
      <Logo />
      <Box mt="1">
        {objects.length ? (
          objects.map((v, i) => (
            <Box key={i} m={1.5} display="flex" justifyContent="center">
              <Link href="/">{v.name}</Link>
            </Box>
          ))
        ) : (
          <Box display="flex" justifyContent="center">
            <Typography variant="h2">Empty</Typography>
          </Box>
        )}
      </Box>
    </Box>
  </Layout>
);

Objects.getInitialProps = async ({ query }) => {
  try {
    const objects = await request(`objectsByTagId/${query.id}`);
    return { objects };
  } catch (e) {
    return { objects: [], error: "" };
  }
};

export default Objects;
