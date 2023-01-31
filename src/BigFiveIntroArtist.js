import React, {useEffect} from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";



//import { CSVLink, CSVDownload } from "react-csv";


ChartJS.register(ArcElement, Tooltip, Legend);


export default function BigFiveIntroArtist(){
    

    return (
        <>
          <Container sx={{boxShadow: 1}} style={{backgroundColor: "white", paddingTop: 6, minHeight: '91vh', marginBottom: 0}} maxWidth="md">
            <Typography sx={{mb: 3, mt: 3}}>
                Im nun folgenden werden dir jeweils zehn Fragen dazu gestellt, wie du die Persönlichkeit deiner drei Lieblingskünstler
                wahrnimmst. Wenn sich eine Band in deinen Lieblingskünstlern befindet beantworte die Fragen für die Band als Kollektiv oder
                für das dir persönlich wichtigste Mitglied der Band. 
            </Typography>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx = {{paddingTop: 4, paddingBottom: 5}}
            >
              <Button component={RouterLink} to={"/conscientiousnessArtist"} variant="contained" size="large">Beginnen</Button>
            </Box>
          </Container>
        </>
    )
}

