import { TextField, Box } from "@mui/material";

const Search = ({ onSearch }) => {
  return (
    <Box sx={{ width: "50%", mt: 2 }}>
      <TextField
        fullWidth
        label="Search"
        variant="outlined"
        onChange={(e) => onSearch(e.target.value)}
        sx={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
        }}
      />
    </Box>
  );
};

export default Search;
