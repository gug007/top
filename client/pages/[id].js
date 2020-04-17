import Layout from "../src/components/Layout";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Item from "../src/components/objrcts/Item";
import request from "../api/request";

const Objects = ({ objects, tag }) => (
  <Layout>
    {objects.length ? (
      <>
        <Box p={3}>
          <Typography variant="h1" align="center">
            Top {tag.name}
          </Typography>
        </Box>
        <Grid container spacing={1}>
          {objects.map((v, i) => (
            <Grid key={i} item xs={12} sm={6} md={3}>
              <Item data={v} />
            </Grid>
          ))}
        </Grid>
      </>
    ) : (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        flexDirection="column"
      >
        <Typography variant="h1" align="center" display="block">
          {tag.name} do not have any objects
        </Typography>
        <Box mt={2}>
          <Button variant="contained" color="primary" disabled>
            Add Object
          </Button>
        </Box>
      </Box>
    )}
  </Layout>
);

Objects.getInitialProps = async ({ query }) => {
  try {
    const [objects, tag] = await Promise.all([
      request(`objectsByTagId/${query.id}`),
      request(`tags/${query.id}`)
    ]);
    return { objects, tag };
  } catch (e) {
    return { objects: [], error: "" };
  }
};

export default Objects;
