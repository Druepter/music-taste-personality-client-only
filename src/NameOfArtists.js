import React, {useEffect} from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


//import { CSVLink, CSVDownload } from "react-csv";


ChartJS.register(ArcElement, Tooltip, Legend);


export default function NameOfArtists({setArtistNameOne, setArtistNameTwo, setArtistNameThree, linkToContinue}){
    
    const [artistNameOneState, setArtistNameOneState] = React.useState();
    const [artistNameTwoState, setArtistNameTwoState] = React.useState();
    const [artistNameThreeState, setArtistNameThreeState] = React.useState();

    const navigate = useNavigate();

   
    const handleArtistNameOneChange = (event) => {
      setArtistNameOneState(event.target.value);
    };

    const handleArtistNameTwoChange = (event) => {
      setArtistNameTwoState(event.target.value);
    };  
    
    const handleArtistNameThreeChange = (event) => {
      setArtistNameThreeState(event.target.value);
    };        


    const handleButtonOnClick = () => {

      if(artistNameOneState == null || artistNameTwoState == null || artistNameThreeState == null){
        alert("Bitte tragen drei Artists ein!");
      }
      else{
        setArtistNameOne(artistNameOneState);
        setArtistNameTwo(artistNameTwoState);
        setArtistNameThree(artistNameThreeState);
        navigate(linkToContinue);
      }

    }

    return (
        <>
          <Container sx={{boxShadow: 1}} style={{backgroundColor: "white", paddingTop: 6, minHeight: '91vh', marginBottom: 0}} maxWidth="md">


            <Typography sx={{mb: 1, mt: 4}}>
              Trage hier nun drei deiner Lieblingskünstler ein. Es spielt dabei keine Rolle ob es sich
              um eine Band oder einen Soloartist handelt.
            </Typography>

            <Typography sx={{mb: 1, mt: 4}}>
              Name deines ersten Künstlers:
            </Typography>
            <TextField required id="outlined-basic" variant="outlined" onChange={handleArtistNameOneChange} sx={{mb: 3}}/>

            <Typography sx={{mb: 1, mt: 4}}>
              Name deines zweiten Künstlers:
            </Typography>
            <TextField required id="outlined-basic" variant="outlined" onChange={handleArtistNameTwoChange} sx={{mb: 3}}/>              

            <Typography sx={{mb: 1, mt: 4}}>
              Name deines dritten Künstlers:
            </Typography>
            <TextField required id="outlined-basic" variant="outlined" onChange={handleArtistNameThreeChange} sx={{mb: 3}}/>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx = {{paddingTop: 4, paddingBottom: 5}}
            >
              <Button onClick={handleButtonOnClick} variant="contained" size="large">Weiter</Button>
            </Box>
          </Container>
        </>
    )
}

