import React, {useEffect} from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';
import BigFiveArtistForm from './BigFiveArtistForm';
import Divider from '@mui/material/Divider';



//import { CSVLink, CSVDownload } from "react-csv";


ChartJS.register(ArcElement, Tooltip, Legend);


export default function NeuroticismArtist({nameArtistOne, nameArtistTwo, nameArtistThree, _neuroticismArtistOne, _neuroticismArtistTwo, _neuroticismArtistThree, linkToContinue}){
  
    const [romanticArtistOne, setRomanticArtistOne] = React.useState(); 
    const [sentimentalArtistOne, setSentimentalArtistOne] = React.useState(); 

    const [romanticArtistTwo, setRomanticArtistTwo] = React.useState(); 
    const [sentimentalArtistTwo, setSentimentalArtistTwo] = React.useState(); 

    const [romanticArtistThree, setRomanticArtistThree] = React.useState(); 
    const [sentimentalArtistThree, setSentimentalArtistThree] = React.useState(); 

    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

    const calculateNeuroticism = (romantic, sentimental) => {

      var neuroticism = (parseInt(romantic) + parseInt(sentimental)) / 2;
      return neuroticism;
    };


    const handleButtonOnClick = () => {


      if(romanticArtistOne == null || sentimentalArtistOne == null || romanticArtistTwo == null || sentimentalArtistTwo == null || romanticArtistThree == null || sentimentalArtistThree == null){
        alert("Bitte beantworten Sie alle Fragen!");
      }
      else {
        _neuroticismArtistOne(calculateNeuroticism(romanticArtistOne, sentimentalArtistOne))
        _neuroticismArtistTwo(calculateNeuroticism(romanticArtistTwo, sentimentalArtistTwo))
        _neuroticismArtistThree(calculateNeuroticism(romanticArtistThree, sentimentalArtistThree))

        //Navigiere weiter
        navigate(linkToContinue);
      }
      };

    return (
        <>
          <Container sx={{boxShadow: 1, mb: 50}} style={{backgroundColor: "white", paddingTop: 6, minHeight: '91vh', marginBottom: 0}} maxWidth="md">

            <Typography sx={{mb: 1, mt: 6, fontSize: 16.5}}>
              Ich nehme {nameArtistOne} als romantisch war.
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setRomanticArtistOne}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
            	Ich nehme {nameArtistOne} als sentimental war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setSentimentalArtistOne}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 8, fontSize: 16.5}}>
              Ich nehme {nameArtistTwo} als romantisch war.
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setRomanticArtistTwo}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
              Ich nehme {nameArtistTwo} als sentimental war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setSentimentalArtistTwo}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 8, fontSize: 16.5}}>
              Ich nehme {nameArtistThree} als romantisch war.
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setRomanticArtistThree}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
              Ich nehme {nameArtistThree} als sentimental war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setSentimentalArtistThree}></BigFiveArtistForm>


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

