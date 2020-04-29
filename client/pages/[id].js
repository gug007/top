import Layout from "../src/components/Layout";
import Box from "@material-ui/core/Box";
import orderBy from "lodash/orderBy";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Item from "../src/components/objrcts/Item";
import request from "../api/request";
import { useState } from "react";

const loadTag = id => request(`tags/${id}`);
const loadObjectsByTagId = id => request(`objectsByTagId/${id}`);

const userId = 1;

const post = (endpoint, options) =>
  request(endpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(options.body)
  });

const Objects = ({ objects: initialObjects = [], tag = {} }) => {
  const [objects, setObjects] = useState(initialObjects);

  const handleLike = async objectId => {
    await post(`objects/like`, {
      body: { userId, tagId: tag.id, objectId }
    });
    setObjects(await loadObjectsByTagId(tag.id));
  };

  return (
    <Layout>
      {objects.length ? (
        <>
          <Box p={3}>
            <Typography variant="h1" align="center">
              Top {tag.name}
            </Typography>
          </Box>
          <Grid container spacing={1}>
            {orderBy(objects, v => v.images.length).map((v, i) => (
              <Grid key={i} item xs={12} sm={6} md={3}>
                <Item
                  data={v}
                  userId={userId}
                  onLike={() => handleLike(v.id)}
                />
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
          <Typography variant="h1" color="textSecondary">
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
};

Objects.getInitialProps = async ({ query }) => {
  try {
    const [objects, tag] = await Promise.all([
      loadObjectsByTagId(query.id),
      loadTag(query.id)
    ]);
    return { objects, tag };
  } catch (e) {
    return { error: "" };
  }
};

export default Objects;
