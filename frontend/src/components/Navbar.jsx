import { AppBar, Toolbar, Box, Grid, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ mt: "0px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ background: "#ADD8E6" }}>
            <Toolbar variant="dense">
              <Typography
                variant="h4"
                align="Left"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontFamily: "revert",
                  fontSize: "500",
                  color: "black",
                }}
              >
                Job Portal
              </Typography>

              <Box sx={{ m: 0.5, mx: "auto", width: 80 }}>
                <Button variant="outlined" href="http://localhost:3000">
                  Home
                </Button>
              </Box>
              <Box sx={{ m: 0.5, mx: "auto", width: 100 }}>
                <Button variant="outlined" href="http://localhost:3000/create">
                  Add Job
                </Button>
              </Box>
              <Box sx={{ m: 0.5, mx: "auto", width: 180 }}>
                <Button variant="outlined" href="https://telusko.com/">
                  Contact Us
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
    </div>
  );
};

export default Navbar;
