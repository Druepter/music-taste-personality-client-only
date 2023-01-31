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


export default function OpennessArtist({nameArtistOne, nameArtistTwo, nameArtistThree, _opennessArtistOne, _opennessArtistTwo, _opennessArtistThree, setSurveyDone, linkToContinue}){ 
  
    const [ordinaryArtistOne, setOrdinaryArtistOne] = React.useState(); 
    const [simpleArtistOne, setSimpleArtistOne] = React.useState(); 

    const [ordinaryArtistTwo, setOrdinaryArtistTwo] = React.useState(); 
    const [simpleArtistTwo, setSimpleArtistTwo] = React.useState(); 

    const [ordinaryArtistThree, setOrdinaryArtistThree] = React.useState(); 
    const [simpleArtistThree, setSimpleArtistThree] = React.useState(); 

    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

    const calculateOpenness = (ordinary, simple) => {

      if(ordinary == 1) {
        ordinary = 5;
      }
      else if(ordinary == 2){
        ordinary = 4;
      }
      else if(ordinary == 4){
        ordinary = 2;
      }
      else if(ordinary == 5){
        ordinary = 1;
      }


      if(simple == 1) {
        simple = 5;
      }
      else if(simple == 2){
        simple = 4;
      }
      else if(simple == 4){
        simple = 2;
      }
      else if(simple == 5){
        simple = 1;
      }

      var openness = (parseInt(ordinary) + parseInt(simple)) / 2;
      return openness;
    };


    const handleButtonOnClick = () => {


      if(ordinaryArtistOne == null || simpleArtistOne == null || ordinaryArtistTwo == null || simpleArtistTwo == null || ordinaryArtistThree == null || simpleArtistThree == null){
        alert("Bitte beantworten Sie alle Fragen!");
      }
      else {
        _opennessArtistOne(calculateOpenness(ordinaryArtistOne, simpleArtistOne))
        _opennessArtistTwo(calculateOpenness(ordinaryArtistTwo, simpleArtistTwo))
        _opennessArtistThree(calculateOpenness(ordinaryArtistThree, simpleArtistThree))

        setSurveyDone(true)

        //Navigiere weiter
        navigate(linkToContinue);
      }
      };


     

    return (
        <>
          <Container sx={{boxShadow: 1, mb: 50}} style={{backgroundColor: "white", paddingTop: 6, minHeight: '91vh', marginBottom: 0}} maxWidth="md">

            <Typography sx={{mb: 1, mt: 6, fontSize: 16.5}}>
            	Ich nehme {nameArtistOne} als gewöhnlich, durchschnittlich war?.
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setOrdinaryArtistOne}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
            	Ich nehme {nameArtistOne} als einfach, simpel war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setSimpleArtistOne}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 8, fontSize: 16.5}}>
              Ich nehme {nameArtistTwo} als gewöhnlich, durchschnittlich war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setOrdinaryArtistTwo}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
              Ich nehme {nameArtistTwo} als einfach, simpel war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setSimpleArtistTwo}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 8, fontSize: 16.5}}>
              Ich nehme {nameArtistThree} als gewöhnlich, durchschnittlich war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setOrdinaryArtistThree}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
              Ich nehme {nameArtistThree} als einfach, simpel war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setSimpleArtistThree}></BigFiveArtistForm>


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

