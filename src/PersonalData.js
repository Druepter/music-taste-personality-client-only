import React, {useEffect} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';



//import { CSVLink, CSVDownload } from "react-csv";


ChartJS.register(ArcElement, Tooltip, Legend);


export default function PersonalData({personalData, getFavoriteTracksAudioFeaturesShortTerm, getFavoriteTracksAudioFeaturesMediumTerm, getFavoriteTracksAudioFeaturesLongTerm, getCurrentUsersProfile, token, readyToRender, linkToContinue}){
    
    const [age, setAge] = React.useState();
    const [gender, setGender] = React.useState();

    const navigate = useNavigate();


    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };

    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };

    const handleButtonOnClick = () => {


      //Prüfe ob Alter und Geschlecht ausgefüllt sind
      if(age == null && gender == null){
        alert("Bitte gebe dein Alter und dein Geschlecht an!");
      }
      else if(age == null){
        alert("Bitte gebe dein Alter an!");
      }
      else if(gender == null){
        alert("Bitte gebe dein Geschlecht an!");
      }
      else{

        //Prüfe ob Alter eine ganze Zahl ist
        if(isNaN(age) || age % 1 != 0 || age < 0){
          alert("Bitte gebe ein gültiges Alter an!");
        }
        else{
          //Wenn Alter und Geschlecht ausgefüllt sind dann füge diese in Map ein
          const personalDataMap = new Map();

          personalDataMap.set('age', age);
          personalDataMap.set('gender', gender);
    
          //Setze hier den mitgegebenen State, welcher eine Map ist. Dieser kümmert sich um das abschicken der Daten in der Klasse App
          personalData(personalDataMap);

          //Navigiere weiter
          navigate(linkToContinue);
        }


      }

    };


    //Wenn ein token da ist dann lade lieblingssongs von Spotify APÌ
    useEffect(() => {
        //Es wird gewartet bis der Token geladen ist
        //Dann ist die Anwendung bereit für Abfragen
        //Wenn der token nicht leer ist dann starte abfragen
        if(token == ""){

        }
        else{
            //Alle Lieblingssongs werden geholt
            //Über die use Effekt Methoden von App.js werden die weiteren Abfragen verarbeitet
            getFavoriteTracksAudioFeaturesShortTerm()
            getFavoriteTracksAudioFeaturesMediumTerm()
            getFavoriteTracksAudioFeaturesLongTerm()
            getCurrentUsersProfile()
        }     
    }, [token])

    return (
        <>
          {/* Wenn readyToRender true ist dann lade Fragen
              Solange readyToRender nicht true ist dann zeige Loadingspinner an
          */}
          {readyToRender ?
                      <>
                      <Container sx={{boxShadow: 1, mb: 50}} style={{backgroundColor: "white", paddingTop: 6, minHeight: '91vh', marginBottom: 0}} maxWidth="md">
                        <Typography sx={{mb: 3, mt: 3}}>
                            Zunächst benötigen wir folgende Informationen zu deiner Person:
                        </Typography>

                        <Typography sx={{mb: 1}}>
                            Alter:
                        </Typography>
                        <TextField required id="outlined-basic" variant="outlined" onChange={handleAgeChange} sx={{mb: 3}}/>

                        <Typography sx={{mb: 1}}>
                            Geschlecht:
                        </Typography>

                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            onChange={handleGenderChange}
                          >
                            <FormControlLabel value="weiblich" control={<Radio />} label="Weiblich" />
                            <FormControlLabel value="männlich" control={<Radio />} label="Männlich" />
                            <FormControlLabel value="divers" control={<Radio />} label="Divers" />
                          </RadioGroup>
                        </FormControl>




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
            :
            <>
              <Container sx={{boxShadow: 1}} style={{backgroundColor: "white", paddingTop: 1}} maxWidth="md">
                <Grid container sapcing={0}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',}}>
                  <Grid item>
                    <CircularProgress size="10rem" />
                  </Grid>
                </Grid>
              </Container>
            </>

          }
        </>
    )
}

