import Layout from "../src/components/Layout";
import fetch from "isomorphic-unfetch";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const App = ({ shows }) => (
  <Layout>
    <Box m="auto">
      <Typography align="center" variant="h2" color="textSecondary">
        topmek
      </Typography>
      <Box mt="1">
        <Typography align="center" variant="body1">
          coming soon
        </Typography>
      </Box>
    </Box>
  </Layout>
);

App.getInitialProps = async () => {
  // https://api.blockchain.info/charts/market-price?timespan=all&format=json
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  return {
    shows: data.map((entry) => entry.show),
  };
};

export default App;
