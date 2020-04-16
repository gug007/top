import Layout from "../src/components/Layout";
import Box from "@material-ui/core/Box";
import Link from "../src/components/Link";
import request from "../api/request";

const App = ({ tags }) => (
  <Layout>
    <Box m="auto">
      {tags.map((v, i) => (
        <Box key={i} m={1.5} display="flex" justifyContent="center">
          <Link href="/[id]" as={v.id.toString()}>
            {v.name}
          </Link>
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
