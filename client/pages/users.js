import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Layout from "../src/components/Layout";
import request from "../api/request";
import { format } from "date-fns";

const Users = ({ users }) => (
  <Layout>
    <Box mt={4}>
      <TableContainer component={Paper}>
        <Table aria-label="users table">
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell align="right">Joined</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(v => (
              <TableRow key={v.id}>
                <TableCell component="th" scope="row">
                  {v.id} {v.email}
                </TableCell>
                <TableCell align="right">
                  {format(new Date(v.createdAt), "MM/dd/yyyy")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </Layout>
);

Users.getInitialProps = async () => {
  try {
    const { users } = await request("users");
    console.log(333, users);
    return { users };
  } catch (e) {
    return { users: [], error: "" };
  }
};

export default Users;
