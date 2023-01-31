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


export default function NameOfArtist({setArtistName, linkToContinue, count}){
    
    const [artistNameState, setArtistNameState] = React.useState();
    const navigate = useNavigate();

    var counter = "";

    if(count == 1){
      counter = "ersten"
    }
    else if (count == 2){
      counter = "zweiten"
    }
    else if (count == 3){
      counter = "dritten"
    }

    const handleArtistNameChange = (event) => {

      setArtistNameState(event.target.value);
      
    };

    const handleButtonOnClick = () => {

      if(artistNameState == null){
        alert("Bitte trage einen Artist ein!");
      }
      else{
        setArtistName(artistNameState);
        navigate(linkToContinue);
      }

    }

    return (
        <>
          <Container sx={{boxShadow: 1}} style={{backgroundColor: "white", paddingTop: 6}} maxWidth="md">

            <Typography sx={{mb: 1, mt: 4}}>
              Name deines {counter} Lieblingsartist:
            </Typography>
            <TextField required id="outlined-basic" variant="outlined" onChange={handleArtistNameChange} sx={{mb: 3}}/>

            <Typography sx={{mb: 1, mt: 4}}>
              Name deines {counter} Lieblingsartist:
            </Typography>
            <TextField required id="outlined-basic" variant="outlined" onChange={handleArtistNameChange} sx={{mb: 3}}/>              

            <Typography sx={{mb: 1, mt: 4}}>
              Name deines {counter} Lieblingsartist:
            </Typography>
            <TextField required id="outlined-basic" variant="outlined" onChange={handleArtistNameChange} sx={{mb: 3}}/>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx = {{paddingTop: 4, paddingBottom: 5}}
            >
              <Button onClick={handleButtonOnClick} variant="contained" size="large">Beginnen</Button>
            </Box>
          </Container>
        </>
    )
}

