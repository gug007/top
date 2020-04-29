import Layout from "../src/components/Layout";
import orderBy from "lodash/orderBy";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Link from "../src/components/Link";
import request from "../api/request";

const App = ({ tags }) => (
  <Layout>
    <Box mt={4}>
      {orderBy(tags, v => v.likes.length, "desc").map((v, i) => (
        <Box key={i} m={1.5} display="flex" justifyContent="center">
          <Link href="/[id]" as={v.id.toString()}>
            {v.name}
          </Link>
          <Box pl={0.5} clone>
            <FavoriteBorderIcon color="disabled" />
          </Box>
          <Box pl={0.5} clone>
            <Typography color="textSecondary">{v.likes.length}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Layout>
);

App.getInitialProps = async () => {
  try {
    const tags = await request("tags");
    return { tags };
  } catch (e) {
    return { tags: [], error: "" };
  }
};

export default App;
