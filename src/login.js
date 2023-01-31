import React from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import headerImage from './assets/live_zugeschnitten.png'
import Box from "@mui/material/Box";

//Mit dieser Funktion wird die Login Seite erstellt
//Als Parameter werden Eigenschaften entgegengenommen, welche für den Login mit Spotify benötigt werden
export default function Login({_AUTH_ENDPOINT, _CLIENT_ID, _REDIRECT_URI, _RESPONSE_TYPE, _scope}) {
  return (
    <>
      <Container sx={{boxShadow: 1, minHeight: "101vh"}} style={{backgroundColor: "white", padding: 0}} maxWidth="md">

      <Container sx={{boxShadow: 1}} style={{padding: 0}} maxWidth="md">
        {/* Header Bild */}
        <ImageList cols={1} sx={{marginLeft: "0px", marginRight: "0px", marginTop: "-10px"}}>
            <ImageListItem>
                <img
                    src={`${headerImage}?w=500&fit=crop&auto=format`}
                    srcSet={`${headerImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={'spotify'}
                    loading="loading"
                    sx={{marginLeft: "-30px"}}
                />
            </ImageListItem>                
        </ImageList>
      </Container>


      <Container sx={{minHeight: "100%"}} style={{backgroundColor: "white", paddingTop: 0, marginTop: '-16px'}} maxWidth="md">
       
        <Typography variant="h3" sx={{mb: 2, pt: 4, fontWeight: 550, fontSize: 35}}>
            Musikgeschmack und Persönlichkeit
        </Typography>
        <Typography sx={{mb: 2, mt: 3, fontSize: 15}}>
          <ul>
          <li>Um an der folgenden Studie teilzunehmen benötigst du einen Spotify-Account<br></br></li>
          <li>Über diesen werden Daten über dein Musikhörverhalten erhoben<br></br></li>
          <li>Zudem werden dir Fragen zu deiner Person und deinem Musikgeschmack gestellt<br></br></li>
          <li>Dauer der Studie: ca. 15 Minuten<br></br></li>
          </ul>
        </Typography>
        <Typography sx={{mb: 2, mt: 2, fontSize: 18, fontWeight: 550}}>
          Du hast Lust mitzumachen?
        </Typography>
        <Typography sx={{mb: 2, mt: 2, fontSize: 15}}>
          <ul>    
            <li>Dann logge dich jetzt mit deinem Spotify-Account ein und beginne mit der Studie!</li>
          </ul>
        </Typography>
        <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx = {{paddingTop: 3, paddingBottom: 5}}
            >
              {/* Button zum Login bei Spotify, als Query werden die Parameter der Funktion verwendet */}
              <Button variant="contained" href={`${_AUTH_ENDPOINT}?client_id=${_CLIENT_ID}&redirect_uri=${_REDIRECT_URI}&response_type=${_RESPONSE_TYPE}&scope=${_scope}`}>Mit Spotify einloggen</Button>
        </Box>             
      </Container>
      </Container>
    </>         
  )
}