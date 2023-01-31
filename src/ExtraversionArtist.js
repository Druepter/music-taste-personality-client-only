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


export default function ExtraversionArtist({nameArtistOne, nameArtistTwo, nameArtistThree, _extraversionArtistOne, _extraversionArtistTwo, _extraversionArtistThree, linkToContinue}){

    const [activeArtistOne, setActiveArtistOne] = React.useState(); 
    const [dynamicArtistOne, setDynamicArtistOne] = React.useState(); 
    const [innovativeArtistOne, setInnovativeArtistOne] = React.useState(); 

    const [activeArtistTwo, setActiveArtistTwo] = React.useState(); 
    const [dynamicArtistTwo, setDynamicArtistTwo] = React.useState(); 
    const [innovativeArtistTwo, setInnovativeArtistTwo] = React.useState(); 

    const [activeArtistThree, setActiveArtistThree] = React.useState(); 
    const [dynamicArtistThree, setDynamicArtistThree] = React.useState(); 
    const [innovativeArtistThree, setInnovativeArtistThree] = React.useState(); 

    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

    const calculateExtraversion = (active, dynamic, innovative) => {

      var extraversion = (parseInt(active) + parseInt(dynamic) + parseInt(innovative)) / 3;
      return extraversion;
    };


    const handleButtonOnClick = () => {


      if(activeArtistOne == null || dynamicArtistOne == null || innovativeArtistOne == null || activeArtistTwo == null || dynamicArtistTwo == null || innovativeArtistTwo == null || activeArtistThree == null || dynamicArtistThree == null || innovativeArtistThree == null){
        alert("Bitte beantworten Sie alle Fragen!");
      }
      else {
        _extraversionArtistOne(calculateExtraversion(activeArtistOne, dynamicArtistOne, innovativeArtistOne))
        _extraversionArtistTwo(calculateExtraversion(activeArtistTwo, dynamicArtistTwo, innovativeArtistTwo))
        _extraversionArtistThree(calculateExtraversion(activeArtistThree, dynamicArtistThree, innovativeArtistThree))

        console.log(calculateExtraversion(activeArtistOne, dynamicArtistOne, innovativeArtistOne));
        console.log(calculateExtraversion(activeArtistTwo, dynamicArtistTwo, innovativeArtistTwo));
        console.log(calculateExtraversion(activeArtistThree, dynamicArtistThree, innovativeArtistThree));

        //Navigiere weiter
        navigate(linkToContinue);
      }
      };

    return (
        <>
          <Container sx={{boxShadow: 1, mb: 50}} style={{backgroundColor: "white", paddingTop: 6, minHeight: '91vh', marginBottom: 0}} maxWidth="md">

            <Typography sx={{mb: 1, mt: 6, fontSize: 16.5}}>
              Ich nehme {nameArtistOne} als aktiv war.
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setActiveArtistOne}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
              Ich nehme {nameArtistOne} als dynamisch war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setDynamicArtistOne}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
              Ich nehme {nameArtistOne} als innovativ war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setInnovativeArtistOne}></BigFiveArtistForm>



            <Typography sx={{mb: 1, mt: 8, fontSize: 16.5}}>
              Ich nehme {nameArtistTwo} als aktiv war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setActiveArtistTwo}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
              Ich nehme {nameArtistTwo} als dynamisch war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setDynamicArtistTwo}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
              Ich nehme {nameArtistTwo} als innovativ war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setInnovativeArtistTwo}></BigFiveArtistForm>




            <Typography sx={{mb: 1, mt: 8, fontSize: 16.5}}>
              Ich nehme {nameArtistThree} als aktiv war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setActiveArtistThree}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
              Ich nehme {nameArtistThree} als dynamisch war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setDynamicArtistThree}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
              Ich nehme {nameArtistThree} als innovativ war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setInnovativeArtistThree}></BigFiveArtistForm>


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

