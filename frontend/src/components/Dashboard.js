import Video from "./Video";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Dashboard = ({videoData}) => {

  return (
    <Grid container spacing={2}>
      {videoData.map((vid) => {
        return (
          <Grid item xs={6} sm={4} md={3} key={vid["_id"]}>
            <Link to={`video/${vid._id}`} style={{ textDecoration: "none" }}>
            
              <Video video={vid} />
            
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Dashboard;