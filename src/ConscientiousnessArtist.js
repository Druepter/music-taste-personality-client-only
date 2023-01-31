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


export default function ConscientiousnessArtist({nameArtistOne, nameArtistTwo, nameArtistThree, _conscientiousnessArtistOne, _conscientiousnessArtistTwo, _conscientiousnessArtistThree, linkToContinue}){
  
    const [downToEarthArtistOne, setDownToEarthArtistOne] = React.useState(); 
    const [responsibleArtistOne, setResponsibleArtistOne] = React.useState(); 
    const [stableArtistOne, setStableArtistOne] = React.useState();

    const [downToEarthArtistTwo, setDownToEarthArtistTwo] = React.useState(); 
    const [responsibleArtistTwo, setResponsibleArtistTwo] = React.useState(); 
    const [stableArtistTwo, setStableArtistTwo] = React.useState();

    const [downToEarthArtistThree, setDownToEarthArtistThree] = React.useState(); 
    const [responsibleArtistThree, setResponsibleArtistThree] = React.useState(); 
    const [stableArtistThree, setStableArtistThree] = React.useState();

    const navigate = useNavigate();

    const calculateConscientiousness = (downToEarth, responsible, stable) => {
      var conscientiousness = (parseInt(downToEarth) + parseInt(responsible) + parseInt(stable)) / 3;
      return conscientiousness;
    };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

    const handleButtonOnClick = () => {


      if(downToEarthArtistOne == null || responsibleArtistOne == null || stableArtistOne == null || downToEarthArtistTwo == null || responsibleArtistTwo == null || stableArtistTwo == null || downToEarthArtistThree == null || responsibleArtistThree == null || stableArtistThree == null){
        alert("Bitte beantworten Sie alle Fragen!");
      }
      else {
        _conscientiousnessArtistOne(calculateConscientiousness(downToEarthArtistOne, responsibleArtistOne, stableArtistOne))
        _conscientiousnessArtistTwo(calculateConscientiousness(downToEarthArtistTwo, responsibleArtistTwo, stableArtistTwo))
        _conscientiousnessArtistThree(calculateConscientiousness(downToEarthArtistThree, responsibleArtistThree, stableArtistThree))

        //Navigiere weiter
        navigate(linkToContinue);
      }
      };

    return (
        <>
          <Container sx={{boxShadow: 1, mb: 50}} style={{backgroundColor: "white", paddingTop: 6, minHeight: '91vh', marginBottom: 0}} maxWidth="md">

            <Typography sx={{mb: 1, mt: 6, fontSize: 16.5}}>
              Ich nehme {nameArtistOne} als bodenständig war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setDownToEarthArtistOne}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
              Ich nehme {nameArtistOne} als zuverlässig war.
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setResponsibleArtistOne}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
              Ich nehme {nameArtistOne} als beständig war.
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setStableArtistOne}></BigFiveArtistForm>




            <Typography sx={{mb: 1, mt: 8, borderBottomWidth: 2}}>
              Ich nehme {nameArtistTwo} als bodenständig war.
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setDownToEarthArtistTwo}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, borderBottomWidth: 2}}>
              Ich nehme {nameArtistTwo} als zuverlässig war.
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setResponsibleArtistTwo}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
              Ich nehme {nameArtistTwo} als beständig war.
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setStableArtistTwo}></BigFiveArtistForm>


            <Typography sx={{mb: 1, mt: 8, borderBottomWidth: 2}}>
              Ich nehme {nameArtistThree} als bodenständig war. 
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setDownToEarthArtistThree}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, borderBottomWidth: 2}}>
              Ich nehme {nameArtistThree} als zuverlässig war.
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setResponsibleArtistThree}></BigFiveArtistForm>

            <Typography sx={{mb: 1, mt: 3, fontSize: 16.5}}>
              Ich nehme {nameArtistThree} als beständig war.
            </Typography>
            <Divider sx={{mb: 1, mt: 1, borderBottomWidth: 2}}/>
            <BigFiveArtistForm statementValue={setStableArtistThree}></BigFiveArtistForm>


            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx = {{paddingTop: 4, paddingBottom: 5, mt: 5}}
            >
              <Button onClick={handleButtonOnClick} variant="contained" size="large">Weiter</Button>
            </Box>
          </Container>
        </>
    )
}

