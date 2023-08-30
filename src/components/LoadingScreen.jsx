import { Box, Typography } from "@mui/material";

const LoadingScreen = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" color="primary">
          Loading.....
        </Typography>
        <Typography variant="h2" color="ActiveBorder">
          Please wait
        </Typography>
      </Box>
    </>
  );
};

export default LoadingScreen;
