import { useState } from "react";
import Layout from "../src/components/Layout";
import Box from "@material-ui/core/Box";
import orderBy from "lodash/orderBy";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Item from "../src/components/objrcts/Item";
import { loadTag, loadObjects, createLike } from "../src/actions";
import { encodeName } from "../src/utils";
import { useUser } from "../src/components/users/AuthContext";

const Objects = ({ objects: initialObjects = [], tag = {} }) => {
  const [objects, setObjects] = useState(initialObjects);
  const { user, isAuth } = useUser();

  const handleLike = async objectId => {
    await isAuth();
    await createLike({ tagId: tag.id, objectId });
    setObjects(await loadObjects(encodeName(tag.name)));
  };

  const list = orderBy(objects, v => v.likes.length, "desc");

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
            {list.map((v, i) => (
              <Grid key={i} item xs={12} sm={6} md={3}>
                <Item
                  data={v}
                  userId={user ? user.id : null}
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
    const id = encodeName(query.id);
    const [objects, tag] = await Promise.all([loadObjects(id), loadTag(id)]);
    return { objects, tag };
  } catch (e) {
    return { error: "" };
  }
};

export default Objects;
