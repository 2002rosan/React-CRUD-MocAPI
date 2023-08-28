import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { USER_DATA } from "../constants/API";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await axios.get(USER_DATA);
        const res = await req.data;
        console.log(res);
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return <Box>{data.ID}</Box>;
};

export default Home;
