import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { USER_DATA } from "../constants/API";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await axios.get(USER_DATA);
        const res = await req.data;
        setDatas(res);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        p: 2,
        gap: 5,
      }}
    >
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Box display="flex" justifyContent="center">
            <Link to="/add">
              <Button variant="contained">Add users</Button>
            </Link>
          </Box>
          <Box minWidth={{ lg: "100%", md: "800px", sm: "600px", xs: "400px" }}>
            <TableContainer component={Paper}>
              <Table sx={{ maxWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">First Name</TableCell>
                    <TableCell align="left">Last Name</TableCell>
                    <TableCell align="left">Phone Number</TableCell>
                    <TableCell align="left">Profile</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {datas.map((data) => (
                    <TableRow
                      key={data.ID}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {data.ID}
                      </TableCell>
                      <TableCell align="left">{data.firstName}</TableCell>
                      <TableCell align="left">{data.lastName}</TableCell>
                      <TableCell align="left">{data.PhoneNumber}</TableCell>
                      <TableCell align="left">
                        <Avatar src={data.Image} />
                      </TableCell>
                      <TableCell align="left">
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Link to="/view/:id">
                            <Tooltip title="view" arrow>
                              <IconButton>
                                <VisibilityIcon color="primary" />
                              </IconButton>
                            </Tooltip>
                          </Link>

                          <Link to="/edit/:id">
                            <Tooltip title="edit" arrow>
                              <IconButton>
                                <EditIcon color="primary" />
                              </IconButton>
                            </Tooltip>
                          </Link>

                          <Tooltip title="delete" arrow>
                            <IconButton>
                              <DeleteIcon
                                color="primary"
                                sx={{ "&:hover": { color: "red" } }}
                              />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Home;
