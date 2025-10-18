import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Search from "./Search";
import { Box, Grid, Card, Typography } from "@mui/material";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/jobPosts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
      });
  }, []);

  const handleSearch = (term) => {
    const lowerTerm = term.toLowerCase();
    const results = posts.filter(
      (p) =>
        p.postProfile.toLowerCase().includes(lowerTerm) ||
        p.postDesc.toLowerCase().includes(lowerTerm) ||
        p.postTechStack.some((t) => t.toLowerCase().includes(lowerTerm))
    );
    setFilteredPosts(results);
  };

  const handleEdit = (id) => navigate("/edit", { state: { id } });

  const handleDelete = (id) => {
    const updated = filteredPosts.filter((p) => p.postId !== id);
    setFilteredPosts(updated);
    setPosts(updated);
  };

  return (
    <>
      <Box sx={{ display: "flex", ml: 5, mt: 3 }}>
        <Search onSearch={handleSearch} />
      </Box>

      <Grid container spacing={3} sx={{ p: 3 }}>
        {filteredPosts.map((p) => (
          <Grid key={p.postId} item xs={12} sm={6} md={3} lg={3}>
            <Card
              sx={{
                p: 2,
                backgroundColor: "#ADD8E6",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: "2rem", mb: 1 }}
                >
                  {p.postProfile}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ fontStyle: "italic", color: "#848181ff" }}
                >
                  Description: {p.postDesc}
                </Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                  <b>Experience:</b> {p.reqExperience} years
                </Typography>

                <Typography variant="body1" sx={{ mt: 1 }}>
                  <b>Skills:</b> {p.postTechStack.join(", ")}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                <DeleteIcon
                  sx={{ cursor: "pointer", color: "#d32f2f" }}
                  onClick={() => handleDelete(p.postId)}
                />
                <EditIcon
                  sx={{ cursor: "pointer", color: "#1976d2" }}
                  onClick={() => handleEdit(p.postId)}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AllPost;
