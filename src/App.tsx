import React from "react";

import { Photo, photoData as data } from "./data/PhotoData";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import {
  Typography,
  AppBar,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
} from "@mui/material";
import { CustomContainer } from "./styles/styles";
import { PhotoCard, Footer } from "./components";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" color="primary" sx={{ display: "flex" }}>
        <Toolbar sx={{ maxWidth: "lg", margin: "auto" }} variant="regular">
          <InsertPhotoIcon
            sx={{ fontSize: "2em" }}
            onClick={() => {
              console.log("object");
            }}
          />
          <Typography paddingLeft={2} variant="h4">
            Welcome to my photo Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <CustomContainer>
          <Typography variant="h5" align="center">
            Presentation:
          </Typography>
          <Typography variant="body1" align="center">
            I just want to know the world better and there is not better way
            than traveling within it
          </Typography>
        </CustomContainer>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            maxWidth="lg"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            padding={2}
          >
            {data.map((photo: Photo, index) => (
              <PhotoCard photo={photo} key={index}></PhotoCard>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
